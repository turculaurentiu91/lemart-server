<?php

namespace App\Http\Controllers;

use App\EasypressRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\StoreEasypressRequest;
use App\User;
use App\Notifications\EasypressRequestCreated;
use App\Notifications\DeliverEasypressQuote;
use Illuminate\Support\Facades\Notification;
use Barryvdh\DomPDF\Facade as PDF;
use Illuminate\Support\Facades\Storage;
use App\EasypressPriceRule;

class EasypressRequestController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')
            ->except('storeAPI', 'priceAPI');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('easypress/index')
            ->with(
                'easypressRequests',
                EasypressRequest::latest()->paginate()
            );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('easypress/create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreEasypressRequest $request)
    {
        $this->storeAPI($request);

        return redirect()
            ->back()
            ->with('success', 'Hai creato nuovo preventivo con successo.');
    }

    public function storeAPI(StoreEasypressRequest $request) {
        $easypressRequest = new EasypressRequest($request->all());

        $price_range = $this->getPriceRange(
            $easypressRequest->appartament_count
        );

        $easypressRequest->setPrices($price_range)->save();

        $pdf = PDF::loadView('pdf.easypress', ['request' => $easypressRequest])
            ->output();
        Storage::put($easypressRequest->filename, $pdf);

        $all_users = User::all();
        $easypressRequest->users()->sync($all_users);
        Notification::send(
            $all_users,
            new EasypressRequestCreated($easypressRequest)
        );

        Notification::route('mail', $easypressRequest->email)
            ->notify(new DeliverEasypressQuote($easypressRequest));

        return $easypressRequest;
    }

    public function getPDFDocument(EasypressRequest $easypressRequest)
    {
        return response()->file(
            $easypressRequest->file_path
        );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\EasypressRequest  $easypressRequest
     * @return \Illuminate\Http\Response
     */
    public function show(EasypressRequest $easypressRequest)
    {
        auth()
            ->user()
            ->unreadEasypressRequests()
            ->detach($easypressRequest);

        return Inertia::render('easypress/show')
            ->with('easypressRequest', $easypressRequest);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\EasypressRequest  $easypressRequest
     * @return \Illuminate\Http\Response
     */
    public function edit(EasypressRequest $easypressRequest)
    {
        return Inertia::render('easypress/edit')
            ->with('easypressRequest', $easypressRequest);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\EasypressRequest  $easypressRequest
     * @return \Illuminate\Http\Response
     */
    public function update(
        StoreEasypressRequest $request,
        EasypressRequest $easypressRequest
    )
    {
        $easypressRequest->fill($request->all());
        return redirect()
            ->back()
            ->with('success', 'Hai modificato il con successo.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\EasypressRequest  $easypressRequest
     * @return \Illuminate\Http\Response
     */
    public function destroy(EasypressRequest $easypressRequest)
    {
        $easypressRequest->delete();
        return redirect()
            ->back()
            ->with('success', 'Hai cancellato il preventivo con successo');
    }

    private function getPriceRange($appartament_count) {
        if ($appartament_count < 10) {
            $appartament_count = 10;
        }

        $rule = EasypressPriceRule::getRule($appartament_count);

        if ($rule) {
            return $rule->price_range;
        }

        return [1, 1.9, 3.8];
    }

    public function priceAPI(Request $request)
    {
        $request->validate([
            'appartment_count' => 'required|integer|min:1'
        ]);
        $app_count = $request->input('appartment_count');
        $range = $this->getPriceRange($app_count);

        foreach ($range as $key => $value) {
            $range[$key] = number_format(
                $value * $app_count * 12,
                2,
                ',',
                '.'
            );
        }

        return $range;
    }
}

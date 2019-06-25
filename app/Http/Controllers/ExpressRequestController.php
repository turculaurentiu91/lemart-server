<?php

namespace App\Http\Controllers;

use App\ExpressRequest;
use App\Image;
use App\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Notification;
use App\Notifications\ExpressRequestCreated;
use App\Http\Requests\StoreExpressRequest;

class ExpressRequestController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except('createAPI');
    }

    public function index()
    {
        return Inertia::render('ExpressRequestsIndex')
            ->with(['requests' => ExpressRequest::latest()->paginate()]);
    }

    public function view(ExpressRequest $expressRequest)
    {

        auth()->user()->unreadExpressRequests()->detach($expressRequest);

        return Inertia::render('ExpressRequestsView')
            ->with('request', $expressRequest->toArray())
            ->with('images', $expressRequest->images);
    }

    public function createAPI(StoreExpressRequest $request)
    {
        $request_data = $request->except(['companyName', 'images']);
        $request_data['company_name'] = $request->input('companyName');

        $expressRequest = ExpressRequest::create($request_data);

        if ($request->has('images')) {
            $images = collect($request->input('images'))
                ->map(function($img) { return Image::fromBase64($img); });
            $expressRequest->images()->saveMany($images);
        }

        $all_users = User::all();
        Notification::send($all_users, new ExpressRequestCreated($expressRequest));
        $expressRequest->users()->sync($all_users);

        return $expressRequest;
    }

    public function delete(ExpressRequest $expressRequest)
    {
        $expressRequest->images->each(function($img) { $img->delete(); });
        $expressRequest->delete();

        return redirect()->route('expressRequests')->with('success', 'Richiesta cancellata con successo.');
    }
}

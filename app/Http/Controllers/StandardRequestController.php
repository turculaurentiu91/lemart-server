<?php

namespace App\Http\Controllers;

use App\StandardRequest;
use App\Image;
use App\User;
use Inertia\Inertia;
use Illuminate\Support\Facades\Notification;
use App\Notifications\StandardRequestCreated;
use App\Http\Requests\StoreStandardRequest;

class StandardRequestController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except('createAPI');
    }

    public function index()
    {
        return Inertia::render('StandardRequestsIndex')
            ->with(['requests' => StandardRequest::latest()->paginate()]);
    }

    public function view(StandardRequest $standardRequest)
    {
        auth()->user()->unreadStandardRequests()->detach($standardRequest);

        return Inertia::render('StandardRequestsView')
            ->with('request', $standardRequest->toArray())
            ->with('images', $standardRequest->images);
    }

    public function createAPI(StoreStandardRequest $request)
    {
        $request_data = $request->except(['companyName', 'images']);
        $request_data['company_name'] = $request->input('companyName');

        $standardRequest = StandardRequest::create($request_data);

        if ($request->has('images')) {
            $images = collect($request->input('images'))
                ->map(function($img) { return Image::fromBase64($img); });
            $standardRequest->images()->saveMany($images);
        }

        $all_users = User::all();
        Notification::send($all_users, new StandardRequestCreated($standardRequest));
        $standardRequest->users()->sync($all_users);

        return $standardRequest;
    }

    public function delete(StandardRequest $standardRequest)
    {
        $standardRequest->images->each(function($img) { $img->delete(); });
        $standardRequest->delete();

        return redirect()->route('standardRequests')->with('success', 'Richiesta cancellata con successo.');
    }
}

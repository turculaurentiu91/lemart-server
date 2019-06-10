<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ExpressRequest;
use App\Image;
use App\User;
use Illuminate\Support\Facades\Mail;
use App\Mail\ExpressRequestCreated;
use Inertia\Inertia;

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

        return Inertia::render('ExpressRequestsView')
            ->with('request', $expressRequest->toArray())
            ->with('images', $expressRequest->images);
    }

    public function createAPI()
    {
        request()->validate([
            'companyName' => 'required',
            'email' => 'required|email',
            'phone' => 'required|digits:10',
            'address' => 'required',
             'model' => 'required',
             'weight' => 'required|numeric',
             'total' => 'required|numeric',
             'person' => 'required',
             'damage' => 'required',
             'images' => 'array',
        ]);

        $req = new ExpressRequest([
            'company_name' => request()->input('companyName'),
            'email' => request()->input('email'),
            'phone' => request()->input('phone'),
            'address' => request()->input('address'),
             'model' => request()->input('model'),
             'weight' => request()->input('weight'),
             'total' => request()->input('total'),
             'person' => request()->input('person'),
             'damage' => request()->input('damage'),
        ]);

        $req->save();

        if (request()->has('images')) {
            foreach( request()->input('images') as $img ) {
                $req->images()->save( Image::fromBase64($img) );
            }
        }

        foreach(User::all() as $user) {
            Mail::to($user->email)->send(new ExpressRequestCreated());
        }

        return $req;
    }

    public function delete(ExpressRequest $expressRequest)
    {
        $expressRequest->images->each(function($img) { $img->delete(); });
        $expressRequest->delete();

        return redirect()->route('expressRequests');
    }
}
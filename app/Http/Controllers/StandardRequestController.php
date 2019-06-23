<?php

namespace App\Http\Controllers;

use App\StandardRequest;
use App\Image;
use App\User;
use Inertia\Inertia;

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

        return Inertia::render('StandardRequestsView')
            ->with('request', $standardRequest->toArray())
            ->with('images', $standardRequest->images);
    }

    public function createAPI()
    {
        request()->validate([
            'companyName' => 'required',
            'email' => 'required|email',
            'phone' => 'required|digits:10',
            'address' => 'required',
             'type' => 'required',
             'person' => 'required',
             'description' => 'required',
        ]);

        $req = new StandardRequest([
            'company_name' => request()->input('companyName'),
            'email' => request()->input('email'),
            'phone' => request()->input('phone'),
            'address' => request()->input('address'),
             'type' => request()->input('type'),
             'person' => request()->input('person'),
             'description' => request()->input('description'),
        ]);

        $req->save();

        if (request()->has('images')) {
            foreach( request()->input('images') as $img ) {
                $req->images()->save( Image::fromBase64($img) );
            }
        }

        $beautymail = app()->make(\Snowfire\Beautymail\Beautymail::class);
        User::all()->each(function ($user) use ($beautymail, $req) {
            $beautymail->send(
                'emails.standardRequestCreated',
                [
                    'company' => $req->company_name,
                    'link' => config('app.url') . "/standard-requests/{$req->id}",
                ],
                function($message) use ($user, $req)
            {
                $message
                    ->to($user->email, $user->name)
                    ->subject('Nuova Richiesta da ' . $req->company_name);
            });
        });

        $req->users()->sync(App\User::all());
        $req->save();


        return $req;
    }

    public function delete(StandardRequest $standardRequest)
    {
        $standardRequest->images->each(function($img) { $img->delete(); });
        $standardRequest->delete();

        return redirect()->route('standardRequests')->with('success', 'Richiesta cancellata con successo.');
    }
}

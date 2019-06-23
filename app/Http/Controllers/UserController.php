<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\User;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Routing\RedirectController;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        return Inertia::render('Users')
            ->with(
                'users',
                User::select('id', 'name', 'email', 'created_at', 'updated_at')
                    ->paginate(15)
        );
    }

    public function create()
    {
        return Inertia::render('CreateUser');
    }

    public function store(Request $request)
    {
        $request->validate([
            'email' => 'email|required|unique:users',
            'name' => 'min:2|required',
            'password' => 'min:6|required',
            'repeatPassword' => 'same:password',
        ]);

        User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
        ])->save();

        return Redirect::route('users')->with('success', 'Utente registrato con successo.');
    }

    public function edit(\App\User $user)
    {
        return Inertia::render('EditUser')
            ->with('userToEdit', [
                'name' => $user->name,
                'email' => $user->email,
                'id' => $user->id,
            ]);
    }

    public function update(User $user)
    {
        request()->validate([
            'email' => 'email|required',
            'name' => 'min:2|required',
        ]);

        $user->fill(request()->only('name', 'email'));
        if (request()->input('password')) {
            request()->validate([
                'password' => 'min:6',
                'repeatPassword' => 'same:password',
            ]);
            $user->password = bcrypt(request()->input('password'));
        }

        $user->save();

        return Redirect::route('users')->with('success', 'Utente modificato con successo.');
    }

    public function delete($id)
    {
        if (User::all()->count() > 1)
        {
            User::destroy($id);
        }
        return Redirect::back()->with('success', 'Utente eliminato con successo.');
    }
}

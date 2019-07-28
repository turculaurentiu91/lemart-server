<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Session\Session;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);

        Inertia::version(function () {
            return md5_file(public_path('mix-manifest.json'));
        });

        Inertia::share(function() {
            return [
                'errors' => session()->get('errors') ? session()->get('errors')->getBag('default')->getMessages() : (object) [],
                'user' => auth()->user()
                    ? [
                        'email' => auth()->user()->email,
                        'name' => auth()->user()->name,
                        'id' => auth()->user()->id,
                        'unreadExpressRequests' => auth()->user()->unreadExpressRequests()->latest()->get(),
                        'unreadStandardRequests' => auth()->user()->unreadStandardRequests()->latest()->get(),
                        'unreadEasypressRequests' => auth()->user()->unreadEasypressRequests()->latest()->get(),
                    ]
                    : null,

                'flash' => [
                    'success' =>session()->get('success')
                ],
            ];
        });
    }
}

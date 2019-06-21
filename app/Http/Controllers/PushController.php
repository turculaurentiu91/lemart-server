<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ExponentPushToken;
use Inertia\Inertia;
use GuzzleHttp\Client;
use GuzzleHttp\Psr7\Request as GuzzleRequest;
use GuzzleHttp\Promise;
use Illuminate\Support\Facades\Redirect;
use function GuzzleHttp\json_encode;
use function GuzzleHttp\json_decode;

class PushController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except('registerTokenAPI');
    }

    public function registerTokenAPI(Request $request)
    {
        $request->validate(['token' => 'required|unique:exponent_push_tokens']);
        return ExponentPushToken::create($request->only('token'));
    }

    public function create()
    {
        return Inertia::render('PushCreate');
    }

    public function send(Request $request)
    {
        $client = new Client([
            'base_uri' => 'https://exp.host/--/api/v2/push/send',
            'timeout' => 2.0,
        ]);

        $request->validate([
            'title' => 'required',
            'body' => 'required',
            'link' => 'url',
        ]);

        $tokens = ExponentPushToken::all();
        $chunkedTokens = $tokens->chunk(100);
        $requests = $chunkedTokens->map(function($chunk) {
            return new GuzzleRequest(
                'POST',
                'https://exp.host/--/api/v2/push/send',
                [
                    'Accept' => 'application/json',
                    'host' => 'exp.host',
                    'accept-encoding' => 'gzip, deflate',
                    'Content-Type' => 'application/json',
                ],
                json_encode(
                    $chunk->map(function($token) {
                        return [
                            'to' => $token->token,
                            'title' => request()->input('title'),
                            'body' => request()->input('body'),
                            'sound' => 'default',
                            "channelId" => "notifiche-publicitare",
                        ];
                    })
                )
            );
        });

        //dd($requests);

        $promises = $requests->map(function($request) use ($client) { return $client->sendAsync($request); });
        $results = Promise\unwrap($promises);

        return Redirect::route('PushNotifications.create');
    }
}

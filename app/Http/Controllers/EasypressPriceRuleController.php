<?php

namespace App\Http\Controllers;

use App\EasypressPriceRule;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\StoreEasypressPriceRule;

class EasypressPriceRuleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('easypress-price/index')
            ->with(
                'easypressPriceRules', 
                EasypressPriceRule::latest()->paginate()
            );
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('easypress-price/create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreEasypressPriceRule $request)
    {

        EasypressPriceRule::create($request->all());

        return redirect()
            ->route('easypress-price-rules.index')
            ->with('success', 'Hai creato una nuova regola con successo.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\EasypressPriceRule  $easypressPriceRule
     * @return \Illuminate\Http\Response
     */
    public function show(EasypressPriceRule $easypressPriceRule)
    {
        return Inertia::render('easypress-price/show')
            ->with('easypressPriceRule', $easypressPriceRule);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\EasypressPriceRule  $easypressPriceRule
     * @return \Illuminate\Http\Response
     */
    public function edit(EasypressPriceRule $easypressPriceRule)
    {
        return Inertia::render('easypress-price/create')
            ->with('easypressPriceRule', $easypressPriceRule);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\EasypressPriceRule  $easypressPriceRule
     * @return \Illuminate\Http\Response
     */
    public function update(
        StoreEasypressPriceRule $request, 
        EasypressPriceRule $easypressPriceRule)
    {
        $easypressPriceRule->fill($request->all())
            ->save();

        return redirect()
            ->route('easypress-price-rules.index')
            ->with('success', 'Regola di prezzo modificata con successo.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\EasypressPriceRule  $easypressPriceRule
     * @return \Illuminate\Http\Response
     */
    public function destroy(EasypressPriceRule $easypressPriceRule)
    {
        $easypressPriceRule->delete();

        return redirect()
            ->back()
            ->with('success', 'Regola di prezzo cancellata con successo.');
    }
}

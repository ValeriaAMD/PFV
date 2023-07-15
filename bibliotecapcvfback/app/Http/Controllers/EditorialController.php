<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Editorial;

class EditorialController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $edito = Editorial::all();
        return response()->json($edito,200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $newedit = new Editorial([
            'nombre'=> $request->get('nombre'),
            'direccion'=> $request->get('direccion'),
            'telefono'=> $request->get('telefono')
        ]);
        $newedit->save();
        return response()->json($newedit,200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $showedit = Editorial::find($id);
        return response()->json($showedit,200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $upedit = Editorial::find($id);
        $upedit->nombre=$request->get('nombre');
        $upedit->direccion=$request->get('direccion');
        $upedit->telefono=$request->get('telefono');
        $upedit->save();
        return response()->json($upedit,200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $destroyedit = Editorial::find($id);
        $destroyedit->delete();
        return response()->json($destroyedit,200);
    }
}

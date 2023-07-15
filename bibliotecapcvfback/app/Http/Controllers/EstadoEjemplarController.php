<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\EstadoEjemplar;

class LibroConrtoller extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $estado = EstadoEjemplar::all();
        return response()->json($estado,200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $nweestado = new EstadoEjemplar([
            'nombre'=> $request->get('nombre'),
            'descripcion'=> $request->get('descripcion')
        ]);
        $nweestado->save();
        return response()->json($nweestado,200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $showestado = EstadoEjemplar::find($id);
        return response()->json($showestado,200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $upestado = EstadoEjemplar::find($id);
        $upestado->nombre=$request->get('nombre');
        $upestado->descripcion=$request->get('descripcion');
        $upestado->save();
        return response()->json($upestado,200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $destroyestado = EstadoEjemplar::find($id);
        $destroyestado->delete();
        return response()->json($destroyestado,200);
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Multa;
use Illuminate\Http\Request;


// en esta entidad no sera permitido 
// modificar o eliminar las multas


class MultaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $multis = Multa::all();
        return response()->json($multis,200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $newM = new Multa([
            'monto'=>$request->get('monto'),
            'fecha_pago'=> $request->get('fecha_pago'),
            'prestamo_id'=>$request->get('prestamo_id')
        ]);
        $newM->save();
        return response()->json($newM,200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $chowM = Multa::find($id);
        return response()->json($chowM,200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $upmulta = Multa::find($id);
        $upmulta->monto=$request->get('monto');
        $upmulta->fecha_pago=$request->get('fecha_pago');
        $upmulta->prestamo_id=$request->get('prestamo_id');
        $upmulta->save();
        return response()->json($upmulta,200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $destmulta = Multa::find($id);
        $destmulta->delete();
        return response()->json($destmulta,200);
    }
}


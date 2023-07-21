<?php

namespace App\Http\Controllers;

use App\Models\Ejemplar;
use Illuminate\Http\Request;





class EjemplarController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $ejem = Ejemplar::all();
        return response()->json($ejem,200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $newejem = new Ejemplar([
            'libro_id'=> $request->get('libro_id'),
            'estado_id'=> $request->get('estado_id')
        ]);
        $newejem->save();
        return response()->json($newejem,200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $showejem = Ejemplar::find($id);
        return response()->json($showejem,200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $upedit = Ejemplar::find($id);
        $upedit->libro_id=$request->get('libro_id');
        $upedit->estado_id=$request->get('estado_id');
        $upedit->save();
        return response()->json($upedit,200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $destroyejem = Ejemplar::find($id);
        $destroyejem->delete();
        return response()->json($destroyejem,200);
    }
}

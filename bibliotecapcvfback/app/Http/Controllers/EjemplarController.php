<?php

namespace App\Http\Controllers;

use App\Models\Ejemplar;
use Illuminate\Http\Request;


// en esta tabla solo se pueden consultar los ejemplares, ya que 
// depende de la tabla libro, si se modifica, actualiza o elimina un libro
// o bien un ejemplar


class EjemplarConrtoller extends Controller
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
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}

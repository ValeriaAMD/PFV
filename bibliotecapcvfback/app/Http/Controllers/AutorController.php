<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Autor;

class AutorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $autorsin = Autor::all();
        return response()->json($autorsin,200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $newautorsin = new Autor([
            'nombre'=> $request->get('nombre'),
            'apellido'=> $request->get('apellido'),
            'origen'=> $request->get('origen')
        ]);
        $newautorsin->save();
        return response()->json($newautorsin,200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $showautor = Autor::find($id);
        return response()->json($showautor,200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $upautor = Autor::find($id);
        $upautor->nombre=$request->get('nombre');
        $upautor->apellido=$request->get('apellido');
        $upautor->origen=$request->get('origen');
        $upautor->save();
        return response()->json($upautor,200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $destroyautor = Autor::find($id);
        $destroyautor->delete();
        return response()->json($destroyautor,200);
    }
}

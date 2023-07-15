<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categoria;

class CategoriaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $cate = Categoria::all();
        return response()->json($cate,200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $newcate = new Categoria([
            'nombre'=> $request->get('nombre'),
            'descripcion'=> $request->get('descripcion')
        ]);
        $newcate->save();
        return response()->json($newcate,200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $showcate = Categoria::find($id);
        return response()->json($showcate,200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $upcate = Categoria::find($id);
        $upcate->nombre=$request->get('nombre');
        $upcate->descripcion=$request->get('descripcion');
        $upcate->save();
        return response()->json($upcate,200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $destroycate = Categoria::find($id);
        $destroycate->delete();
        return response()->json($destroycate,200);
    }
}

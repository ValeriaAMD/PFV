<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use Illuminate\Http\Request;

class UsuarioConrtoller extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = Usuario::all();
        return response()->json($user,200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $newuser = new Usuario([
            'nombre'=> $request->get('nombre'),
            'apellido'=> $request->get('apellido'),
            'direccion'=> $request->get('direccion'),
            'telefono'=> $request->get('telefono')

        ]);
        $newuser->save();
        return response()->json($newuser,200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $showuser = Usuario::find($id);
        return response()->json($showuser,200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $upuser = Usuario::find($id);
        $upuser->nombre=$request->get('nombre');
        $upuser->apellido=$request->get('apellido');
        $upuser->direccon=$request->get('direccon');
        $upuser->telefono=$request->get('telefono');
        $upuser->save();
        return response()->json($upuser,200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $destuser = Usuario::find($id);
        $destuser->delete();
        return response()->json($destuser,200);
    }
}

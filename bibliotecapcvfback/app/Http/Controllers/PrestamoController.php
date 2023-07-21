<?php

namespace App\Http\Controllers;

use App\Models\Prestamo;
use Illuminate\Http\Request;


// esta entidad se pueden hacer todas modificaciones
// ya que en la biblioteca se puede cambiar la fecha del prestamo
// para dar mas tiempo al lactor, de entregar el ejemplar


class PrestamoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pres = Prestamo::all();
        return response()->json($pres,200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $newprestamo = new Prestamo([
            'fecha_prestamo'=> $request->get('fecha_prestamo'),
            'usuario_id'=> $request->get('usuario_id'),
            'ejemplar_id'=> $request->get('ejemplar_id')
        ]);
        $newprestamo->save();
        return response()->json($newprestamo,200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $shoepresta = Prestamo::find($id);
        return response()->json($shoepresta,200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $upprr = Prestamo::find($id);
        $upprr->fecha_prestamo=$request->get('fecha_prestamo');
        $upprr->usuario_id=$request->get('usuario_id');
        $upprr->ejemplar_id=$request->get('ejemplar_id');
        $upprr->save();
        return response()->json($upprr,200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $destruyeP = Prestamo::find($id);
        $destruyeP->delete();
        return response()->json($destruyeP,200);
    }
}

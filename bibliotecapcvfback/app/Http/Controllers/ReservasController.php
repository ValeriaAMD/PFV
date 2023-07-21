<?php

namespace App\Http\Controllers;

use App\Models\Reservas;
use Illuminate\Http\Request;


// esta entidad se pueden hacer todas modificaciones
// ya que en la biblioteca se puede cambiar la fecha del prestamo
// para dar mas tiempo al lactor, de entregar el ejemplar


class ReservasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $reserva = Reservas::all();
        return response()->json($reserva,200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $nwereserva = new Reservas([
            'fecha_reserva'=> $request->get('fecha_reserva'),
            'usuario_id'=>$request->get('usuario_id'),
            'ejemplar_id'=>$request->get('ejemplar_id')
        ]);
        $nwereserva->save();
        return response()->json($nwereserva,200);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $showreserva = Reservas::find($id);
        return response()->json($showreserva,200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $upres = Reservas::find($id);
        $upres->fecha_prestamo=$request->get('fecha_prestamo');
        $upres->usuario_id=$request->get('usuario_id');
        $upres->ejemplar_id=$request->get('ejemplar_id');
        $upres->save();
        return response()->json($upres,200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $destroyres = Reservas::find($id);
        $destroyres->delete();
        return response()->json($destroyres,200);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservas extends Model
{
    use HasFactory;
    protected $table = 'Reservas';
    protected $fillable = ['fecha_reserva','usuario_id','ejemplar_id'];
    protected $hidden = ['created_at', 'updated_at'];
}

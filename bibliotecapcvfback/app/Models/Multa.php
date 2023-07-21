<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Multa extends Model
{
    use HasFactory;
    protected $table = 'Multa';
    protected $fillable = ['monto','fecha_pago','prestamo_id'];
    protected $hidden = ['created_at', 'updated_at'];

}

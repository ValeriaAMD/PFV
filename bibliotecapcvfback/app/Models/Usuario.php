<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;
    protected $table = 'Usuario';
    protected $fillable = ['nombre', 'apellido','direccion','telefono'];
    protected $hidden = ['created_at', 'updated_at'];

}

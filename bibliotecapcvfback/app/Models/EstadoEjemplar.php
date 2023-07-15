<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EstadoEjemplar extends Model
{
    use HasFactory;
    
    protected $table = 'EstadoEjemplar';
    protected $fillable = ['nombre', 'descripcion'];
    protected $hidden = ['created_at', 'updated_at'];
}

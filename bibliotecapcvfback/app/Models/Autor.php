<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Autor extends Model
{
    use HasFactory;
    protected $table = 'Autor';
    protected $fillable = ['nombre', 'apellido','origen'];
    protected $hidden = ['created_at', 'updated_at'];
}

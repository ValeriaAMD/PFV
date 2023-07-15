<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ejemplar extends Model
{
    use HasFactory;
    protected $table = 'Ejemplar';
    protected $hidden = ['created_at', 'updated_at'];
    
}

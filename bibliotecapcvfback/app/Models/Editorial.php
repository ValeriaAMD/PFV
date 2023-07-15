<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Editorial extends Model
{
    use HasFactory;
    protected $table = 'Editorial';
    protected $fillable = ['nombre', 'direccion','telefono'];
    protected $hidden = ['created_at', 'updated_at'];

}

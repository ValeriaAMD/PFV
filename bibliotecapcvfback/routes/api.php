<?php

use App\Http\Controllers\AutorController;
use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\EditorialController;
use App\Http\Controllers\EjemplarController;
use App\Http\Controllers\LibroController;
use App\Http\Controllers\MultaController;
use App\Http\Controllers\PrestamoController;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\ReservasController;
use App\Http\Controllers\EstadoEjemplarController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
//rutas de la entidad Libro
Route::get('/libro',[LibroController::class,'index']);
Route::post('/libro',[LibroController::class,'store']);
Route::put('/libro/{id}',[LibroController::class,'update']);
Route::get('/libro/{id}',[LibroController::class,'show']);
Route::delete('/libro/{id}',[LibroController::class,'destroy']);
//rutas de la entidad Autor
Route::get('/authors',[AutorController::class,'index']);
Route::post('/authors',[AutorController::class,'store']);
Route::get('/authors/{id}',[AutorController::class,'show']);
Route::put('/authors/{id}',[AutorController::class,'update']);
Route::delete('/authors/{id}',[AutorController::class,'destroy']);
//rutas de la entidad Editorial
Route::get('/editoriales',[EditorialController::class,'index']);
Route::post('/editoriales',[EditorialController::class,'store']);
Route::get('/editoriales/{id}',[EditorialController::class,'show']);
Route::put('/editoriales/{id}',[EditorialController::class,'update']);
Route::delete('/editoriales/{id}',[EditorialController::class,'destroy']);
//rutas de la entidad Categoria
Route::get('/categors',[CategoriaController::class,'index']);
Route::post('/categors',[CategoriaController::class,'store']);
Route::get('/categors/{id}',[CategoriaController::class,'show']);
Route::put('/categors/{id}',[CategoriaController::class,'update']);
Route::delete('/categors/{id}',[CategoriaController::class,'destroy']);
//rutas de la entidad Ejemplar
Route::get('/ejemplarsitos',[EjemplarController::class,'index']);
Route::post('/ejemplarsitos',[EjemplarController::class,'store']);
Route::get('/ejemplarsitos/{id}',[EjemplarController::class,'show']);
Route::put('/ejemplarsitos/{id}',[EjemplarController::class,'update']);
Route::delete('/ejemplarsitos/{id}',[EjemplarController::class,'destroy']);
//rutas de la entidad Usuario 
Route::get('/users',[UsuarioController::class,'index']);
Route::post('/users',[UsuarioController::class,'store']);
Route::get('/users/{id}',[UsuarioController::class,'show']);
Route::put('/users/{id}',[UsuarioController::class,'update']);
Route::delete('/users/{id}',[UsuarioController::class,'destroy']);
//rutas de la entidad Prestamo
Route::get('/prestamee',[PrestamoController::class,'index']);
Route::post('/prestamee',[PrestamoController::class,'store']);
Route::get('/prestamee/{id}',[PrestamoController::class,'show']);
Route::put('/prestamee/{id}',[PrestamoController::class,'update']);
Route::delete('/prestamee/{id}',[PrestamoController::class,'destroy']);
//rutas de la entidad Multa
Route::get('/caileconlaferia',[MultaController::class,'index']);
Route::post('/caileconlaferia',[MultaController::class,'store']);
Route::get('/caileconlaferia/{id}',[MultaController::class,'show']);
Route::put('/caileconlaferia/{id}',[MultaController::class,'update']);
Route::delete('/caileconlaferia/{id}',[MultaController::class,'destroy']);
//rutas de la entidad estado del ejemplar
Route::get('/estado',[EstadoEjemplarController::class,'index']);
Route::post('/estado',[EstadoEjemplarController::class,'store']);
Route::get('/estado/{id}',[EstadoEjemplarController::class,'show']);
Route::put('/estado/{id}',[EstadoEjemplarController::class,'update']);
Route::delete('/estado/{id}',[EstadoEjemplarController::class,'destroy']);
//rutas de la entidad reservas
Route::get('/reserve',[ReservasController::class,'index']);
Route::post('/reserve',[ReservasController::class,'store']);
Route::get('/reserve/{id}',[ReservasController::class,'show']);
Route::put('/reserve/{id}',[ReservasController::class,'update']);
Route::delete('/reserve/{id}',[ReservasController::class,'destroy']);

<?php

use App\Http\Controllers\AutorConrtoller;
use App\Http\Controllers\CategoriaConrtoller;
use App\Http\Controllers\EditorialConrtoller;
use App\Http\Controllers\EjemplarConrtoller;
use App\Http\Controllers\LibroConrtoller;
use App\Http\Controllers\MultaConrtoller;
use App\Http\Controllers\PrestamoConrtoller;
use App\Http\Controllers\UsuarioConrtoller;
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
Route::get('/libro',[LibroConrtoller::class,'index']);
Route::post('/libro',[LibroConrtoller::class,'store']);
Route::get('/libro/{id}',[LibroConrtoller::class,'show']);
Route::put('/libro/{id}',[LibroConrtoller::class,'update']);
Route::delete('/libro/{id}',[LibroConrtoller::class,'destroy']);
//rutas de la entidad Autor
Route::get('/authors',[AutorConrtoller::class,'index']);
Route::post('/authors',[AutorConrtoller::class,'store']);
Route::get('/authors/{id}',[AutorConrtoller::class,'show']);
Route::put('/authors/{id}',[AutorConrtoller::class,'update']);
Route::delete('/authors/{id}',[AutorConrtoller::class,'destroy']);
//rutas de la entidad Editorial
Route::get('/editoriales',[EditorialConrtoller::class,'index']);
Route::post('/editoriales',[EditorialConrtoller::class,'store']);
Route::get('/editoriales/{id}',[EditorialConrtoller::class,'show']);
Route::put('/editoriales/{id}',[EditorialConrtoller::class,'update']);
Route::delete('/editoriales/{id}',[EditorialConrtoller::class,'destroy']);
//rutas de la entidad Categoria
Route::get('/categors',[CategoriaConrtoller::class,'index']);
Route::post('/categors',[CategoriaConrtoller::class,'store']);
Route::get('/categors/{id}',[CategoriaConrtoller::class,'show']);
Route::put('/categors/{id}',[CategoriaConrtoller::class,'update']);
Route::delete('/categors/{id}',[CategoriaConrtoller::class,'destroy']);
//rutas de la entidad Ejemplar
Route::get('/ejemplarsitos',[EjemplarConrtoller::class,'index']);
Route::get('/ejemplarsitos',[EjemplarConrtoller::class,'show']);
//rutas de la entidad Usuario 
Route::get('/users',[UsuarioConrtoller::class,'index']);
Route::post('/users',[UsuarioConrtoller::class,'store']);
Route::get('/users/{id}',[UsuarioConrtoller::class,'show']);
Route::put('/users/{id}',[UsuarioConrtoller::class,'update']);
Route::delete('/users/{id}',[UsuarioConrtoller::class,'destroy']);
//rutas de la entidad Prestamo
Route::get('/prestamee',[PrestamoConrtoller::class,'index']);
Route::post('/prestamee',[PrestamoConrtoller::class,'store']);
Route::get('/prestamee/{id}',[PrestamoConrtoller::class,'show']);
Route::put('/prestamee/{id}',[PrestamoConrtoller::class,'update']);
Route::delete('/prestamee/{id}',[PrestamoConrtoller::class,'destroy']);
//rutas de la entidad Multa
Route::get('/caileconlaferia',[MultaConrtoller::class,'index']);
Route::post('/caileconlaferia',[MultaConrtoller::class,'store']);
Route::get('/caileconlaferia/{id}',[MultaConrtoller::class,'show']);
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

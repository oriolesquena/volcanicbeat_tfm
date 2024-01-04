<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Reservation;

class ReservationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function getAll()
    {
        $data = Reservation::get();
        return response()->json($data, 200);
    }

    public function create(Request $request)
    {
        $data['name'] = $request['name'];
        $data['email'] = $request['email'];
        $data['phone'] = $request['phone'];
        $data['activity'] = $request['activity'];
        $data['num_players'] = $request['num_players'];
        $data['date'] = $request['date'];
        $data['msg'] = $request['msg'];
        Reservation::create($data);
        return response()->json([
            'message' => "Creat amb èxit",
            'success' => true
        ], 200);
    }

    public function get($id)
    {
        $data = Reservation::find($id);
        return response()->json($data, 200);
    }

    public function update(Request $request, $id)
    {
        $data['name'] = $request['name'];
        $data['email'] = $request['email'];
        $data['phone'] = $request['phone'];
        $data['activity'] = $request['activity'];
        $data['num_players'] = $request['num_players'];
        $data['date'] = $request['date'];
        $data['msg'] = $request['msg'];
        Reservation::find($id)->update($data);
        return response()->json([
            'message' => "Actualitzat amb èxit",
            'success' => true
        ], 200);
    }

    public function delete($id)
    {
        $res = Reservation::find($id)->delete();
        return response()->json([
            'message' => "Eliminat amb èxit",
            'success' => true
        ], 200);
    }
}

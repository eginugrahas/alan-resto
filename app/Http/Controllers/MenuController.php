<?php


namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;



class MenuController extends Controller
{
    public function index()
    {
        $menus = Menu::all();

        return response()->json([
            'success' => true,
            'message' => 'Daftar data menu',
            'data' => $menus
        ],200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'name' => ['required'],
            'image' => ['required'],
            'price' => ['required'],
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(),400);
        }

        $filename = round(microtime(true) * 1000).'-'. str_replace(' ', '-', $request->file('image')->getClientOriginalName());

        $menu = Menu::create([
            'name' => $request->name,
            'image' => $filename,
            'price' => $request->price
        ]);

        $request->file('image')->move(public_path('uploaded-images'), $filename);

        if ($menu) {
            return response()->json([
                'success' => true,
                'message' => 'Berhasil tambah menu',
                'data' => $menu
            ], 201);
        }

        return response()->json([
            'success' => false,
            'message' => 'Menu gagal tersimpan'
        ], 409);
    }
}
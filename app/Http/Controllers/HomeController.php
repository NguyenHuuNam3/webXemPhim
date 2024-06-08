<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        return view('app')->with('page','home');
    }

    public function about()
    {
        return view('app')->with('page','about');
    }
    public function contact()
    {
        return view('app')->with('page','contact');
    }

    public function contactShow()
    {
        return view('app')->with('page','phone1');
    }
}

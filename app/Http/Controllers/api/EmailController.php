<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Mail\MailForm;
use Illuminate\Http\Request;
use Mail;

class EmailController extends Controller
{
    public function sendEmail(Request $request)
    {
        // Validate the request data here if needed

        // Send email
        Mail::to('oesquena@uoc.edu')->send(new MailForm($request->all()));

        return response()->json(['message' => 'Email sent successfully']);
    }
}

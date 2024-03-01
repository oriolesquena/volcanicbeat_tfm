<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class MailForm extends Mailable
{
    use Queueable, SerializesModels;

    public $data;

    /**
     * Create a new message instance.
     */
    public function __construct($data)
    {
        $this->data = $data;
    }

    public function build()
    {
        $name = $this->data['name'];
        $typeOfMail = $this->data['typeOfMail'];

        if($typeOfMail == 2) {
            $subject = 'Nou formulari de reserves';
            $view = 'emails.booking';
        } else if ($typeOfMail == 1) {
            $subject = 'Nou formulari de contacte';
            $view = 'emails.contact';
        } else {
            $subject = 'Pre-reserva partida làser tag';
            $view = 'emails.booking-client';
            $name = 'Volcanic Beat - Laser Tag';
        }

        return $this
            ->from(env('MAIL_FROM_ADDRESS', 'laser@volcanicbeat.com'), $name)
            ->subject($subject)
            ->view($view);
    }
}

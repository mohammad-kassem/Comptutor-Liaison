<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class VerificationMail extends Mailable{
    use Queueable, SerializesModels;

    public function __construct($user){
        $this->user=$user;
    }

    public function build(){
        return $this->view('mail.verification')->with('user', $this->user);
    }
}

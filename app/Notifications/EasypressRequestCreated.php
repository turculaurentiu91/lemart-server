<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use App\EasypressRequest;

class EasypressRequestCreated extends Notification implements ShouldQueue
{
    use Queueable;

    private $request;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(EasypressRequest $request)
    {
        $this->request = $request;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        $url = config('app.url') . "/easypress/{$this->request->id}";

        return (new MailMessage)
            ->subject("Nuovo Preventivo Easypress per {$this->request->email}")
            ->greeting("Nuovo Preventivo Easypress")
            ->line("Ce un nuovo preventivo Easypress da {$this->request->email}")
            ->line("Fatto il {$this->request->created_at}")
            ->action('Vedi Richiesta', $url);
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}

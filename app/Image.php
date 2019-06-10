<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Image extends Model
{
    public static function fromBase64($base64img)
    {
        $img = new self;
        $decodedImage = base64_decode($base64img);
        $timestamp = time();
        $img->filename = "images/{$timestamp}.jpg";

        Storage::disk('public')->put($img->filename, $decodedImage);
        return $img;

    }

    public function delete()
    {
        if (Storage::disk('public')->exists($this->filename)) {
            Storage::disk('public')->delete($this->filename);
        }

        return parent::delete();
    }

    public function url()
    {
        return Storage::disk('public')->url($this->filename);
    }
}

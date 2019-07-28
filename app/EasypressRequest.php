<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class EasypressRequest extends Model
{
    public $fillable = [
        'email',
        'appartament_count',
        'note',
        'price_one',
        'price_two',
        'price_plus',
    ];

    protected $appends = [
        'formatted_id',
        'base64_pdf_document',
        'formatted_price_one',
        'formatted_price_two',
        'formatted_price_plus',
        'formatted_note',
    ];

    public function setPrices(array $price_range)
    {
        $multiplier = $this->appartament_count < 10 ?
            10 : $this->appartament_count;

        $this->price_one = $multiplier * $price_range[0];
        $this->price_two = $multiplier * $price_range[1];
        $this->price_plus = $multiplier * $price_range[2];

        return $this;
    }

    public function users()
    {
        return $this->belongsToMany('App\User', 'user_easypress_request');
    }

    public function getFormattedIdAttribute()
    {
        return sprintf("%05dCALC", $this->id);
    }

    public function getFilenameAttribute()
    {
        return "easypress/{$this->formatted_id}.pdf";
    }

    public function getFilePathAttribute()
    {
        return Storage::path($this->filename);
    }

    public function delete()
    {
        if (Storage::exists($this->filename)) {
            Storage::delete($this->filename);
        }

        return parent::delete();
    }

    public function getFormattedPriceOneAttribute()
    {
        return $this->formatPrice($this->price_one);
    }

    public function getFormattedPriceTwoAttribute()
    {
        return $this->formatPrice($this->price_two);
    }

    public function getFormattedPricePlusAttribute()
    {
        return $this->formatPrice($this->price_plus);
    }

    public function getBase64PdfDocumentAttribute()
    {
        if (Storage::exists($this->filename)) {
            return base64_encode(Storage::get($this->filename));
        }
        return null;
    }

    public function getFormattedNoteAttribute()
    {
        return nl2br($this->note);
    }

    private function formatPrice($price) { return number_format($price * 12, 2, ',', '.'); }
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EasypressPriceRule extends Model
{
    public $fillable = [
        'from',
        'to',
        'price_one',
        'price_two',
        'price_plus',
    ];

    public static function getRule(int $app_count)
    {
        return self::where([
            ['from', '<=', $app_count],
            ['to', '>=', $app_count]
        ])->first();
    }

    public function getPriceRangeAttribute()
    {
        return [
            $this->price_one,
            $this->price_two,
            $this->price_plus,
        ];
    }
}

<?php

namespace App\Data\Models;

use Illuminate\Database\Eloquent\Model;

class RestaurantTimingSpecific extends Model
{
    protected $table = "restaurant_timing_specific";

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    protected $fillable = [
        'start_time', 'end_time', 'shop_close','specific_date'
    ];

}

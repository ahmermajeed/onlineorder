<?php

namespace App\Data\Models;

use Illuminate\Database\Eloquent\Model;

class RestaurantTiming extends Model
{
    protected $table = "restaurant_timing";

    protected $hidden = [
        'created_at',
        'updated_at'
    ];


    protected $fillable = [
        'day', 'start_time', 'end_time', 'shop_close'
    ];

}

<?php

namespace App\Data\Models;

use Illuminate\Database\Eloquent\Model;

class RestaurantAddress extends Model
{
    protected $table = "restaurant_address";

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    protected $fillable = [
        'id_country', 'address', 'city', 'zip_code', 'id_restaurant',
    ];

    public function getFullAddressAttribute()
    {
        return  $this->address.",".$this->zip_code.",".$this->city;
    }


}

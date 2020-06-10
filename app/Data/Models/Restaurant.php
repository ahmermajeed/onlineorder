<?php

namespace App\Data\Models;

use Illuminate\Database\Eloquent\Model;

class Restaurant extends Model
{
    protected $table = "restaurant";

    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    protected $with = ['address'];

    protected $fillable = [
        'name', 'phone_number', 'website_url', 'logo', 'id_user', 'is_pickup', 'is_delivery', 'is_table_reservation','is_dine'
    ];

    public function address() {
        return $this->hasOne('App\Data\Models\RestaurantAddress','id_restaurant','id') ;
    }
}

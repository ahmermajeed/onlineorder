<?php

namespace App\Data\Models;

use Illuminate\Database\Eloquent\Model;

class CustomerReservation extends Model
{
    const Birthday     = 1;
    const Anniversary  = 2;
    const DateNight    = 3;
    const BusinessMeal = 4;
    const Celebration  = 5;

    protected $table = 'customer_reservation';

    protected $fillable = ["firstname", "lastname", "phone", "email", "booking_date", "persons", "booking_time", 
    "special_occasion", "special_request", "restaurant_newsletter", "opentable_newsletter", "reservations_reminder"];

}

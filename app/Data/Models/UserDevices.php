<?php

namespace App\Data\Models;

use Illuminate\Database\Eloquent\Model;

class UserDevices extends Model
{
    protected $table = 'user_devices';

    protected $fillable = ["user_id", "device_type", "device_token"];
}

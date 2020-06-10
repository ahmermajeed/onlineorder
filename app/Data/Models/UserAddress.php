<?php

namespace App\Data\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class UserAddress extends Model
{
    protected $table = 'user_addresses';
    protected $fillable = ['user_id', 'address', 'street', 'town', 'postal_code','land_mark','active'];


}

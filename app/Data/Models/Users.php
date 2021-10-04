<?php

namespace App\Data\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Users extends Model
{
    protected $table = 'users';
    protected $fillable = ['file_id', 'name', 'email', 'email_verified_at', 'password','remember_token','phone_number'];


}

<?php

namespace App\Data\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Roles extends Model
{
    protected $casts = [
        'permissions' => 'array'
    ];

    protected $hidden = ['pivot'];

    public function user_roles()
    {
        return $this->belongsToMany(User::class,'user_roles','role_id','user_id');
    }
}

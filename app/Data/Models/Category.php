<?php

namespace App\Data\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'categories';

    public function products()
    {
        return $this->hasMany(Products::class,'id_category','id');
    }
}

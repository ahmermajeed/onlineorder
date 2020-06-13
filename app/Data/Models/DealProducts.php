<?php

namespace App\Data\Models;

use Illuminate\Database\Eloquent\Model;

class DealProducts extends Model
{
    protected $table = 'deal_products';

    protected $with = ['product'];

    public function product()
    {
        return $this->hasOne(Products::class,'id','product_id')->with('groups');
    }
}

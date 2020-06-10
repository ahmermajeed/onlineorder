<?php

namespace App\Data\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Orders extends Model
{
    protected $table = 'orders';

    protected $with = ['details'];

    protected $fillable = ['reference', 'user_id', 'total_amount_with_fee', 'delivery_fees', 'payment', 'delivery_address', 'status'];

    public function details()
    {
        return $this->hasMany(OrderDetail::class,'order_id','id');
    }
}

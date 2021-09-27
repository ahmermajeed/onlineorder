<?php

namespace App\Data\Models;

use App\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Orders extends Model
{
    const PAYMENT_COMPLETED = 1;
    const PAYMENT_PENDING = 0;

    protected $table = 'orders';

    protected $with = ['details','user_detail'];

    protected $fillable = ['reference', 'user_id', 'total_amount_with_fee', 'delivery_fees', 'payment', 'delivery_address', 'order_type', 'status','discounted_amount', 'is_pos'];

    public function details()
    {
        return $this->hasMany(OrderDetail::class,'order_id','id');
    }
    public function user_detail(){
        return $this->hasOne(User::class,'id','user_id');
    }

}

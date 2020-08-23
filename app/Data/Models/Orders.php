<?php

namespace App\Data\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Orders extends Model
{
    const PAYMENT_COMPLETED = 1;
    const PAYMENT_PENDING = 0;

    protected $table = 'orders';

    protected $with = ['details'];

<<<<<<< HEAD
    protected $fillable = ['reference', 'user_id', 'total_amount_with_fee', 'delivery_fees', 'payment', 'delivery_address', 'order_type', 'status', 'transaction_id', 'payment_status'];
=======
    protected $fillable = ['reference', 'user_id', 'total_amount_with_fee', 'delivery_fees', 'payment', 'delivery_address', 'order_type', 'status','discounted_amount'];
>>>>>>> 5b863f1f1379ae3527064ddc713aeafc0b13f7a0

    public function details()
    {
        return $this->hasMany(OrderDetail::class,'order_id','id');
    }
}

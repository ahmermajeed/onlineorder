<?php

namespace App\Data\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class OrderDetail extends Model
{
    protected $table = 'order_detail';

    protected $fillable = ['order_id', 'product_id', 'product_name', 'price', 'quantity', 'extras', 'special_instructions'];
}

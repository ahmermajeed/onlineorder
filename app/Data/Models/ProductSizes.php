<?php

namespace App\Data\Models;

use Illuminate\Database\Eloquent\Model;

class ProductSizes extends Model
{
    protected $table = 'product_sizes';

    protected $fillable = ['id_product', 'size', 'price','dine_in','collection','delivery'];
}

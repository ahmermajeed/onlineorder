<?php

namespace App\Data\Models;

use Illuminate\Database\Eloquent\Model;

class ProductSizes extends Model
{
    protected $table = 'product_sizes';

    protected $fillable = ['id_product', 'size', 'price'];

    protected $with = ['sizeGroups'];

    public function sizeGroups() {
        return $this->hasMany('App\Data\Models\ProductSizesGroups','id_size','id') ;
    }
}

<?php

namespace App\Data\Models;

use Illuminate\Database\Eloquent\Model;

class ProductSizesGroups extends Model

{
    protected $hidden = [
    'created_at',
    'updated_at'
];

    protected $table = "product_sizes_groups";

    public $timestamps = false;

    protected $fillable = [
    'id_product',
    'id_group',
    'id_size'
];

    protected $with = ['group'];

    public function group() {
    return $this->hasOne('App\Data\Models\ChoicesGroup','id','id_group') ;
}
}
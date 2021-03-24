<?php

namespace App\Data\Models;

use Illuminate\Database\Eloquent\Model;

class ProductGroups extends Model
{
    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    protected $table = "product_groups";

    protected $fillable = [
        'id_product',
        'id_group'
    ];

    protected $with = ['group'];

    public function group() {
        return $this->hasOne('App\ChoicesGroup','id','id_group') ;
    }
}

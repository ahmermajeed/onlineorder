<?php

namespace App\Data\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Products extends Model
{
    protected $table = 'products';

    protected $hidden = ['pivot'];

    protected $with= ['sizes', 'groups'];

    protected $appends = ['image_url'];

    protected $fillable = ['name', 'price', 'description', 'image', 'status', 'id_category'];

    public function getImageUrlAttribute()
    {
        $url = "https://placeimg.com/640/480/any";
        return $url;
    }

    public function groups()
    {
        return $this->belongsToMany(ChoicesGroup::class,'product_groups','id_product','id_group');
    }

    public function sizes()
    {
        return $this->hasMany(ProductSizes::class,'id_product','id');
    }
}

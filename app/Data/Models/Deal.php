<?php

namespace App\Data\Models;

use Illuminate\Database\Eloquent\Model;

class Deal extends Model
{
    protected $table = 'deals';

    //protected $with= ['products'];
    protected $fillable = ['price'];

    public function products()
    {
        return $this->hasMany(DealProducts::class,'id_deal','id');
    }

    protected $appends = ['image_url'];

    public function getImageUrlAttribute()
    {
        $url = "https://placeimg.com/640/480/any";
        return $url;
    }
}

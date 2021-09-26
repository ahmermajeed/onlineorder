<?php

namespace App\Data\Models;

use Illuminate\Database\Eloquent\Model;

class Slider extends Model
{
    protected $table = 'slider';
    protected $fillable = ['image','sort', 'url','gallery_id','created_at','updated_at'];
//    public function getImageAttribute($value)
//    {
//
//        return  url($value);
//    }
}

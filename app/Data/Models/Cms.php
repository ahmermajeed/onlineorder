<?php

namespace App\Data\Models;

use Illuminate\Database\Eloquent\Model;

class Cms extends Model
{
    protected $table = 'cms';
    protected $fillable = ['title','content', 'slug','meta_title','meta_desc','index_follow'];
}

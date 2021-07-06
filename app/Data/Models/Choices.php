<?php

namespace App\Data\Models;

use Illuminate\Database\Eloquent\Model;

class Choices extends Model
{
    protected $table = 'choices';
    protected $fillable = ['name', 'price', 'preselect', 'id_group','dine_in','collection','delivery'];

}

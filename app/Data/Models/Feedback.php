<?php

namespace App\Data\Models;

use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    protected $table = 'feedback';
    protected $fillable = ['name', 'email', 'rating','experience'];
}

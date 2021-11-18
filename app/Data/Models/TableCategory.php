<?php

namespace App\Data\Models;

use Illuminate\Database\Eloquent\Model;

class TableCategory extends Model
{
    protected $table = 'table_category';

    protected $fillable = ['name', 'status'];

    protected $with = ['tables'];

    public function tables()
    {
        return $this->hasMany(TableReservation::class,'id_category','id');
    }
}

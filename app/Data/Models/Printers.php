<?php

namespace App\Data\Models;

use Illuminate\Database\Eloquent\Model;

class Printers extends Model
{
    protected $table = 'printers';

    protected $fillable = ['name', 'ip', 'default', 'status'];

    protected $with = ['categories'];

    public function categories()
    {
        return $this->hasMany(PrinterCategories::class,'id_printer','id');
    }
}

<?php

namespace App\Data\Models;

use Illuminate\Database\Eloquent\Model;

class Printers extends Model
{
    protected $table = 'printers';

    protected $fillable = ['name', 'ip', 'is_default', 'status', 'print_count'];


    protected $with = ['categories'];

    public function categories()
    {
        return $this->hasMany(PrinterCategories::class,'id_printer','id');
    }
}

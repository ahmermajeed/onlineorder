<?php

namespace App\Data\Models;

use Illuminate\Database\Eloquent\Model;

class PrinterCategories extends Model
{
    protected $table = 'printer_categories';

    protected $fillable = ['id_printer', 'id_category'];

    protected $with = ['category'];

    public function category()
    {
        return $this->hasOne(Category::class,'id','id_category');
    }
}

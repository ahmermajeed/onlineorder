<?php

namespace App\Data\Models;

use Illuminate\Database\Eloquent\Model;

class TableReservation extends Model
{
    protected $table = 'table_reservation';
    protected $fillable = ['name','is_reserve', 'reservation_start_time','reservation_end_time','created_at','updated_at','id_category'];
}

<?php

namespace App\Data\Models;

use Illuminate\Database\Eloquent\Model;

class GeneralSettings extends Model
{
    protected $table ="general_settings";
    protected $fillable = ['site_name',
        'site_title',
        'tag_line',
        'copyright_text',
        'header_logo',
        'footer_logo',
        'favicon',
        'created_at',
        'updated_at',
        'Vat',
        'currencySign',
        'service_charges',
        'printer_ip',
        'shop_status'
    ];
}

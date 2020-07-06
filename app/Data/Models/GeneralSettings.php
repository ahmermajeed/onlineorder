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
        'printer_ip_1',
        'printer_ip_2',
        'printer_ip_3',
        'printer_ip_4',
        'printer_ip_5',
        'shop_status'
    ];
}

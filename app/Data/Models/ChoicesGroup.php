<?php

namespace App\Data\Models;

use Illuminate\Database\Eloquent\Model;

class ChoicesGroup extends Model
{
    protected $table = 'choices_group';

    protected $fillable = ['name', 'type', 'display_type'];

    protected $hidden = ['pivot'];

    protected $with = ['choices'];

    public function choices()
    {
        return $this->hasMany(Choices::class,'id_group', 'id');
    }
}

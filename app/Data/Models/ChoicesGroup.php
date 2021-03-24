<?php

namespace App\Data\Models;

use Illuminate\Database\Eloquent\Model;

class ChoicesGroup extends Model
{
    protected $table = 'choices_group';

    protected $hidden = ['pivot'];

    protected $with = ['choices'];

    protected $fillable = ['name', 'type', 'display_type'];

    public function choices()
    {
        return $this->hasMany(Choices::class,'id_group', 'id');
    }
}

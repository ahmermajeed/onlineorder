<?php

use Illuminate\Database\Seeder;
use App\Data\Models\Roles;
use Carbon\Carbon;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $date = Carbon::now();
        Roles::insert(array (
            array (
                'id' => 1,
                'title' => 'Admin',
                'permissions' => json_encode([
                    "orders",
                    "reports",
                    "shop",
                    "general_settings",
                    "online_deals",
                    "setup_menu",
                    "setup_adons",
                    "pos_system"
                ]),
                'created_at' => $date,
                'updated_at' => $date,
                'deleted_at' => NULL,
            ),

            array (
                'id' => 2,
                'title' => 'Manager',
                'permissions' => json_encode([
                    "orders",
                    "pos_system"
                ]),
                'created_at' => $date,
                'updated_at' => $date,
                'deleted_at' => NULL,
            ),

        ));
    }
}

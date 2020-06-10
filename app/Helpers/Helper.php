<?php
namespace App\Helpers;

if (!function_exists('human_file_size')) {

    function paginator($data, $paginate)
    {
        $data['pagination'] = [];
        $data['pagination']['total'] = $paginate->total();
        $data['pagination']['current'] = $paginate->currentPage();
        $data['pagination']['first'] = 1;
        $data['pagination']['last'] = $paginate->lastPage();
        if ($paginate->hasMorePages()) {
            if ($paginate->currentPage() == 1) {
                $data['pagination']['previous'] = -1;
            } else {
                $data['pagination']['previous'] = $paginate->currentPage() - 1;
            }
            $data['pagination']['next'] = $paginate->currentPage() + 1;
        } else {
            $data['pagination']['previous'] = $paginate->currentPage() - 1;
            $data['pagination']['next'] = $paginate->lastPage();
        }
        if ($paginate->lastPage() > 1) {
            $data['pagination']['pages'] = range(1, $paginate->lastPage());
        } else {
            $data['pagination']['pages'] = [1];
        }
        return $data;
    }
}



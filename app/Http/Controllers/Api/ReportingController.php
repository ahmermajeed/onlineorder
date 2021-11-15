<?php

namespace App\Http\Controllers\Api;

use App\Data\Models\Orders;
use App\Data\Repositories\OrderRepository;
use App\Http\Controllers\Controller;
use App\Http\Requests\SalesByCategoryRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response;

class ReportingController extends Controller
{
    protected $_repository;
    const PER_PAGE = 10;

    public function __construct(OrderRepository $repository)
    {
        $this->_repository = $repository;
    }

    public function getOrders(Request $request)
    {
        $requestData = $request->all();

        $pagination = !empty($requestData['pagination']) ? $requestData['pagination'] : false;
        $per_page = self::PER_PAGE;

        $data = $this->_repository->findByAll($pagination, $per_page, $requestData);

        $output = [
            'data' => $data['data'],
            'pagination' => !empty($data['pagination']) ? $data['pagination'] : false,
            'message' => "Orders Retrieved Successfully",
        ];

        return response()->json($output, Response::HTTP_OK);
    }

    public function getSalesByCategory(SalesByCategoryRequest $request)
    {
        $requestData = $request->all();

        $from = date($requestData['date_from']);
        $to = date($requestData['date_to']);

        $totalSales = Orders::without(['details', 'user_detail'])->select(DB::raw("SUM(orders.total_amount_with_fee) as total_sales"), 'categories.name')->
            join('order_detail', 'orders.id', 'order_detail.order_id')
            ->join('products', 'order_detail.product_id', 'products.id')
            ->join('categories', 'products.id_category', 'categories.id');

            if(isset($requestData['category_id'])) {
                $totalSales = $totalSales->where('products.id_category', $requestData['category_id']);
            }

        $totalSales = $totalSales->whereBetween('orders.created_at', [$from, $to])->groupBy('categories.id')->get();

        $output = [
            'data' => $totalSales,
            'pagination' => !empty($data['pagination']) ? $data['pagination'] : false,
            'message' => "Orders Retrieved Successfully",
        ];

        return response()->json($output, Response::HTTP_OK);
    }

    public function getSalesByProducts(SalesByCategoryRequest $request)
    {
        $requestData = $request->all();

        $from = date($requestData['date_from']);
        $to = date($requestData['date_to']);

        $totalSales = Orders::without(['details', 'user_detail'])->select(DB::raw("SUM(orders.total_amount_with_fee) as total_sales"), "products.name")
            ->join('order_detail', 'orders.id', 'order_detail.order_id')
            ->join('products', 'order_detail.product_id', 'products.id');

        if(isset($requestData['product_id'])) {
            $totalSales = $totalSales->where('products.id', $requestData['product_id']);
        }

        $totalSales = $totalSales->whereBetween('orders.created_at', [$from, $to])->groupBy('products.id')->get();

        $output = [
            'data' => $totalSales,
            'pagination' => !empty($data['pagination']) ? $data['pagination'] : false,
            'message' => "Orders Retrieved Successfully",
        ];

        return response()->json($output, Response::HTTP_OK);
    }


}

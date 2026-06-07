<?php

namespace App\Http\Controllers;

use App\Models\SubscriptionPayment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Midtrans\Config;
use Midtrans\Snap;

class SubscriptionPaymentController extends Controller
{
    public function index()
    {
        //
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        Config::$serverKey = env('MIDTRANS_SERVER_KEY');
        Config::$isProduction = false; 
        Config::$isSanitized = true;
        Config::$is3ds = true;

        $params = [
            'transaction_details' => [
                'order_id' => 'PRO-SUB-' . time(),
                'gross_amount' => 199000, 
            ],
            'enabled_payments' => [
                'akulaku', 
                'shopeepay', 
                'gopay', 
                'kredivo', 
                'credit_card'
            ],
            'customer_details' => [
                'first_name' => Auth::user()->name ?? 'Juragan',
                'email' => Auth::user()->email ?? 'toko@example.com',
            ],
        ];

        try {
            $snapToken = Snap::getSnapToken($params);
            return response()->json(['snap_token' => $snapToken]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function show(SubscriptionPayment $subscriptionPayment)
    {
        //
    }

    public function edit(SubscriptionPayment $subscriptionPayment)
    {
        //
    }

    public function update(Request $request, SubscriptionPayment $subscriptionPayment)
    {
        //
    }

    public function destroy(SubscriptionPayment $subscriptionPayment)
    {
        //
    }
}
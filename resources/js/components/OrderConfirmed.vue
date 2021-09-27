<template>
    <div>

        <section class="order-information">
            <div class="">
                <div class="order-confirm-header">
                    <img src="/images/tasty-land/sen-logo.png" alt="">
                </div>
                    <div class="order-confirm container">
                        <h3 class="mb-3">Your Order Confirmed!</h3>
                        <p><strong>Hi Whitney,</strong></p>
                        <p class="mb-3">Your order has been confirmed and will be shipping soon.</p>
                    </div>
                    <div class="container">
                        <div class="sepeartor-line "></div>
                    </div>  
                    <div class="order-detail container">
                        <table class="table">
                            <thead>
                              <tr>
                                <th scope="col">Order Date</th>
                                <th scope="col">Order No.</th>
                                <th scope="col">Payment</th>
                                <th scope="col">Address</th>
                              </tr>
                            </thead>
                          <tbody>
                            <tr>
                              <td>18 March, 2021</td>
                              <td>BK98601090</td>
                              <td>Visa - 4699</td>
                              <td>8502 Preston Road</td>
                            </tr>

                            <tr>
                              <td>19 March, 2021</td>
                              <td>BJ98601090</td>
                              <td>Visa - 4699</td>
                              <td>8402 Preston Road</td>
                            </tr>
                          </tbody>
                        </table>
                    </div>
                    <div class="container">
                        <div class="sepeartor-line"></div>
                    </div>
                    <div class="item-detail container">
                        <div class="row">
                            <div class="col-md-8 product-order-detail">
                              <p>Complete Bee Hive Starter Kit</p>
                              <p class="more-info">BeeCastle Hives</p>  
                            </div>
                            <div class="col-md-2">
                                <p>Qty 1</p>
                            </div>
                            <div class="col-md-2">
                                <p class="text-right text-left-mob">$199.99</p>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="sepeartor-line"></div>
                    </div>
                    <div class="bill-info container">
                        <ul>
                            <li>
                                <div class="list-detail">Sub Total</div>
                                <div class="list-detail text-right">$199.99</div>
                            </li>
                            <li>
                                <div class="list-detail">Express Shipping</div>
                                <div class="list-detail text-right">$6.99</div>
                            </li>
                            <li>
                                <div class="list-detail">Taxes</div>
                                <div class="list-detail text-right">$13.99</div>
                            </li>
                            <li>
                                <div class="list-detail">Discount(SAVE20)</div>
                                <div class="list-detail text-right discount-value">-20% ($39.99)</div>
                            </li>
                        </ul>
                    </div>

                    <div class="container">
                        <div class="sepeartor-line"></div>
                    </div>

                    <div class="total-bill-info container">
                     <ul>
                         <li>
                             <div class="list-detail">Total</div>
                             <div class="list-detail text-right">$180.98</div>
                         </li>
                     </ul>
                    </div>

                    <div class="container">
                        <div class="sepeartor-line"></div>
                    </div>

                    <div class="shipping-info container">
                        <p class="mb-2">We'll send you shipping confirmation when your item(s) are on the way! We appreciate your business, and hope you enjoy your purchase.</p>
                        <p class="mb-1"><strong>Thank you!</strong></p>
                        <p class="mb-4">Beekeeper Supplies</p>
                    </div>
                    <div class="order-confirm-footer">
                        <div class="container">
                        <img src="/images/tasty-land/sen-logo.png" alt="" width="50px">
                        <p>Question? Contact our <a href="javascript:;">Customer Support </a></p>
                        <p class="copyright-text">&copy; Beekeeper Supplies</p>
                    </div>
                </div>
               </div>
    </section>

        <footer-menu></footer-menu>

    </div>
</template>

<script>

    export default {
        data: function () {
            return {
            };
        },
        
        mounted() {
            this.getGeneralSetting();
            console.log(this.info)
        },

        methods: {
            getGeneralSetting() {
                var vm = this;
                axios.get('api/restaurant_info')
                    .then((response) => {
                        vm.$store.commit('setGeneralData', response.data.data);
                        //vm.info.email = response.data.data.email;
                        //console.log(vm.info.email);

                    });
                },
            },
            computed: {
                info(){
                    return this.$store.state.general_data;
                },
            },

        }       
</script>



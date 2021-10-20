<template>
    <div>

        <section class="order-information">
            <div class="">
                <div class="order-confirm-header">

                    <router-link :to="{ path: '/'}">
                    <img :src="info.general_setting.header_logo">
                    </router-link>

<!--                    {{order_details}}-->

                </div>
                    <div class="order-confirm container">
                        <h3 class="mb-3">Your Order Recieved!</h3>
                        <p><strong>Hi {{user_detail.name}} ,</strong></p>
                        <p class="mb-3">Thanks for an order.</p>
                    </div>

                    <div class="order-detail container">
                        <table class="table">
                            <thead>
                              <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Order No.</th>
                                <th scope="col">Payment</th>
                                <th scope="col">Type</th>
                              </tr>
                            </thead>
                          <tbody>
                            <tr>
                              <td>{{returnDateFormat(order_details.created_at)}}</td>
                              <td>{{order_details.reference}}</td>
                              <td>{{order_details.payment}}</td>
                              <td>{{order_details.order_type}}</td>
                            </tr>
                          </tbody>
                        </table>
                    </div>
                    <div class="container">
                        <div class="sepeartor-line"></div>
                    </div>
                    <div class="item-detail container">
                        <div class="row" v-for="(item, index) in order_details.details">
                            <div class="col-md-8">
                                <div class="product-order-detail">
                              <p>{{item.product_name}}</p>
                              <p class="more-info" v-if="item.extras" v-html="getExtrasData(item.extras)"> </p>
                              </div>
                            </div>
                            <div class="col-md-2">
                                <p>{{item.special_instructions}}</p>
                            </div>
                            <div class="col-md-2">
                                <p class="text-right text-left-mob item-price">£ {{item.price}}</p>
                            </div>
                        </div>
                    </div>


                 

                    <div class="item-detail container">
                        <div class="row">
                            <div class="col-md-10">
                                <div class="product-order-detail">
                                    <p>Total:</p>
                              </div>
                            </div>
                         
                            <div class="col-md-2">
                                <p class="text-right text-left-mob item-price">£ {{order_details.total_amount_with_fee}}</p>
                            </div>
                        </div>
                    </div>


               
                    
             <!--        <div class="bill-info container">
                        <div class="row">
                            <div class="col-md-12">
                               <ul>
                                   <li>
                                       <div class="list-detail"><strong>Total:</strong></div>
                                       <div class="list-detail text-right"> £ {{order_details.total_amount_with_fee}}</div>
                                   </li>
                               </ul> 
                            </div>
                        </div>
                    </div> -->



                    <div class="container">
                        <div class="sepeartor-line"></div>
                    </div>

                    <div class="shipping-info container">
                        <p class="mb-1"><strong>Thank you!</strong></p>
                        <p class="mb-4">{{info.general_setting.site_name}}</p>
                    </div>
                    <div class="order-confirm-footer">
                        <div class="container">
                            <router-link :to="{ path: '/'}">
                            <img :src="info.general_setting.header_logo" alt="" width="50px">
                            </router-link>

                        <p>Question? Contact our      <a :href="`mailto:${info.email}`" > Customer Support </a></p>
                        <p class="copyright-text">{{info.general_setting.copyright_text}}</p>
                    </div>
                </div>
               </div>
    </section>


    </div>
</template>

<script>
    import moment from 'moment'
    export default {
        data: function () {
            return {
                order_details: [],
                user_detail:[]
            };
        },

        mounted() {
            this.getGeneralSetting();
            this.getOrderDetails();
        },

        methods: {
            getGeneralSetting() {
                var vm = this;
                axios.get('/api/restaurant_info')
                    .then((response) => {
                        vm.$store.commit('setGeneralData', response.data.data);
                        //vm.info.email = response.data.data.email;
                        //console.log(vm.info.email);

                    });
            },

            getOrderDetails() {
                var vm = this;
                axios.get('/api/getOrderDetails/'+this.$route.params.id)
                    .then((response) => {
                        vm.order_details = response.data.data
                        vm.user_detail = response.data.data.user_detail
                    });
            },

            returnDateFormat(value){
                return moment(String(value)).format('D-MM- Y hh:mm')
            },
            getExtrasData(value){
                var html;
                let data = JSON.parse(value);
                var arr = [];
                Object.keys(data).forEach(function(itm){
                    arr.push(data[itm].choice);
                });

                html ="<span>" + arr.join(',') +"</span>";
                return html;
            }
        },
        computed: {
            info() {
                return this.$store.state.general_data;
            },
        },

    }
</script>



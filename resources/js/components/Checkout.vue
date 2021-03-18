<template>
    <div>
        <header-menu></header-menu>

        <section class="inner-section check-out-page">
        <div class="loading" v-if="loading">Loading&#8230;</div>
        <div class="container">
            <div class="row">
               <div class="col-sm-12 checkoutpage col-lg-8 col-md-8 col-sm-8 checkout-cart-form">
                   <div class="row">
                       <div class="col-sm-12 offset-sm-0 col-md-10 offset-md-1">

                       <ul id="error_msg" >
                           <li  v-for="(errorMessage) in errorMessage" style="color: red;" >{{errorMessage}}</li>
                       </ul>
                       </div>


                       <div class="col-sm-12  col-md-10 ">
                           <div class="row section-border order-check">


                               <div class="col-12">


                               </div>



                               <div class="col-sm-12">
                                   <label>{{orderType}} Date</label>
                                   <select class="form-control" v-model="form.deliveryTime">
                                       <option>As soon as possible</option>
                                       <option v-for="slot in slots">{{slot}}</option>
                                   </select>
                                   <br>
                               </div>
                  


                               <div class="col-12">



                                   <div class="row" v-show="orderType != 'Pickup'">


                                       <div class="col-12">
                                           <h3> Delivery Details</h3>
                                       </div>
                                       <div class="col-sm-6">
                                           <label>Address </label>
                                           <input type="text"  name="address" required   v-model="form.address" class="form-control" placeholder="Address">
                                       </div>

                                       <div class="col-sm-6">
                                           <label>Street *</label>
                                           <input type="text"  v-model="form.street" class="form-control" placeholder="street">
                                       </div>
                                       <div class="col-sm-6">
                                           <label  class="col-form-label">Town *</label>
                                           <input type="text"  v-model="form.town" class="form-control" placeholder="abc town">
                                       </div>

                                       <div class="col-sm-6 mb-2">
                                           <label  class="col-form-label">Postal Code *</label>
                                           <input type="text"   v-model="form.postal_code" class="form-control" placeholder="wc2h 9ah">
                                       </div>
                                   </div>


                               </div>
                           </div>

                           <div class="row  section-border check-form">
                               <div class="col-12">
                                   <h3> Personal Details</h3>
                               </div>
                               <div class="col-sm-4">
                                   <label  class="col-form-label">Name</label>
                                   <input type="text" class="form-control" placeholder="Enter Name" v-model="form.name">
                               </div>
                               <div class="col-sm-4">
                                   <label  class="col-form-label">Email</label>
                                   <input type="text" class="form-control"  v-model="form.email" placeholder="abc@example.com">
                               </div>

                               <div class="col-sm-4">
                                   <label  class="col-form-label">Number</label>
                                   <input type="text" class="form-control"  v-model="form.number" placeholder="Enter Number">
                               </div>


                           </div>

                           <div class="row border-dashed payment-sec">
                               <div class="col-sm-12 cash-delivery">
                                   <h3>Payment</h3>
                                   <label class="customradiobutton radioiconed radio-inline mr-3">
                                       <input type="radio" value="COD"  @change.prevent="showCard(false)"  v-model="form.payment_type" ><i class="fas fa-wallet"></i> Cash on Delivery
                                   </label>
                               </div>


                               <div class="col-12">
                                   <div class="row" v-show="card">
                                       <div class="col-sm-7">
                                           <form role="form">
                                               <div class="form-group">
                                                   <label>Full name (on the card)</label>
                                                   <input type="text" class="form-control" name="username" placeholder="" required="" v-model="form.card_holder_name">
                                               </div> <!-- form-group.// -->

                                               <div class="form-group">
                                                   <label>Card number</label>
                                                   <div class="input-group">
                                                       <input type="text" class="form-control" name="cardNumber" placeholder="" v-model="form.card_number">
                                                       <div class="input-group-append">
                                                   <span class="input-group-text text-muted">

                                                   </span>
                                                       </div>
                                                   </div>
                                               </div> <!-- form-group.// -->

                                               <div class="row">
                                                   <div class="col-sm-8">
                                                       <div class="form-group">
                                                           <label><span class="hidden-xs">Expiration</span> </label>
                                                           <div class="input-group">
                                                               <input type="number" class="form-control"    min="0"  placeholder="MM" name="" v-model="form.expiration_month">
                                                               <input type="number" class="form-control"   min="0"  placeholder="YY" name="" v-model="form.expiration_year">
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div class="col-sm-4">
                                                       <div class="form-group">
                                                           <label data-toggle="tooltip" title="" data-original-title="3 digits code on back side of the card">CVV <i class="fa fa-question-circle"></i></label>
                                                           <input type="number"  min="0" class="form-control" required="" v-model="form.cvc">
                                                       </div> <!-- form-group.// -->
                                                   </div>
                                               </div> <!-- row.// -->
                                           </form>
                                       </div>
                                   </div>
                                   <div class="row mt-3">
                                       <div class="col-sm-4" >
                                           <button class="subscribe btn btn-rounded-danger btn-block" type="button" @click="placeOrder()"> Confirm  </button>
                                       </div>

                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>

               <div class="col-xs-12 full cart col-lg-4 col-md-4 col-sm-12 cart  checkout-cart-desktop"   v-if="getAllCartArray.length > 1"  >
                   <div class="order cart-box" id="cart-stiky">
                       <h3>Your Order </h3>
                       <div class="check-out-list">


                           <div class="table-holder">

                               <table class=tbl_cart_list>
                                    <h4>Order Details</h4>
                                   <tr v-for="(cart, product_index) in getAllCartArray"  v-if="product_index  > 0">
                                       <!-- <td class=highlighted>
                                       </td> -->

                                       <td class="order-name">
                                           <div class="check-order">{{cart.product_name}}</div>
                                           <div  v-if="cart.extras" v-for="(extra, extra_index) in cart.extras" >
                                               <strong>{{extra.group_name}}:</strong> {{extra.choice}}
                                           </div>
                                       </td>
                                       <td class="order-quty">
                                           <span>{{ cart.quantity}}  <i>X</i></span>
                                       </td>

                                       <td class="amount" v-if="!cart.extras">£ {{priceFormat(cart.price * cart.quantity) }}</td>
                                       <td class="text-right" v-if="cart.extras">£{{priceFormat(cart.single_product_total_amount)}} </td>
                                   </tr>
                               </table>
                           </div>
                           <div class="cart-money-detail">
                               <ul>
                                   <li class="fees"></li>
                                   <li>
                                       <span>Sub Total</span>
                                       <span>£{{priceFormat(total_amount)}}</span>
                                   </li>

                                   <li>
                                       <span>Discount</span>
                                       <span>  {{discountedAmount}} </span>
                                   </li>

                                   <li>
                                       <span>Total</span>
                                       <span>£{{priceFormat(finalAmount)}}</span>
                                   </li>


                               </ul>
                           </div>
                       </div>
                   </div>
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
                loading:false,
                cat_count: false,
                total_amount:0,
                card : false,
                order_card : false,
                form: {
                    address: '',
                    street: '',
                    town: null,
                    postal_code:'',
                    land_mark:'',
                    email:'',
                    number:'',
                    name:'',
                    payment_type:'',
                    order_type:'',
                    card_holder_name:'',
                    card_number:'',
                    expiration_month:'',
                    expiration_year:'',
                    cvc:'',
                    deliveryTime: '',
                    asap: ''
                },
                foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
                show: true,
                errorMessage:[],
                validForm:true,
                sendRequest:false,
                offers:[],
                discountedAmount:0,
                discountedPercentAge:10,
                finalAmount:0,
                orderType:'',
                interval: 45,
                slots: []
            };
        },

        created(){
            this.getTimeSlots();
        },
        
        mounted() {
            if(this.$store.getters.getAllCartArray.length > 0) {
                let total = 0;
                for( var key in this.$store.getters.getAllCartArray ) {
                    var value = this.$store.getters.getAllCartArray[key];
                }
            }
            var twentyMinutesLater = new Date();
            twentyMinutesLater.setMinutes(twentyMinutesLater.getMinutes() + 50);

            this.form.deliveryTime = twentyMinutesLater;

            this.orderType = this.$store.getters.getOrderType;

            this.scrollToMain();
            this.getOffers();

        },
        methods: {
           getOffers(){
                let  _this = this;
                _this.loading  = true;
                axios.get('/api/offer')
                    .then((response) => {
                        _this.offers =  response.data.data;

                        _this.loading  = false;
                    });
            },

            priceFormat (num) {
                return  parseFloat(num).toFixed(2);
            },
            showCard(val){
                this.card = val;
            },
            showOrderType(val){
                this.order_card = val;
            },
            scrollToMain() {
                let element = document.getElementById("error_msg");
                element.scrollIntoView({behavior: "instant", block: "start"});
            },

            scrollToTop() {
                let element = document.getElementById("error_msg");
                element.scrollIntoView({behavior: "instant", block: "start"});
            },
            
               placeOrder() {
                   let error = [];
                   let _this = this;
                   if (this.form.order_type != '') {
                       if (this.form.email === "") {
                           error.push('Please Add Your Email Address');
                       }
                       if (this.form.name === "") {
                           error.push('Please Add Your Name');
                       }
                       if (this.form.number === "") {
                           error.push('Please Add Your Number');
                       }
                       if (this.form.order_type === 'Delivery') {
                           if (this.form.address === "") {
                               error.push('Please Add Your Delivery Address');
                           }
                           if (this.form.street === "") {
                               error.push('Please Add Your Street Adress');
                           }
                           if (this.form.town === "") {
                               error.push('Please Add Your Town Name');
                           }
                           if (this.form.postal_code === "") {
                               error.push('Please Add Your Postal Code');
                           }
                           if (this.form.deliveryTime === "") {
                               error.push('Please select delivery date and time');
                           }
                       }

                       if (this.form.payment_type === "") {
                           error.push('Please Add Your Payment Type');
                       } else if (this.form.payment_type == 'Credit/Debit Card') {
                           if (this.form.card_holder_name === "") {
                               error.push('Please Add Card Holder Name');
                           }
                           if (this.form.card_number === "") {
                               error.push('Please Add Card Number');
                           }
                           if (this.form.expiration_month === "") {
                               error.push('Please Add Your Expiration Month');
                           }

                           if (this.form.expiration_year === "") {
                               error.push('Please Add Expiration Year');
                           }
                           if (this.form.cvc === "") {
                               error.push('Please Add Your Cvc');
                           }
                       }

                   }
                   this.errorMessage = error;

                   if (this.errorMessage.length > 0) {
                       _this.scrollToTop();
                   } else {
                       let vm = this;
                       if (vm.orderType == 'Pickup') {
                           vm.form.address = '---';
                           vm.form.street = '---';
                           vm.form.postal_code = '---';
                       }

                       let data = {
                           'user_id': 11,
                           'total_amount_with_fee': this.total_amount - this.discountedAmount,
                           'delivery_fees': '0',
                           'discounted_amount': this.discountedAmount,
                           'payment': 'cod',
                           'delivery_address': vm.form.address + " " + vm.form.street + " " + vm.form.postal_code,
                           'order_details': this.$store.getters.getAllCartArray,
                           'user_data': this.form,
                           'order_type': vm.orderType
                       };
                       console.log(data);
                       setTimeout(() => {
                           if (this.validForm) {
                               vm.loading = true;
                               let cart = this.$store.getters.getAllCartArray.splice(0, 1);
                               axios({
                                   method: 'post',
                                   url: '/api/placeOrder',
                                   data: data
                               })
                                   .then(function (response) {
                                       vm.loading = false;
                                       //handle success
                                       console.log(response);
                                       vm.$router.push({name: 'thankyou'});
                                       //vm.$store.commit('setAllCartArray', {});

                                   })
                                   .catch(function (response) {
                                       //handle error
                                       console.log(response);

                                   });
                           }

                       }, 1000);
                   }
               },

               getTimeSlots() {
                   let _this = this;
                   _this.loading = true;
                   axios.get('/api/get-time-slots/' + _this.interval)
                       .then((response) => {
                           _this.slots = response.data;

                           _this.loading = false;
                       });
               },




        },
        computed: {
            getAllCartArray() {
                if(this.$store.getters.getAllCartArray.length > 1 ){

                    let sum = 0;
                    let count = 0;
                    this.$store.getters.getAllCartArray.forEach(function(item) {
                        count++;
                        if(count > 1){
                            sum += item.single_product_total_amount;
                        }
                    });
                    this.total_amount = sum;
                    if(sum  >= 15){
                        this.discountedAmount =  (sum/100 * this.discountedPercentAge).toFixed(2)
                    }

                    this.finalAmount =   this.total_amount - this.discountedAmount

                }
                return this.$store.getters.getAllCartArray;
            },
        },
    }
</script>


<style>
    
</style>

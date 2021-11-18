<template>
    <div>
      <div class="for-checkout-only">
        <header-menu></header-menu>

        <section class="inner-section check-out-page">
        <div class="loading" v-if="loading">Loading&#8230;</div>
        <div class="container">
            <div class="row">
       <div class="col-sm-12 checkoutpage col-lg-8 col-md-8 col-sm-8 checkout-cart-form">
           <div class="row">


               <div class="col-sm-12  col-md-10" id="mainSection">
                   <div class="row section-border order-check">
                       <div class="col-12">
                       </div>
                       <div class="col-sm-12">
                            <label>{{form.order_type}} Time</label>
                            <select v-model="form.deliveryTime" class="form-control" id="delivery_time">
                                <option value="">Please select {{form.order_type}} Time</option>
                                <option v-for="slot in slots">{{slot}}</option>
                            </select>
<!--                             <selectize v-model="selected" :settings="settings">
                              <option :value="1">One</option>
                              <option :value="2">Two</option>
                            </selectize> -->
                           <br>
                       </div>

                       <div class="col-12">

                           <div class="row" v-show="form.order_type == 'Delivery'">

                               <div class="col-12">
                                   <h3> Delivery Details</h3>
                               </div>
                               <div class="col-sm-6">
                                   <label>Address </label>
                                   <input type="text" id="address" name="address" required v-model="form.address" class="form-control" placeholder="Address">
                               </div>

                               <div class="col-sm-6">
                                   <label>Street *</label>
                                   <input type="text" id="street" required :state="true"  v-model="form.street" class="form-control" placeholder="street">
                               </div>
                               <div class="col-sm-6">
                                   <label  class="col-form-label">Town *</label>
                                   <input type="text" id="town" required v-model="form.town" class="form-control" placeholder="abc town">
                               </div>

                               <div class="col-sm-6 mb-2">
                                   <label  class="col-form-label">Postal Code *</label>
                                   <input type="text" id="postalcode" required v-model="form.postal_code" class="form-control" placeholder="wc2h 9ah">
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
                           <input type="text" class="form-control" id="name" required placeholder="Enter Name" v-model="form.name">
                       </div>
                       <div class="col-sm-4">
                           <label  class="col-form-label">Email</label>
                           <input type="text" class="form-control" required id="email" v-model="form.email" placeholder="abc@example.com">
                       </div>

                       <div class="col-sm-4">
                           <label  class="col-form-label">Number</label>
                           <input type="text" class="form-control" required id="phone" v-model="form.number" placeholder="Enter Number">
                       </div>

                   </div>

                   <div class="row border-dashed payment-sec">
                       <div class="col-sm-12 cash-delivery">
                           <h3>Payment</h3>
                           <label class="customradiobutton radioiconed radio-inline mr-3">
                               <input type="radio" value="COD" id="payment_type" required @change.prevent="showCard(false)"  v-model="form.payment_type" ><i class="fas fa-wallet"></i> Cash on Delivery
                           </label>
                       </div>
                       <div class="col-sm-12 cash-delivery">
                         <label class="customradiobutton radioiconed radio-inline mr-3">
                           <input v-model="form.payment_type" type="radio" value="credit_card"
                                  @change.prevent="showCard(true)"><i class="fas fa-credit-card"></i> Credit/Debit Card
                         </label>
                       </div>
<!--                       <div class="col-sm-12 cash-delivery">
                         <label class="customradiobutton radioiconed radio-inline mr-3">
                           <input v-model="form.payment_type" type="radio" value="card_stream"
                                  @change.prevent="showCard(true)"><i class="fas fa-credit-card"></i> Card Stream
                         </label>
                       </div>-->

                      <div class="col-12">
                       <div v-show="card" class="row">
                         <div class="col-sm-12">
                           <div id="card-element"></div>
                         </div>
                       </div>

                        <div class="col-12">

                          <div v-show="card" class="row">
                            <form>
                              <div class="form-group">
                                <label>Card number</label>
                                <input class="form-control">
                              </div>
                              <div class="form-group">
                                <label>Card Expiry</label>
                                <input class="form-control" v-cardformat:formatCardExpiry>
                              </div>
                              <div class="form-group">
                                <label>Card CVC</label>
                                <input class="form-control" v-cardformat:formatCardCVC>
                              </div>
                              <div class="form-group">
                                <label>Numeric input</label>
                                <input class="form-control" v-cardformat:restrictNumeric>
                              </div>
                              <button class="btn btn-primary">Submit</button>
                            </form>
                          </div>

                        </div>

                       <div id="card-stream-iform" v-html="iform"  class="row"></div>

                       <div class="row mt-3">
                         <div class="col-sm-4">
                           <button class="subscribe btn btn-rounded-danger btn-block" type="button" @click="placeOrder()">
                             Confirm
                           </button>
                         </div>
                       </div>
                     </div>


                   </div>
               </div>
           </div>
       </div>

       <div class="col-xs-12 full cart col-lg-4 col-md-4 col-sm-12 cart  checkout-cart-desktop" v-if="cartItems.length > 0"  >
           <div class="order cart-box" id="cart-stiky">
               <h3>Your Order </h3>
               <div class="check-out-list">

                   <div class="table-holder">

                       <table class=tbl_cart_list>
                            <h4>Order Details</h4>
                           <tr v-for="(cart, product_index) in cartItems">
                               <!-- <td class=highlighted>
                               </td> -->

                               <td class="order-name">
                                   <div class="check-order">{{cart.product_name}}</div>
                                   <div  v-if="cart.extras" v-for="(extra, extra_index) in cart.extras" >
                                       <strong>{{extra.group_name}}:</strong> {{extra.choice}}
                                   </div>
                               </td>
                               <td class="order-quty">
                                   <span>{{ cart.quantity}}</span>
                               </td>

                               <td class="amount" v-if="!cart.extras">£ {{priceFormat(cart.price * cart.quantity) }}</td>
                               <td class="text-right" v-if="cart.extras">£{{priceFormat(cart.single_product_total_amount)}}</td>
                           </tr>
                       </table>
                   </div>
                   <div class="cart-money-detail">
                       <ul>
                           <li class="fees"></li>
                           <li>
                               <span>Sub Total</span>
                               <span>£{{priceFormat(totalPrice)}}</span>
                           </li>

                           <li>
                             <span>Discount</span>
                             <span><a v-if="discountedAmount > 0" href="#" @click.prevent="removeCoupon"><i
                                 class="fa fa-trash"></i></a> - {{discountedAmount}} </span>
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
    </div>
</template>

<script>

import {loadStripe} from '@stripe/stripe-js';
import Selectize from 'vue2-selectize'
// import VueCardFormat from 'vue-credit-card-validation';


export default {
  components: {
    Selectize,
    // VueCardFormat
  },
  data: function () {
    return {
      settings: {},
      selected: 1,
      stripe: {},
      cardElement: {},
      loading: false,
      cat_count: false,
      coupon_code: "",
      coupon_error: "",
      card: false,
      order_card: false,
      interval: 45,
      iframe : null,
      iform : null,
      form: {
        address: '',
        street: '',
        town: null,
        postal_code: '',
        land_mark: '',
        email: '',
        number: '',
        name: '',
        payment_type: '',
        order_type: this.$store.getters.getOrderType,
        deliveryTime: '',
        asap: ''
      },
      foods: [{text: 'Select One', value: null}, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true,
      errorMessage: [],
      validForm: true,
      sendRequest: false,
      offers: [],
      generatedToken: '',
      discountedAmount: 0,
      discountedPercentAge: 10,
      slots: [],
      delivery_fees: this.$store.getters.getDeliveryCharges == 'undefined' ? 0 : this.$store.getters.getDeliveryCharges,
      coupon_applied: false,
      hostedFieldInstance: false,
      threeDSecure: false,
      nonce: "",
      error: "",
      amount: 10,
    };
  },
  async mounted() {

    this.stripe = await loadStripe("pk_test_S7WpzetVyucJWjY37ogd9Cmj");

    const elements = this.stripe.elements();
    this.cardElement = elements.create('card', {
      classes: {
        base: 'form-control'
      }
    });

    this.cardElement.mount('#card-element');

    this.form.order_type = this.$store.getters.getOrderType;

    if (this.form.order_type == "Pickup")
      this.interval = 20;
    else
      this.interval = 45;

    this.getTimeSlots();

    if(this.delivery_fees == null || this.delivery_fees == "null") {
      this.delivery_fees = 0;
    }

    this.scrollToMain();
    this.getOffers();

    document.documentElement.classList.remove("remove-overflow") ;
    // this.generateToken();
  },
  methods: {
    getOffers() {
      let _this = this;
      _this.loading = true;
      axios.get('/api/offer')
          .then((response) => {
            _this.offers = response.data.data;

            _this.loading = false;
          });
    },

    generateToken() {
      let _this = this;
      _this.loading = true;
      axios.get('/api/generate-braintree-token')
          .then((response) => {
            _this.generatedToken = response.data.data;
            _this.loading = false;
          });
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

    applyCoupon() {

      let _this = this;

      let data = {
        'coupon_code': _this.coupon_code,
        'total_amount': _this.finalAmount
      };

      _this.loading = true;

      if (this.coupon_code === "") {
        _this.coupon_error = 'please enter a valid coupon code';
        _this.loading = false;

        setTimeout(() => {
          _this.coupon_error = "";
        }, 2000);

        return;
      }

      axios({
        method: 'post',
        url: '/api/apply-coupon',
        data: data
      })
          .then(function (response) {
            _this.loading = false;
            //handle success
            _this.discountedAmount = response.data.data
            _this.coupon_applied = true
          })
          .catch(function (response) {
            //handle error
            _this.loading = false;
            _this.coupon_error = response.response.data.error.message;
            setTimeout(() => {
              _this.coupon_error = "";
            }, 2000);
          });
    },

    removeCoupon() {

      let _this = this;

      _this.coupon_applied = false;
      _this.discountedAmount = 0;
      _this.coupon_code = "";

    },

    priceFormat(num) {
      return parseFloat(num).toFixed(2);
    },

    showCard(val) {
      this.card = val;
    },

    showOrderType(val) {
      this.order_card = val;
    },

    scrollToMain() {
      let element = document.getElementById("mainSection");
      element.scrollIntoView({behavior: "instant", block: "start"});
    },

    scrollToTop() {
      var element = document.getElementById("mainSection");

      console.log(element)

      element.scrollIntoView({behavior: "instant", block: "start"});
    },

    async placeOrder() {
      let error = [];
      let _this = this;
      //  if (this.form.order_type != '') {
      if (this.form.email === "") {
        error.push('Please Enter Your Email');
        $("#email").addClass('input-valid');
      }

      if (this.form.deliveryTime === "") {
        error.push('Please select delivery/pickup time');
        $("#delivery_time").addClass('input-valid');
      }

      if (this.form.name === "") {
        error.push('Please Enter Your Name');
        $("#name").addClass('input-valid');
      }
      if (this.form.number === "") {
        error.push('Please Enter Your Number');
        $("#phone").addClass('input-valid');
      }
      if (this.form.order_type === 'Delivery') {
        if (this.form.address === "") {
          error.push('Please Enter Your Address');
          $("#address").addClass('input-valid');
        }
        if (this.form.street === "") {
          error.push('Please Enter Your Street');
          $("#street").addClass('input-valid');
        }
        if (this.form.town === "" || this.form.town === null) {
          error.push('Please Enter Your Town');
          $("#town").addClass('input-valid');
        }
        if (this.form.postal_code === "") {
          error.push('Please Enter Your Postal Code');
          $("#postalcode").addClass('input-valid');
        }
      }

      if (this.form.payment_type === "") {
        error.push('Please Enter Your Payment Type');
        $("#payment_type").addClass('input-valid');
      }
      /*} else {
          error.push('Please Choose Your Order Type');
      }*/
      this.errorMessage = error;

      if (this.errorMessage.length > 0) {
        _this.scrollToTop();
      } else {
        let vm = this;
        if (this.form.order_type == 'Pickup') {
          vm.form.address = '---';
          vm.form.street = '---';
          vm.form.postal_code = '---';
        }

        let data = {
          'user_id': 11,
          'total_amount_with_fee': this.finalAmount,
          'delivery_fees': this.delivery_fees,
          'discounted_amount': this.discountedAmount,
          'payment': vm.form.payment_type,
          'delivery_address': vm.form.address + " " + vm.form.street + " " + vm.form.postal_code,
          // 'delivery_address': "===",
          'order_details': vm.cartItems,
          'user_data': this.form,
          'order_type': this.form.order_type,
          'payment_method_id' : ''
        };

        if (this.validForm) {
          vm.loading = true;

          if (this.form.payment_type === "credit_card") {

            /** For Paypal **/

            /*if (this.hostedFieldInstance) {
              this.error = "";
              this.nonce = "";
              this.hostedFieldInstance.tokenize().then(payload => {

                this.nonce = payload.nonce;

                this.threeDSecure.verifyCard({
                  amount: this.finalAmount,
                  nonce: this.nonce,
                  customer: {
                    email: this.form.email,
                    mobilePhoneNumber: this.form.number,
                    billingAddress: {
                      firstName: this.form.name,
                      streetAddress: this.form.address,
                      locality: this.form.street,
                      region: this.form.town,
                      postal_code: this.form.postal_code,
                      phoneNumber: this.form.number
                    }
                  },
                  addFrame: function (err, iframe) {
                    vm.loading = false;
                    // Set up your UI and add the iframe.
                    document.getElementById("verifyCard").appendChild(iframe);
                  },
                  removeFrame: function () {
                    vm.loading = false;
                    // Remove UI that you added in addFrame.
                    document.getElementById("verifyCard").innerHTML = ""
                  }

                }).then(pp => {
                  this.loading = false;

                  data.payment_method_id = pp.nonce;

                  vm.sendPlaceOrder(data)

                }).catch(err => {
                  this.loading = false;
                  this.error = err.message;
                });

              })
              .catch(err => {
                console.error(err);
                this.error = err.message;
              })
            }*/


            const {paymentMethod, error} = await this.stripe.createPaymentMethod(
                'card', this.cardElement, {
                  billing_details: {
                    name: this.form.name,
                    email: this.form.email,
                    address: {
                      line1: this.form.address,
                      city: this.form.street,
                      state: this.form.town,
                      postal_code: this.form.postal_code
                    }
                  }
                }
            );

            if (error) {
              vm.loading = false;
              //  alert(error.message)
              console.log(error)
            } else {

              data.payment_method_id = paymentMethod.id;

              axios({
                method: 'post',
                url: '/api/stripe-order',
                data: data
              })
                  .then(function (response) {
                    vm.loading = false;
                    //handle success
                    console.log(response);
                    vm.$router.push({name: 'thankyou'});

                    vm.$store.state.cartItems =  [];
                    vm.$store.state.cartItemsCount = 0;

                  })
                  .catch(function (response) {
                    //handle error
                    vm.loading = false;

                    vm.stripe.confirmCardPayment(response.response.data.error.payment_data.client_secret, {
                      payment_method: response.response.data.error.payment_data.payment_method,
                    }).then(function(result) {
                      vm.sendPlaceOrder(data)
                    });

                  });
            }

          }
          else if (this.form.payment_type === "card_stream") {

            console.log(this.cardElement);
            return


            axios({
              method: 'post',
              url: '/api/card-stream-order',
              data: data
            })
                .then(function (response) {
                  vm.loading = false;
                  //handle success
                  console.log(response);
                  return
                  vm.$router.push({name: 'thankyou'});

                  vm.$store.state.cartItems = [];
                  vm.$store.state.cartItemsCount = 0;

                })
                .catch(function (response) {
                  //handle error
                  vm.loading = false;

                  console.log(response)

                  //vm.iframe = response.response.data.error.payment_data.iframe;
                  vm.iform = response.response.data.error.payment_data.i_form;

                  window.setTimeout('document.forms.silentPost.submit()', 0);

                  /*vm.stripe.confirmCardPayment(response.response.data.error.payment_data.client_secret, {
                  payment_method: response.response.data.error.payment_data.payment_method,
                }).then(function(result) {
                  vm.sendPlaceOrder(data)
                });*/

                });
          } else {
            vm.sendPlaceOrder(data)
          }
        }
      }
    },

    sendPlaceOrder(data) {

      let self = this;

      console.log(data)

      axios({
        method: 'post',
        url: '/api/placeOrder',
        data: data
      })
          .then(function (response) {
            self.loading = false;
            self.$store.state.cartItems =  [];
            self.$store.state.cartItemsCount = 0;
            self.$router.push({path: '/order-confirmed/'+response.data.data.order_id});

          })
          .catch(function (response) {
            //handle error
            self.loading = false;
            alert(response.response.data.error.message);
            console.log(response.response.data.error.message);

          });

    },

    payWithCreditCard() {

    }
  },
  computed: {

    cartItems () {
      return this.$store.state.cartItems;
    },

    totalPrice () {
      let price = 0;
      this.$store.state.cartItems.map(el => {
        price += el['quantity'] * el['price'];
      })
      return price;
    },

    finalAmount () {

      let final_amount = 0

      if (localStorage.getItem('order_type') === "Pickup") {
        final_amount = this.totalPrice - this.discountedAmount;
      } else {

        if(this.delivery_fees == null || this.delivery_fees == "null") {
            final_amount = this.totalPrice - this.discountedAmount;
        } else {
          final_amount = this.totalPrice + this.delivery_fees - this.discountedAmount;
        }
      }

      return final_amount;
    }

    /*getAllCartArray() {
      if (this.$store.getters.getAllCartArray.length > 1) {

        let sum = 0;
        let count = 0;
        this.$store.getters.getAllCartArray.forEach(function (item) {
          count++;
          if (count > 1) {
            sum += item.single_product_total_amount;
          }
        });
        this.total_amount = sum;
        if (sum >= 1500000000) {
          this.discountedAmount = (sum / 100 * this.discountedPercentAge).toFixed(2)
        }

        if (localStorage.getItem('order_type') === "Pickup") {
          this.finalAmount = this.total_amount - this.discountedAmount;
        } else {
          this.finalAmount = this.total_amount + this.delivery_fees - this.discountedAmount;
        }

      }
      return this.$store.getters.getAllCartArray;
    },*/
  }
}
</script>
<style>

</style>

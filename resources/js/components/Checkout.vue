<template>
    <div>
        <header-menu></header-menu>
        <section class="inner-section">
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


                        <div class="col-sm-12 offset-sm-0 col-md-10 offset-md-1">
                            <div class="row  mt-4 p-3 mb-5 border-dashed">

                                <div class="col-12">
                                    <h2>Order (Choose your Order Type) </h2> <span></span>
                                </div>
                                <div class="col-sm-6">
                                    <label class="customradiobutton radioiconed radio-inline mr-3">
                                        <input type="radio" value="Pickup" @change.prevent="showOrderType('pickup')"  v-model="form.order_type"><i class="fa fa-sign-language"></i> Pick up

                                    </label>
                                </div>
                                <div class="col-sm-6">
                                    <label class="customradiobutton radioiconed radio-inline mr-3">
                                        <input type="radio" value="Delivery" v-model="form.order_type" @change.prevent="showOrderType('getdelivery')" ><i class="fa fa-truck"></i> Delivery

                                    </label>
                                </div>

                                <div class="col-12">
                                    <div class="row" v-show="order_card == 'pickup'">
                                        <div class="col-sm-6">
                                            <label>Date</label>
                                            <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
                                        </div>
                                        <div class="col-sm-6">
                                            <label>Time</label>
                                            <b-form-timepicker v-model="value" locale="en"></b-form-timepicker>
                                        </div>
                                    </div>

                                    <div class="row" v-show="order_card == 'getdelivery'">
                                        <div class="col-12">

                                            <h2> Delivery Details</h2>
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

                                        <div class="col-sm-6">
                                            <label  class="col-form-label">Postal Code *</label>
                                            <input type="text"   v-model="form.postal_code" class="form-control" placeholder="wc2h 9ah">
                                        </div>
                                    </div>
                                </div>
                            </div>




                            <div class="row  mt-4 p-3 mb-5 border-dashed">
                                <div class="col-12">
                                    <h2> Personal Details</h2>
                                </div>
                                <div class="col-sm-6">
                                    <label  class="col-form-label">Email</label>
                                    <input type="text" class="form-control"  v-model="form.email" placeholder="abc@example.com">
                                </div>

                                <div class="col-sm-6">
                                    <label  class="col-form-label">Number</label>
                                    <input type="text" class="form-control"  v-model="form.number" placeholder="">
                                </div>

                                <div class="col-sm-6">
                                    <label  class="col-form-label">Name</label>
                                    <input type="text" class="form-control" placeholder="" v-model="form.name">
                                </div>
                            </div>

                            <div class="row mt-4  p-3 mb-5 border-dashed">
                                <div class="col-12">
                                    <h2>Payment</h2>
                                </div>
                                <div class="col-sm-6">
                                    <label class="customradiobutton radioiconed radio-inline mr-3">
                                        <input type="radio" value="COD"  @change.prevent="showCard(false)"  v-model="form.payment_type" ><i class="fas fa-wallet"></i> Cash on Delivery
                                    </label>
                                </div>
                                <div class="col-sm-6">
                                    <label class="customradiobutton radioiconed radio-inline mr-3">
                                        <input type="radio" value="Credit/Debit Card" v-model="form.payment_type" @change.prevent="showCard(true)" ><i class="fas fa-credit-card"></i> Credit/Debit Card
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
                                        <div class="col-sm-4">
                                            <button class="subscribe btn btn-primary btn-block" type="button" @click="placeOrder()"> Confirm  </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="col-xs-12 full cart col-lg-4 col-md-4 col-sm-12 checkout-cart-desktop"   v-if="getAllCartArray.length > 1"  >
                    <div class="order cart-box" id="cart-stiky">
                        <h2>Your Order </h2>
                        <div>
                            <strong>Order Details</strong>
                            
                            <div class="table-holder">
                                <table class=tbl_cart_list>
                                    <tr v-for="(cart, product_index) in getAllCartArray"  v-if="product_index  > 0">
                                        <td class=highlighted>
                                        </td>
                                        <td>
                                            <span>{{ cart.quantity}}  <i>X</i></span>
                                        </td>
                                        <td>
                                            <div>{{cart.product_name}}</div>
                                            <div v-if="cart.extras" v-for="(extra, extra_index) in cart.extras" >
                                                <strong>{{extra.group_name}}:</strong> {{extra.choice}}
                                            </div>
                                        </td>

                                        <td  v-if="!cart.extras">£ {{priceFormat(cart.price * cart.quantity) }}</td>
                                        <td  v-if="cart.extras">£{{priceFormat(cart.single_product_total_amount)}} </td>
                                    </tr>
                                </table>
                            </div>
                            <div class="cart-money-detail">
                                <ul>
                                    <li class="fees"></li>
                                    <li>
                                        <span>Total</span>
                                        <span>£{{priceFormat(total_amount)}}</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="cart-btn mt-2">
                                <button class=" custom-btn" @click="placeOrder()">Checkout</button>
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
                },
                foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
                show: true,
                errorMessage:[],
                validForm:true,
                sendRequest:false,
                value:''

            };
        },
        mounted() {
            if(this.$store.getters.getAllCartArray.length > 0) {
                let total = 0;
                for( var key in this.$store.getters.getAllCartArray ) {
                    var value = this.$store.getters.getAllCartArray[key];
                }
            }
            this.scrollToMain();

        },
        methods: {

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

            placeOrder()
            {
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
                    }

                    if (this.form.payment_type === "") {
                        error.push('Please Add Your Payment Type');
                    }else if(this.form.payment_type == 'Credit/Debit Card') {
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

                } else {
                    error.push('Please Choose Your Order Type');
                }
                this.errorMessage = error;

                if (this.errorMessage.length > 0) {
                    _this.scrollToTop();
                }else {
                    let vm = this;
                    if(this.form.order_type == 'Pickup'){
                        vm.form.address = '---';
                        vm.form.street = '---';
                        vm.form.postal_code = '---';
                    }

                    let data = {
                        'user_id': 11,
                        'total_amount_with_fee': this.total_amount,
                        'delivery_fees': '0',
                        'payment': 'cod',
                        'delivery_address': vm.form.address + " " + vm.form.street + " " + vm.form.postal_code,
                        'order_details': this.$store.getters.getAllCartArray,
                        'user_data': this.form,
                        'order_type': this.form.order_type
                    };
                    console.log(data);
                    setTimeout(() => {
                        if (this.validForm) {
                            vm.loading = true;
                            let cart = this.$store.getters.getAllCartArray.splice(0, 1);
                            axios({
                                method: 'post',
                                url: 'http://frontonline.matrixepos.co.uk/api/placeOrder',
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
                }




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
                }
                return this.$store.getters.getAllCartArray;
            },
        },
    }
</script>


<style>
    body{
        overflow: inherit !important;
    }
    .cover {
        background-image: url('https://res.cloudinary.com/ordering2/image/upload/f_auto,q_auto,h_800,c_limit/v1573197396/w7h69zusidjo01abgrel.jpg');
    }
    .full {
        padding: 0;
    }

    .cover {
        position: relative;
        overflow: hidden;
        max-height: 45vh;
        height: 26.5vw;
        background: #f5f5f5;
        background-size: cover;
        background-position: center;
        margin-bottom:0;
    }

    .cover img.principal {
        background: #f5f5f5;
        height: 100%;
    }

    .cover img.logo.preload {
        border: 1px solid #eee;
        box-shadow: none;
    }

    .cover img.logo {
        position: absolute;
        width: 8vw;
        height: 8vw;
        min-width: 60px;
        min-height: 60px;
        background-size: 100%;
        background-repeat: no-repeat;
        bottom: 5%;
        left: 5%;
        border-radius: 3px;
        box-shadow: 0 0 10px 5px rgba(0,0,0,0.2);
    }

    .arabic_rtl .cover img.logo {
        left: initial;
        right: 5%;
    }

    .business-content {
        padding-left: 5%;
        background: #fff;
        overflow:hidden;
    }

    .business-content .preorder {
        display: inline-block;
        padding: 0;
        margin-bottom: 7px;
    }

    .business-content .preorder .current {
        display: inherit;
        background: #ddd;
        padding: 5px 7px;
        border-radius: 3px;
        font-size: 14px;
        vertical-align: middle;
        color: #333;
    }

    .business-content .preorder .current i {
        font-size: 18px;
        vertical-align: middle;
        margin-left: 5px;
        display: inline;
    }

    .business-content p.description.preload {
        background: #eee;
        color: #eee;
        width: 65%;
    }

    .business-content p.description {
        font-size: 16px;
    }

    .business-content p.description,
    .business-content p.description.preload {
        direction: ltr;
    }

    .arabic_rtl .business-content p.description,
    .arabic_rtl .business-content p.description.preload {
        direction: rtl;
    }


    h3.title,
    input.title {
        margin: 15px 0;
        color: #EF1962;
        font-size: 30px;
        direction: ltr;
    }

    h3.title.preload {
        color: #EF1962;
        background: #EF1962;
        width: 35%;
        direction: ltr;
    }

    .arabic_rtl h3.title,
    .arabic_rtl h3.title.preload {
        direction: rtl;
    }

    .nav-tabs {
        padding-bottom: 1px;
        width: 100%;
    }

    .nav-tabs.preload li a span {
        background: #ccc;
        color: #ccc;
    }

    .nav-tabs.preload li a.active span {
        background: #EF1962;
        color: #EF1962;
    }

    .nav-tabs > li.dropdown > a,
    .nav-tabs > li > a {
        background: #fff;
        text-align: center;
        font-weight: bold;
        font-size: 15px;
        border-radius: 0;
        border-bottom: 3px solid #fff;
        box-shadow: none;
        outline: none;
        color: #666;
        padding: 10px;
    }

    .nav-tabs > li > a:hover {
        background: #fff;
        border-color: transparent;
        border-bottom: 3px solid #fff;
        text-decoration:none;
    }
    .nav-tabs > li.dropdown > a.open,
    .nav-tabs > li.dropdown > a.active,
    .nav-tabs > li > a.active {
        color: #EF1962;
        background: #fff;
        border-color: transparent;
        border-bottom: 3px solid #EF1962;
    }

    .nav-tabs .open > a, .nav-tabs .open > a:hover, .nav-tabs .open > a:focus {
        border-color: transparent;
        color: #666;
        background: #fff;
        box-shadow: none;
        border-bottom: 3px solid #666;
    }

    .navbar-nav > li > .dropdown-menu {
        max-height: 320px;
        overflow-y: scroll;
    }

    .dropdown-menu {
        max-height: 180px;
        overflow-y: auto;
        overflow-x: hidden;
        position: absolute;
    }

    .nav-tabs .dropdown-menu > li > a {
        color: #EF1962;
        font-weight: bold;
    }

    .nav-tabs .dropdown-menu > li.active > a {
        color: #666;
        background: #fff;
    }

    .dishes {
        position: static;
        padding: 15px;
        background: #ffffff;
    }

    .dishes div[class*=col-] {
        padding: 10px;
        padding-left: 10px;
        padding-right: 10px;
    }

    .arabic_rtl .dishes div[class*=col-] {
        float: right;
    }

    .dishes .dishe {
        cursor: pointer;
        background: #fff;
        position: relative;
        padding: 15px 10px 10px 30px;
        border: 1px solid transparent;
        border-radius: 2px;
        height: 90px;
        overflow: hidden;
        box-shadow: 0 2px 8px 0 rgba(0,0,0,0.08);
    }

    .dishes .disheMulti {
        cursor: pointer;
        background: #fff;
        position: relative;
        padding: 10px;
        border: 1px solid transparent;
        border-radius: 2px;
        height: 96px;
        overflow: hidden;
    }

    .dishes .dishe.sold_out {
        background: #eee;
    }

    .dishes .dishe .sold_out {
        position: absolute;
        background-color: #333;
        top: 0;
        left: 0;
        color: #ffffff;
        font-weight: bold;
        font-size: 12px;
        padding: 2px 5px;
        border-radius: 0 0 3px 0;
    }

    .item-sold-out {
        background: #e5e5e5;
        padding: 12px 10px;
        text-align: center;
        font-weight: bold;
        font-size: 16px;
        border-radius: 3px;
    }

    /* .dishes .dishe.compressed {
      height: auto;
    } */

    /*.arabic_rtl .dishes .dishe strong {
      padding-left: 0;
    }

    .dishes .dishe strong {
      padding-left: 7px;
    }*/
    .arabic_rtl .my_orders, .arabic_rtl .my_orders .middle-div {
        display: flex;
        align-items: flex-start;
    }
    .arabic_rtl .dishes .dishe img {
        float: right;
        margin-left: 7px;
        margin-right: 0;
    }
    .arabic_rtl .dishes .dishe strong {
        display: inline-flex;
        direction: initial;
    }

    .arabic_rtl .dishes .dishe strong span:nth-of-type(2) {
        margin-top: -.3rem;
        margin-left: .7rem;
    }

    .dishes .dishe img {
        width: 60px;
        height: 60px;
        border-radius: 4px;
        float: left;
        margin: 7px 0;
        margin-right: 7px;
    }

    .dishes .dishe:hover {
        border: 1px solid #ddd;
    }

    .dishes .dishe.preload strong {
        background: #ccc;
        color: #ccc;
    }

    .dishes .dishe p,
    .dishes .dishe textarea {
        /*width: 100%;*/
        color: #777;
        font-size: 13px;
        height: 36px;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .dishes .dishe.preload p {
        background: #eee;
        color: #eee;
    }

    .dishes .dishe .price {
        /*position: absolute;
        top: 0;
        right: 10px;*/
        float: right;
        margin-top: -10px;
        margin-left: 10px;
        font-weight: normal;
        color: #EF1962;
    }

    .dishes .dishe.preload .price span {
        background: #EF1962;
        color: #EF1962;
    }

    .arabic_rtl .dishes .dishe .price {
        right: auto;
        left: 10px;
        direction: rtl;
    }

    .cart.bordered {
        border-left: 1px solid #ccc;
    }

    .cart {
        padding-bottom: 15px;
        background:#fff;
    }
    .cart .order {
        direction: ltr;
        padding-top: 20px;
        text-align: center;
        width: 100%;
        position: sticky;
        top: 20px;
    }

    .arabic_rtl .cart .order {
        direction: rtl;
    }

    .cart .order button {
        margin-top: 10px;
        font-size: 18px;
        padding: 10px;
        width: 75%;
    }

    .cart .order button.btn-sm {
        padding: 5px 10px;
        width: 60%;
        font-size: 16px;
    }

    button.btn-gray {
        background: #ccc;
    }

    .cart h3 {
        color: #EF1962;
    }

    .cart .order img {
        width: 100%;
    }

    .cart .order table {
        width: 100%;
        margin-top: 15px;
        text-align: left;
        border-top: 1px solid #eee;
    }

    /* .cart .order table tr {

    } */

    .cart .order table tr td:nth-child(3) {
        min-width: 140px;
    }
    .cart .order table tr td:nth-child(4) {
        overflow:hidden;
    }
    .cart .order table .fees {
        border-top: 1px solid #eee;
    }

    .cart .order table tr.fees td:nth-child(2){
        font-weight: normal;
    }

    .cart .order table tr.fees td:first-child {
        padding: 10px;
    }

    .cart .order table tr:last-child {
        background: #eee;
    }

    .cart .order table tr td {
        padding: 10px 5px;
        vertical-align:middle;
    }

    .cart .order table tr td i {
        cursor: pointer;
        padding: 6px 7px;
        border-radius: 15px;
    }

    .cart .order table tr td p.options {
        font-size: 12px;
        font-weight: normal;
        word-break: break-all;
    }

    .cart .order table tr td i.remove {
        background: #EF1962;
        color: #fff;
    }

    .cart .order table tr td i.edit {
        background: #33cd5f;
        color: #fff;
    }

    .cart .order table tr td.highlighted {
        color: #EF1962;
        font-weight: bold;
        text-align: center;
    }

    .cart .order table tr td:nth-child(2) {
        font-weight: bold;
    }
    .cart .order table tr td>div {
        cursor:pointer;
    }

    .cart .order p {
        color: #777;
        font-size: 20px;
    }

    /*.business {
        border-right: 1px solid #ccc;
    }*/

    .arabic_rtl .business {
        float: right;
        border-right: 0;
    }

    .form {
        border-right: 1px solid #ccc;
        margin-right: -1px;
    }

    .arabic_rtl .form {
        float: right;
        border-right: 0;
        border-left: 1px solid #ccc;
    }

    .form .form-horizontal {
        width: 80%;
        margin: 20px auto;
    }
    .form .form-horizontal .form-group {
        border-top: 1px solid #eee;
        padding-top: 15px;
    }
    .form .form-horizontal .form-group input,
    .form .form-horizontal .form-group select {
        height: 40px;
        vertical-align: middle;
    }

    .form .form-horizontal .form-group input,
    .form .form-horizontal .form-group select,
    .form .form-horizontal .form-group textarea {
        padding: 5px 20px;
        margin-bottom: 10px;
        border-color: #ddd;
        font-size: 15px;
        outline: none;
        box-shadow: none;
    }

    .form .form-horizontal .control-label span {
        color: #EF1962;
    }

    .form .form-horizontal .diver-type {
        border: 0;
    }

    .form .form-horizontal p {
        padding: 5px;
        font-size: 17px;
        color: #999;
    }

    .form .form-horizontal p.help-error {
        padding: 0;
        font-size: 13px;
        margin-top: -6px;
        color: #f45353;
    }

    .form .form-horizontal p.input {
        padding: 9px 20px;
        border: 1px solid #ddd;
        font-size: 15px;
        border-radius: 4px;
        cursor: pointer;
    }

    .form .form-horizontal p.input i {
        float: right;
        font-size: 20px;
    }

    .arabic_rtl .form .form-horizontal p.input i {
        float: left;
    }

    .form.form-popup {
        border: 0;
    }

    .form.form-popup .form-horizontal .form-group {
        border: 0;
    }

    .form.form-popup .form-horizontal {
        margin: 0;
        width: 100%;
    }

    .diver-type.checkout {
        margin: 0;
        background: inherit;
        min-height: auto;
    }

    .diver-type.checkout .item-radio input:checked + .radio-content .dynamic-radio:before,
    .diver-type.checkout .item-radio input + .radio-content .dynamic-radio:before {
        font-size: 30px;
        color: #EF1962;
    }

    .diver-type.checkout .item-radio input:checked + .radio-content .text-radio,
    .diver-type.checkout .item-radio input + .radio-content .text-radio {
        line-height: 30px;
        font-weight: normal;
    }

    .modal.fullscreen {
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        border-radius: 0;
    }

    .checkout-header .buttons {
        width: 100%;
        background: #fff;
        border-bottom: 1px solid #ccc;
        padding: 7px 0;
    }

    .checkout-header .buttons button {
        font-size: 17px;
        padding: 8px 35px;
    }

    .checkout-header h1 {
        padding: 8% 0;
        color: #fafafa;
        font-size: 2.25em;
    }

    .checkout-header h1 small {
        color: #fafafa;
    }

    .checkout {
        margin-top: 20px;
        margin-bottom: 20px;
        background: #f9f9f9;
    }

    .checkout .content {
        padding: 0 25px;
    }

    .checkout .content .information tr td:first-child {
        padding-right: 20px;
    }

    .checkout .content .information tr td:last-child {
        padding-left: 20px;
    }

    @media (max-width: 767.98px) {
        /* .checkout .content {
          padding: 0 0px;
          overflow: hidden;
        } */
        /* .checkout .content table tbody tr td {
          font-size: calc(11px + 1vw) !important;
          padding-right: 0px  !important;
        } */
        .to {
            padding-top: 20px !important;
            padding-bottom: 0px !important;
        }
        .chat .messages .message.to {
            padding-top: 0!important;
        }
    }

    .checkout .content table {
        width: 100%;
    }

    .checkout .header {
        background: #EF1962;
        color: #fafafa;
        text-align: center;
    }

    .checkout .header {
        padding: 15px;
    }

    .checkout .header h2 small {
        color: #fafafa;
    }

    .checkout .content table tbody {
        border-bottom: 1px solid #ddd;
    }

    .checkout .content table tbody:last-child {
        border-bottom: 0;
    }

    .checkout .content table tbody tr td {
        width: 50%;
        font-size: 16px;
        color: #333;
    }

    .checkout .content table tbody tr:first-child td:first-child {
        padding-top: 20px;
    }

    .checkout .content table tbody tr:first-child td:last-child {
        padding-bottom: 20px;
    }

    .checkout .content table tbody tr.title td {
        text-align: left !important;
        font-size: 20px;
        color: #333;
    }

    .arabic_rtl .checkout .content table tbody tr.title td {
        text-align: right !important;
    }

    .checkout .content table tbody tr:last-child td {
        padding-bottom: 15px;
    }

    .checkout .content table tbody tr td:first-child {
        padding: 3px;
    }

    .checkout .content table tbody tr td:first-child {
        padding-left: 20px;
    }
    .checkout .content table tbody tr td:last-child {
        padding-right: 20px;
    }

    .checkout .content table tbody.price tr td:nth-child(2) {
        text-align: right!important;
    }

    .checkout .content table tbody tr td i {
        color: #999;
    }

    .checkout .content table tbody tr td span {
        color: #EF1962;
    }

    .checkout .content table tbody tr td span.omit {
        color: #333!important;
    }

    .checkout .content table tbody tr td p {
        font-size: 14px;
    }

    .checkout .content table tbody tr td p span {
        color: #999;
    }

    .checkout .content table tbody.footer {
        background: #f9f9f9;
        text-align: center;
        position: static;
        height: auto;
    }

    .checkout .content table tbody.footer tr td {
        padding: 15px;
        color: #777;
        font-size: 18px;
        border-bottom: 0;
    }

    .popup {
        border-radius: 7px;
    }

    .popup.big {
        width: 90%;
        left: 5%;
        right: 5%;
        bottom: 5%!important;
    }

    .modal .popup-mode {
        padding: 20px 30px;
        background: #fff;
    }



    /* @media only screen
      and (min-device-width: 375px)
      and (max-device-width: 812px)
      and (-webkit-min-device-pixel-ratio: 3) {
        .modal .popup-mode {
          background-color: red !important;
        }
    }
    @media only screen
    and (min-device-width: 375px)
    and (max-device-width: 812px)
    and (-webkit-min-device-pixel-ratio: 2) {
      .modal .popup-mode {
        background-color: cyan !important;
      }
    } */
    .safari-browser{
        padding-right: env(safe-area-inset-bottom);
    }
    .modal .close {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 25px;
        padding: 15px;
        z-index: 999;
        font-weight: normal;
    }

    .modal .close.share {
        right: 3.5rem;
    }

    .arabic_rtl .modal .close {
        top: 0;
        left: 0;
        right: auto;
    }
    .arabic_rtl .modal .close.share {
        left: 3.5rem;
    }

    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
        .modal .close {
            position: absolute;
        }
    }


    .categories-tabs,
    #categories-tabs,
    #categories-tabss {
        background: #fff;
    }

    .offset-categories {
        /*height: 46px;*/
        overflow: unset !important;
    }

    .nav.nav-tabs.editor {
        height: auto;
    }

    .nav.nav-tabs {
        height: 46px;
        overflow: hidden;
        align-items: center;
    }

    .nav-tabs.three > li {
        width: 33.3333333333%;
    }

    .nav-tabs.four > li {
        width: 25%;
    }

    .nav-tabs.four > li > a,
    .nav-tabs.three > li > a {
        white-space: initial;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 2px;
        font-size: 90%;
        height: 44px;
    }


    .offset-categories.editor {
        height: auto;
    }

    #categories-tabs.fixed,
    #cart-stiky.fixed {
        position: fixed;
        top: 0;
        z-index: 9;
        top: 70px;
        z-index: 9;
        right: 0;
    }

    #cart-stiky.fixed.bottom {
        top: initial;
        bottom: 0;
    }

    .navbar .dropdown a {
        padding: 11px 15px 12px 15px;
    }

    .navbar .dropdown .dropdown-toggle label.round {
        border: 1px solid #EF1962;
        padding: 3px 7px;
        border-radius: 3px;
        cursor: pointer;
        margin-bottom: 0;
        /*margin-top: -5px;*/
    }

    .view-more {
        border: 0;
        color: #EF1962;
        font-weight: bold;
        float: none;
    }

    .bottom-wrap {
        height: auto;
        white-space: normal;
    }

    .category-image {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 15px !important;
    }

    .title-category {
        vertical-align: middle;
        width: 100%;
        padding: 15px 5px;
        font-size: 20px;
        font-weight: bold;
    }


    .cart_badge {
        position: absolute;
        left: 0;
        top: 0;
        padding: 0 3px;
        min-width: 2rem;
        text-align: center;
        color: white;
    }


    .product-search {
        width: 100%;
        background: #fff;
        border-bottom: 1px solid #ccc;
        padding: 10px;
        margin-bottom: 0;
    }

    .product-search .input-group input.form-control {
        border-color: #ccc!important;
        height: auto;
        padding: 7px;
        font-size: 14px;
    }

    .product-search .input-group-addon:first-child,
    .product-search .input-group-addon {
        border-color: #ccc;
        color: #ccc;
        padding: 4px 7px 5px 0;
        font-size: 20px;
    }


    .tbl_cart_list .form-group {
        min-width: 56px;
        max-width: 56px;
        margin-top: .5rem;
        margin-left: .5rem;
    }

    .tbl_cart_list .form-group select.form-control {
        padding: 2px 10px;
        height: 32px;
        border:0;
    }















    .bottom-cont div a,
    .btn.btn-primary,
    .button.button-positive,
    .cart .order table tr td i.remove,
    .checkbox input:checked+.checkbox-icon:before,
    .checkbox input:checked:before {
        background-color: #01a8fb;
        border-color: #01a8fb;
        color: #fff !important
    }

    .btn-primary.disabled:hover,
    .btn-primary[disabled]:hover,
    .btn.btn-primary:active,
    .button.button-positive.activated,
    .button.button-positive.active,
    .button.button-positive:active,
    .item-btn a.button.activated {
        background-color: #000 !important;
        border-color: #000 !important;
        color: #fff
    }

    .form-group input.form-control,
    .form-group select.form-control,
    .navbar-default .navbar-nav>li label.notifications {
        border-color: #01a8fb
    }

    .input-group-addon,
    .input-group-addon:first-child,
    .pre-checkout .address .info .action button {
        border-color: #01a8fb;
        color: #01a8fb
    }

    .cart .order table tr td.highlighted,
    .cart h3,
    .checkout .content table tbody tr td span,
    .color-main,
    .dishes .dishe .price,
    .error-page h1,
    .form .form-horizontal .control-label span,
    .icon-primary,
    .item-radio input+.radio-content .dynamic-radio:before,
    .item-radio input:checked+.radio-content .dynamic-radio:before,
    .list .list-item.selected .content .secondary,
    .modal .popup-mode .item.item-divider.title,
    .nav-tabs .dropdown-menu>li>a,
    .navbar-default .navbar-nav>li>a,
    .points .fa-star,
    .preorder .menus .resmenu .check .checked,
    .rating .points,
    .review i.selected,
    .upselling-products .products .product .price,
    .view-more,
    a,
    h1.title,
    h2.title,
    h3.title,
    input.title {
        color: #01a8fb !important
    }

    .modal .popup-mode .tab-item-cont .button-bar .tab.active,
    .nav-tabs>li.dropdown>a.active,
    .nav-tabs>li.dropdown>a.open,
    .nav-tabs>li>a.active {
        color: #01a8fb;
        border-bottom-color: #01a8fb
    }

    .navbar-default .navbar-nav>li>a:hover,
    .view-more:active,
    a:hover {
        color: #b49334
    }

    .navbar-default .navbar-nav>li>a.cart label,
    .switcher__toggle {
        background-color: #01a8fb
    }

    .navbar-default .navbar-nav>li>a.cart.empty label {
        border-color: #facc48;
        color: #01a8fb
    }

    .navbar .dropdown .dropdown-toggle label.round {
        border-color: #01a8fb
    }

    .dishes .dishe.preload .price span,
    .nav-tabs.preload li a.active span,
    h3.title.preload {
        background: #01a8fb;
        color: #01a8fb
    }

    .addr_tag_item.active,
    .badge-cont,
    .thumbnail .cartel.featured {
        background: #01a8fb
    }

    .btn-badge-cont,
    .row-eq-height .unread-messages {
        background-color: #b49334;
        color: #fff
    }

    .checkout .header,
    .form.editable .group ul.tree .treecheckbox.check .icheckbox,
    .form.editable .group ul.tree .treecheckbox.indeterminate .icheckbox,
    .go-cart,
    .navbar-default .navbar-nav>li label.notifications .count,
    table .count {
        background: #01a8fb;
        color: #fff
    }

    .spinner.spinner-assertive {
        stroke: #01a8fb;
        fill: #01a8fb
    }

    .offset-categories.editor .nav-tabs>li>.category.selected {
        border-bottom-color: #01a8fb
    }

    .webtabs .tab.active {
        color: #01a8fb;
        border-bottom: 3px solid #01a8fb
    }

    input[readonly].form-control.home-address {
        border: 1px solid #01a8fb !important;
        border-left: 0 !important
    }

    .check-box i {
        color: #01a8fb
    }

    .color-primary {
        color: #01a8fb
    }

    .color-secundary {
        color: #fff
    }

    .background-primary {
        background-color: #01a8fb
    }

    .background-secondary {
        background-color: #fff
    }

    .border-primary {
        border-color: #01a8fb
    }

    .border-secondary {
        border-color: #fff
    }

    .color-primary-active:active,
    .color-primary-checked:checked,
    .color-primary-hover:hover,
    .color-primary-visited:visited {
        color: #b49334
    }

    .background-primary-active:active,
    .background-primary-checked:checked,
    .background-primary-hover:hover,
    .background-primary-visited:visited {
        background-color: #b49334
    }

    .border-primary-active:active,
    .border-primary-checked:checked,
    .border-primary-hover:hover,
    .border-primary-visited:visited {
        border-color: #b49334
    }

    .nav-tabs .dropdown-menu>li>a {
        display:block;
        padding:3px 20px;
        line-height:1.4;

    }
    .box-shad{
        box-shadow: 0 2px 8px 0 rgba(0,0,0,0.08);
    }
    .business > div {
        padding-top: 30px !important;
        padding-bottom: 35px !important;
    }
    .business h2{
        margin-bottom: 20px;
        padding-left: 13px;
        font-weight: 600;
    }
    .business input[type=radio]{
        margin-right:3px;
    }




    .loading {
        position: fixed;
        z-index: 999;
        height: 2em;
        width: 2em;
        overflow: show;
        margin: auto;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }

    /* Transparent Overlay */
    .loading:before {
        content: '';
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(rgba(20, 20, 20,.8), rgba(0, 0, 0, .8));

        background: -webkit-radial-gradient(rgba(20, 20, 20,.8), rgba(0, 0, 0,.8));
    }

    /* :not(:required) hides these rules from IE9 and below */
    .loading:not(:required) {
        /* hide "loading..." text */
        font: 0/0 a;
        color: transparent;
        text-shadow: none;
        background-color: transparent;
        border: 0;
    }

    .loading:not(:required):after {
        content: '';
        display: block;
        font-size: 10px;
        width: 1em;
        height: 1em;
        margin-top: -0.5em;
        -webkit-animation: spinner 150ms infinite linear;
        -moz-animation: spinner 150ms infinite linear;
        -ms-animation: spinner 150ms infinite linear;
        -o-animation: spinner 150ms infinite linear;
        animation: spinner 150ms infinite linear;
        border-radius: 0.5em;
        -webkit-box-shadow: rgba(255,255,255, 0.75) 1.5em 0 0 0, rgba(255,255,255, 0.75) 1.1em 1.1em 0 0, rgba(255,255,255, 0.75) 0 1.5em 0 0, rgba(255,255,255, 0.75) -1.1em 1.1em 0 0, rgba(255,255,255, 0.75) -1.5em 0 0 0, rgba(255,255,255, 0.75) -1.1em -1.1em 0 0, rgba(255,255,255, 0.75) 0 -1.5em 0 0, rgba(255,255,255, 0.75) 1.1em -1.1em 0 0;
        box-shadow: rgba(255,255,255, 0.75) 1.5em 0 0 0, rgba(255,255,255, 0.75) 1.1em 1.1em 0 0, rgba(255,255,255, 0.75) 0 1.5em 0 0, rgba(255,255,255, 0.75) -1.1em 1.1em 0 0, rgba(255,255,255, 0.75) -1.5em 0 0 0, rgba(255,255,255, 0.75) -1.1em -1.1em 0 0, rgba(255,255,255, 0.75) 0 -1.5em 0 0, rgba(255,255,255, 0.75) 1.1em -1.1em 0 0;
    }

    /* Animation */

    @-webkit-keyframes spinner {
        0% {
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    @-moz-keyframes spinner {
        0% {
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    @-o-keyframes spinner {
        0% {
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    @keyframes spinner {
        0% {
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

</style>

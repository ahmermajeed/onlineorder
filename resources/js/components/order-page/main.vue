<template>
    <div>
        <header-menu></header-menu>
        <div class="loading" v-if="loading">Loading&#8230;</div>
        <div class="container-fluid">
            <div class="row full">
                <div class="col-sm-12 full business col-lg-9 col-md-8 col-sm-8">
                    <div class="cover" style='background-image: url("../../../images/image00003.jpeg")'>
                        <img src="../../../images/mainlogo.png"  class="logo" >
                    </div>
                    <div class="offset-categories">
                        <div id="categories-tabs">
                            <div class="desktop-tabs">
                                <ul class="nav nav-tabs">
                                    <li><a href="#"  @click.prevent="getProductAgainstCategories(false)" >All</a></li>
                                    <li  v-for="(item, index) in categories"><a href="#" @click.prevent="getProductAgainstCategories(item.id)">{{item.name}}</a></li>

                                </ul>
                            </div>
                            <div class="form-group product-search">
                                <div class=input-group>
                                    <div class=input-group-addon>
                                        <i class="fa fa-search"></i>
                                    </div>
                                    <input class="form-control" placeholder="Search">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="dishes-wrapper">
                        <div class="row dishes no-gutters"  v-for="(item, index) in products" v-if="item.products.length" >


                            <div class="col-sm-12">
                                <div class="title-category">
                                    {{item.name}}
                                </div>
                            </div>



                            <div class="col-sm-12 col-md-6"  v-for="(product, product_index) in item.products">

                                <div class="dishe" @click.prevent="viewProduct(product.id)" >
                                    <strong class="dish_title">
                                        <span> {{product.name}} </span>
                                        <span class="dish_price"  v-if="!product.sizes.length">  £ {{product.price}} </span>
                                    </strong>
                                    <p>{{product.description}}
                                        <span style="font-size: 12px;font-style: normal;font-weight: bolder;float:right" v-if="product.sizes.length"  v-for="(size, size_index) in product.sizes" > {{size.size}} : £{{size.price}} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <div class="col-xs-12 full cart col-lg-3 col-md-4 col-sm-12 cart-right-desktop"   v-if="getAllCartArray.length > 1"  >
                    <div class="order" id="cart-stiky">
                        <h2> Your Order </h2>
                        <div>
                            <strong>Order Details</strong>

                            <button class="anima-btn move-eff" @click="placeOrder()"><span>Checkout</span></button>
                            <div class="table-holder">
                                <table class=tbl_cart_list>
                                    <tr v-for="(cart, product_index) in getAllCartArray"  v-if="product_index  > 0">
                                        <td class=highlighted>
                                        </td>
                                        <td>
                                            <i class="fa fa-angle-up"  @click="quantityAddInCart(product_index)"></i>
                                            <span>{{ cart.quantity}}  <i>X</i></span>
                                            <i class="fa fa-angle-down"  @click="quantityMinusInCart(product_index)"></i>
                                        </td>
                                        <td>
                                            <div>{{cart.product_name}}</div>
                                            <div v-if="cart.extras" v-for="(extra, extra_index) in cart.extras" >
                                                <strong>{{extra.group_name}}:</strong> {{extra.choice}}
                                            </div>
                                            <span class="mealactions">
<!--                                                <i v-b-tooltip.hover title="Edit Meal" class="fa fa-pencil"></i>-->
                                                <i v-b-tooltip.hover title="Remove Meal" class="fa fa-times" @click="removeFromCart(product_index)"></i>
                                            </span>
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
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 full cart col-lg-3 col-md-4 col-sm-4 cart-right-desktop"   v-else="getAllCartArray.length  ==1">
                    <div class="order" id="cart-stiky">
                    <img src="../../../images/empty-cart.png" style="width:300px">
                    <h2 class="title" style="text-align:center">Your Cart is Empty</h2>
                    </div>
                </div>
            </div>
            <div class="mobile-cart-button" v-bind:class="{ cartheight: cart_height }" v-if="getAllCartArray.length > 1">
                <div class="inner">
                    <span class="products-count"><svg xmlns="http://www.w3.org/2000/svg" class="svg-stroke-container" width="24" height="24">
                        <path fill="#707070" d="M12 2.75a4.75 4.75 0 014.744 4.5h3.103a1 1 0 01.99 1.141l-1.714 12a1 1 0 01-.99.859H5.867a1 1 0 01-.99-.859l-1.714-12a1 1 0 01.99-1.141h3.103A4.75 4.75 0 0112 2.75zm5.559 14.75H6.44a.4.4 0 00-.396.457l.208 1.45a.4.4 0 00.396.343H17.35a.4.4 0 00.396-.343l.208-1.45a.4.4 0 00-.396-.457zm1.25-8.75H5.19a.4.4 0 00-.396.457l.922 6.45a.4.4 0 00.396.343h11.775a.4.4 0 00.396-.343l.922-6.45a.4.4 0 00-.396-.457zM12 4.25a3.251 3.251 0 00-3.193 2.638.305.305 0 00.3.362h5.796a.297.297 0 00.292-.35A3.251 3.251 0 0012 4.25z"></path>
                    </svg>  1</span>
                    <span class="text" @click="opencartlist()">Checkout</span>
                    <span class="products-value">{{priceFormat(total_amount)}}</span>
                </div>
                <ul>
                    <li>
                        <span class="qty">2 
                            <span class="qtyincrement">
                               <i class="fa fa-plus-square-o"></i>
                               <i class="fa fa-minus-square-o"></i> 
                            </span>
                        </span>
                        <span class="meal">Loreum ipsum is dummy</span>
                        <span class="price">$121</span>
                    </li>
                    <li>
                        <span class="qty">2 
                            <span class="qtyincrement">
                               <i class="fa fa-plus-square-o"></i>
                               <i class="fa fa-minus-square-o"></i> 
                            </span>
                        </span>
                        <span class="meal">
                            Loreum ipsum is dummy
                            <ul>
                                <li><b>Size:</b> Double</li>
                                <li><b>Extra:</b> Cheese</li>
                                <li><b>Drink:</b> Pepsi</li>
                            </ul>
                            <span class="mealactions">
                                <i v-b-tooltip.hover title="Edit Meal" class="fa fa-pencil"></i>
                                <i v-b-tooltip.hover title="Remove Meal" class="fa fa-times"></i>
                            </span>
                        </span>
                        <span class="price">$121</span>
                    </li>
                    <li>
                        <span class="qty">2 
                            <span class="qtyincrement">
                               <i class="fa fa-plus-square-o"></i>
                               <i class="fa fa-minus-square-o"></i> 
                            </span>
                        </span>
                        <span class="meal">Loreum ipsum is dummy</span>
                        <span class="price">$121</span>
                    </li>
                    <li>
                        <span class="qty">2 
                            <span class="qtyincrement">
                               <i class="fa fa-plus-square-o"></i>
                               <i class="fa fa-minus-square-o"></i> 
                            </span>
                        </span>
                        <span class="meal">Loreum ipsum is dummy</span>
                        <span class="price">$121</span>
                    </li>
                </ul>
                <div class="confirm-btn">
                    <button class="anima-btn move-eff"><span>Confirm Order</span></button>
                </div>
            </div>
        </div>
        <add-product @HideModalValue="hideModal" :showModalProp="product" :list="list" :has_sizes="has_sizes"></add-product>
    </div>
        
</template>

<script>
    export default {
        data: function () {
            return {
                loading:false,
                categories:[],
                products:[],
                product:false,
                list:{},
                has_sizes:false,
                cat_count: false,
                total_amount:0,
                cart_height:false
            };
        },
        mounted() {
            this.getCategories();
            this.getProductAgainstCategories(false);
            if(this.$store.getters.getAllCartArray.length > 0) {
                let total = 0;
                for( var key in this.$store.getters.getAllCartArray ) {
                    var value = this.$store.getters.getAllCartArray[key];
                }
            }

        },
        methods: {
            priceFormat (num) {
                return  parseFloat(num).toFixed(2);
            },
            addProduct() {
                this.product = true;
            },
            hideModal() {
                this.product = false;
                this.list = {};
            },
            getCategories(){
                let  _this = this;
                _this.loading  = true;
                axios.get('/api/categories')
                    .then((response) => {
                        _this.categories =  response.data.data;
                        _this.loading  = false;
                        if(_this.categories.length > 7){
                            _this.cat_count = true;
                        }
                    });
            },
            getProductAgainstCategories(id){
                let  _this = this;
                _this.loading  = true;
                var url = '/api/categories';
                if(id){1
                    url = url + '?id=' + id;
                }
                axios.get(url)
                    .then((response) => {
                        _this.products =  response.data.data
                        _this.loading  = false;

                    });
            },
            opencartlist(){
                this.cart_height = !this.cart_height;
                if(this.cart_height == true) {
                    document.querySelector("body").style.overflow = 'hidden';
                } else {
                    document.querySelector("body").style.overflow = 'auto';
                }
            },
            viewProduct(id){
                let  _this = this;
                _this.loading  = true;
                let url = '/api/products/'+id;
                axios.get(url)
                    .then((response) => {
                        _this.list =  response.data.data;

                        _this.has_sizes = _this.list.sizes.length > 0;
                        _this.loading  = false;
                        _this.product = true;

                    });
            },
            placeOrder(){
                this.$router.push({name: 'check-out'})

                // let obj = {
                //     'user_id':1,
                //     'total_amount_with_fee':2000,
                //     'delivery_fees':'150',
                //     'payment':'cod',
                //     'delivery_address':"Test Address",
                //     'order_details':  this.$store.getters.getAllCartArray
                // };
                // axios({
                //     method: 'post',
                //     url: 'http://frontonline.matrixepos.co.uk/api/placeOrder',
                //     data: {
                //         'user_id':1,
                //         'total_amount_with_fee':2000,
                //         'delivery_fees':'150',
                //         'payment':'cod',
                //         'delivery_address':"Test Address",
                //         'order_details':  this.$store.getters.getAllCartArray
                //     },
                // })
                //     .then(function (response) {
                //         //handle success
                //         console.log(response);
                //         this.$store.commit('setAllCartArray', {})
                //     })
                //     .catch(function (response) {
                //         //handle error
                //         console.log(response);
                //
                //     });
                //     location.reload();
            },
            removeFromCart(index){
                let cart_data = this.$store.getters.getAllCartArray;
                cart_data.splice(index,1);
                this.updateCart();

            },
            quantityAddInCart(index){
                this.updateCart();
                this.$store.getters.getAllCartArray[index].quantity ++;
                this.$store.getters.getAllCartArray[index].single_product_total_amount  =  this.$store.getters.getAllCartArray[index].single_product_total_amount + this.$store.getters.getAllCartArray[index].price;
                //this.getAllCartArray();
            },
            quantityMinusInCart(index){
                let quantity = this.$store.getters.getAllCartArray[index].quantity;
                 if(quantity >= 2){
                     this.updateCart();
                    this.$store.getters.getAllCartArray[index].quantity --;
                    this.$store.getters.getAllCartArray[index].single_product_total_amount =  this.$store.getters.getAllCartArray[index].single_product_total_amount - this.$store.getters.getAllCartArray[index].price;
                }else {
                     this.removeFromCart(index)
                 }

            },


            updateCart() {
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
        computed: {
            getAllCartArray() {
                let self = this;
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

        }
    }
</script>


<style>
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
    #categories-tabs .dropdown {
        cursor:pointer;
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
        background: none;
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
        border-bottom: 3px solid #facc48;
        text-decoration:none;
    }
    .nav-tabs > li > a.active {
        border-bottom: 3px solid #facc48;
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

    .dishes-wrapper{
        background-color: #f9f9f9;
    }
    .dishes {
        position: static;
        padding: 15px;
        background: #ffffff;
        margin: 20px 0;
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

    .dishe strong{
        font-size: 15px;
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

    #cart-stiky > img {
        max-width:100%;
    }
    .arabic_rtl .cart .order {
        direction: rtl;
    }

    .cart .order button {
        display: block;
        margin: 8px auto;
        color: #000 !important;
        padding: 0;
        width:170px;
    }
    .cart .order button.move-eff span{
        top:3px;
    }
    .cart .order button:focus {
        outline:0;
        box-shadow:none;
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

    .cart .order .table-holder {
        overflow-y: scroll;
        max-height: 50vh;
    }
    .cart .order .table-holder::-webkit-scrollbar {
        width:3px;
    }
    .cart .order .table-holder::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }
    .cart .order .table-holder::-webkit-scrollbar-thumb {
        background: #888; 
    }
    .cart .order .table-holder::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }
    .cart .order table {
        width: 100%;
        margin-top: 15px;
        text-align: left;
        border-top: 1px solid #eee;
    }
    .cart .order table .mealactions{
        display:block;
        margin-top:2px;
    }
    .cart .order table .mealactions i{
        background: #facc48;
        padding: 2px;
        text-align: center;
        border-radius: 100%;
        width: 24px;
        height: 24px;
        line-height: 20px;
        margin: 0 5px 0 0;
        color: #454545;
    }
    .cart .order table .mealactions i:before{
        
    }
    .cart .order .cart-money-detail{
        background: #eee;
    }
    .cart .order .cart-money-detail ul{
        margin:0;
        padding:0;
    }
    .cart .order .cart-money-detail ul li.fees{
        display:none;
    }
    .cart .order .cart-money-detail ul li{
        display:flex;
        width:100%;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
        font-size:18px;
        font-weight:700;
    }
    .cart .order .cart-money-detail ul li span{}

    .cart .order table tr {
        border-top: 1px solid #eee;
    }

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
        background:none;
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
    .cart .order table tr td:nth-child(2) span{
        display:block;
    }
    .cart .order table tr td:nth-child(2) span i{
        font-style: normal;
        font-size: 12px;
        padding: 0;
    }
    .cart .order table tr td:nth-child(2) span,
    .cart .order table tr td:nth-child(2) i{
        line-height: 1;
    }
    
    .cart .order p {
        color: #777;
        font-size: 20px;
    }

    .business {
        border-right: 1px solid #ccc;
    }

    .arabic_rtl .business {
        float: right;
        border-right: 0;
        border-left: 1px solid #ccc;
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

    #add-product.modal{
        padding-left:0 !important;
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
        background-color: #facc48;
        border-color: #facc48;
        color: #fff !important
    }

    .btn-primary.disabled:hover,
    .btn-primary[disabled]:hover,
    .btn.btn-primary:active,
    .button.button-positive.activated,
    .button.button-positive.active,
    .button.button-positive:active,
    .item-btn a.button.activated {
        background-color: #b49334;
        border-color: #b49334;
        color: #fff
    }

    .form-group input.form-control,
    .form-group select.form-control,
    .navbar-default .navbar-nav>li label.notifications {
        border-color: #facc48
    }

    .input-group-addon,
    .input-group-addon:first-child,
    .pre-checkout .address .info .action button {
        border-color: #facc48;
        color: #facc48
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
        color: #facc48 !important
    }

    .modal .popup-mode .tab-item-cont .button-bar .tab.active,
    .nav-tabs>li.dropdown>a.active,
    .nav-tabs>li.dropdown>a.open,
    .nav-tabs>li>a.active {
        color: #facc48;
        border-bottom-color: #facc48
    }

    .navbar-default .navbar-nav>li>a:hover,
    .view-more:active,
    a:hover {
        color: #b49334
    }

    .navbar-default .navbar-nav>li>a.cart label,
    .switcher__toggle {
        background-color: #facc48
    }

    .navbar-default .navbar-nav>li>a.cart.empty label {
        border-color: #facc48;
        color: #facc48
    }

    .navbar .dropdown .dropdown-toggle label.round {
        border-color: #facc48
    }

    .dishes .dishe.preload .price span,
    .nav-tabs.preload li a.active span,
    h3.title.preload {
        background: #facc48;
        color: #facc48
    }

    .addr_tag_item.active,
    .badge-cont,
    .thumbnail .cartel.featured {
        background: #facc48
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
        background: #facc48;
        color: #fff
    }

    .spinner.spinner-assertive {
        stroke: #facc48;
        fill: #facc48
    }

    .offset-categories.editor .nav-tabs>li>.category.selected {
        border-bottom-color: #facc48
    }

    .webtabs .tab.active {
        color: #facc48;
        border-bottom: 3px solid #facc48
    }

    input[readonly].form-control.home-address {
        border: 1px solid #facc48 !important;
        border-left: 0 !important
    }

    .check-box i {
        color: #facc48
    }

    .color-primary {
        color: #facc48
    }

    .color-secundary {
        color: #fff
    }

    .background-primary {
        background-color: #facc48
    }

    .background-secondary {
        background-color: #fff
    }

    .border-primary {
        border-color: #facc48
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

    .dish_title .dish_price{
        float:right;
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

    .mobile-tabs,
    .mobile-cart-button{
        display:none;
    }
    #cart-stiky{
        direction: ltr;
        padding-top: 20px;
        text-align: center;
        width: 100%;
        position: sticky;
        top: 20px;
    }

    .desktop-tabs{
        max-width:100%;
        overflow-x:scroll !important;
        margin-bottom:5px;
    }
    .desktop-tabs ul.nav.nav-tabs{
        flex-wrap: nowrap;
        overflow: visible;
        width: auto;
    }
    .nav-tabs > li.dropdown > a, .nav-tabs > li{
        display: inline-block;
        flex: 0 0 auto;
    }
    .nav-tabs > li.dropdown > a, .nav-tabs > li{
        display:block;
    }
    .desktop-tabs::-webkit-scrollbar {
        height: 5px;
        width: 5px;
        border: 1px solid #d5d5d5;
    }
    .desktop-tabs::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }
    .desktop-tabs::-webkit-scrollbar-thumb {
        background: #888; 
    }
    .desktop-tabs::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }
    
    @media (max-width: 767px) {
        .increment-buttons {
           
        }
        .mobile-tabs{
            display:flex;
        }
        .nav-tabs > li.dropdown > a, .nav-tabs > li {
        }
        .nav.nav-tabs.mobile-tabs {
            height:auto;
        }
        .dishes .dishe{
            height:auto;
        }
        .dishes .dishe p, .dishes .dishe textarea{
            height: auto;
        }
        .mobile-cart-button{
            position: fixed;
            bottom: 0;
            background-color: #facc48;
            border-color: #facc48;
            font-weight: 600;
            font-size: 16px;
            width: 100%;
            left: 0;
            padding: 20px;
            justify-content: space-around;
            cursor:pointer;
            height: 64px;
            display:block;
            transition: all ease-in-out 0.3s;
        }
        .mobile-cart-button .inner {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            margin-bottom:20px;
            transition: all 0.5s ease-in;
        }
        .mobile-cart-button .inner span{
            color: #000;
        }
        .mobile-cart-button .inner span.text:after{
            margin-left:5px;
            content: "\f105";
            display: inline-block;
            font: normal normal normal 14px/1 FontAwesome;
            font-size: inherit;
            text-rendering: auto;
            -webkit-font-smoothing: antialiased;
        }
        .mobile-cart-button.cartheight .inner span.text:after{
            margin-left:5px;
            content: "\f107";
            display: inline-block;
            font: normal normal normal 14px/1 FontAwesome;
            font-size: inherit;
            text-rendering: auto;
            -webkit-font-smoothing: antialiased;
        }
        
        .mobile-cart-button svg{
            filter: brightness(0);
            display: inline-block;
            vertical-align: sub;
        }
        #add-product.modal .modal-dialog {
            transform: none;
            width: 100%;
            max-width: 100%;
            height: 100vh;
            margin:0;
            align-items: flex-start;
        }
        #add-product.modal .modal-dialog .modal-content{
            overflow: hidden;
            padding-bottom:60px;
        }
        #add-product.modal .count-footer {
            justify-content: space-between;
            align-items: center;
            position: fixed;
            bottom: 0;
            left: 10px;
            padding: 10px 0;
            background: #343a40;
            right: 10px;
        }
        #add-product.modal .count-footer h3{
            display:none;
        }
        .cartheight{
            height: 70vh;
        }
        .cartheight>ul {
            margin:0;
            padding:0;
            max-height: 250px;
            overflow-y: scroll;
        }
        .cartheight>ul>li{
            display:flex;
            font-size:14px;
            border-top: 1px dashed #414141;
            padding: 10px 0;
            width:100%;
            justify-content: space-between;
        }
        .cartheight>ul>li>span{
            padding:5px;
            color: #000;
        }
        .cartheight>ul>li>span.qty{
            flex: 0 0 50px;
            min-width: 50px;
            position: relative;
            padding-left: 20px;
        }
        .cartheight>ul>li>span.qty .qtyincrement{
            display: inline-block;
            vertical-align: middle;
            position: absolute;
            left: 0;
            top: -7px;
        }
        .cartheight>ul>li>span.qty .qtyincrement i{
            display: block;
            margin: 5px 0;
            font-size:15px
        }
        .cartheight>ul>li>span.meal{
            flex: 0 0 calc(100% - 115px);
        }
        .cartheight>ul>li>span.meal ul{
            margin: 0;
            padding: 0;
        }
        .cartheight>ul>li>span.meal ul li{
            margin-bottom:2px;
            font-size:12px;
            display:block;
        }
        .cartheight>ul>li>span.prices{
            flex:0 0 100px;
            width:100px;
        }
        .cartheight>ul>li>span.meal .mealactions{
            display:block;
            margin-top:2px;
        }
        .cartheight>ul>li>span.meal .mealactions i{
            background: #f1f1f1;
            padding: 2px;
            text-align: center;
            border-radius: 100%;
            width: 22px;
            height: 22px;
            line-height: 19px;
            margin: 0 5px 0 0;
            color: #454545;
        }
        .cartheight>ul>li>span.meal .mealactions i:before{
            margin-left: 1px;
        }
        .cartheight .confirm-btn{
            text-align:center;
        }
        .cartheight .confirm-btn .anima-btn{
            color: #000;
            margin-top: 20px;
        }
        .cartheight .confirm-btn .anima-btn:focus{
            outline:0;
            box-shadow:none;
        }
        .cartheight .confirm-btn .move-eff span{
            top: 3px;
            left: 0;
        }

    }
</style>

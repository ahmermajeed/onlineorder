<template>
    <div>
        <header-menu></header-menu>
        <section class="inner-section main-popup-section" id="product-scroll">
            <div class="container" >
                <div class="row">
                    <div class=" col-lg-3 col-md-4 col-sm-12 listing-page-sidebar lp-sidebar-left">
                        <div class="sidebar-area">
                            <div class="filter-content">
                                <div class="lp-sidebar-title cate-heading">
                                    <h3>Categories</h3>
                                </div>

                                <div class="list-group list-group-flush cate-list">
                                    <a href="#"   @click.prevent="getProductAgainstCategories(false)" class="list-group-item">All<span class="float-right badge badge-light round"></span> </a>

                                    <a href="#" class="list-group-item"  v-for="(item, index) in categories"  @click.prevent="getProductAgainstCategories(item.id)" > {{item.name}}  <span class="float-right badge badge-light round">{{item.products.length}}</span> </a>
                                    <a href="#"   @click.prevent="getDeals(false)" class="list-group-item">Deals<span class="float-right badge badge-light round">{{deals.length}}</span> </a>
                            </div>  <!-- list-group .// -->
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-8 col-sm-12">
                        <div class="product-list order-product">
                            <!--                            for products-->
                            <div class="product"  v-for="(item, index) in products" v-if="item.products.length">
                                 <div class="row">
                                        <div class="col-md-12">

                                            <h2 class="mb-4" style="color: #01a9fb; margin-bottom: 25px;" >{{item.name}}</h2>
                                        </div>
                                        <div class="col-md-12 mb-4 pb-1" v-for="(product, product_index) in item.products" style="border-bottom: 1px dashed #ccc;">
                                            <div class="p-d prouct-item">
                                                <h3>{{product.name}}</h3>
                                               <p>{{product.description}}.</p>

                                            </div>
                                            <div class="p-cart product-dec">
                                                <p style="font-size: 12px;" v-if="product.sizes.length"  v-for="(size, size_index) in product.sizes" > {{size.size}} : £{{size.price}}</p>
                                                <p  v-if="!product.sizes.length" ><span>£</span>{{product.price}}</p>
                                                <a href="#" class="custom-btn2  btn btn-outline-success"  @click.prevent="viewProduct(product.id)">
                                                    Add to cart <i class="fas fa-long-arrow-alt-right"></i></i>
                                                </a>
                                            </div>
                                        </div>
                                 </div>
                            </div>

                            <!--                            for Deals-->
                            <div class="product deals-pro"  v-for="(item, index) in deals" >
                                <div class="row">
                                    <div class="col-md-12">

                                        <h2 class="mb-4" style="color: #01a9fb; margin-bottom: 25px;" >{{item.name}}</h2>
                                    </div>
                                    <div class="col-md-12 mb-4 pb-1"  style="border-bottom: 1px dashed #ccc;">
                                        <div class="p-d">
                                            <h3>{{item.description}}</h3>
                                            <p>{{item.description}}.</p>

                                        </div>
                                        <div class="p-cart">
                                            <p><span>£</span>{{item.price}}</p>
                                              <a href="#" class="custom-btn2 btn btn-outline-success"  @click.prevent="viewDeal(item.id)"> Add to cart <i class="fas fa-long-arrow-alt-right"></i></i>
                                               </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class=" col-lg-4 col-md-12 col-sm-12 cart  check-card add-card listing-page-sidebar lp-sidebar-right">
                        <div class="cart-box order" id="cart-stiky">
                            <div class="lp-sidebar-title cate-heading">
                                <h3 class="text-left">Your Cart</h3>
                                <img src="../../../images/cart.png">
                            </div>

                            <div class="food-allergy" @click="foodAllergyPopup">
                                <p>
                                <img src="/images/information.png" alt="">
                                </i>Click here if you or someone you are ordering for has a food allergy</p>
                            </div>

                            <form class="form-cart">
                                 <div class="switch-field">
                                     <input type="radio" v-model="orderType" @change="showPostalCode" id="radio-one" name="switch-one"
                                            value="Delivery"/>
                                     <label for="radio-one">
                                         <img src="/images/delivery.png" alt="">
                                         </i>Delivery
                                         <span>30 - 45 mins</span></label>
                                     <input type="radio" v-model="orderType" @change="showPostalCode" id="radio-two" name="switch-one"
                                            value="Pickup"/>
                                     <label for="radio-two">
                                         <img src="/images/shopping-basket.png" alt="">
                                         Collection
                                         <span>20 mins</span></label>
                                 </div>

                                <div class="form-group" style="position: relative; top: 12px;" v-if="showPostal">
                                    <label for=""><span>Enter your Postcode:</span></label>
                                    <input type="text"  class="form-control" v-model="postalCode" placeholder="Enter your Postcode">
                                    <p style="color:red;font-size: 11px;margin-top: 5px;">{{errorMessage}} </p>
                                </div>

                            </form>


                            <div class="lp-sidebar-body">
                                <div class="img-box text-center">
                                    <h5 v-if="getAllCartArray.length == 1" class="mt-2">No item in your cart</h5>
                                </div>
                                <div class="table-holder">
                                    <table class="tbl_cart_list">
                                        <tr class="section-border" v-for="(cart, product_index) in getAllCartArray"  v-if="product_index  > 0">
                                            <td class="order-name">
                                                <div class="cart-order">{{cart.product_name}}</div>
                                                <div  class="strong-open"  v-if="cart.extras" v-for="(extra, extra_index) in cart.extras" >
                                                    <strong>{{extra.group_name}}:</strong> {{extra.choice}}
                                                </div>
                                            </td>
<!--
                                            <td  v-if="!cart.extras" class="p-0">£ {{priceFormat(cart.price * cart.quantity) }}</td> -->

                                            <!-- <td >£{{priceFormat(cart.single_product_total_amount)}} </td> -->

                                         <!--    <td class="order-quty">



                                            </td> -->
                                            <td>
                                                <span v-if="!cart.extras" class="p-0">
                                                    £ {{priceFormat(cart.price * cart.quantity) }}
                                                </span>
                                                <span class="order-priecs"  v-if="cart.extras">
                                                    £{{priceFormat(cart.single_product_total_amount)}}
                                                </span>
                                                <span class="mealactions">
                                                       <a href="#"  @click.prevent="updateProduct(cart.product_id,cart,product_index)"> <i v-b-tooltip.hover title="Edit Meal"  class="icon-edit-1"></i></a>
                                                       <a href="#" class="close-icon" @click.prevent="removeFromCart(product_index)"> <i v-b-tooltip.hover title="Remove Meal" class="icon-delete" ></i></a>
                                                   </span>
                                                   <span class="order-quty">
                                                       <div class="priec-order">
                                                            <a class="icon-up"  href="#" @click.prevent="quantityAddInCart(product_index)"> <i class="icon-plus"  ></i></a>
                                                            <span class="text-center">{{ cart.quantity}}  <!-- <i>X</i> --></span>
                                                            <a  class="icon-down"  href="#"  @click.prevent="quantityMinusInCart(product_index)"> <i class="icon-subtract"></i></a>
                                                        </div>
                                                   </span>

                                            </td>




                                        </tr>
                                    </table>
                                </div>
                                <div class="cart-btn mt-3 mb-3 text-center">
                                     <button class="anima-btn custom-btn move-eff btn btn-rounded-danger" @click="placeOrder()"><span>Checkout</span> <!-- <i class="fas fa-long-arrow-alt-right"></i> --></button>
                                </div>
                            </div>

                        </div>
                        <div class="mobile-cart-button" v-bind:class="{ cartheight: cart_height }" v-if="getAllCartArray.length > 1">
                <div class="inner">
                    <span class="products-count"><svg xmlns="http://www.w3.org/2000/svg" class="svg-stroke-container" width="24" height="24">
                        <path fill="#707070" d="M12 2.75a4.75 4.75 0 014.744 4.5h3.103a1 1 0 01.99 1.141l-1.714 12a1 1 0 01-.99.859H5.867a1 1 0 01-.99-.859l-1.714-12a1 1 0 01.99-1.141h3.103A4.75 4.75 0 0112 2.75zm5.559 14.75H6.44a.4.4 0 00-.396.457l.208 1.45a.4.4 0 00.396.343H17.35a.4.4 0 00.396-.343l.208-1.45a.4.4 0 00-.396-.457zm1.25-8.75H5.19a.4.4 0 00-.396.457l.922 6.45a.4.4 0 00.396.343h11.775a.4.4 0 00.396-.343l.922-6.45a.4.4 0 00-.396-.457zM12 4.25a3.251 3.251 0 00-3.193 2.638.305.305 0 00.3.362h5.796a.297.297 0 00.292-.35A3.251 3.251 0 0012 4.25z"></path>
                    </svg>{{getAllCartArray.length - 1}}</span>
                    <span class="products-value">£{{priceFormat(total_amount)}}</span>
                    <span class="text" @click="opencartlist()">Checkout</span>


                </div>
                <ul v-for="(cart, product_index) in getAllCartArray"  v-if="product_index  > 0">
                    <li>
                        <span class="qty">{{ cart.quantity}}
                            <span class="qtyincrement">
                                <a href="#"  @click.prevent="quantityAddInCart(product_index)"> <i class="fa fa-plus-square-o"></i></a>
                                <a href="#" @click.prevent="quantityMinusInCart(product_index)"> <i class="fa fa-minus-square-o" @click="quantityMinusInCart(product_index)"></i></a>
                            </span>
                        </span>
                        <span class="meal">
                            {{cart.product_name}}
                            <ul v-if="cart.extras" v-for="(extra, extra_index) in cart.extras">
                                <li><b>{{extra.group_name}}:</b> {{extra.choice}}</li>
                            </ul>
                        </span>
                           <span class="mealactions">
                                <i v-b-tooltip.hover title="Edit Meal"  class="fas fa-pen"></i>
                                <a href="#" @click.prevent="removeFromCart(product_index)"> <i v-b-tooltip.hover title="Remove Meal" class="icon-delete"></i></a>
                            </span>
                        <span class="price">£{{priceFormat(cart.single_product_total_amount)}}</span>
                    </li>
                </ul>
                <div class="confirm-btn">
                    <button class="anima-btn move-eff" @click="placeOrder()"><span>Confirm Order</span></button>
                </div>
            </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="loading" v-if="loading">Loading&#8230;</div>
        <div class="container-fluid"
        :class="{'cart-menu-fixed': scrolled}"  v-on="handleScroll()">
            <div class="row full">

                    <div class="offset-categories">
                        <div id="categories-tabs">
                            <div class="desktop-tabs">
                                <ul class="nav nav-tabs">
                                    <li><a href="#"  @click.prevent="getProductAgainstCategories(false)" >All</a></li>
                                    <li  v-for="(item, index) in categories"><a href="#" @click.prevent="getProductAgainstCategories(item.id)">{{item.name}}</a></li>
                                    <li> <a href="#"   @click.prevent="getDeals(false)">DEALS </a></li>

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
            </div>
            <div class="mobile-cart-button" v-bind:class="{ cartheight: cart_height }" v-if="getAllCartArray.length > 1">
                <div class="inner">
                    <span class="products-count"><svg xmlns="http://www.w3.org/2000/svg" class="svg-stroke-container" width="24" height="24">
                        <path fill="#707070" d="M12 2.75a4.75 4.75 0 014.744 4.5h3.103a1 1 0 01.99 1.141l-1.714 12a1 1 0 01-.99.859H5.867a1 1 0 01-.99-.859l-1.714-12a1 1 0 01.99-1.141h3.103A4.75 4.75 0 0112 2.75zm5.559 14.75H6.44a.4.4 0 00-.396.457l.208 1.45a.4.4 0 00.396.343H17.35a.4.4 0 00.396-.343l.208-1.45a.4.4 0 00-.396-.457zm1.25-8.75H5.19a.4.4 0 00-.396.457l.922 6.45a.4.4 0 00.396.343h11.775a.4.4 0 00.396-.343l.922-6.45a.4.4 0 00-.396-.457zM12 4.25a3.251 3.251 0 00-3.193 2.638.305.305 0 00.3.362h5.796a.297.297 0 00.292-.35A3.251 3.251 0 0012 4.25z"></path>
                    </svg>{{getAllCartArray.length - 1}}
                     <span class="products-value">£{{priceFormat(total_amount)}}</span>
                </span>

                    <span class="text chek-out-btn btn btn-rounded-danger" @click="opencartlist()">Checkout</span>

                   <!--   <button class=" chek-out-btn anima-btn custom-btn move-eff btn btn-rounded-danger " @click="opencartlist()"><span>Checkout</span><i class="fas fa-long-arrow-alt-right"></i></button>  -->
                </div>
<!--                 <div class="mb-cart-box">
                <ul class="border-all" v-for="(cart, product_index) in getAllCartArray"  v-if="product_index  > 0">
                    <li>

                        <span class="meal">
                             <span class="qty">
                               <i class="fa fa-angle-up" @click="quantityAddInCart(product_index)"></i>

                               <i class="fa fa-angle-down" @click="quantityMinusInCart(product_index)"></i>
                        </span>
                         <h3> {{ cart.quantity}} {{cart.product_name}}</h3>


                            <ul class="" v-if="cart.extras" v-for="(extra, extra_index) in cart.extras">
                                <li><h3 class="font-weight:800px;">{{extra.group_name}}:
                                {{extra.choice}}</h3> </li>
                                <span class="mealactions">

                                <a href="#"  @click="updateProduct(cart.product_id,cart,product_index)"><i v-b-tooltip.hover title="Edit Meal" class="fas fa-pen">

</i></a>
                            <span class="price">£{{priceFormat(cart.single_product_total_amount)}}</span>
                              <a href="#"  @click.prevent="removeFromCart(product_index)"> <i                                 v-b-tooltip.hover title="Remove Meal" class="icon-delete"></i></a>


                            </span>

                            </ul>

                        </span>

                    </li>
                </ul>
                </div> -->

                <div class="mb-cart-box">
                    <ul class="cart-list"  v-for="(cart, product_index) in getAllCartArray" v-if="product_index  > 0">
                        <li>
                        <span class="qty mob">
                            <i style="font-size: 17px;" @click="quantityAddInCart(product_index)">+</i>
                               <span>{{ cart.quantity}}</span>
                            <i style="font-size: 17px;" @click="quantityMinusInCart(product_index)">-</i>

                        </span>
                            <span class="meal">
                            {{cart.product_name}}
                            <ul v-if="cart.extras" v-for="(extra, extra_index) in cart.extras">
                                <li><b>{{extra.group_name}}:</b> {{extra.choice}}</li>
                            </ul>
                        </span>

                            <span class="mealactions">

                                <a href="#"  @click="updateProduct(cart.product_id,cart,product_index)"><i v-b-tooltip.hover title="Edit Meal" class="fas fa-pen"> </i></a>
                               <a href="#" @click.prevent="removeFromCart(product_index)"> <i v-b-tooltip.hover title="Remove Meal" class="fa fa-times"></i></a>
                            </span>
                            <span class="price">£{{priceFormat(cart.single_product_total_amount)}}</span>
                        </li>
                    </ul>
                </div>


                <div class="confirm-btn">
                    <button class="anima-btn btn btn-rounded-danger btn move-eff" @click="placeOrder()"><span>Confirm Order</span></button>
                </div>
            </div>
        </div>


        <food-allergy @HideModalValue="hideModal" :showModalProp="foodAllergyModal"></food-allergy>

        <add-product @HideModalValue="hideModal" :showModalProp="product" :list="list" :has_sizes="has_sizes"></add-product>


        <edit-product @HideModalValue="hideModal" :showModalProp="editProduct" :list="list" :editList="editList" :has_sizes="has_sizes" :editIndex="editIndex"> </edit-product>


        <add-deal @HideModalValue="hideModal" :showModalProp="dealsModal" :deals_data="deals_data"></add-deal>



        <edit-deal @HideModalValue="hideModal" :showModalProp="editDeal" :deals_data="deals_data" :editDealsData="editDealsData" :editIndex="editIndex"> </edit-deal>



        <footer-menu></footer-menu>
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
                editProduct:false,
                list:{},
                editList:{},
                has_sizes:false,
                cat_count: false,
                total_amount:0,
                cart_height:false,
                limitPosition: 380,
                scrolled: false,
                editIndex:'',
                deals:[],
                deals_data:{},
                dealsModal:false,
                editDeal:false,
                editDealsData:{},
                foodAllergyModal: false,
                showPostal : false,
                errorMessage:'',
                orderType:'',
                error_message:''
            };
        },
        mounted() {
            this.getCategories();
            this.getProductAgainstCategories(false);
            this.getDeals(false)
            if(this.$store.getters.getAllCartArray.length > 0) {
                let total = 0;
                for( var key in this.$store.getters.getAllCartArray ) {
                    var value = this.$store.getters.getAllCartArray[key];
                }
            }

            this.orderType = this.$store.getters.getOrderType;

            this.postalCode = this.$store.getters.getPostalCode;

            if(this.orderType == "Delivery") {
                this.showPostal = true
            }

            this.scrollToMain();
            window.addEventListener("scroll", this.handleScroll);


        },
        methods: {

            showPostalCode() {
                let self = this;

                if(self.orderType == "Delivery")
                    self.showPostal = true
                else
                    self.showPostal = false
            },

            scrollToMain() {
                let element = document.getElementById("product-scroll");
                element.scrollIntoView({behavior: "instant", block: "start"});
            },

            updateProduct(id,cart,index){



                let  _this = this;
                var url = '';
                if(cart.product_type === "deal")
                {
                    this.editDealsData = cart;
                    _this.loading  = true;
                     url = '/api/deals/'+id;

                }else {

                    this.editList = cart;
                    _this.loading  = true;
                    url = '/api/products/'+id;
                }
                axios.get(url)
                    .then((response) => {
                        if (cart.product_type === 'deal') {

                            _this.deals_data = response.data.data;
                            _this.loading = false;
                            _this.editIndex = index;
                            _this.editDeal = true;

                        } else {

                            _this.list = response.data.data;
                            _this.has_sizes = _this.list.sizes.length > 0;
                            _this.loading = false;
                            _this.editIndex = index;
                            _this.editProduct = true;

                        }
                    });
            },
            priceFormat (num) {
                return  parseFloat(num).toFixed(2);
            },
            addProduct() {
                this.product = true;
            },
            hideModal() {
                this.product = false;
                this.editProduct= false;
                this.dealsModal= false;
                this.list = {};
                this.deals_data = {};
                this.editDeal = false;
                this.editDealsData ={};
                this.foodAllergyModal = false;
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

            getDeals(){
                let  _this = this;
                _this.loading  = true;
                axios.get('/api/deals')
                    .then((response) => {
                        // console.log( response.data.data);
                        _this.products = [];
                        _this.deals = response.data.data;

                        _this.loading  = false;
                    });
            },

            getProductAgainstCategories(id){
                let  _this = this;
                _this.loading  = true;
                var url = '/api/categories';
                if(id){
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

            viewDeal(id){
                let  _this = this;
                _this.loading  = true;
                let url = '/api/deals/'+id;
                axios.get(url)
                    .then((response) => {
                        _this.deals_data =  response.data.data;
                        _this.loading  = false;
                        _this.dealsModal = true;
                    });
            },


              placeOrder(){
                 let vm = this;

                 if (this.orderType == '') {
                     vm.errorMessage = 'Please Select Order Type';
                     setTimeout(function(){ vm.errorMessage = ""; }, 2000);
                 } else if(this.orderType == 'Delivery' && this.postalCode == "") {
                     vm.errorMessage = 'Please Enter Your Postcode';
                     setTimeout(function(){ vm.errorMessage = ""; }, 2000);

                 } else {

                     if(this.orderType === 'Pickup'){
                         vm.$router.push({name: 'check-out'});
                     }else {
                         axios({
                             method: 'post',
                             url: '/api/check-postal',
                             data: {
                                 order_type: this.orderType,
                                 postal_code:this.postalCode
                             },
                         }).then(function (response) {

                             if(response.data.error === undefined){
                                 vm.errorMessage = response.data.data.amount;
                                 vm.$store.commit('setDeliveryCharges', response.data.data.fix_delivery_charges);
                                 vm.$store.commit('setOrderType', vm.orderType);
                                 vm.$store.commit('setPostalCode', vm.postalCode);
                                 vm.$router.push({name: 'check-out'})

                             }else {
                                 vm.errorMessage = 'We are not providing food in your area';
                             }
                         })
                             .catch(function (response) {
                                 //handle error
                                 console.log(response);
                             });

                     }

                 }
            },


            removeFromCart(index){
                console.log('tets');
                let cart_data = this.$store.getters.getAllCartArray;
                cart_data.splice(index,1);
                this.updateCart();

            },
            quantityAddInCart(index){

                    this.$store.getters.getAllCartArray[index].single_product_total_amount  =  parseFloat(this.$store.getters.getAllCartArray[index].single_product_total_amount) + parseFloat(this.$store.getters.getAllCartArray[index].price);
                    this.$store.getters.getAllCartArray[index].quantity ++;
                    this.updateCart();
                //this.getAllCartArray();
            },
            quantityMinusInCart(index){
                let quantity = this.$store.getters.getAllCartArray[index].quantity;
                 if(quantity >= 2){
                    this.$store.getters.getAllCartArray[index].quantity --;
                    this.$store.getters.getAllCartArray[index].single_product_total_amount =  parseFloat(this.$store.getters.getAllCartArray[index].single_product_total_amount) - parseFloat(this.$store.getters.getAllCartArray[index].price);
                     this.updateCart();
                 } else {
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

                            console.log(item.single_product_total_amount)

                            sum += item.single_product_total_amount;
                        }
                    });
                    this.total_amount = sum;
                }
                return this.$store.getters.getAllCartArray;
            },
            handleScroll() {

                if (this.limitPosition < window.scrollY) {
                    this.scrolled = true;
                    // move up!
                }

                if (this.limitPosition > window.scrollY) {
                    this.scrolled = false;
                    // move down
                }
            },

            foodAllergyPopup() {
                this.foodAllergyModal = true;
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
        },
        destroyed() {
            window.removeEventListener("scroll", this.handleScroll);
        },



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
        border-bottom: 3px solid #01a8fb;
        text-decoration:none;
    }
    .nav-tabs > li > a.active {
        border-bottom: 3px solid #01a8fb;
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


    #cart-stiky > img {
        max-width:100%;
    }
    .arabic_rtl .cart .order {
        direction: rtl;
    }
    .cart .order button{
        font-size: 16px !important;
    }

    button.btn-gray {
        background: #ccc;
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
        text-align: left;
        border-top: 1px solid #eee;
    }
    .cart .order table .mealactions{
        display:block;
        margin-top:2px;
    }
    .cart .order table .mealactions i{
        background: #01a8fb;
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
        text-align: right;
        margin-right: 2px;
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
        background-color: #000;
        border-color: #000;
        color: #fff
    }


    .input-group-addon,
    .input-group-addon:first-child,
    .pre-checkout .address .info .action button {
        border-color: #01a8fb;
        color: #01a8fb
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
        border-color: #01a8fb;
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

    .loading:not(:required) {
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
        text-align: center;
        width: 100%;
        position: sticky;
        top: 128px;
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
            background-color: #01a8fb ;
            border-color: #01a8fb ;
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
            z-index: 2;
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
            font: normal normal normal 14px/1 Font Awesome 5 Free;
            font-size: inherit;
            text-rendering: auto;
            -webkit-font-smoothing: antialiased;
        }
        .mobile-cart-button.cartheight .inner span.text:after{
            margin-left:5px;
            content: "\f107";
            display: inline-block;
            font: normal normal normal 14px/1 Font Awesome 5 Free;
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
            padding-right: 25px;
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
            color: #000 !important;
            margin-top: 20px;
            border: 1px solid #000;
            border-radius: 0;
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
    .cart-menu-fixed .offset-categories{
        position: fixed;
        top: 0;
        z-index: 1000;
        width: calc(100% - 25%);
        margin-top: 0;
        padding-top: 0 !important;
        border-right: 1px solid rgba(0,0,0,0);
    }
    .cart-menu-fixed .offset-categories{
        width: 100%;
    }

    .business > div.dishes-wrapper {
        padding-top: 2px !important;
    }
    .business > div.offset-categories {
        padding-bottom: 0 !important;
    }

    .cart-menu-fixed .business > div.dishes-wrapper {
        padding-top: 190px !important;
    }

    @media (max-width: 767px) {
        .cart-menu-fixed .offset-categories {
            width: 100%;
            z-index: 2;
        }

        .cart-menu-fixed .business > div.dishes-wrapper {
            padding-top: 210px !important;
        }
        .mealactions a {
            margin-right: 24px;
            margin-right: 7px;
            position: relative;
            top: -6px;;
        }
        span.price {
            position: relative;
            top: -4px;
        }
        .mb-cart-box ul li span.qty {
            flex: 0 0 50px;
            min-width: 50px;
            position: relative;
            padding-left: 25px;
        }
        .mb-cart-box svg {
            -webkit-filter: brightness(0);
            filter: brightness(0);
            display: inline-block;
            vertical-align: sub;
        }

        .mb-cart-box ul li span.meal {
            margin-right: 20px;
        }
        .mb-cart-box ul li span.meal .mealactions {
            display: inline-block;
            margin-top: 2px;
            margin-left: 10px;
        }
        .mb-cart-box ul li price {
            padding: 5px;
            color: #000;
            margin-left: 10px;

        }
        .qty.mob span {
            padding: 15px;
        }
        .offset-categories {
            position: fixed;
            top: -100%;
            z-index: 1000;
            width: calc(100% - 0%);
            margin-top: 0;
            padding-top: 0 !important;
            border-right: 1px solid rgba(0,0,0,0);
        }
        .cartheight .mb-cart-box ul.cart-list {
            list-style: none;
            border-bottom: 1px dashed #ccc;
            margin-bottom: 10px;
        }
        .mb-cart-box ul li {
            text-align: center;
        }
    }

</style>

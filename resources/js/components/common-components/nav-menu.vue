<template>
    <div>
        <header class="masthead">
            <!-- <nav class="navbar navbar-expand-lg navbar-light custom-header" id="mainNav"> -->

            <div class="header-top">
                <div class="header-top-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <p>
                                    Due to covid-19 we had to minimise on staff
                                    and have been really busy. Please be patient
                                    for your delivery as we will try and get it
                                    to you as soon as possible.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header-bottom-section">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-6 col-md-3">
                                <router-link :to="{ path: '/' }">
                                    <a
                                        class="navbar-brand js-scroll-trigger main-logo"
                                        href="javascript:;"
                                    >
                                        <img src="/images/logo.png" />
                                    </a>
                                </router-link>
                            </div>
                            <div class="col-6 col-md-9 right">
                                <nav
                                    class="navbar navbar-expand-lg navbar-light justify-content-end main-menu p-0 mt-3"
                                >
                                    <button
                                        class="navbar-toggler"
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#navbarResponsiv"
                                        aria-controls="navbarResponsiv"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation"
                                    >
                                        <span
                                            class="navbar-toggler-icon"
                                        ></span>
                                    </button>
                                    <div
                                        class="collapse navbar-collapse justify-content-end"
                                        id="navbarResponsiv"
                                    >
                                        <ul class="nav ">
                                            <li class="nav-item active">
                                                <router-link :to="{ path: '/' }"
                                                    ><a
                                                        class="nav-link js-scroll-trigger"
                                                        href="#about"
                                                        >Home</a
                                                    ></router-link
                                                >
                                            </li>
                                            <li class="nav-item ">
                                                <router-link
                                                    :to="{ path: '/gallery' }"
                                                >
                                                    <a
                                                        class="nav-link js-scroll-trigger"
                                                        >Gallery</a
                                                    >
                                                </router-link>
                                            </li>
                                            <li class="nav-item ">
                                                <router-link
                                                    :to="{ path: '/feedback' }"
                                                    ><a
                                                        class="nav-link js-scroll-trigger"
                                                        >Feedback</a
                                                    ></router-link
                                                >
                                            </li>
                                            <li class="nav-item">
                                                <div class="order-now">
                                                    <a
                                                        href="#"
                                                        class="btn btn-rounded-default btn-rounded-danger"
                                                        @click.prevent="
                                                            openPostalCode
                                                        "
                                                    >
                                                        Order Online</a
                                                    >
                                                </div>
                                            </li>
                                     <li>
                                         <div class="cart-icon order-page-menu" v-click-outside="onClickOutside">
                                             <a href="#" v-on:click="openCart = !openCart">
                                                 <i class="fa fa-shopping-cart"></i>
                                                 <span class="cart-count">{{getAllCartArray.length-1}}</span>
                                             </a>

                                             <div class="show-cart" v-if="openCart" id="hide">
                                                 <div class="card-body">
                                                     <div class="row">
                                                             <div class="col-md-12 item-row scroll style-3">
                                                                 <div class="row selected-item-row" v-for="(cart, product_index) in getAllCartArray" v-if="product_index  > 0">
                                                                     <div class="col-md-8">
                                                                         <div class="item-list">
                                                                             <h5>{{cart.product_name}}</h5>
                                                                             <p v-if="cart.extras" v-for="(extra, extra_index) in cart.extras"><b>{{extra.group_name}} : </b>{{extra.choice}}</p>
                                                                             <span class="item-quantity"><strong>Quantity: </strong>{{ cart.quantity}}</span>
                                                                         </div>
                                                                     </div>
                                                                     <div class="col-md-4">
                                                                         <div class="edit-options">
                                                                             <span class="remove-item mr-2"  v-b-tooltip.hover title="remove" @click.prevent="removeFromCart(product_index)"><i class="fa fa-times"></i></span>
                                                                             <span class="edit-item" v-b-tooltip.hover title="edit" @click="updateProduct(cart.product_id,cart,product_index)"><i class="fas fa-pen"></i></span>
                                                                         </div>
                                                                     </div>
                                                                 </div>
                                                                 <p v-if="getAllCartArray.length == 1" class="empty-cart">No item in cart</p>
                                                             </div>

                                                     </div>
                                                     <div class="view-total-menu" v-if="getAllCartArray.length !== 1">
                                                         <div class="col-md-12">
                                                             <div class="total"><strong>Total: </strong>£{{priceFormat(total_amount)}}</div>
                                                                 <router-link  class="view-cart-menu" :to="{ path: '/online-order/'+postal_code}"> View Menu </router-link>
                                                         </div>
                                                         
                                                     </div>
                                                 </div>
                                             </div>
                                         </div>
                                     </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- </nav> -->
            <div class="row">
                <div class="banner-header">
                    <img src="images/banner/banner-1.jpg" />

                    <!--                    <carousel :per-page="1" :autoplayTimeout="3000" :loop="true" :mouse-drag="true" :autoplay="true">
                      <slide>
                        <img src="images/banner/banner-1.jpg">
                      </slide>
                      <slide>
                       <img src="images/banner/banner-2.jpg">
                      </slide>
                    </carousel> -->
                </div>
            </div>
        </header>

        <download-menu
            @HideModalValue="hideModal"
            :showModalProp="showPopup"
            :isMenu="menu"
            :isAllergy="allergy"
        ></download-menu>
        <postal-code-popup
            @HideModalValue="hideModal"
            :showModalProp="showPostalCode"
        ></postal-code-popup>
        <edit-product @HideModalValue="hideModal" :showModalProp="editProduct" :list="list" :editList="editList" :has_sizes="has_sizes" :editIndex="editIndex"></edit-product>

        <edit-deal @HideModalValue="hideModal" :showModalProp="editDeal" :deals_data="deals_data"
            :editDealsData="editDealsData" :editIndex="editIndex"></edit-deal>
    </div>
</template>

<script>

import { Carousel, Slide } from 'vue-carousel'

import vClickOutside from 'v-click-outside'


export default {

    directives: {
       clickOutside: vClickOutside.directive
    },

    components: {
        Carousel,
        Slide,
    },

    data() {

        return {
            postal_code: '',
            error_message: '',
            showPopup: false,
            showPostalCode: false,
            menu: false,
            allergy: false,
            openCart: false,
            orderType: '',
            openCart: false,
            total_amount: 0,
            editProduct: false,
            list: {},
            editList: {},
            has_sizes: false,
            editIndex: '',
            editDeal: false,
            deals_data: {},
            editDealsData: {},
        }
    },

    computed: {

        getAllCartArray() {
            let self = this;
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
            }
            return this.$store.getters.getAllCartArray;
        },
    },

    methods: {

        onClickOutside (event) {
            this.openCart = false
        },
    
        hideModal() {
            this.showPopup = false
            this.showPostalCode = false
        },

        openMenu() {
            this.showPopup = true
            this.menu = true
            this.allergy = false
        },

        openAllergy() {
            this.showPopup = true
            this.allergy = true
            this.menu = false
        },
        openPostalCode() {
            this.showPopup = false
            this.allergy = false
            this.menu = false
            this.showPostalCode = true
        },
        checkPostCode() {
            let vm = this
            if (this.postal_code == '') {
                vm.error_message = 'Please Enter Your Postal Code'
            } else {
                axios({
                    method: 'post',
                    url: '/api/check-postal',
                    data: {
                        postal_code: this.postal_code,
                    },
                })
                    .then(function(response) {
                        if (response.data.error === undefined) {
                            vm.error_message = response.data.data.amount
                            vm.$store.commit(
                                'setDeliveryCharges',
                                response.data.data.amount
                            )
                            vm.$router.push({
                                path: 'online-order/' + vm.postal_code,
                            })
                        } else {
                            vm.error_message =
                                'We are not providing food in your Area'
                        }
                    })
                    .catch(function(response) {
                        //handle error
                        console.log(response)
                    })
            }
        },

        priceFormat(num) {
            return parseFloat(num).toFixed(2);
        },

        removeFromCart(index) {
            let cart_data = this.$store.getters.getAllCartArray;
            cart_data.splice(index, 1);
            this.updateCart();
        },

        updateCart() {
            let self = this;
            if (this.$store.getters.getAllCartArray.length > 1) {
                let sum = 0;
                let count = 0;
                this.$store.getters.getAllCartArray.forEach(function (item) {
                    count++;
                    if (count >= 1) {
                        sum += item.single_product_total_amount;
                    }
                });
                self.total_amount = sum;
            }
            return this.$store.getters.getAllCartArray;
        },

        updateProduct(id, cart, index) {
            let _this = this;
            var url = '';
            if (cart.product_type === "deal") {
                this.editDealsData = cart;
                _this.loading = true;
                url = '/api/deals/' + id;

            } else {

                this.editList = cart;
                _this.loading = true;
                url = '/api/products/' + id;
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

        getGeneralSetting() {
            axios({
                method: 'get',
                url: '/api/restaurant_info',
            })
                .then(function(response) {
                    if (response.data.error === undefined) {
                        console.log(response)
                    } else {
                        vm.error_message =
                            'We are not providing food in your Area'
                    }
                })
                .catch(function(response) {
                    //handle error
                    console.log(response)
                })
        },
    },
    mounted() {
        this.getGeneralSetting()
    },
}
</script>

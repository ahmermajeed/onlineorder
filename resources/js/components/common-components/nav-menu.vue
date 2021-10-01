<template>

    <div>
        <header class="masthead">
            <!-- <nav class="navbar navbar-expand-lg navbar-light custom-header" id="mainNav"> -->

            <div class="header-top">
                <div class="header-top-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-6">
                                <div class="add-info">
                                    <ul>
                                        <li class="mail-space"><i class="icon-mail-2"></i>
                                            <span>
                                                <a :href="`mailto:${info.email}`" >{{info.email}}</a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="header-icon float-right">
                                    <ul>
                                       <li v-if="info.general_setting.facebook"> <a  :href="info.general_setting.facebook" ><i class="icon-facebook"></i></a></li>
                                        <li v-if="info.general_setting.youtube"><a  :href="info.general_setting.youtube"><i class="icon-youtube"></i></a></li>
                                       <li v-if="info.general_setting.instagram"><a :href="info.general_setting.instagram"><i class="icon-instagram-symbol"></i></a></li>
                                       <li v-if="info.general_setting.twitter"><a  :href="info.general_setting.twitter"><i class="icon-twitter"></i></a></li>
                                       <li v-if="info.general_setting.pinterest"><a  :href="info.general_setting.pinterest"><i class="icon-pinterest-logo"></i></a></li>

                                   </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header-bottom-section">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-6 col-md-3">
                                <router-link :to="{ path: '/'}">
                                    <a class="navbar-brand js-scroll-trigger main-logo" href="javascript:">
                                        <img :src="info.general_setting.header_logo">
                                    </a>
                                </router-link>
                            </div>
                            <div class="col-6 col-md-9 right">
                                <nav class="navbar navbar-expand-lg navbar-light justify-content-end main-menu p-0 mt-2">
                                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                                            data-target="#navbarResponsiv" aria-controls="navbarResponsiv"
                                            aria-expanded="false" aria-label="Toggle navigation">
                                        <span class="navbar-toggler-icon"></span>
                                    </button>
                                    <div class="collapse navbar-collapse justify-content-end" id="navbarResponsiv">
                                        <ul class="nav ">

                                            <li class="nav-item active">
                                                <router-link :to="{ path: '/'}"><a class="nav-link js-scroll-trigger"
                                                                                   href="#about">Home</a></router-link>
                                            </li>
                                            <li class="nav-item ">
                                                <router-link :to="{ path: '/feedback'}"><a
                                                        class="nav-link js-scroll-trigger">Feedback</a></router-link>
                                            </li>

                                            <li class="nav-item ">
                                                <router-link :to="{ path: '/reservation-table'}"><a
                                                        class="nav-link js-scroll-trigger">Reservation</a></router-link>
                                            </li>

                                            <li class="nav-item">
                                                <div class="order-now">
                                                    <a href="#" class="btn btn-rounded-default btn-rounded-danger"
                                                       @click.prevent="openPostalCode"> Order Online</a>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="cart-icon order-page-menu" v-click-outside="onClickOutside">
                                                    <a href="#" v-on:click="openCart = !openCart">
                                                        <i class="fa fa-shopping-cart"></i>
                                                        <span class="cart-count">{{count}}</span>
                                                    </a>

                                                    <div class="show-cart" v-if="openCart" id="hide">
                                                        <div class="card-body">
                                                            <div class="row">
                                                                <div class="col-md-12 item-row scroll style-3">
                                                                    <div class="row selected-item-row"
                                                                         v-for="(cart, product_index) in cartItems">
                                                                        <div class="col-md-8">
                                                                            <div class="item-list">
                                                                                <h5>{{cart.product_name}}</h5>
                                                                                <p v-if="cart.extras"
                                                                                   v-for="(extra, extra_index) in cart.extras">
                                                                                    <b>{{extra.group_name}} : </b>{{extra.choice}}
                                                                                </p>
                                                                                <span class="item-quantity"><strong>Quantity: </strong>{{ cart.quantity}}</span>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-md-4">
                                                                            <div class="edit-options">
                                                                                <span class="remove-item mr-2"
                                                                                      v-b-tooltip.hover title="remove"
                                                                                      @click.prevent="removeFromCart(cart)"><i
                                                                                        class="fa fa-times"></i></span>
                                                                                <span class="edit-item"
                                                                                      v-b-tooltip.hover title="edit"
                                                                                      @click="updateProduct(cart.product_id,cart,product_index)"><i
                                                                                        class="fas fa-pen"></i></span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <p v-if="cartItems.length == 0" class="empty-cart">
                                                                        No item in cart</p>
                                                                </div>

                                                            </div>
                                                            <div class="view-total-menu">
                                                                <div class="col-md-12">
                                                                    <div class="total"><strong>Total: </strong>£{{priceFormat(totalPrice)}}
                                                                    </div>
                                                                    <router-link class="view-cart-menu"
                                                                                 :to="{ path: '/online-order/'+postal_code}">
                                                                        View Menu
                                                                    </router-link>
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
            <slider v-if="this.$route.name !='online-order' &&
                  this.$route.name !='reservation-table'"></slider>
            <!-- <div class="header-bottom section-fullwidth"

                 v-if="this.$route.name !='online-order' &&
                  this.$route.name !='reservation-table'">

                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-xl-5">

                        </div>

                    </div>
                </div>
            </div> -->

        </header>

        <download-menu @HideModalValue="hideModal" :showModalProp="showPopup" :isMenu="menu"
                       :isAllergy="allergy"></download-menu>
        <postal-code-popup @HideModalValue="hideModal" :showModalProp="showPostalCode"></postal-code-popup>
        <edit-product @HideModalValue="hideModal" :showModalProp="editProduct" :list="list" :editList="editList"
                      :has_sizes="has_sizes" :editIndex="editIndex"></edit-product>

        <edit-deal @HideModalValue="hideModal" :showModalProp="editDeal" :deals_data="deals_data"
                   :editDealsData="editDealsData" :editIndex="editIndex"></edit-deal>

    </div>

</template>

<script>
    import vClickOutside from 'v-click-outside'

    export default {
        directives: {
            clickOutside: vClickOutside.directive
        },
        data() {
            return {
                loading: false,
                postal_code: '',
                error_message: '',
                showPopup: false,
                showPostalCode: false,
                menu: false,
                allergy: false,
                loginModal: false,
                registerModal: false,
                openCart: false,
                editProduct: false,
                list: {},
                editList: {},
                has_sizes: false,
                editIndex: '',
                editDeal: false,
                deals_data: {},
                editDealsData: {},
                //info:{},
            }
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

            onClickOutside(event) {
                this.openCart = false
            },

            hideModal() {
                this.showPopup = false;
                this.showPostalCode = false;
                this.loginModal = false;
                this.registerModal = false;

                this.editProduct = false;
                this.list = {};
                this.deals_data = {};
                this.editDeal = false;
                this.editDealsData = {};
            },

            openMenu() {
                this.showPopup = true;
                this.menu = true;
                this.allergy = false;
            },

            openAllergy() {
                this.showPopup = true;
                this.allergy = true;
                this.menu = false;
            },

            openPostalCode() {
                this.showPopup = false;
                this.allergy = false;
                this.menu = false;
                this.showPostalCode = true;
            },

            loginPopup() {
                this.loginModal = true;
            },

            registerPopup() {
                this.registerModal = true;
            },

            logout() {
                this.$store.commit('setUserData', '');
                location.reload();
            },

            checkPostCode() {
                let vm = this;
                if (this.postal_code == '') {
                    vm.error_message = 'Please Enter Your Postcode';
                } else {
                    axios({
                        method: 'post',
                        url: '/api/check-postal',
                        data: {
                            postal_code: this.postal_code
                        },
                    }).then(function (response) {
                        if (response.data.error === undefined) {
                            vm.error_message = response.data.data.amount;
                            vm.$router.push({path: 'online-order/' + vm.postal_code});
                            vm.$store.commit('setDeliveryCharges', response.data.data.amount);
                        } else {
                            vm.error_message = 'We are not providing food in your Area';
                        }
                    })
                        .catch(function (response) {
                            //handle error
                            console.log(response);
                        });
                }

            },



            priceFormat(num) {
                return parseFloat(num).toFixed(2);
            },

            removeFromCart(index) {

                let product = index;
                product.removalQuantity = index.quantity;

                this.$store.commit('removeFromCart', product);
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

                            console.log(response.data.data);

                            _this.list = response.data.data;
                            _this.has_sizes = _this.list.sizes.length > 0;
                            _this.loading = false;
                            _this.editIndex = index;
                            _this.editProduct = true;

                        }
                    });
            },
        },
        mounted() {
            this.getGeneralSetting();
            console.log(this.info)
        },
        computed: {
            loggedIn() {
                return this.$store.getters.getUserData;
            },

            cartItems() {
                return this.$store.state.cartItems;
            },

            totalPrice() {
                let price = 0;
                this.$store.state.cartItems.map(el => {
                    price += el['quantity'] * el['price'];
                });
                return price;
            },

            info(){
                return this.$store.state.general_data;
            },

            count() {
                return this.$store.state.cartItemsCount;
            }

        }
    }
    $(document).scroll(function() {    
        var scroll = $(document).scrollTop();

        if (scroll >= 200) {
            $(".masthead").addClass("smooth-scroll");
            $(".filter-page-style2").addClass("fixed-scroll");
            $("html").addClass("remove-overflow");
        } else {
            $(".masthead").removeClass("smooth-scroll");
            $(".filter-page-style2").removeClass("fixed-scroll");
            $("html").removeClass("remove-overflow");
        }
    });
</script>

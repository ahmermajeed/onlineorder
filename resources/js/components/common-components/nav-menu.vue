<template>

    <div>
        <header class="masthead">

            <div class="header-top">
                <div class="header-top-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-7">
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
                            <div class="col-5">
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
                                <a href="#" class="cart-icon-mb" v-on:click="opencartlist">
                                    <i class="fa fa-shopping-cart"></i>
                                    <span class="cart-count">{{count}}</span>
                                </a>
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
                                                <router-link :to="{ path: '/gallery'}"><a
                                                        class="nav-link js-scroll-trigger">Gallery</a></router-link>
                                            </li>

<!--                                            <li class="nav-item ">-->
<!--                                                <router-link :to="{ path: '/reservation-table'}"><a-->
<!--                                                        class="nav-link js-scroll-trigger">Reservation</a></router-link>-->
<!--                                            </li>-->

                                            <li class="nav-item">
                                                <div class="order-now">
                                                    <a href="#" class="btn btn-rounded-default btn-rounded-danger"
                                                       @click.prevent="openPostalCode"> Order Online</a>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="cart-icon order-page-menu mobile-cart-icon" v-click-outside="onClickOutside">
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

                                                                        <a href="" @click="gotoMenu">
                                                                            View Menu
                                                                        </a>


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
                  this.$route.name !='reservation-table'  &&
                  this.$route.name !='check-out'">
            </slider>
            <div class="hero-for-mobile" v-if="this.$route.name !='online-order' &&
                  this.$route.name !='reservation-table'  &&
                  this.$route.name !='check-out'">
                <img src="https://i.ibb.co/VD4yK5S/hero-img.png">
            </div>
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

          <div class="container-fluid"
          >

            <div class="mobile-cart-button" v-bind:class="{ cartheight: cart_height }" v-if="cartItems.length > 0">
              <div class="inner">
                    <span class="products-count"><svg xmlns="http://www.w3.org/2000/svg" class="svg-stroke-container" width="24" height="24">
                        <path fill="#707070" d="M12 2.75a4.75 4.75 0 014.744 4.5h3.103a1 1 0 01.99 1.141l-1.714 12a1 1 0 01-.99.859H5.867a1 1 0 01-.99-.859l-1.714-12a1 1 0 01.99-1.141h3.103A4.75 4.75 0 0112 2.75zm5.559 14.75H6.44a.4.4 0 00-.396.457l.208 1.45a.4.4 0 00.396.343H17.35a.4.4 0 00.396-.343l.208-1.45a.4.4 0 00-.396-.457zm1.25-8.75H5.19a.4.4 0 00-.396.457l.922 6.45a.4.4 0 00.396.343h11.775a.4.4 0 00.396-.343l.922-6.45a.4.4 0 00-.396-.457zM12 4.25a3.251 3.251 0 00-3.193 2.638.305.305 0 00.3.362h5.796a.297.297 0 00.292-.35A3.251 3.251 0 0012 4.25z"></path>
                    </svg>{{count}}
                     <span class="products-value">£{{priceFormat(totalPrice)}}</span>
                </span>

                <span class="text chek-out-btn btn btn-rounded-danger" @click="opencartlist()">Checkout</span>

              </div>


              <div class="mb-cart-box">
                <ul class="cart-list"  v-for="(cart, product_index) in cartItems">
                  <li>
                            <span class="m-box">
                              <span class="meal">
                                <h5>{{cart.product_name}}</h5>
                                <ul v-if="cart.extras" v-for="(extra, extra_index) in cart.extras">
                                    <li><b>{{extra.group_name}}:</b> {{extra.choice}}</li>
                                </ul>
                              </span>
                              <span class="mealactions">
                                  <a href="#"  @click="updateProduct(cart.product_id,cart,product_index)"><i v-b-tooltip.hover title="Edit Meal" class="fas fa-pen"> </i></a>
                                 <a href="#" @click.prevent="removeFromCart(cart)"> <i v-b-tooltip.hover title="Remove Meal" class="fa fa-times"></i></a>
                              </span>
                            </span>
                    <span class="qty mob">
                                <i style="font-size: 17px;" @click="quantityMinusInCart(cart)">-</i>
                                <span>{{ cart.quantity}}</span>
                                <i style="font-size: 17px;" @click="quantityAddInCart(product_index, cart)">+</i>
                            </span>
                    <span class="price">£{{priceFormat(cart.single_product_total_amount)}}</span>
                  </li>
                </ul>
              </div>

              <div class="confirm-btn">
                <button class="anima-btn btn btn-rounded-danger btn move-eff" @click="moveToCheckOutMobile()"><span>Confirm Order</span></button>
              </div>
            </div>
          </div>

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
                cart_height : false
                //info:{},
            }
        },
        methods: {
            getGeneralSetting() {
                var vm = this;
                axios.get('api/restaurant_info')
                    .then((response) => {
                        vm.$store.commit('setGeneralData', response.data.data);

                    });
            },

            onClickOutside(event) {
                this.openCart = false
            },

            opencartlist() {
              this.cart_height = !this.cart_height;
              if (this.cart_height == true) {
                document.querySelector("body").style.overflow = 'hidden';
              } else {
                document.querySelector("body").style.overflow = 'auto';
              }
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

            gotoMenu(){

                this.$router.push({path: 'online-order' + this.postal_code});
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

            quantityAddInCart(index, cart) {

              this.$store.state.cartItems[index]['quantity'] += 1;
              this.$store.state.cartItemsCount += 1;

            },

            quantityMinusInCart(index) {
              index.removalQuantity = 1;
              this.$store.commit('removeFromCart', index);
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

          moveToCheckOutMobile() {
            this.$router.push({name: 'check-out'})
          },
        },
        created() {

            console.log("here");
            this.getGeneralSetting();

            // if (this.$route.name === 'online-order') {
            //     $(document).scroll(function () {
            //         var scroll = $(document).scrollTop();
            //         if (scroll >= 200) {
            //             $(".masthead").addClass("smooth-scroll");
            //             $(".filter-page-style2").addClass("fixed-scroll");
            //             $("html").addClass("remove-overflow");
            //         } else {
            //             $(".masthead").removeClass("smooth-scroll");
            //             $(".filter-page-style2").removeClass("fixed-scroll");
            //             $("html").removeClass("remove-overflow");
            //         }
            //     });
            // } else {
            //     $(".masthead").removeClass("smooth-scroll");
            //     $(".filter-page-style2").removeClass("fixed-scroll");
            //     $("html").removeClass("remove-overflow");
            // }

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

</script>
<style>
    nav.collapse {
        display: block !important;
    }
    nav.collapse.show {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 99;
        margin-top: 0 !important;
    }
    nav.collapse.show .navbar-toggler {
        top: 80px;
        right: 30px;
        position: absolute;
    }
    nav.collapse.show .navbar-collapse {
        position: relative;
        height: 0;
    }
</style>

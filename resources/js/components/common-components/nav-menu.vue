<template>

    <div>
        <header class="masthead">
            <!-- <nav class="navbar navbar-expand-lg navbar-light custom-header" id="mainNav"> -->

            <div class="header-top">
                <div class="header-top-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="add-info">
                                    <ul>
                                         <li><img src="/images/theme-1/mail.png">
                                            <span>
                                                <a href="mailto:Info@yourdomain.com">Info@alibabakebab.co.uk</a>
                                            </span>
                                        </li>
                                        <li><img src="/images/theme-1/location.png">
                                            <span>
                                                 <a href="10 Peckham Park Road, London SE15 6TW ">10 Peckham Park Road, London SE15 6TW </a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="header-icon float-right">
                                   <ul>
                                       <li><a href="#"><img src="/images/theme-1/facebook.png"></a></li>
                                       <li><a href="#"><img src="/images/theme-1/twitter.png"></a></li>
                                       <li><a href="#"><img src="/images/theme-1/Instagram.png"></a></li>
                                       <li><a href="#"><img src="/images/theme-1/in.png"></a></li>
                                   </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header-bottom-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4">
                                <router-link :to="{ path: '/'}">
                                    <img src="/images/theme-1/Ali-baba-logo.png">
                                </router-link>
                            </div>
                            <div class="col-lg-8">
                                <div class="main-menu" id="navbarResponsiv">
                                    <ul class="nav justify-content-end">

                                        <li class="nav-item active"> <router-link :to="{ path: '/'}"><a class="nav-link js-scroll-trigger" href="#about">Home</a></router-link></li>
<!--                                        <li class="nav-item "> <router-link :to="{ path: '/About us'}"><a class="nav-link js-scroll-trigger" >About us</a></router-link></li>-->
<!--                                        <li class="nav-item "> <router-link :to="{ path: '/feedback'}"><a class="nav-link js-scroll-trigger" >Feedback</a></router-link></li>-->
<!--                                        <li class="nav-item">-->
<!--                                            <a href="#" @click="openAllergy" class="nav-link">Allergy Information</a>-->
<!--                                        </li>-->

<!--                                        <li class="nav-item">-->
<!--                                            <a href="#" class="nav-link" @click="openMenu">Our Menu</a>-->
<!--                                        </li>-->

                                        <!--                            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#services">Menu</a></li>-->
                                        <!--                            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#contact">GALLERY</a></li>-->
                                        <div class="order-now">
<!--                                         <a href="#" class="btn btn-outline-danger"  @click.prevent="openPostalCode">-->
<!--                                        Order Online </i></i>-->
<!--                                             </a>-->
                                     </div>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- </nav> -->
            <div class="header-bottom">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5">

                        </div>
                        <div class="col-lg-7">
                            <div class="contact-bnner">
                               <div class="row">
                                <div class="col-5 mt-0">

                                </div>
                                <div class="col-6 mt-0">
                                    <div class="search-res" v-if="this.$route.name !='online-order'">
                                <div class="info-txt">
                                    <h4>Save 25% on orders over £30</h4>
                                </div>
                                <h3>Enter Your Postal Code.</h3>
<!--                                <form class="form-inline">-->
<!--                                    <div class="form-group mx-sm-3 mb-2">-->

<!--                                        <input type="text"  class="form-control" v-model="postal_code" placeholder="Enter your Postal code">-->
<!--                                    </div>-->

<!--                                    <button type="button" class="btn-outline-dark"  v-on:click="checkPostCode">-->
<!--                                        <span>Submit! </span>-->

<!--                                    </button>-->
<!--                                    <p style="color:red">{{error_message}} </p>-->
<!--                                </form>-->
                            </div>

                                </div>

                               </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </header>



        <download-menu @HideModalValue="hideModal" :showModalProp="showPopup" :isMenu="menu" :isAllergy="allergy" ></download-menu>
        <postal-code-popup  @HideModalValue="hideModal"   :showModalProp="showPostalCode"></postal-code-popup>

    </div>

</template>

<script>
    export default {
        data() {
            return {
                postal_code: '',
                error_message: '',
                showPopup: false,
                showPostalCode: false,
                menu: false,
                allergy: false
            }
        },
        methods: {

            hideModal() {
                this.showPopup = false;
                this.showPostalCode = false;
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
            checkPostCode() {
                let vm = this;
                if (this.postal_code == '') {
                    vm.error_message = 'Please Enter Your Postal Code';
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
                            vm.$store.commit('setDeliveryCharges', response.data.data.amount);
                            vm.$router.push({path: 'online-order/' + vm.postal_code})

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

            getGeneralSetting() {
                axios({
                    method: 'get',
                    url: '/api/restaurant_info',
                }).then(function (response) {
                    if (response.data.error === undefined) {
                        console.log(response);
                    } else {
                        vm.error_message = 'We are not providing food in your Area';
                    }
                })
                    .catch(function (response) {
                        //handle error
                        console.log(response);
                    });
            },
        },
        mounted() {
            this.getGeneralSetting();
        },
    }
</script>

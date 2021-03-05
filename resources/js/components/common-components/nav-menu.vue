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
                                    Due to covid-19 we had to minimise on staff and have been really busy. Please be patient for your delivery as we will try and get it to you as soon as possible.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header-bottom-section">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-6 col-md-3">
                                <router-link :to="{ path: '/'}">
                                     <a class="navbar-brand js-scroll-trigger main-logo" href="javascript:;">
                                        <img src="/images/logo.png">
                                    </a>
                                </router-link>
                            </div>
                            <div class="col-6 col-md-9 right">
                                <nav class="navbar navbar-expand-lg navbar-light justify-content-end main-menu p-0">
                                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsiv" aria-controls="navbarResponsiv" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                  </button>
                                  <div class="collapse navbar-collapse justify-content-end" id="navbarResponsiv">
                                    <ul class="nav ">

                                        <li class="nav-item active"> <router-link :to="{ path: '/'}"><a class="nav-link js-scroll-trigger" href="#about">Home</a></router-link></li>
                                        <li class="nav-item "> 
                                            <router-link :to="{ path: '/gallery'}">
                                                <a class="nav-link js-scroll-trigger" >Gallery</a>
                                            </router-link>
                                        </li>
                                        <li class="nav-item "> <router-link :to="{ path: '/feedback'}"><a class="nav-link js-scroll-trigger" >Feedback</a></router-link></li>
                                        <li class="nav-item">
                                            <a href="#" @click="openAllergy" class="nav-link">Allergy Information</a>
                                        </li>

                                        <li class="nav-item">
                                            <a href="#" class="nav-link" @click="openMenu">Our Menu</a>
                                        </li>

                                        <!--                            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#services">Menu</a></li>-->
                                        <!--                            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#contact">GALLERY</a></li>-->
                                        <li class="nav-item">
                                            <div class="order-now">
                                                 <!-- <a href="#" class="btn btn-outline-danger"  @click.prevent="openPostalCode">
                                                Order Online </i></i>
                                                     </a> -->
                                                <a href="#" class="btn btn-rounded-default btn-rounded-danger"  @click.prevent="openPostalCode"> Order Online</a>
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
                    <img src="images/banner/banner-1.jpg">

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



        <download-menu @HideModalValue="hideModal" :showModalProp="showPopup" :isMenu="menu" :isAllergy="allergy" ></download-menu>
        <postal-code-popup  @HideModalValue="hideModal"   :showModalProp="showPostalCode"></postal-code-popup>

    </div>

</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';

    export default {
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

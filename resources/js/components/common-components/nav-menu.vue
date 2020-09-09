<template>

    <div>
        <header class="masthead">
            <nav class="navbar navbar-expand-lg navbar-light custom-header" id="mainNav">
                <div class="container">
                    <router-link :to="{ path: '/'}">
                        <a class="navbar-brand js-scroll-trigger" href="#">
                            <img src="../../../images/logo.png">
                        </a>
                    </router-link>
                    <div class="right">
                        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                        <div class="add-info">
                            <ul>
                                <li><a href="#"><i class="fas fa-phone"></i> 0121 242 2020</a></li>
                                <li><a href="#"><i class="fas fa-envelope"></i>support@papages.com</a></li>
                            </ul>
                        </div>
                        <div class="main-menu" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto my-2 my-lg-0">

                                <li class="nav-item active"> <router-link :to="{ path: '/'}"><a class="nav-link js-scroll-trigger" href="#about">Home</a></router-link></li>
                                <li class="nav-item "> <router-link :to="{ path: '/feedback'}"><a class="nav-link js-scroll-trigger" >Feedback</a></router-link></li>
                                <li class="nav-item">
                                    <a href="#" @click="openAllergy" class="nav-link">Allergy Information</a>
                                </li>

                                <li class="nav-item">
                                    <a href="#" class="nav-link" @click="openMenu">Our Menu</a>
                                </li>

                                <!--                            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#services">Menu</a></li>-->
                                <!--                            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#contact">GALLERY</a></li>-->
                            </ul>
                            <ul class="btm-menu">
                                <!--                            <li><a href="#">Feedback</a></li>-->
                                <!--                            <li><a href="#">Contact Us</a></li>-->
                                <!--                            <li><a href="#">Help</a></li>-->
                                <!--                            <li><a href="#"><i class="fas fa-user"></i> My Account</a></li>-->
                            </ul>
                        </div>
                        <div class="order-now">
                            <a href="#" class="btn-primary btn"  @click.prevent="openPostalCode">
                                Order Online <i class="fas fa-long-arrow-alt-right"></i></i>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            <div class="header-bottom">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="img-box">
                                <img src="https://i.ibb.co/H77j5pd/Png-Item-3671735.png">
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="info-txt">
                                <h4>Save upto 10% off on orders if £15.00 and over </h4>
                                <h1 class="font-weight-bold">
                                    Taste your fav dish</h1>
                                <h3><span>from</span> Papa Ge's Pizza & Fish Bar</h3>
                                <p>Fish & Chips made the traditional way.</p>
                            </div>
                            <div class="search-res" v-if="this.$route.name !='online-order'">
                                <h3>Enter Your Postal Code.</h3>
                                <form class="form-inline">
                                    <div class="form-group mx-sm-3 mb-2">

                                        <input type="text"  class="form-control" v-model="postal_code" placeholder="Enter your Postal code">
                                    </div>

                                    <button type="button" class="custom-btn"  v-on:click="checkPostCode">
                                        <span>Submit! <i class="fas fa-long-arrow-alt-right"></i></span>

                                    </button>
                                    <p style="color:red">{{error_message}} </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </header>

        <section class="deliver-area mb-5">
            <div class="container">
                <div class="locations">
                    <h3><i class="fas fa-map-marker-alt"></i> We are offering Deliveries in these areas</h3>
                    <ul>
                        <li>
                            <a href="#">B7</a>
                        </li>
                        <li>
                            <a href="#">B8</a>
                        </li>
                        <li>
                            <a href="#">B9</a>
                        </li>
                        <li>
                            <a href="#"> B10</a>
                        </li>
                        <li>git
                            <a href="#">B25</a>
                        </li>
                        <li>
                            <a href="#">B26</a>
                        </li>
                        <li>
                            <a href="#">B33</a>
                        </li>
                        <li>
                            <a href="#">B34</a>
                        </li>
                        <li>
                            <a href="#">B35</a>
                        </li>
                        <li>
                            <a href="#">B36</a>
                        </li>
                        <li>
                            <a href="#">B37</a>
                        </li>
                    </ul>
                    <div class="overlay-bg"></div>
                </div>
            </div>
        </section>

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

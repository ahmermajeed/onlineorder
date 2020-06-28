<template>
    <div>
        <div class="wrapper">
            <div class="container-fluid main-top">
                <img src="../../images/topleftburger.png" class="topleftburger parallax_scroll">
                <img src="../../images/toprightleaves.png" class="toprightleaves parallax_scroll">
                <img src="../../images/topleftyelllowsauce.png" class="topleftyellowsauce parallax_scroll">
                <img src="../../images/toprightredsauce.png" class="toprightredsauce parallax_scroll">
                <img src="../../images/sliderrightsparkle.png" class="sliderrightsparkle">
                <img src="../../images/toprightmidleaves.png" class="toprightmidleaves parallax_scroll">
                <img src="../../images/topleftbottomburger.png" class="topleftbottomburger parallax_scroll">
                <img src="../../images/toprightbottomwood.png" class="toprightbottomwood parallax_scroll">
                <img src="../../images/sliderrightsparkle.png" class="sliderbottomsparkle">
                <div class="row">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="header">
                                    <div class="logo">
                                        <img src="../../images/mainlogo.png" alt="logo">
                                    </div><!--logo-->
                                    <button type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler home-navbar-toggler">
                                        <span class="fa fa-bars"></span>
                                    </button>
                                    <div class="navigation-bar navbar-collapse collapse home-navbar" id="navbarResponsive">
                                        <ul>
                                            <li>
                                                <router-link :to="{ path: '/'}">
                                                <a class="nav-link" >Home
                                                    <span class="sr-only">(current)</span>
                                                </a>
                                            </router-link></li>

                                            <li>   <router-link :to="{ path: 'postal-code'}">
                                                <a class="nav-link" >Online Ordering</a>
                                            </router-link></li>

                                            <li>   <router-link :to="{ path: 'about-us'}">
                                                <a class="nav-link" >About Us</a>
                                            </router-link></li>

                                            <li>   <router-link :to="{ path: 'contact-us'}">
                                                <a class="nav-link" >Contact Us</a>
                                            </router-link></li>

                                            <li>
                                                <a href="#" @click="openAllergy" class="nav-link">Allergy Information</a>
                                            </li>

                                            <li>
                                                <a href="#" class="nav-link" @click="openMenu">Our Menu</a>
                                            </li>

                                        </ul>
                                    </div><!--//navigation-bar-->
                                </div> <!--//header-->
                                <div class="main-banner row">
                                    <div class="offset-md-1 col-md-10">
                                        <div class="main-banner-holder">
                                            <hooper :itemsToShow="1" :centerMode="true" pagination="no">

                                                <slide>
                                                    <img src="../../images/mainbanner1.jpg">
                                                </slide>
                                                <slide>
                                                    <img src="../../images/mainbanner2.jpg">
                                                </slide>

                                               <!-- <slide v-for="(slide, indx) in images" :key="indx" :index="indx">
                                                    <img :src="slide" style="max-height: 400px;">
                                                </slide>-->

                                            </hooper>
                                        </div>
                                    </div>
                                </div><!--main-banner-->
                            </div><!--//col-->
                        </div><!--//row-->
                    </div><!--//container-->
                </div><!--//row-->
            </div><!--//container-fluid-->

            <div class="container-fluid aboutus-section">
                <div class="row">
                    <div class="container">
                        <div class="row">
                            <div class="offset-md-1 col-md-10">
                                <h3>AboutUs</h3>
                                <p>Papa Ge’s has been established in the UK since 2004 and started off in Tamworth in Staffordshire, it has now reached Birmingham with this new and improved store located at 888 Washwood Heath Road in Birmingham.</p>
                                <p>We specialise in a wide range of foods such as great quality pizzas, traditional COD and chips, kebabs, burgers and southern fried chicken.
                                We use the best ingredients to provide the best quality along with providing the best service. We specialise in traditional fish and chips and pizzas as these are our specialities and we have a combined experience of over 50 years. We endeavour to bring our customers the best quality food for the best price.</p>
                            </div><!--//col-->
                        </div><!--aboutus-section-->
                    </div><!--container-->
                </div><!--//row-->
            </div><!--container-fluid-->

            <div class="container-fluid bottom-section">
                <img src="../../images/menutoptomato.png" class="menutoptomato">
                <img src="../../images/menutopleftleaves.png" class="menutopleftleaves">
                <img src="../../images/menubannersideleave.png" class="menubannersideleave">
                <img src="../../images/menubannerrightcorn.png" class="menubannerrightcorn">
                <img src="../../images/menubannerleftchilli.png" class="menubannerleftchilli">
                <div class="row">
                    <div class="container">
                        <div class="row menu-section">
                            <div class="col-md-12">
                                <h3>Menu</h3>
                                <div class="menu-banner-holder">
                                    <img src="../../images/menu-banner.png">
                                    <div class="banner-links">
                                        <router-link :to="{ path: 'postal-code'}"> <span>Order Now</span></router-link>
                                        <a href="#" @click="openMenu"> <span>Our Menu</span></a>
                                    </div>
                                </div><!--//menu-banner-holder-->
                            </div><!--//col-->
                        </div><!--menu-section-->

                        <div class="row deals-section">
                            <img src="../../images/dealsleftleaves.webp" class="dealsleftleaves">
                            <img src="../../images/dealsrightlemon.webp" class="dealsrightlemon">
                            <div class="col-md-12">
                                <h3>Deals</h3>
                                <div class="deals-slider row">
                                    <div class="col-lg-3 col-md-6 col-sm-12">
                                        <div class="per-deal">
                                            <div class="image-holder">
                                                <router-link :to="{ path: 'postal-code'}">
                                                    <img src="../../images/image00009.jpeg" alt="deal img">
                                                </router-link>
                                            </div>
                                            <div class="text-holder">
                                                <h5><a href="#"> NAN KEBAB DEAL for £14.99</a></h5>
                                                <p>  Donner in Nan (R)</p>
                                                <p>+ Mix in Nan (R)</p>
                                                <p>+ Chicken in Nan (R) </p>
                                                <p>+ 1 Chips (R) + 1.5ltr Pepsi</p>
                                                <i class="fa fa-long-arrow"></i>
                                            </div>
                                            <router-link :to="{ path: 'onlineordering'}"  class="deal-detail"><i class="fa fa-long-arrow-right"></i></router-link>
                                        </div>
                                    </div><!--//col-3-->
                                    <div class="col-lg-3 col-md-6 col-sm-12">
                                        <div class="per-deal">
                                            <div class="image-holder">
                                                <router-link :to="{ path: 'postal-code'}">
                                                    <img src="../../images/image00010.jpeg" alt="deal img">
                                                </router-link>
                                            </div>
                                            <div class="text-holder">
                                                <h5><a href="#">FAMILY DEAL for £16.99</a></h5>
                                                <p>  2 Medium Pizzas</p>
                                                <p>+ Garlic Bread (4pcs) </p>
                                                <p>+ 1 Chips (R)</p>
                                                <p>+ 1.5 ltr Pepsi</p>
                                                <i class="fa fa-long-arrow"></i>
                                            </div>
                                            <router-link :to="{ path: 'postal-code'}"  class="deal-detail"><i class="fa fa-long-arrow-right"></i></router-link>
                                        </div>
                                    </div><!--//col-3-->
                                    <div class="col-lg-3 col-md-6 col-sm-12">
                                        <div class="per-deal">
                                            <div class="image-holder">
                                                <router-link :to="{ path: 'postal-code'}">
                                                    <img src="../../images/image00004.jpeg" alt="deal img">
                                                </router-link>
                                            </div>
                                            <div class="text-holder">
                                                <h5><a href="#">BIG PIZZA DEAL for £24.99</a></h5>
                                                <p>  Any 2 Large Pizzas</p>
                                                <p>+ 2 Chips (R)</p>
                                                <p>+ 2 Garlic Bread</p>
                                                <p>+ 2 x 1.5 ltr Pepsi</p>
                                                <i class="fa fa-long-arrow"></i>
                                            </div>
                                            <router-link :to="{ path: 'postal-code'}"  class="deal-detail"><i class="fa fa-long-arrow-right"></i></router-link>
                                        </div>
                                    </div><!--//col-3-->
                                    <div class="col-lg-3 col-md-6 col-sm-12">
                                        <div class="per-deal">
                                            <div class="image-holder">
                                                <router-link :to="{ path: 'postal-code'}">
                                                    <img src="../../images/image00003.jpeg" alt="deal img"></router-link>

                                            </div>
                                            <div class="text-holder">
                                                <h5><a href="#">MIXED DEAL for £14.99</a></h5>
                                                <p>  Any Medium Pizza</p>
                                                <p>+ Chicken Meat Chips (R)</p>
                                                <p>+ Donner Meat Chips (R)</p>
                                                <p>+ 1.5 ltr Pepsi</p>
                                                <i class="fa fa-long-arrow"></i>
                                            </div>
                                            <router-link :to="{ path: 'postal-code'}"  class="deal-detail">
                                               <i class="fa fa-long-arrow-right"></i>
                                            </router-link>
                                        </div>
                                    </div><!--//col-3-->
                                </div><!--//deals-slider-->
                            </div><!--//col-->
                        </div><!--deals-section-->

                    </div><!--container-->
                </div><!--//row-->
                <div class="row">
                    <div class="col-12">
                        <div class="footer">
                            <div class="row">
                                <div class="col-md-5 footer-left">
                                    <p>&copy; 2020 <span>All rights reserved</span></p>
                                    <p><span>Site by</span> <a href="#">PapaGes</a></p>
                                </div>
                                <div class="col-md-2 footer-logo">
                                    <img src="../../images/mainlogo.png" alt="logo">
                                </div>
                                <div class="col-md-5 footer-right">
                                    <p><span>Email:</span> <a href="#">support@papages.com</a></p>
                                    <p><span>Phone:</span> +44 121 242 2020</p>
                                    <div class="footer-social">
                                        <a href="#"><i class="fa fa-facebook-f"></i></a>
                                        <a href="#"><i class="fa fa-twitter"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!--container-fluid-->
        </div><!--wrapper-->
        <download-menu @HideModalValue="hideModal" :showModalProp="showPopup" :isMenu="menu" :isAllergy="allergy" ></download-menu>
    </div>
</template>

<script>
    import VueGallery from 'vue-gallery';
    import {
        Hooper,
        Slide,
        Navigation as HooperNavigation
    } from 'hooper';

    import 'hooper/dist/hooper.css';
    export default {
        components: {
            Hooper,
            Slide,
            HooperNavigation,
            'gallery': VueGallery,
        },
        data: function () {
            return {
                images: [
                    '../../images/mainbanner1.jpeg',
                    '../../images/image00003.jpg',
                ],
                stories: [],
                index: null,
                showPopup: false,
                menu: false,
                allergy: false
            };
        },
        mounted() {
            this.getStory();
            console.log('Component mounted.')
        },
        methods: {
            getStory(){
                let  _this = this
                _this.loading  = true;
                axios.get('/api/our-story')
                    .then((response) => {
                        _this.stories =  response.data.data;
                        _this.loading  = false;
                    });
            },

            hideModal() {
                this.showPopup = false;
            },

            openMenu () {
                this.showPopup = true;
                this.menu = true;
                this.allergy = false;
            },

            openAllergy () {
                this.showPopup = true;
                this.allergy = true;
                this.menu = false;
            }
        }
    }
</script>

<style>
    .image {
        float: left;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        border: 1px solid #ebebeb;

    }
</style>

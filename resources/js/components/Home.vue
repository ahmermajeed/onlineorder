<template>
    <div>
        <div class="wrapper">
            <div class="container-fluid main-top">
                <img src="../../images/topleftburger.webp" class="topleftburger parallax_scroll">
                <img src="../../images/toprightleaves.webp" class="toprightleaves parallax_scroll">
                <img src="../../images/topleftyelllowsauce.webp" class="topleftyellowsauce parallax_scroll">
                <img src="../../images/toprightredsauce.webp" class="toprightredsauce parallax_scroll">
                <img src="../../images/sliderrightsparkle.webp" class="sliderrightsparkle">
                <img src="../../images/toprightmidleaves.webp" class="toprightmidleaves parallax_scroll">
                <img src="../../images/topleftbottomburger.webp" class="topleftbottomburger parallax_scroll">
                <img src="../../images/toprightbottomwood.webp" class="toprightbottomwood parallax_scroll">
                <img src="../../images/sliderrightsparkle.webp" class="sliderbottomsparkle">
                <div class="row">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="header">
                                    <div class="logo">
                                        <img src="../../images/mainlogo.webp" alt="logo">
                                    </div><!--logo-->
                                    <div class="navigation-bar">
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



                                        </ul>
                                    </div><!--//navigation-bar-->
                                </div> <!--//header-->
                                <div class="main-banner row">
                                    <div class="offset-md-1 col-md-10">
                                        <div class="main-banner-holder">
                                            <img src="../../images/image00003.jpg" style="max-height: 400px;">
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
                                <p>Welcome to the home of delicious gourmet burgers.Papa Ge 's is a modern contemporary restaurant that exists to delight passionate burger lovers. Walk in and place your order and sit back and relax and soak in our attractive ambiance as you wait for your order to be prepared. All burgers are cooked to order and we pride ourselves on serving fresh, delicious and hygienic burgers that tantalize the taste buds and excite your senses. Our packaging is designed to be easy to hold and carry as well as ensure that your burgers maintain their flavour and shape.</p>
                            </div><!--//col-->
                        </div><!--aboutus-section-->
                    </div><!--container-->
                </div><!--//row-->
            </div><!--container-fluid-->

            <div class="container-fluid bottom-section">
                <img src="../../images/menutoptomato.webp" class="menutoptomato">
                <img src="../../images/menutopleftleaves.webp" class="menutopleftleaves">
                <img src="../../images/menubannersideleave.webp" class="menubannersideleave">
                <img src="../../images/menubannerrightcorn.webp" class="menubannerrightcorn">
                <img src="../../images/menubannerleftchilli.webp" class="menubannerleftchilli">
                <div class="row">
                    <div class="container">
                        <div class="row menu-section">
                            <div class="col-md-12">
                                <h3>Menu</h3>
                                <div class="menu-banner-holder">
                                    <img src="../../images/menu-banner.webp">
                                    <div class="banner-links">
                                        <router-link :to="{ path: 'onlineordering'}"> <span>Order Now</span></router-link>
                                        <router-link :to="{ path: 'onlineordering'}"> <span>Our Menu</span></router-link>
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
                                    <div class="col-3">
                                        <div class="per-deal">
                                            <div class="image-holder">
                                                <router-link :to="{ path: 'onlineordering'}">
                                                    <img src="../../images/image00009.jpeg" alt="deal img">
                                                </router-link>
                                            </div>
                                            <div class="text-holder">
                                                <h5><a href="#"> Deal 1 for £ 2 </a></h5>
                                                <p><a href="#">*Papa Ge 's wishes you a blessed Ramadan. Enjoy our amazing deals for Iftaar and Dinner.
                                                   .</a></p>
                                                <i class="fa fa-long-arrow"></i>
                                            </div>
                                            <router-link :to="{ path: 'onlineordering'}"  class="deal-detail"><i class="fa fa-long-arrow-right"></i></router-link>
                                        </div>
                                    </div><!--//col-3-->
                                    <div class="col-3">
                                        <div class="per-deal">
                                            <div class="image-holder">
                                                <router-link :to="{ path: 'onlineordering'}">
                                                    <img src="../../images/image00010.jpeg" alt="deal img">
                                                </router-link>
                                            </div>
                                            <div class="text-holder">
                                                <h5><a href="#">Deal 1 for £ 2</a></h5>
                                                <p><a href="#">*Papa Ge 's wishes you a blessed Ramadan. Enjoy our amazing deals for Iftaar and Dinner.
                                                 </a></p>
                                                <i class="fa fa-long-arrow"></i>
                                            </div>
                                            <router-link :to="{ path: 'onlineordering'}"  class="deal-detail"><i class="fa fa-long-arrow-right"></i></router-link>
                                        </div>
                                    </div><!--//col-3-->
                                    <div class="col-3">
                                        <div class="per-deal">
                                            <div class="image-holder">
                                                <router-link :to="{ path: 'onlineordering'}">
                                                    <img src="../../images/image00004.jpeg" alt="deal img">
                                                </router-link>>
                                            </div>
                                            <div class="text-holder">
                                                <h5><a href="#">Deal 1 for £ 2</a></h5>
                                                <p><a href="#">*Papa Ge 's wishes you a blessed Ramadan. Enjoy our amazing deals for Iftaar and Dinner.
                                                    apply.</a></p>
                                                <i class="fa fa-long-arrow"></i>
                                            </div>
                                            <router-link :to="{ path: 'onlineordering'}"  class="deal-detail"><i class="fa fa-long-arrow-right"></i></router-link>
                                        </div>
                                    </div><!--//col-3-->
                                    <div class="col-3">
                                        <div class="per-deal">
                                            <div class="image-holder">
                                                <router-link :to="{ path: 'onlineordering'}">
                                                    <img src="../../images/image00003.jpeg" alt="deal img"></router-link>

                                            </div>
                                            <div class="text-holder">
                                                <h5><a href="#">Deal 1 for £ 2</a></h5>
                                                <p><a href="#">*Papa Ge 's wishes you a blessed Ramadan. Enjoy our amazing deals for Iftaar and Dinner.
                                                   </a></p>
                                                <i class="fa fa-long-arrow"></i>
                                            </div>
                                            <router-link :to="{ path: 'onlineordering'}"  class="deal-detail">
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
                                    <p><span>Site by</span> <a href="#">SoftechWeb</a></p>
                                </div>
                                <div class="col-md-2 footer-logo">
                                    <img src="../../images/mainlogo.webp" alt="logo">
                                </div>
                                <div class="col-md-5 footer-right">
                                    <p><span>Email:</span> <a href="#">iinfo@softechweb.co.uk</a></p>
                                    <p><span>Phone:</span> 03301330247</p>
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
                    'https://dummyimage.com/800/ffffff/000000',
                    'https://dummyimage.com/1600/ffffff/000000',
                    'https://dummyimage.com/1280/000000/ffffff',
                    'https://dummyimage.com/400/000000/ffffff',
                    'https://dummyimage.com/800/ffffff/000000',
                    'https://dummyimage.com/1600/ffffff/000000',
                    'https://dummyimage.com/1280/000000/ffffff',
                    'https://dummyimage.com/400/000000/ffffff'
                ],
                stories: [],
                index: null
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

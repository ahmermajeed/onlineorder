<template>
    <div>
        <div class="loader_wrapper">
            <div class="loader">
                <img src="images/loader.gif" alt="" />
            </div>
        </div>
        <div class="ice_main_wrapper">
            <div class="ice_banner_wrapper inner_banner">
                <img
                    src="images/banner/inner_banner.png"
                    alt=""
                    class="img-responsive"
                />
                <div class="banner_content">
                    <div class="container">
                        <div class="row">
                            <div
                                class="col-lg-10 col-md-10 col-sm-12 col-xs-12 col-lg-offset-1 col-md-offset-1 col-sm-offset-0 col-xs-offset-0"
                            >
                                <div class="header_wrapper">
                                    <div class="ice_logo">
                                        <router-link :to="{ path: '/' }">
                                            <a href="javascript:;"
                                                ><img
                                                    src="images/banner/logo-main.png"
                                                    alt="dessert-king-logo"
                                            /></a>
                                        </router-link>
                                    </div>
                                    <div class="ice_menu_wraper">
                                        <a
                                            class="toggle"
                                            @click="responsiveMenu"
                                        >
                                            <span></span>
                                        </a>
                                        <div class="ice_menu collapse">
                                            <a class="toggle close"
                                                ><span></span
                                            ></a>
                                            <ul>
                                                <li>
                                                    <router-link
                                                        :to="{ path: '/' }"
                                                    >
                                                        <a>home</a>
                                                    </router-link>
                                                </li>
                                                <li>
                                                    <router-link
                                                        :to="{
                                                            path: '/about-us',
                                                        }"
                                                    >
                                                        <a href="javascript:;"
                                                            >about</a
                                                        >
                                                    </router-link>
                                                </li>
                                                <li>
                                                <router-link :to="{ path: '/contact-us'}">
                                                    <a href="javascript:;">Contact</a>
                                                </router-link>
                                                </li>
                                                <li>
                                                <router-link :to="{ path: '/feedback'}">
                                                    <a href="javascript:;">Feedback</a>
                                                </router-link>
                                                </li>
                                                <li>
                                                <router-link :to="{ path: '/allergy'}">
                                                    <a href="javascript:;">Allergy</a>
                                                </router-link>
                                                </li>
                                                <li>
                                                    <a
                                                        href="javascript:;"
                                                        @click.prevent="
                                                            openPostalCode
                                                        "
                                                        >Order Online</a
                                                    >
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="pull-right search_wrapper">
                                            <ul>
                                                <li
                                                    class="search"
                                                    @click="openSearchBox"
                                                >
                                                    <a>
                                                        <i
                                                            class="icon-search"
                                                        ></i>
                                                    </a>
                                                    <ul class="search_box">
                                                        <li>
                                                            <a
                                                                class="search_close"
                                                            ></a>
                                                        </li>
                                                        <li>
                                                            <form
                                                                class="search_form"
                                                            >
                                                                <p>
                                                                    <input
                                                                        type="text"
                                                                        value=""
                                                                        name="search"
                                                                        id="search"
                                                                    />
                                                                    <label
                                                                        for="search"
                                                                        >search</label
                                                                    >
                                                                </p>
                                                                <a
                                                                    href="#"
                                                                    class="search_btn"
                                                                    ><i
                                                                        class="icon-search"
                                                                    ></i
                                                                ></a>
                                                            </form>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="slider_content">
                                    <h1>Allergy</h1>
                                    <ul class="breadcrumb">
                                        <li>
                                            <router-link :to="{ path: '/' }">
                                                <a>home</a>
                                            </router-link>
                                        </li>
                                        <li class="active">Allergy</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    <div class="ice_main_section2 ice_special_wrapper">
    	<div class="container">
    		<div class="row">
    			<div class="col-lg- col-md-6 col-sm-12 col-xs-12 col-lg-offset-3 col-md-offset-3 col-sm-offset-0 col-sx-offset-0">
    				<div class="heading_wrapper text-center wow slidedown">
    					<h1 class="ice_heading_white">Allergy</h1>
    					<p class="white">Please contact our kitchen staff on <a href="tel:0121 337 7378">0121 337 7378</a> for allergy information.</p>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
            <div class="ice_footer_wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            <div class="widget widget_info text-center">
                                <div class="ice_logo">
                                    <a href="index.html"
                                        ><img
                                            src="images/banner/logo.png"
                                            alt="icecream-parlour-footer-logo"
                                    /></a>
                                </div>
                                <p>
                                    Contrary to popular belief, Lorem Ipsum is
                                    not simply random text. It has roots in a
                                    piece of classical.
                                </p>
                                <ul class="social_icon">
                                    <li><a href="https://m.facebook.com/dessertkinguk/" target="_blank"><i class="icon-facebook"></i></a></li>
                                    <li><a href="https://instagram.com/dessertkinguk?igshid=1izqw2ubf5qw1" target="_blank"><i class="icon-instagram-symbol"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            <div class="widget widget_news">
                                <h2 class="ice_sub_heading widget-title">
                                    latest news
                                </h2>
                                <ul>
                                    <li>
                                        <div class="news_img">
                                            <a href="#"
                                                ><img
                                                    src="images/footer/1.jpg"
                                                    alt="icecream-parlour-footer-latest-post"
                                            /></a>
                                        </div>
                                        <div class="news_detail">
                                            <a href="#">22 jul 2017</a>
                                            <p>
                                                Li nov lingua franca va simplic
                                                Europan. simplice Europan.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="news_img">
                                            <a href="#"
                                                ><img
                                                    src="images/footer/2.jpg"
                                                    alt="icecream-parlour-footer-latest-post"
                                            /></a>
                                        </div>
                                        <div class="news_detail">
                                            <a href="#">22 jul 2017</a>
                                            <p>
                                                Li nov lingua franca va simplic
                                                Europan. simplice Europan.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            <div class="widget widget_page">
                                <h2 class="ice_sub_heading widget-title">
                                    our pages
                                </h2>
                                <ul>
                                    <li>
                                        <router-link :to="{ path: '/' }">
                                            <a href="javascript:;"
                                                ><i class="icon-check-alt"></i
                                                >Home</a
                                            >
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link
                                            :to="{ path: '/about-us' }"
                                        >
                                            <a href="javascript:;"
                                                ><i class="icon-check-alt"></i
                                                >About Us</a
                                            >
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            <div class="widget widget_address">
                                <h2 class="ice_sub_heading widget-title">
                                    our contact
                                </h2>
                                <ul>
                                    <li>
                                        <div class="address_icon">
                                            <i class="icon-location"></i>
                                        </div>
                                        <div class="address_detail">
                                            <h3>Address</h3>
                                            <p>
                                                223-225 Edward Road, Balsall
                                                Heath, B12 9LH, Birmingham
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="address_icon">
                                            <i class="icon-phone1"></i>
                                        </div>
                                        <div class="address_detail">
                                            <h3>Contact Numbers</h3>
                                            <p>0121 337 7378</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="address_icon">
                                            <i class="icon-clock"></i>
                                        </div>
                                        <div class="address_detail">
                                            <h3>Office Timings</h3>
                                            <p>Mon - Sun</p>
                                            <p>1:00 PM - 5:30AM</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ice_copyright_wrapper text-center">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="">
                                <p class="white">
                                    Copyrights &copy; 2021, All Rights Reserved
                                    by <a href="javascript:;">Dessert King</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="goto_wrapper"><img src="images/loader.gif" alt="" /></div>
        <postal-code-popup
            @HideModalValue="hideModal"
            :showModalProp="showPostalCode"
        ></postal-code-popup>
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
            allergy: false,
        }
    },
    methods: {
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

        openSearchBox() {
            $('.search > a').on('click', function() {
                $(this)
                    .parent()
                    .addClass('show_search')
            })
            $('.search_close').on('click', function() {
                $('.search_close')
                    .closest('.search')
                    .removeClass('show_search')
            })
        },

        responsiveMenu() {
            $('.ice_menu_wraper a.toggle').on('click', function() {
                $('.ice_menu').addClass('in')
            })
            $('.toggle.close').on('click', function() {
                $(this)
                    .closest('.ice_menu')
                    .removeClass('in')
            })
        },
    },
}
</script>

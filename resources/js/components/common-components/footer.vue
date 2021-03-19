<template>
    <div>
        <footer>
            <div class="main-ftr">
                <div class="inner-ftr">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-md-3 footer-section-1 footer-space order-1">
                                <h3>Opening Hours</h3>
                                <ul class="Opening">
                                    <li><a href="#"><span><i class="icon-smartphone-1"></i></span>0121 440 3393</a></li>
                                    <li><a href="#"><span><i class="icon-mail-2"></i></span>hello@bigsajoriginal.co.uk</a></li>
                                    <li><a href="#"><span><i class="icon-placeholder"></i></span>231 Edward Rd
                                    </a></li>
                                </ul>
                            </div>
                            <div class="col-lg-6 col-md-6 footer-section-2 order-3 order-md-2">
                                <div class="text-center">
                                   <a href="#"><img src="/images/big-saj-logo.jpg"></a>
                                </div>
                                <div class="footer-menu text-center">
                                    <ul>
                                      <li><a href="#">Home</a></li>
                                      <li><a href="#">About us</a></li>
                                      <li><a href="#">Feedback</a></li>
                                      <li><a href="javascript:;" @click="openMenu">Our Menu</a></li>
                                    </ul>
                                </div>
                                <div class="follow-us text-center">
                                    <h3>Follow</h3>
                                </div>
                                <div class="icons text-center">
                                    <ul>
                                        <li class="linked"><a href="#"><i class="icon-linkedin"></i></a></li>
                                        <li class="twitter"><a href="#"><i class="icon-twitter"></i></a></li>
                                        <li class="pinterest"><a href="#"><i class="icon-pinterest-logo"></i></a></li>
                                        <li class="google-plus"><a href="#"><i class="icon-google-plus-logo"></i></a></li>
                                        <li class="wifi"><a href="#"><i class="icon-rss-feed-symbol"></i></a></li>
                                    </ul>

                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3 footer-section-3 footer-space order-2 order-md-3">
                                <h3>Opening Hours</h3>
                                <ul class="Opening-hours">
                                    <li>
                                        <strong><a href="#">Open 7 days a week</a></strong>
                                    </li>
                                    <li>
                                        <a href="#">Mon > Sat – 12pm till 11</a>
                                    </li>
                                     <li>
                                        <a href="#">Sunday – 1pm till 11</a>
                                    </li>
                                    <li>
                                        <strong><a href="#">Delivery Hours</a></strong>
                                    </li>
                                    <li>
                                        <a href="#">5pm till late – every day</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="copyright text-center">
                    <div class="container">
                        <p>Copyright © 2021 | All rights reserved</p>
                    </div>
                </div>
            </div>

        </footer>

        <download-menu @HideModalValue="hideModal" :showModalProp="showPopup" :isMenu="menu" :isAllergy="allergy" ></download-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                showPopup: false,
                menu: false,
                allergy: false
            }
        },
        methods: {

            hideModal() {
                this.showPopup = false;
            },

            openMenu() {
                this.showPopup = true;
                this.menu = true;
            },     
        },
    }
</script>


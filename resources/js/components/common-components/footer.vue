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
                                    <li><a href="#"><span><i class="icon-smartphone-1"></i></span>01708 456 681</a></li>
                                    <li><a href="#"><span><i class="icon-mail-2"></i></span>info@chickychaps.co.uk</a></li>
                                    <li><a href="#"><span><i class="icon-placeholder"></i></span><span class="full-address">
                                        130 Upminster Road, Hornchurch, RM12 6PL
                                    </span>
                                    </a></li>
                                </ul>
                            </div>
                            <div class="col-lg-6 col-md-6 footer-section-2 order-3 order-md-2">
                                <div class="text-center">
                                   <a href="#"><img src="/images/chickychaps.png"></a>
                                </div>
                                <div class="footer-menu text-center">
                                    <ul>
                                      <li><a href="#">Home</a></li>
                                      <li><a href="#">About us</a></li>
                                      <li><a href="#">Feedback</a></li>
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
                                        <strong><a href="#">Sunday Closed</a></strong>
                                    </li>
                                    <li>
                                        <a href="#">Mon - Thurs – 12PM - 9PM</a>
                                    </li>
                                    <li>Friday - 12PM - 10PM</li>
                                    <li>Saturday - 1PM - 10PM</li>
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


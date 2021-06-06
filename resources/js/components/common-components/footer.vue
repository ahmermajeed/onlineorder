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
                                    <li><a href="#"><span><i class="icon-smartphone-1"></i></span> 0208 928 0013</a></li>
                                    <li><a href="#"><span><i class="icon-mail-2"></i></span>info@flame-inn.co.uk</a></li>
                                    <li><a href="#" class="address-link">
                                        <span><i class="icon-placeholder"></i></span>
                                        <span class="address">374 High Road Leyton,E10 6QE</span>
                                    </a></li>
                                </ul>
                            </div>
                            <div class="col-lg-6 col-md-6 footer-section-2 order-3 order-md-2">
                                <div class="text-center">
                                   <a href="#"><img src="/images/flame-inn/Flameinn-logo.png"></a>
                                </div>
                                <div class="footer-menu text-center">
                                    <ul>
                                      <li><a href="/">Home</a></li>
                                      <li><a href="/feedback">Feedback</a></li>
                                      <li><a href="#" @click.prevent="openPostalCode">Order Online</a></li>
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
                                        <strong><a href="#">Monday - Tuesday</a></strong>
                                    </li>
                                    <li>
                                        <a href="#">11AM - 11PM</a>
                                    </li>
                                    <li>
                                        <strong><a href="#">Wednesday - Thursday & Sunday</a></strong>
                                    </li>
                                    <li>
                                        <a href="#">11AM - 1AM</a>
                                    </li>
                                    <li>
                                        <strong><a href="#">Friday - Saturday</a></strong>
                                    </li>
                                    <li>
                                        <a href="#">11AM - 3AM</a>
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
        <postal-code-popup  @HideModalValue="hideModal"   :showModalProp="showPostalCode"></postal-code-popup>
    </div>
</template>


<script>
    export default {
        data: function () {
            return {
                showPostalCode: false,
            };
        },
        mounted() {
        },
        methods: {
            openPostalCode() {
                this.showPostalCode = true;
            },
             hideModal() {
                this.showPostalCode = false;
            },

        }
    }
</script>

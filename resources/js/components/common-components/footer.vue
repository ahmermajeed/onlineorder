<template>
    <div>
        <footer>
            <div class="main-ftr">
                <div class="inner-ftr">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-md-3 footer-section-1 footer-space order-1">
                                <h3>Contact Info</h3>
                                <ul class="Opening">
                                    <li><a href="#"><span><i class="icon-smartphone-1"></i></span> {{info.phone_number}}</a></li>
                                    <li><a href="#"><span><i class="icon-mail-2"></i></span> {{info.email}}</a></li>
                                    <li><a href="#" class="address-link">
                                        <span><i class="icon-placeholder"></i></span>
                                        <span class="address">{{info.address.full_address}}</span>
                                    </a></li>
                                </ul>
                            </div>
                            <div class="col-lg-6 col-md-6 footer-section-2 order-3 order-md-2">
                                <div class="text-center">
                                    <a href="#" class="logo"><img src="/images/tasty-land/sen-logo.png"></a>
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
<!--                                        <li class="facebook"><a href="#"><i class="icon-facebook "></i></a></li>-->
<!--                                        <li class="linked"><a href="#"><i class="icon-linkedin"></i></a></li>-->
<!--                                        <li class="twitter"><a href="#"><i class="icon-twitter"></i></a></li>-->
<!--                                        <li class="pinterest"><a href="#"><i class="icon-pinterest-logo"></i></a></li>-->
<!--                                        <li class="google-plus"><a href="#"><i class="icon-google-plus-logo"></i></a></li>-->
<!--                                        <li class="wifi"><a href="#"><i class="icon-rss-feed-symbol"></i></a></li>-->



                                        <li v-if="info.general_setting.facebook"> <a  :href="info.general_setting.facebook" ><i class="icon-facebook"></i></a></li>
                                        <li v-if="info.general_setting.youtube"><a  :href="info.general_setting.youtube"><i class="icon-youtube"></i></a></li>
                                       <li v-if="info.general_setting.instagram"><a :href="info.general_setting.instagram"><i class="icon-instagram-symbol"></i></a></li>
                                       <li v-if="info.general_setting.twitter"><a  :href="info.general_setting.twitter"><i class="icon-twitter"></i></a></li>
                                       <li v-if="info.general_setting.pinterest"><a  :href="info.general_setting.pinterest"><i class="icon-pinterest-logo"></i></a></li>



                                    </ul>

                                </div>
                            </div>
                            <div class="col-lg-3 col-md-3 footer-section-3 footer-space order-2 order-md-3">
                                <h3>Working Hours</h3>
                                <ul class="Opening-hours">
                                    <li  v-for="timing  in info.timing"  >
                                        <strong><a href="#">{{timing.day}} : {{timing.start_time}} - {{timing.end_time}}</a></strong>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="copyright text-center">
                    <div class="container">
                        <p>{{info.general_setting.copyright_text}}</p>
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
        },
        computed:{
            info(){
                return this.$store.state.general_data;
            },
        }
    }
</script>

<template>
    <div>
        <footer>
            <div class="main-ftr">
                <div class="inner-ftr">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-4 footer-section-2 footer-space">
                                <h3>Quick Links</h3>
                            <div class="footer-menu">
                                <ul>
                                <li>
                                    <router-link :to="{ path: '/'}">
                                        <a class="nav-link js-scroll-trigger">Home</a>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{ path: '/feedback'}">
                                        <a class="nav-link js-scroll-trigger">Feedback</a>
                                    </router-link>
                                </li>
                                <li>
                                    <router-link :to="{ path: '/terms-condition'}" 
                                    @click.native="scrollToTop">
                                        <a class="nav-link js-scroll-trigger">Terms and Condition</a>
                                    </router-link>
                                </li>
                                <li>         
                                    <router-link :to="{ path: '/privacy-policy'}" @click.native="scrollToTop">
                                        <a class="nav-link js-scroll-trigger">Privacy Policy</a>
                                    </router-link>
                                </li>
                                <li>
                                        <a class="nav-link js-scroll-trigger" @click.prevent="openPostalCode">Order Online</a>
                                </li>
                                </ul>
                            </div>
                            </div>
                            <div class="col-lg-4 col-md-4 footer-section-3 footer-space">
                                <h3>Working Hours</h3>
                                <ul class="Opening-hours">
                                    <li  v-for="timing  in info.timing"  >
                                        <strong><a href="#">{{timing.day}} : {{timing.start_time}} - {{timing.end_time}}</a></strong>
                                    </li>

                                </ul>
                            </div>
                            <div class="col-lg-4 col-md-4 footer-section-1 footer-space">
                                <h3>Contact Info</h3>
                                <ul class="Opening">
                                    <li><a href="#"><span class="icon"><i class="icon-smartphone-1"></i></span> {{info.phone_number}}</a></li>
                                    <li><a href="#"><span class="icon"><i class="icon-mail-2"></i></span> {{info.email}}</a></li>
                                    <li><a href="#" class="address-link">
                                        <span class="icon"><i class="icon-placeholder"></i></span>
                                        <span class="address">{{info.address.full_address}}</span>
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="icons text-center">
                                    <ul>
                                        <li v-if="info.general_setting.facebook"> <a  :href="info.general_setting.facebook" ><i class="icon-facebook"></i></a></li>
                                        <li v-if="info.general_setting.youtube"><a  :href="info.general_setting.youtube"><i class="icon-youtube"></i></a></li>
                                       <li v-if="info.general_setting.instagram"><a :href="info.general_setting.instagram"><i class="icon-instagram-symbol"></i></a></li>
                                       <li v-if="info.general_setting.twitter"><a  :href="info.general_setting.twitter"><i class="icon-twitter"></i></a></li>
                                       <li v-if="info.general_setting.pinterest"><a  :href="info.general_setting.pinterest"><i class="icon-pinterest-logo"></i></a></li>
                                    </ul>
                                </div>
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
             scrollToTop() {
                           window.scrollTo(0,0);
                           behavior: 'smooth'
                      }
        },
        computed:{
            info(){
                return this.$store.state.general_data;
            },
        }
    }
</script>

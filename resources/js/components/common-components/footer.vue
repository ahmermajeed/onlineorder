<template>
    <div>
        <footer>
            <div class="main-ftr">
                <div class="inner-ftr">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-md-3 footer-section-1 footer-space order-1">
                                <div class="BIG SIG">
                                   <a href="#"><img src="images/theme-3/big-logo.png"></a>
                                   <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p> 
                                </div>
                                 <div class="follow-us">
                                    <h3>Follow</h3>
                                </div>
                                <div class="icons">
                                    <ul>
                                        <li class="linked"><a href="#"><i class="icon-linkedin"></i></a></li>
                                        <li class="twitter"><a href="#"><i class="icon-twitter"></i></a></li>
                                        <li class="pinterest"><a href="#"><i class="icon-pinterest-logo"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 footer-section-2 order-3 order-md-2 text-center">
        
                                <div class="footer-menu text-center">
                                    <ul>
                                      
                                      <li><a href="#">About us</a></li>
                                      <li><a href="#" @click="openMenu">Our Menu</a></li>
                                      <li><a href="#">Feedback</a></li>
                                      
                                    </ul>
                                </div>
                                <h3>Opening Hours</h3>
                                <ul class="Opening-hours">
                                    <li>
                                        <strong><a href="#">Wednesday to Monday</a></strong>
                                    </li>
                                    <li>
                                        <a href="#">03:00PM Till Late</a>
                                    </li>
                                    <li>
                                        <strong><a href="#">Closed Tuesday</a></strong>
                                    </li>
                                    <li>
                                        <strong><a href="#">Delivery Service Available</a></strong>
                                    </li>
                                </ul> 
                            </div>
                            <div class="col-lg-3 col-md-3 footer-section-3 footer-space order-2 order-md-3">
                                <ul class="Opening">
                                    <li><a href="tel:01484 530000"><span><i class="icon-smartphone-1"></i></span>01484 530000</a></li>
                                    <li><a href="#"><span><i class="icon-mail-2"></i></span>chiknwok@hotmail.com</a></li>
                            <!--         <li><a href="#"><span><i class="icon-placeholder"></i></span>10 Peckham Park Road,London SE15 6TW</a></li> -->
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
                showPostalCode: false,
                menu: false,
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
            },
        },
    }
</script>

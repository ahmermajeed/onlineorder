<template>
    <div>
        <header-menu></header-menu>
        <div class="container-fluid">

            <div class="row ">
                <div class="postalcodepage">
                    <div class="main_banner">
                        <div class="restaurant-searching text-center">
                            <div class="restaurant-searching-inner">
                                <h2>Order <span>Food Online From</span> the Best Restaurants</h2>
                                <form class="restaurant-search-form">
                                    <div class="row">
                                        <div class="col-md-10 col-sm-9 col-lg-9">
                                            <div class="input-field"><input type="text" v-model="postal_code" placeholder="Postal Code"></div>
                                        </div>

                                        <div class="col-md-2 col-sm-3 col-lg-3 col-xs-12">
                                            <button type="button" v-on:click="checkPostCode">Check</button>
                                        </div>
                                    </div>
                                    <h1 style="color:red">{{error_message}} </h1>

                                </form>
<!--                                <div class="funfacts row">-->
<!--                                    <div class="col-md-3 col-sm-6 col-lg-3">-->
<!--                                        <div class="fact-box">-->
<!--                                            <i><img src="../../images/fact-icon1.png" alt="fact-icon1"></i>-->
<!--                                            <div class="fact-inner">-->
<!--                                                <strong><span class="counter">137</span></strong>-->
<!--                                                <h5>Restaurant</h5>-->
<!--                                            </div>-->
<!--                                        </div>&lt;!&ndash; Fact Box &ndash;&gt;-->
<!--                                    </div>-->
<!--                                    <div class="col-md-3 col-sm-6 col-lg-3">-->
<!--                                        <div class="fact-box">-->
<!--                                            <i><img src="../../images/fact-icon2.png" alt="fact-icon2"></i>-->
<!--                                            <div class="fact-inner">-->
<!--                                                <strong><span class="counter">158</span></strong>-->
<!--                                                <h5>People Served</h5>-->
<!--                                            </div>-->
<!--                                        </div>&lt;!&ndash; Fact Box &ndash;&gt;-->
<!--                                    </div>-->
<!--                                    <div class="col-md-3 col-sm-6 col-lg-3">-->
<!--                                        <div class="fact-box">-->
<!--                                            <i><img src="../../images/fact-icon3.png" alt="fact-icon3"></i>-->
<!--                                            <div class="fact-inner">-->
<!--                                                <strong><span class="counter">659</span>K</strong>-->
<!--                                                <h5>Happy Service</h5>-->
<!--                                            </div>-->
<!--                                        </div>&lt;!&ndash; Fact Box &ndash;&gt;-->
<!--                                    </div>-->
<!--                                    <div class="col-md-3 col-sm-6 col-lg-3">-->
<!--                                        <div class="fact-box">-->
<!--                                            <i><img src="../../images/fact-icon4.png" alt="fact-icon4"></i>-->
<!--                                            <div class="fact-inner">-->
<!--                                                <strong><span class="counter">235</span></strong>-->
<!--                                                <h5>Regular users</h5>-->
<!--                                            </div>-->
<!--                                        </div>&lt;!&ndash; Fact Box &ndash;&gt;-->
<!--                                    </div>-->
<!--                                </div>&lt;!&ndash; Fun Facts &ndash;&gt;-->
                            </div>
                            <img class="left-deliveryguy" src="../../images/restaurant-delivery.png" alt="restaurant-mockup1.png">
                        </div><!-- Restaurant Searching -->
                    </div>
                </div>
            </div>
        </div>


        <div class="container-fluid bottom-section mt-0">
            <div class="row">
                <div class="col-12">
                    <div class="footer mt-0">
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
        </div>




    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                postal_code:'',
                error_message:'',
            };
        },
        methods : {
            randomNumber : function(){
                return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
            },
            checkPostCode(){
                let vm = this;
                if(this.postal_code == ''){
                    vm.error_message = 'Please Enter Your Postal Code';
                }else {
                    axios({
                        method: 'post',
                        url: '/api/check-postal',
                        data: {
                            postal_code:this.postal_code
                        },
                    }).then(function (response) {
                        if(response.data.error === undefined){
                            vm.error_message = response.data.data.amount;
                            vm.$store.commit('setDeliveryCharges', response.data.data.amount);
                            vm.$router.push({path: 'online-order/'+ vm.postal_code})

                        }else {
                            vm.error_message = 'We are not providing food in your Area';
                        }
                    })
                    .catch(function (response) {
                            //handle error
                            console.log(response);
                    });
                }

            }
        }

    }
</script>



<style>
    #contatti{
        background-color: black;
        letter-spacing: 2px;
    }
    #contatti a{
        color: #fff;
        text-decoration: none;
    }


    @media (max-width: 575.98px) {

        #contatti{padding-bottom: 800px;}
        #contatti .maps iframe{
            width: 100%;
            height: 450px;
        }
    }


    @media (min-width: 576px) {

        #contatti{padding-bottom: 800px;}

        #contatti .maps iframe{
            width: 100%;
            height: 450px;
        }
    }

    @media (min-width: 768px) {

        #contatti{padding-bottom: 350px;}

        #contatti .maps iframe{
            width: 100%;
            height: 850px;
        }
    }

    @media (min-width: 992px) {
        #contatti{padding-bottom: 200px;}

        #contatti .maps iframe{
            width: 100%;
            height: 700px;
        }
    }


    #author a{
        color: #fff;
        text-decoration: none;

    }
</style>

<template>
    <div>
        <header-menu></header-menu>
        <div class="container-fluid">

            <div class="row ">
                <div class="aboutuspage col-12">
                    <div class="main_banner row">
                        <div class="container">
                            <div class="row">
                                <div class="offset-lg-5 col-lg-7 offset-md-4 col-md-8 offset-sm-0 col-sm-10">
                                    <div class="row">
                                        <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                            <h2>We Know</h2>
                                            <h3>How to Make Your<br> Life Awesome<span class="pulse"></span></h3>

                                            <router-link :to="{ path: 'postal-code'}" class="anima-btn move-eff">
                                             <span>Order Now</span>
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container about-content">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-12">
                                <div class="image-holder">
                                    <img src="../../images/about_img1.jpg" alt="about_img">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-12">
                                <h2>Welcome At <span></span></h2>
                                <h3>PAPAG RESTAURANT</h3>
                                <p>Papa Ge’s has been established in the uk since 2004 and started off in Tamworth in Staffordshire, it has not reached Birminghak with this new and improved store located at 888 Washwood Heath Road in Birmingham.

                                    We specialise in a wide range of foods such as great quality pizzas, traditional COD and chips, kebabs, burgers and southern fried chicken.
                                    We use the best ingredients to provide the best quality along with providing the best service. We specialise in traditional fish and chips and pizzas as these are our specialities and we have a combined experience of over 50 years. We endeavour to bring our customers the best quality food for the best price</p>
                                <router-link :to="{ path: 'postal-code'}" class="anima-btn move-eff"><span>Order NOw</span></router-link>
                            </div>
                        </div>
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
                                <img src="../../images/mainlogo.webp" alt="logo">
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

            };
        },

        mounted() {
            this.getAboutUs();

        },
        methods : {
            getAboutUs(){
                let  _this = this;
                _this.loading  = true;
                axios.get('api/cms/about-us')
                    .then((response) => {
                       console.log(response);
                    });
            },
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

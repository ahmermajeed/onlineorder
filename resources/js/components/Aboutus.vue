<template>
    <div>
        <header-menu></header-menu>
        <div class="container-fluid">

            <div class="row ">
                <div class="aboutuspage col-12 px-0">
                   <!--  <div class="main_banner row">
                        <div class="container">
                            <div class="row ">
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
                    </div> -->
                    <div class="container-fluid about-content">
                        <div class="row">
                            <div class="col-lg-8 col-md-6 col-sm-12">
                                <div class="image-holder about-us-banner1">
                                   <!--  <img src="public/images/about_img1.jpg" alt="about_img"> -->

                                    <div class="first-about-us">
                                        <h2>About Us</h2>
                                        <p>We are an independent family owned business which thrives on 
                                        delivering customers with a variety of cuisines and excellent customer service. We understand our customers have varying preferences within a family, therefore, with our extensive menu we believe we offer a “one stop shop” which caters for all. Most \excitingly, we have a great Vegan menu, hopefully this means you don’t need to order from 2 places and have the 
                                        inconvenience of making sure they get delivered at the same time so that you can enjoy your takeaway together.</p>
                                    </div>
                                </div>
                            </div>
                          
                            <div class="col-lg-4 col-md-6 col-sm-12">
                                <!---    <h2>Welcome At <span></span></h2>
                                    <h3>PAPAG RESTAURANT</h3>
                                    <p>Papa Ge’s has been established in the uk since 2004 and started off in Tamworth in Staffordshire, it has not reached Birminghak with this new and improved store located at 888 Washwood Heath Road in Birmingham.

                                        We specialise in a wide range of foods such as great quality pizzas, traditional COD and chips, kebabs, burgers and southern fried chicken.
                                        We use the best ingredients to provide the best quality along with providing the best service. We specialise in traditional fish and chips and pizzas as these are our specialities and we have a combined experience of over 50 years. We endeavour to bring our customers the best quality food for the best price</p>
                                    <router-link :to="{ path: 'postal-code'}" class="anima-btn move-eff"><span>Order NOw</span></router-link> --->

                                <div class="about-us-banner2">
                                    <!-- <img src="/images/theme-1/about-banner2-img.png"> -->
                                    
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-8 col-md-6 col-sm-12">
                                <div class="about-content-tow">
                                      <p>Based in Coventry the City of Culture, we pride ourselves in serving the local community with quality produce and ingredients. We have a wealth of experience and a great ethos for delivering consistently high levels of customer satisfaction.</p>
                                    
                                </div>
                            </div>
                            <div class="col-lg-4">
                                
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <footer-menu></footer-menu>

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

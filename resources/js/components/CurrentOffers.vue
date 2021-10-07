<template>
    <div>
        <header-menu></header-menu>

        <section>
            <div class="current-offers">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="heading_wrapper text-center wow slidedown">

                                <section class="section-fullwidth menu-box menu-box-style2">
                                    <div class="container">
                                        <div class="row main-title">
                                            <div class="col-12">
                                                <h3>Current Offers</h3>
                                            </div>
                                        </div>
                               
                                        <div class="row">
                                            <div class="col-lg-4 col-md-12 col-sm-12">
                                                <h3 class="sub-title"> Breakfast</h3>
                                                <div class="menu-box">
                                                  <ul class="dish-list">
                                                    <li class="box">
                                                        <a href="javascript:;">
                                                            <h3>Vegetarian Breakfast</h3>
                                                        </a>
                                                        <p class="dis">
                                                        2 fried eggs, vegetarian sausage, hash browns, toasted tomatoes, mushrooms or baked beans, served with 2 slices of toast
                                
                                                        </p>
                                                        <span><span>£</span>6.00</span>
                                                    </li>
                                                  </ul>
                                                </div>
                                            </div>

                                        </div>
                                        <button class="btn"  @click.prevent="openPostalCode">Order Now</button>
                                        <div class="menus pattern ">

                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
        <footer-menu></footer-menu>
    </div>
</template>

<script>
    export default {
        mounted() {
            $('div#page_content').stop().animate({
                scrollTop: 0
            }, 'fast', 'swing');
        },
        created(){
            $('div#page_content').stop().animate({
                scrollTop: 0
            }, 'fast', 'swing');
        }
    }
</script>


<script>
    export default {
        data: function () {
            return {
            };
        },
        methods : {
            randomNumber : function(){
                return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
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
    .maps iframe {
        height:300px;
    }


    @media (max-width: 575.98px) {

        #contatti{padding-bottom: 800px;}

    }


    @media (min-width: 576px) {

        #contatti{padding-bottom: 800px;}


    }

    @media (min-width: 768px) {

        #contatti{padding-bottom: 350px;}

    }

    @media (min-width: 992px) {
        #contatti{padding-bottom: 200px;}

    }


    #author a{
        color: #fff;
        text-decoration: none;

    }
</style>

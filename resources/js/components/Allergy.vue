<template>
    <div>
        <header-menu></header-menu>

        <section>
            <div class="allergy-info">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="heading_wrapper text-center wow slidedown">
                                <h1 class="ice_heading_white">Allergy</h1>
                                <p class="white">Please contact our kitchen staff on <a href="tel:0121 337 7378">0121 337 7378</a> for allergy information.</p>
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

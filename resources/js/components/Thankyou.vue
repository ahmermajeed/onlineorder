<template>
    <div>
<!--        <header-menu></header-menu>-->
        <section class="inner-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h3 style="text-align:center" id="page_content">Thank You</h3>
                        <h3 style="text-align:center">Order has been  Received</h3>
                    </div>
                </div>
            </div>
        </section>
<!--        <footer-menu></footer-menu>-->
    </div>
</template>

<script>
    export default {
        data: function () {
            return {

            };
        },
        methods : {
            randomNumber : function(){
                return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
            },

        },
        created(){
            $('div#page_content').stop().animate({
                scrollTop: 0
            }, 'slow', 'swing');
        }

    }
</script>




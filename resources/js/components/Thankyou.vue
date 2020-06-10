<template>
    <div>
        <header-menu></header-menu>
        <div class="container">
            <div class="row" style="height:300px">
                <div class="col-sm-4 offset-4">
                <h2 class="header"  style="text-align:center;margin-top:100px"> You order Has Been Placed </h2>
                <h2 class="header"  style="text-align:center;margin-top:50px"> Your order id is #papaGe  {{randomNumber()}}</h2>
                </div>
            </div>
            </div>
            <div class="clear-fix"></div>
        <div class="row"><div class="col-12"><div class="footer"><div class="row"><div class="col-md-5 footer-left"><p>© 2020 <span>All rights reserved</span></p> <p><span>Site by</span> <a href="#">SoftechWeb</a></p></div> <div class="col-md-2 footer-logo"><img src="/images/mainlogo.webp?555cacad6fdf5e0098c65e66fe7955a0" alt="logo"></div> <div class="col-md-5 footer-right"><p><span>Email:</span> <a href="#">iinfo@softechweb.co.uk</a></p> <p><span>Phone:</span> 03301330247</p> <div class="footer-social"><a href="#"><i class="fa fa-facebook-f"></i></a> <a href="#"><i class="fa fa-twitter"></i></a></div></div></div></div></div></div>


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
            }
        }

    }
</script>




<template>
    <div>
        <header-menu></header-menu>
        <div class="container-fluid">
            <div class="row contactuspage">
                <div class="container mt-5">

                    <div class="row">
                        <div class="col-md-12 maps">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9941.854482253924!2d-0.9723299!3d51.4680038!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaf3db6ac989416df!2sPapa%20Gee!5e0!3m2!1sen!2s!4v1591820858758!5m2!1sen!2s" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                        <div class="col-12 contact-info-sec text-center">
                            <div class="row">
                                <div class="col-md-4 col-sm-4 col-lg-4">
                                    <div class="contact-info-box">
                                        <i class="fa fa-phone-square"></i>
                                        <h5 itemprop="headline">PHONE</h5>
                                        <p itemprop="description">Phone 01: (0091) 8547 632521</p>
                                        <p itemprop="description">Phone 02: (084) 965 4788</p>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4 col-lg-4">
                                    <div class="contact-info-box">
                                        <i class="fa fa-map-marker"></i>
                                        <h5 itemprop="headline">ADDRESS</h5>
                                        <p itemprop="description">5Tth Floor, AH Building, 756 New St Melbourne, Australia.</p>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4 col-lg-4">
                                    <div class="contact-info-box">
                                        <i class="fa fa-envelope"></i>
                                        <h5 itemprop="headline">EMAIL</h5>
                                        <p itemprop="description">support@yourdomain.com</p>
                                        <p itemprop="description">hello@yourdomain.com</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-12 contactus-form">
                            <h2>Contact Us</h2>
                            <form action="">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control mt-2" placeholder="First Name" required>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control mt-2" placeholder="Last Name" required>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <input type="email" class="form-control mt-2" placeholder="Email" required>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <input type="number" class="form-control mt-2" placeholder="Mpbile" required>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Comment" rows="5" required></textarea>
                                        </div>
                                    </div>

                                    <div class="col-12 text-right">
                                        <button class="anima-btn move-eff" type="submit">Submit</button>
                                    </div>
                                </div>
                            </form>
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
                                <p>Â© 2020 <span>All rights reserved</span></p>
                                <p><span>Site by</span> <a href="#">SoftechWeb</a></p>
                            </div>
                            <div class="col-md-2 footer-logo"><img
                                src="/images/mainlogo.webp?555cacad6fdf5e0098c65e66fe7955a0" alt="logo"></div>
                            <div class="col-md-5 footer-right">
                                <p><span>Email:</span> <a href="#">iinfo@softechweb.co.uk</a></p>
                                <p><span>Phone:</span> 03301330247</p>
                                <div class="footer-social"><a href="#"><i class="fa fa-facebook-f"></i></a> <a
                                    href="#"><i class="fa fa-twitter"></i></a></div>
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

<template>
    <div>
        <header-menu></header-menu>
        <section class="inner-section">
            <div class="container-fluid">
                <div class="feedback-banner">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-12 px-0">
                            <div class="feed-banner-first">
                                
                            </div>

                            
                        </div>
                        <div class="col-4">
                           
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-12  px-0">
                            <div class="feed-banner-second">
                                
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
                
            </div> 
            <div class="container form-feedback-section " >
                <div class="row" id="page_content">
                    <div class="col-2">    </div>
                    <div class="col-md-8 table-booked feedback form-feedback">
                        <h1>Contact Us</h1>
                        <form class="mt-5 frm-body">
                            <div class="row mb-3">
                                <div class="col-lg-6 col-md-6 col-sm-12 pb-3">
                                  <label>Name</label>
                                  <input type="text" class="form-control" placeholder="Enter Your Name">
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 pb-3">
                                  <label>Phone </label>
                                  <input type="text" class="form-control" placeholder="Enter Your Phone Number">
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 pb-3">
                                  <label>Email</label>
                                  <input type="email" class="form-control" placeholder="Enter Your Email">
                                </div>
                            </div>
                            
                            <div class="row mb-3">
                                <div class="col-md-12">
                                    <label>Share your experience</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 text-center">
                                    <button type="submit" class="custom-btn btn btn-outline-danger">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-2"></div>
                </div>
            </div>

            <div class="contact-details">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h1>Get in Touch</h1>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="box">
                                        <img src="images/contact/phone-call.png" alt="">
                                        <p><a href="tel:0121 337 7378">0121 337 7378</a></p>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="box">
                                        <img src="images/contact/location-pin.png" alt="">
                                        <p>223-225 Edward Road, Balsall Heath, B12 9LH, Birmingham</p>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="box">
                                        <img src="images/contact/hour.png" alt="">
                                        <p>Mon - Sun: 1:00 PM - 5:30AM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12">
                    
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.2156154533595!2d-1.822215984654894!3d52.49333647980907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bae64827134d%3A0x2e1a51de3c022c50!2s888a%20Washwood%20Heath%20Rd%2C%20Ward%20End%2C%20Birmingham%20B8%202NB%2C%20UK!5e0!3m2!1sen!2s!4v1592827053509!5m2!1sen!2s" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"  width="100%" height="300"></iframe>
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

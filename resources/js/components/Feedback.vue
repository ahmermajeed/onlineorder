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
                        <h1>Feedback</h1>
                        <form class="mt-5 frm-body">
                            <div class="row mb-3">
                                <div class="col-lg-6 col-md-6 col-sm-12 pb-3">
                                  <label>Name</label>
                                  <input type="text" class="form-control" placeholder="Enter Your Name">
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 pb-3">
                                  <label>Email</label>
                                  <input type="email" class="form-control" placeholder="Enter Your Email">
                                </div>
                            </div>
                            <div class="reactions">
                                <div class="row">
                                <label class="col-md-7">
                                    how has your Onboarding experience been so far?
                                </label>
                                <div class="col-md-5">
                                    <div class="bad exp react">
                                    <input class="checkbox-tools" type="radio" name="tools" id="tool-1" checked>
                                    <label class="for-checkbox-tools" for="tool-1">
                                        <i class="fas fa-sad-tear"></i>
                                    </label>
                                    </div>
                                    <div class="good exp react">
                                    <input class="checkbox-tools" type="radio" name="tools" id="tool-2">
                                    <label class="for-checkbox-tools" for="tool-2">
                                        <i class="fas fa-smile-beam"></i>
                                    </label>
                                    </div>
                                    <div class="v-good exp react">
                                    <input class="checkbox-tools" type="radio" name="tools" id="tool-3">
                                    <label class="for-checkbox-tools" for="tool-3">
                                        <i class="fas fa-grin-stars"></i>
                                    </label>
                                    </div>
                                </div>
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
                                    <button type="submit" class="custom-btn btn btn-outline-light">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-2"></div>
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

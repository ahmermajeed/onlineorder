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
                        <div id="messages">
                            <div class="alert alert-success" role="alert" v-if="successMessage">
                                {{ successMessage }}
                            </div>
                            <div class="alert alert-danger" role="alert" v-if="errorMessage">
                                {{ errorMessage}}
                            </div>
                        </div>

                        <h1>Feedback</h1>

                        <form class="mt-5 frm-body"  @submit.prevent="validateBeforeSubmit()">
                            <div class="row mb-3">
                                <div class="col-lg-6 col-md-6 col-sm-12 pb-3">
                                  <label>Name</label>
                                  <input type="text" class="form-control" placeholder="Enter Your Name" v-model="formData.name">
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-12 pb-3">
                                  <label>Email</label>
                                  <input type="email" class="form-control" placeholder="Enter Your Email" v-model="formData.email">
                                </div>
                            </div>
                            <div class="reactions">
                                <div class="row">
                                <label class="col-md-7">
                                    how has your Onboarding experience been so far?
                                </label>
                                <div class="col-md-5">
                                    <div class="bad exp react">
                                    <input class="checkbox-tools" value="Bad" type="radio" name="tools" id="tool-1" checked v-model="formData.rating">
                                    <label class="for-checkbox-tools" for="tool-1">
                                        <i class="fas fa-sad-tear"></i>
                                    </label>
                                    </div>
                                    <div class="good exp react">
                                    <input class="checkbox-tools" value="Good" type="radio" name="tools" id="tool-2" v-model="formData.rating">
                                    <label class="for-checkbox-tools" for="tool-2">
                                        <i class="fas fa-smile-beam"></i>
                                    </label>
                                    </div>
                                    <div class="v-good exp react">
                                    <input class="checkbox-tools" value="Very Good" type="radio" name="tools" id="tool-3 "v-model="formData.rating">
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
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="formData.experience"></textarea>
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
        </section>

        <!-- testimonials section -->
        
        <testimonials></testimonials>

        <footer-menu></footer-menu>
    </div>
</template>

<script>



    import Countdown from 'vuejs-countdown';
    import Datepicker from 'vuejs-datepicker';

    export default {
        components: {
            Datepicker,
            Countdown,
        },
        data() {
            return {
                formData: {
                    name: '',
                    email: '',
                    rating: '',
                    experience: '',
                },
                successMessage: null,
                errorMessage: null,

            };
        },
        mounted() {
            $('div#page_content').stop().animate({
                scrollTop: 0
            }, 'fast', 'swing');
        },
        created(){
            $('div#page_content').stop().animate({
                scrollTop: 0
            }, 'fast', 'swing');
        },
        methods: {
            CreateFeedback() {
                var self 	 = this;
                axios.post('api/feedback', self.formData).then(response => {
                    console.log('response');
                    console.log(response);
                    self.loading 		= false;
                    self.errorMessage  = '';
                    response 			= response.data;
                    setTimeout(function () {
                        self.successMessage = '';
                        self.formData = {
                            name: '',
                            email: '',
                            rating: '',
                            experience: '',
                        };
                    self.successMessage = response.message;
                    self.scrollToTop();

                    }, 3000);

                }).catch(error => {

                    if (Object.keys(error.response.data).length > 0) {
                        self.errorMessage = error.response.data.error.message;
                        self.scrollToTop();
                        setTimeout(function () {
                            self.errorMessage = '';
                        }, 5000);

                        return;
                    }

                });
            },

            validateBeforeSubmit() {
                var self 	 = this;
                let error 	 = false;


                if (self.formData.name == null || self.formData.name == '') {
                    self.errorMessage = 'Name is required';
                    error = true;
                    self.scrollToTop();
                    return;
                }


                if (self.formData.email == null || self.formData.email == '') {
                    self.errorMessage = 'Email is required';
                    error = true;
                    self.scrollToTop();
                    return;
                }
                if (!this.validateEmail(self.formData.email)) {
                    self.errorMessage = 'Email is must be a valid email';
                    error = true;
                    self.scrollToTop();
                    return;
                }


                if (self.formData.rating == null || self.formData.rating == '') {
                    self.errorMessage = 'Rating is required';
                    error = true;
                    self.scrollToTop();
                    return;
                }




                if (error == false) {
                    self.CreateFeedback();
                }
            },
            validateEmail(email) {
                var re = /\S+@\S+\.\S+/;
                return re.test(email);
            },




            scrollToTop() {
                $('html, body').animate({
                    scrollTop: $("div#messages").offset().top
                }, 1000);
            },
        },
    }
</script>


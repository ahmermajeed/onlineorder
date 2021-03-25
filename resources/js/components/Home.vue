<template>
    <div class="home-page">
        <header-menu></header-menu>
        
        <!-- banner start -->
        <section class="hero-sec">
            <banner></banner>
        </section>
        <!-- banner end -->

        <!-- Welcome section -->
        <section class="section-fullwidth">
            <welcome></welcome>
        </section>        
        <!-- Welcome section end -->

        <!-- Gallery Section -->
        <section class="section-fullwidth">
            <gallery></gallery>
        </section> 
        <!-- Gallery Section end -->

        <!-- About section -->
        <section class="section-fullwidth">
            <about-us></about-us>
        </section>
        <!-- About section end -->


        <section class="section-fullwidth reservation">
            <div class="container">
                <div class="table-booked pattern">
                    <div class="row">
                        <div class="col-lg-3 col-md-2 col-sm-1">
                              
                        </div>
                        <div class="col-lg-6 col-md-8 col-sm-12">
                            <div class="form-box">
                                <div class="title">
                                    <h3>Contact us</h3>
                                    <p>231 Edward Road</p>

                                </div>
                                <form>
                                    <div class="frm-body">
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label for=""> Name</label>
                                                <input type="text" class="form-control" id="" placeholder="Enter Your Name">
                                            </div>
                                            <div class="form-group col-md-12">
                                                <label>Email</label>
                                                <input type="email" class="form-control" id="" placeholder="Enter  email ">
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="form-group col-md-12">
                                                <label for="">Address</label>
                                                <input type="text" class="form-control" id="" placeholder="Enter Address">
                                            </div>
                                            <div class="form-group col-md-12">
                                                <label>Number</label>
                                                <input type="phone" class="form-control" id="" placeholder="Enter Number">
                                            </div>
                                        </div>
                                    </div>
                                     <div class="frm-ftr view-btn text-center ">
	                    				   <button class="btn btn-rounded-danger">Submit</button>
	                				</div>

                                </form>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-2 col-sm-1"></div>
                    </div>
                </div>
            </div>
        </section>
        <footer-menu></footer-menu>
          <postal-code-popup  @HideModalValue="hideModal"   :showModalProp="showPostalCode"></postal-code-popup>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                images: [
                    'images/new-design/gallery/1.png',
                    'images/new-design/gallery/2.png',
                    'images/new-design/gallery/3.png',
                    'images/new-design/gallery/4.png',
                    'images/new-design/gallery/5.png',
                    'images/new-design/gallery/6.png',
                ],
                stories: [],
                index: null,
                showPopup: false,
                menu: false,
                allergy: false,
                showPostalCode: false,
            };
        },
        mounted() {
            this.getStory();
            console.log('Component mounted.')
        },
        methods: {
            getStory(){
                let  _this = this
                _this.loading  = true;
                axios.get('/api/our-story')
                    .then((response) => {
                        _this.stories =  response.data.data;
                        _this.loading  = false;
                    });
            },
            openPostalCode() {
                this.showPostalCode = true;
            },
            hideModal() {
                this.showPostalCode = false;
            },

        }
    }
</script>


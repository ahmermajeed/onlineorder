<template>
    <div>
        <header-menu></header-menu>
        <section class="section-fullwidth deliver-area ">
            <div class="container">
                  <div class="row">
                    <div class="col-md-4 col-12">
                       <div class="card-offer text-center">
                           <div class="card-content">
                             <h3>Meal Deal 1</h3>
                             <p class="mb-3">Fillet Burger, Medium Fries &amp; A Can of Soft Drink</p>
                           </div>
                           <div class="row pries-bar">
                                <div class="col-12 col-lg-8 order-btn">
                                    <button type="button" class="btn btn-outline-secondary" @click.prevent="openPostalCode">Order Now!</button>
                                    <a href="#" class=""></a>
                                </div>
                                <div class="col-12 col-lg-4 pt-2 pt-lg-0">
                                    <div class="pries">
                                        <p>£3.29</p>
                                    </div>
                                </div>
                           </div>
                          

                      </div>
                    </div>
                    <div class="col-md-4 col-12">
                       <div class="card-offer text-center">
                           <div class="card-content">
                              <h3>Meal Deal 2</h3>
                             <p class="mb-3">Quarter Pounder Burger, Medium Fries &amp; A Can of soft Drink</p>
                           </div>
                           <div class="row pries-bar">
                                <div class="col-12 col-lg-8 order-btn">
                                    <button type="button" class="btn btn-outline-secondary" @click.prevent="openPostalCode">Order Now!</button>
                                    <a href="#" class=""></a>
                                </div>
                                <div class="col-12 col-lg-4 pt-2 pt-lg-0">
                                    <div class="pries">
                                        <p>£2.99</p>
                                    </div>
                                </div>
                           </div>

                      </div>
                    </div>
                    <div class="col-md-4 col-12">
                       <div class="card-offer text-center">
                           <div class="card-content">

                             <h3>Meal Deal 3</h3>
                             <p class="mb-3">2 Pieces Chicken, Medium Fries &amp; A Can of soft Drink </p>
                           </div>
                           <div class="row pries-bar">
                                <div class="col-12 col-lg-8 order-btn">
                                    <button type="button" class="btn btn-outline-secondary" @click.prevent="openPostalCode">Order Now!</button>
                                    <a href="#" class=""></a>
                                </div>
                                <div class="col-12 col-lg-4 pt-2 pt-lg-0">
                                    <div class="pries">
                                        <p>£2.00</p>
                                    </div>
                                </div>
                           </div>
                      </div>
                    </div>
                  </div>
            </div>
        </section>

        <section class="rating-area">
            <div class="container">
            <div class="rating-img">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12 px-0">
                        <div class="rating-content">
                            <div class="row">
                                <div class="col-lg-2  col-sm-3 col-md-3 px-1 payment-type">
                                    <p class="rounded-circle">Cash<br> only</p>

                                </div>
                                <div class="col-lg-10 col-sm-9 col-md-9 px-1 delivry-content">
                                    <p>Free Delivery</p>
                                    <span>Min. Order £2.<br>We accept all major cards.</span>

                                </div>

                            </div>
                            <div class="located-num">
                                <strong>01562 74 7727</strong>
                                <p>Worcestershire Country 31A Comberton Hill,<br>
                                 Kidderminster DY10 1QN, UK</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        </section>
        <section class="section-fullwidth menu-box">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-12 px-0">
                        <div class="menus-pattern-first">
                            <div class="menu-first-before"></div>
                                <div class="first-menu title-styl">


                                    <h2>Burgers</h2>
                                    <div class="menu-content">
                                        <div class="row">
                                            <div class="col-8">
                                                <p>Meal</p>
                                            </div>
                                            <div class="col-2 text-right">
                                                <span class="badge badge-pill badge-danger">Regular</span>
                                            </div>   
                                            <div class="col-2 text-right">
                                                <span class="badge badge-pill badge-danger">Meal</span>
                                            </div>   
                                          </div>
                                    </div>
                                    <div class="menu-item">

                                        <div class="box-borders">
                                            <div class="row">
                                                <div class="col-8">
                                                    <p>Giant Burger</p>
                                                </div>
                                                <div class="col-2 text-right">
                                                    <span>£2.69</span>
                                                </div>
                                                <div class="col-2 text-right">
                                                    <span>£3.69</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="box-borders">
                                            <div class="row">
                                                <div class="col-8">
                                                    <p>Chicken Fillet Burger</p>
                                                </div>
                                                <div class="col-2 text-right">
                                                    <span>£2.49</span>
                                                </div>
                                                <div class="col-2 text-right">
                                                    <span>£3.49</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="box-borders">
                                            <div class="row">
                                                <div class="col-8">
                                                    <p>Chicken Steak Burger</p>
                                                </div>
                                                <div class="col-2 text-right">
                                                    <span>£1.40</span>
                                                </div>
                                                <div class="col-2 text-right">
                                                    <span>£2.40</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="box-borders">
                                            <div class="row">
                                                <div class="col-8">
                                                    <p>Veggie Burger</p>
                                                </div>
                                                <div class="col-2 text-right">
                                                    <span>£1.99</span>
                                                </div>
                                                <div class="col-2 text-right">
                                                    <span>£2.99</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="box-borders">
                                            <div class="row">
                                                <div class="col-8">
                                                    <p>Fish Burger</p>
                                                </div>
                                                <div class="col-2 text-right">
                                                    <span>£1.99</span>
                                                </div>
                                                <div class="col-2 text-right">
                                                    <span>£2.99</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="box-borders">
                                            <div class="row">
                                                <div class="col-8">
                                                    <p>Giant Spicy Burger</p>
                                                </div>
                                                <div class="col-2 text-right">
                                                    <span>£2.69</span>
                                                </div>
                                                <div class="col-2 text-right">
                                                    <span>£3.69</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="box-borders">
                                            <div class="row">
                                                <div class="col-8">
                                                    <p>Spicy Fillet Burger</p>
                                                </div>
                                                <div class="col-2 text-right">
                                                    <span>£2.49</span>
                                                </div>
                                                <div class="col-2 text-right">
                                                    <span>£3.49</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="box-borders">
                                            <div class="row">
                                                <div class="col-8">
                                                    <p>Spicy Steak Burger</p>
                                                </div>
                                                <div class="col-2 text-right">
                                                    <span>£1.40</span>
                                                </div>
                                                <div class="col-2 text-right">
                                                    <span>£2.40</span>
                                                </div>
                                            </div>
                                        </div>    

                                        <div class="box-borders">
                                            <div class="row">
                                                <div class="col-8">
                                                    <p>Spicy Veggie Burger</p>
                                                </div>
                                                <div class="col-2 text-right">
                                                    <span>£1.99</span>
                                                </div>
                                                <div class="col-2 text-right">
                                                    <span>£2.99</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="box-borders">
                                            <div class="row">
                                                <div class="col-8">
                                                    <p>Spicy Fish Burger</p>
                                                </div>
                                                <div class="col-2 text-right">
                                                    <span>£1.99</span>
                                                </div>
                                                <div class="col-2 text-right">
                                                    <span>£2.99</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 px-0">
                        <div class="menus-pattern-second">
                            <div class="menu-second-before"></div>
                            <div class="second-menu title-styl">
                                <h2>Chicken</h2>
                                <div class="menu-content">
                                    <div class="row ">
                                        <div class="col-4">
                                            <p>Menu:</p>
                                        </div>
                                        <div class="col-2 text-center">
                                            <span class="badge badge-warning">1Pcs</span>
                                        </div>
                                        <div class="col-2 text-center">
                                            <span class="badge badge-danger">2Pcs</span>
                                        </div>
                                        <div class="col-2 text-center">
                                            <span class="badge badge-warning">3Pcs</span>
                                        </div>
                                        <div class="col-2 text-center">
                                            <span class="badge badge-warning">5Pcs</span>
                                        </div>

                                    </div>
                                </div>
                                <div class="menu-item">
                                    <div class="box-borders">
                                        <div class="row">
                                            <div class="col-4">
                                                <p>Chicken</p>
                                            </div>
                                            <div class="col-2 text-center">
                                                <span>£1.20</span>
                                            </div>
                                            <div class="col-2  text-center">
                                                <span>£2.20</span>
                                            </div>
                                            <div class="col-2  text-center">
                                                <span>£3.00</span>
                                            </div>
                                            <div class="col-2  text-center">
                                                <span>£4.95</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="box-borders">
                                        <div class="row">
                                            <div class="col-4">
                                              <p>Spicy Chicken</p>
                                            </div>
                                            <div class="col-2 text-center">
                                                <span>£1.20</span>
                                            </div>
                                            <div class="col-2  text-center">
                                                <span>£2.20</span>
                                            </div>
                                            <div class="col-2  text-center">
                                                <span>£3.10</span>
                                            </div>
                                            <div class="col-2  text-center">
                                                <span>-</span>
                                            </div>
                                        </div>
                                    </div>                                  
                                </div>
                            </div>

                            <div class="second-menu title-styl">
                                <h2>Side Order</h2>

                                <div class="menu-item">
                                    <div class="box-borders">
                                        <div class="row">
                                            <div class="col-10">
                                                <p>Hot Apple Pie</p>
                                            </div>
                                            <div class="col-2 text-center">
                                                <span>£0.99</span>
                                            </div>
                                        </div>
                                    </div>  

                                    <div class="box-borders">
                                        <div class="row">
                                            <div class="col-10">
                                                <p>BBQ Beans</p>
                                            </div>
                                            <div class="col-2 text-center">
                                                <span>£0.95</span>
                                            </div>
                                        </div>
                                    </div>  

                                    <div class="box-borders">
                                        <div class="row">
                                            <div class="col-10">
                                                <p>Corn on the Cob</p>
                                            </div>
                                            <div class="col-2 text-center">
                                                <span>£1.20</span>
                                            </div>
                                        </div>
                                    </div>                                 
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="menus pattern ">

                </div>
            </div>
            <div class="family-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div class="family-card rounded-lg">
                                <div class="row">
                                    <div class="col-lg-4 col-md-2 ">
                                    </div>
                                    <div class="col-lg-8 col-md-10">
                                        <h3>
                                        Meal Deal
                                        </h3>
                                        <ul>
                                            <li>30 Pcs Spicy Chicken Wings,</li>
                                            <li>4 Large Fries,B eans</li>
                                            <li>1.5ltr Bottle of Drink</li>
                                        </ul>
                                                                                
                                        <div class="row pries-bar mt-3">
                                            <div class="col-8 order-btn">
                                                <button type="button" class="btn btn-outline-secondary" @click.prevent="openPostalCode">Order Now!</button>
                                                <a href="#" class=""></a>
                                            </div>
                                            <div class="col-4">
                                                <div class="pries">
                                                    <p>£15.00</p>
                                                </div>
                                            </div>
                                 </div>
                                    </div>

                                </div>



                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div class="family-card rounded-lg">
                                <div class="row">
                                    <div class="col-lg-4 col-md-2">

                                
                                    </div>
                                    <div class="col-lg-8 col-md-10">
                                        <h3>
                                           Meal Deal
                                        </h3>
                                         <ul>
                                            <li>4 Pcs Chicken Strips Meal,</li>
                                            <li>4 Pcs Chicken Strips,</li>
                                            <li>Reg Fries &amp; Drinks</li>
                                         </ul>

                                         <div class="row pries-bar mt-3">
                                            <div class="col-8 order-btn">
                                                <button type="button" class="btn btn-outline-secondary" @click.prevent="openPostalCode">Order Now!</button>
                                                <a href="#" class=""></a>
                                            </div>
                                            <div class="col-4">
                                                <div class="pries">
                                                    <p>£4.50</p>
                                                </div>
                                            </div>
                                 </div>
                                    </div>

                                </div>



                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </section>
        <section class="section-fullwidth deal-section">
            <div class="container">
                <div class="deal-content">
                    <div class="offers-head">
                         <h2 class="text-center">Discover Our Offers</h2>
                             <p class="text-center">Check out our offers and follow us on <span>Facebook</span> and <span>Instagram</span></p>
                    </div>

                     <div class="row justify-content-md-center">
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="offers">
                                <h5>Value Box Meal</h5>
                                <p>2 Pcs Chicken,<br> 3 Spicy Wings,<br> Fries,<br> &amp; Drink. &nbsp;</p>
                                <div class="pries"><strong>£3.49</strong></div>

                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="offers">
                                <h5>Mix Meal</h5>
                                <p>Giant Burger, 3 pcs Chicken, <br> 6 Spicy Wings, Reg BBQ Beans,<br> Chicken Steak Burger,<br> Fries, Drink.</p>
                                <div class="pries"><strong>£9.99</strong></div>

                            </div>
                        </div>

                     </div>

                </div>
            </div>
        </section>

        <section class="section-fullwidth reservation">
            <div class="container">
                <div class="table-booked pattern">
                    <div class="row">
                        <div class="col-lg-3 col-md-2 col-sm-1">
                              <!--   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.2156154533595!2d-1.822215984654894!3d52.49333647980907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bae64827134d%3A0x2e1a51de3c022c50!2s888a%20Washwood%20Heath%20Rd%2C%20Ward%20End%2C%20Birmingham%20B8%202NB%2C%20UK!5e0!3m2!1sen!2s!4v1592827053509!5m2!1sen!2s" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0" width="100%" height="450"></iframe> -->
                        </div>
                        <div class="col-lg-6 col-md-8 col-sm-12">
                            <div class="form-box">
                                <div class="title">
                                    <h3>Contact us</h3>
                                    <p>Worcestershire Country 31A Comberton Hill,<br> Kidderminster DY10 1QN, UK</p>

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
    import VueGallery from 'vue-gallery';
    import {
        Hooper,
        Slide,
        Navigation as HooperNavigation
    } from 'hooper';

    import 'hooper/dist/hooper.css';
    export default {
        components: {
            Hooper,
            Slide,
            HooperNavigation,
            'gallery': VueGallery,
        },
        data: function () {
            return {
                images: [
                    '../../images/mainbanner1.jpeg',
                    '../../images/image00003.jpg',
                ],
                stories: [],
                index: null,
                showPopup: false,
                menu: false,
                showPostalCode: false,
                allergy: false
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


<template>
    <div>
        <header-menu></header-menu>

        <div class="timing-ticker-area">
            <div class="heading">
                <h3>Shop Hours</h3>
            </div>
            <div class="timing">
                <ul>
                    <li  v-for="timing  in info.timing"  >
                      <span class="day">{{timing.day}}</span>
                      <span class="delivery">{{timing.start_time}}</span>
                      <span class="collection">{{timing.end_time}}</span>
                    </li>

                </ul>
            </div>
        </div>
        <section class="section-fullwidth deliver-area ">
            <div class="container">
                  <div class="row">
                    <div class="col-md-4 col-12">
                       <div class="card-offer text-center">
                           <div class="card-content">
                             <h3>Curry Deal 1</h3>
                             <p class="mb-3">Portion Of Samosas Or Seekh Kebabs Nan Or Rice, 2 Chappattis, Any Curry Worth £5.50</p>
                           </div>
                           <div class="row pries-bar">
                                <div class="col-12 col-lg-8 order-btn">
                                    <button type="button" class="btn btn-outline-secondary" @click.prevent="openPostalCode">Order Now!</button>
                                    <a href="#" class=""></a>
                                </div>
                                <div class="col-12 col-lg-4 pt-2 pt-lg-0">
                                    <div class="pries">
                                        <p>£8.99</p>
                                    </div>
                                </div>
                           </div>


                      </div>
                    </div>
                    <div class="col-md-4 col-12">
                       <div class="card-offer text-center">
                           <div class="card-content">
                              <h3>Curry Deal 2</h3>
                             <p class="mb-3">
                                Special Meal For Two 2 Popadoms, 2 Seekh Kebabs, Onion Bhajis, Chicken Masala, Chicken Or Lamb Karahi, 2 Chappattis, 1 Rice & Nan
                             </p>
                           </div>
                           <div class="row pries-bar">
                                <div class="col-12 col-lg-8 order-btn">
                                    <button type="button" class="btn btn-outline-secondary" @click.prevent="openPostalCode">Order Now!</button>
                                    <a href="#" class=""></a>
                                </div>
                                <div class="col-12 col-lg-4 pt-2 pt-lg-0">
                                    <div class="pries">
                                        <p>£15.99</p>
                                    </div>
                                </div>
                           </div>

                      </div>
                    </div>
                    <div class="col-md-4 col-12">
                       <div class="card-offer text-center">
                           <div class="card-content">

                             <h3>Pizza Deal</h3>
                             <p class="mb-3">Any Three 11” Pizzas Of Your Choice Only</p>
                           </div>
                           <div class="row pries-bar">
                                <div class="col-12 col-lg-8 order-btn">
                                    <button type="button" class="btn btn-outline-secondary" @click.prevent="openPostalCode">Order Now!</button>
                                    <a href="#" class=""></a>
                                </div>
                                <div class="col-12 col-lg-4 pt-2 pt-lg-0">
                                    <div class="pries">
                                        <p>£15.99</p>
                                    </div>
                                </div>
                           </div>
                      </div>
                    </div>
                  </div>
                  <!-- <div class="row timing-area mt-5">
                      <div class="col-12 text-center">
                          <h2>Opening Timing</h2>
                      </div>
                      <div class="col-md-6 col-12 mb-4">
                          <div class="bx-time">
                          <h3>Delivery</h3>
                          <ul>
                              <li>
                                  <span>Monday</span><span class="time">11:00 - 23:45</span>
                              </li>
                              <li>
                                  <span>Tuesday</span><span class="time">11:00 - 23:45</span>
                              </li>
                              <li>
                                  <span>Wednesday</span><span class="time">11:00 - 23:45</span>
                              </li>
                              <li>
                                  <span>Thursday</span><span class="time">11:00 - 23:45</span>
                              </li>
                              <li>
                                  <span>Friday</span><span class="time">11:00 - 23:45</span>
                              </li>
                              <li>
                                  <span>Saturday</span><span class="time">11:00 - 23:45</span>
                              </li>
                              <li>
                                  <span>Sunday</span><span class="time">11:00 - 23:45</span>
                              </li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-md-6 col-12">
                        <div class="bx-time">
                          <h3>Collection</h3>
                          <ul>
                              <li>
                                  <span>Monday</span><span class="time">11:00 - 23:45</span>
                              </li>
                              <li>
                                  <span>Tuesday</span><span class="time">11:00 - 23:45</span>
                              </li>
                              <li>
                                  <span>Wednesday</span><span class="time">11:00 - 23:45</span>
                              </li>
                              <li>
                                  <span>Thursday</span><span class="time">11:00 - 23:45</span>
                              </li>
                              <li>
                                  <span>Friday</span><span class="time">11:00 - 23:45</span>
                              </li>
                              <li>
                                  <span>Saturday</span><span class="time">11:00 - 23:45</span>
                              </li>
                              <li>
                                  <span>Sunday</span><span class="time">11:00 - 23:45</span>
                              </li>
                          </ul>
                        </div>
                      </div>
                  </div> -->
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
                                <strong>0203 950 1750</strong>
                                <p>Centenary Way, Manchester M50 1RF, <br>United Kingdom</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        </section>
        <section class="section-fullwidth menu-box menu-box-style2">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-12 col-sm-12 px-0">
                        <div class="menus-pattern-first">
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
                                                  <p>Plain Burger</p>
                                              </div>
                                              <div class="col-2 text-right">
                                                  <span>1/4lb</span>
                                              </div>
                                              <div class="col-2 text-right">
                                                  <span>£3.00</span>
                                              </div>
                                          </div>
                                      </div>

                                      <div class="box-borders">
                                          <div class="row">
                                              <div class="col-8">
                                                  <p>Cheese Burger</p>
                                              </div>
                                              <div class="col-2 text-right">
                                                  <span>1/4lb</span>
                                              </div>
                                              <div class="col-2 text-right">
                                                  <span>£3.20</span>
                                              </div>
                                          </div>
                                      </div>

                                      <div class="box-borders">
                                          <div class="row">
                                              <div class="col-8">
                                                  <p>Coleslaw Burger</p>
                                              </div>
                                              <div class="col-2 text-right">
                                                  <span>1/4lb</span>
                                              </div>
                                              <div class="col-2 text-right">
                                                  <span>£3.20</span>
                                              </div>
                                          </div>
                                      </div>

                                      <div class="box-borders">
                                          <div class="row">
                                              <div class="col-8">
                                                  <p>Chilli Burger</p>
                                              </div>
                                              <div class="col-2 text-right">
                                                  <span>1/4lb</span>
                                              </div>
                                              <div class="col-2 text-right">
                                                  <span>£3.20</span>
                                              </div>
                                          </div>
                                      </div>

                                      <div class="box-borders">
                                          <div class="row">
                                              <div class="col-8">
                                                  <p>Garlic Burger</p>
                                              </div>
                                              <div class="col-2 text-right">
                                                  <span>1/4lb</span>
                                              </div>
                                              <div class="col-2 text-right">
                                                  <span>£3.20</span>
                                              </div>
                                          </div>
                                      </div>

                                      <div class="box-borders">
                                          <div class="row">
                                              <div class="col-8">
                                                  <p>Hawaiian Burger</p>
                                              </div>
                                              <div class="col-2 text-right">
                                                  <span>1/4lb</span>
                                              </div>
                                              <div class="col-2 text-right">
                                                  <span>£3.20</span>
                                              </div>
                                          </div>
                                      </div>

                                      <div class="box-borders">
                                          <div class="row">
                                              <div class="col-8">
                                                  <p>American Burger</p>
                                              </div>
                                              <div class="col-2 text-right">
                                                  <span>1/4lb</span>
                                              </div>
                                              <div class="col-2 text-right">
                                                  <span>£3.20</span>
                                              </div>
                                          </div>
                                      </div>

                                      <div class="box-borders">
                                          <div class="row">
                                              <div class="col-8">
                                                  <p>BBQ Burger</p>
                                              </div>
                                              <div class="col-2 text-right">
                                                  <span>1/4lb</span>
                                              </div>
                                              <div class="col-2 text-right">
                                                  <span>£3.20</span>
                                              </div>
                                          </div>
                                      </div>

                                      <div class="box-borders">
                                          <div class="row">
                                              <div class="col-8">
                                                  <p>Donner Burger</p>
                                              </div>
                                              <div class="col-2 text-right">
                                                  <span>1/4lb</span>
                                              </div>
                                              <div class="col-2 text-right">
                                                  <span>£3.20</span>
                                              </div>
                                          </div>
                                      </div>

                                      <div class="box-borders">
                                          <div class="row">
                                              <div class="col-8">
                                                  <p>Vegetarian Burger</p>
                                              </div>
                                              <div class="col-2 text-right">
                                                  <span>1/4lb</span>
                                              </div>
                                              <div class="col-2 text-right">
                                                  <span>£3.20</span>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-12 px-0">
                        <div class="menus-pattern-second">
                            <div class="second-menu title-styl">
                                <h2>Pizzas</h2>

                                <div class="menu-item">
                                    <div class="box-borders">
                                        <div class="row">
                                            <div class="col-10">
                                                <p>Donner Kebab</p>
                                            </div>
                                            <div class="col-2 text-center">
                                                <span>£4.00</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="box-borders">
                                        <div class="row">
                                            <div class="col-10">
                                                <p>Chicken Tikka Kebab</p>
                                            </div>
                                            <div class="col-2 text-center">
                                                <span>£4.40</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12 col-sm-12 px-0">
                        <div class="menus-pattern-second">
                            <div class="second-menu title-styl">
                                <h2>Desserts</h2>

                                <div class="menu-item">
                                    <div class="box-borders">
                                        <div class="row">
                                            <div class="col-10">
                                                <p>Chocolate Fudge Cake Slice</p>
                                            </div>
                                            <div class="col-2 text-center">
                                                <span>£2.50</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="box-borders">
                                        <div class="row">
                                            <div class="col-10">
                                                <p>Ben & Jerry Chocolate Fudge Ice Cream (500ml)</p>
                                            </div>
                                            <div class="col-2 text-center">
                                                <span>£5.00</span>
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
            <!-- <div class="family-section">
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
            </div> -->
        </section>



        <reservation></reservation>


        <!-- <section class="section-fullwidth deal-section">
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
        </section> -->

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
                                    <p>Office no 3 Beckshaw House Law Street Cleckheaton</p>

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
                images: [],
                stories: [],
                index: null,
                showPopup: false,
                menu: false,
                showPostalCode: false,
                allergy: false,
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


            },
        computed:{
            info(){
                return this.$store.state.general_data;
            },
        }

    }
</script>


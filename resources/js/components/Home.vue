<template>
    <div>
        <header-menu></header-menu>

       <!--  <div class="timing-ticker-area">
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
        </div> -->
        <section class="about-section">
            <div class="container">
                <div class="row main-title">
                    <div class="col-12">
                        <h3>{{stories.main_title}}</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-5 col-12">
                        <div class="imgbox">
                            <img :src="stories.image">
                        </div>
                    </div>
                    <div class="col-md-7 col-12">
                        <div class="contentbox">
                           {{stories.description}}
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="menu-gallery">
            <div class="container">
                <div class="row main-title">
                    <div class="col-12">
                        <h3>Our Menu</h3>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-4 col-md-6">
                        <div class="menubox">
                            <img src="https://cdn.pixabay.com/photo/2016/06/26/22/45/india-1481494__340.jpg">
                            <div class="ctabox">
                                <button type="button" class="btn btn-outline-secondary" @click.prevent="openPostalCode">Order Now!</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="menubox">
                            <img src="https://cdn.pixabay.com/photo/2017/06/16/11/38/breakfast-2408818__340.jpg">
                            <div class="ctabox">
                                <button type="button" class="btn btn-outline-secondary" @click.prevent="openPostalCode">Order Now!</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="menubox">
                            <img src="https://cdn.pixabay.com/photo/2018/12/04/16/49/tandoori-3856045__340.jpg">
                            <div class="ctabox">
                                <button type="button" class="btn btn-outline-secondary" @click.prevent="openPostalCode">Order Now!</button>
                            </div>
                        </div>
                    </div>
                </div>
                 <div class="row mb-4">
                    <div class="col-lg-4 col-md-6">
                        <div class="menubox">
                            <img src="https://cdn.pixabay.com/photo/2016/06/26/22/45/india-1481494__340.jpg">
                            <div class="ctabox">
                                <button type="button" class="btn btn-outline-secondary" @click.prevent="openPostalCode">Order Now!</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="menubox">
                            <img src="https://cdn.pixabay.com/photo/2017/06/16/11/38/breakfast-2408818__340.jpg">
                            <div class="ctabox">
                                <button type="button" class="btn btn-outline-secondary" @click.prevent="openPostalCode">Order Now!</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="menubox">
                            <img src="https://cdn.pixabay.com/photo/2018/12/04/16/49/tandoori-3856045__340.jpg">
                            <div class="ctabox">
                                <button type="button" class="btn btn-outline-secondary" @click.prevent="openPostalCode">Order Now!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- <section class="section-fullwidth deliver-area ">
            <div class="container">
                  <div class="row">
                    <div class="col-md-4 col-12">
                       <div class="card-offer text-center">
                           <div class="card-content">
                             <h3>Gourmet Beef Burger</h3>
                             <p class="mb-3">100% Beef Patty with cheese, onions, pickles, mustard & tomato ketchup. Served With Chips & Drink.</p>
                           </div>
                           <div class="row pries-bar">
                                <div class="col-12 col-lg-8 order-btn">
                                    <button type="button" class="btn btn-outline-secondary" @click.prevent="openPostalCode">Order Now!</button>
                                    <a href="#" class=""></a>
                                </div>
                                <div class="col-12 col-lg-4 pt-2 pt-lg-0">
                                    <div class="pries">
                                        <p>£6.50</p>
                                    </div>
                                </div>
                           </div>


                      </div>
                    </div>
                    <div class="col-md-4 col-12">
                       <div class="card-offer text-center">
                           <div class="card-content">
                              <h3>Samosa Chaat</h3>
                             <p class="mb-3">
                                 1 Veg Samosa With Chickpeas, Fresh Onions, Tomato, & Green Chilli, Served with salad & sauce.
                             </p>
                           </div>
                           <div class="row pries-bar">
                                <div class="col-12 col-lg-8 order-btn">
                                    <button type="button" class="btn btn-outline-secondary" @click.prevent="openPostalCode">Order Now!</button>
                                    <a href="#" class=""></a>
                                </div>
                                <div class="col-12 col-lg-4 pt-2 pt-lg-0">
                                    <div class="pries">
                                        <p>£3.00
                                        </p>
                                    </div>
                                </div>
                           </div>

                      </div>
                    </div>
                    <div class="col-md-4 col-12">
                       <div class="card-offer text-center">
                           <div class="card-content">

                             <h3>Chicken Tikka Salad
                             </h3>
                             <p class="mb-3">Tandoori chicken tikka, fresh mix salad with drizzle of vinegar & pinch of lemon juice with seasoning of black pepper</p>
                           </div>
                           <div class="row pries-bar">
                                <div class="col-12 col-lg-8 order-btn">
                                    <button type="button" class="btn btn-outline-secondary" @click.prevent="openPostalCode">Order Now!</button>
                                    <a href="#" class=""></a>
                                </div>
                                <div class="col-12 col-lg-4 pt-2 pt-lg-0">
                                    <div class="pries">
                                        <p>£6.00</p>
                                    </div>
                                </div>
                           </div>
                      </div>
                    </div>
                  </div>
            </div>
        </section> -->
        <!-- <section class="rating-area">
            <div class="container">
            <div class="rating-img">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 px-0">
                        <div class="rating-content">
                            <div class="row left">
                                <div class="col-lg-2  col-sm-3 col-md-3 px-1 payment-type">
                                    <p class="rounded-circle">Delivery<br> only</p>

                                </div>
                                <div class="col-lg-10 col-sm-9 col-md-9 px-1 delivry-content">
                                    <p>Free Delivery</p>
                                    <span>Min. Order £2.<br>We accept all major cards.</span>

                                </div>

                            </div>
                            <div class="located-num">
                                <strong>{{info.phone_number}}</strong>
                         <p>{{info.address.full_address}}</p>
                        </div>
                    </div>
                    </div>
                </div>

            </div>
            </div>
        </section> -->
        <section class="section-fullwidth menu-box menu-box-style2">
            <div class="container">
                <div class="row main-title">
                    <div class="col-12">
                        <h3>Our  Dishes</h3>
                    </div>
                </div>
                <!-- <h2 class="main-title">Our  Dishes</h2> -->
                <div class="row">
                    <div class="col-lg-4 col-md-12 col-sm-12"   v-for="(item, index) in categories" v-if="index < 3">
                        <h3 class="sub-title"> {{item.name}}</h3>
                        <div class="menu-box">
                          <ul class="dish-list">
                            <li class="box"   v-for="(product, product_index) in item.products" v-if="product_index < 5">
                                <a href="#0">
                                    <h3>{{product.name}}</h3>
                                </a>
                                <p class="dis">
                                    {{product.description}}
                                </p>
                                <span style="font-size: 12px;" v-if="product.sizes.length"  v-for="(size, size_index) in product.sizes" > {{size.size}} : £{{size.price}}</span>
                                <span  v-if="!product.sizes.length" ><span>£</span>{{product.price}}</span>
                            </li>
                          </ul>
                        </div>
                    </div>

                </div>
                <button class="btn"  @click.prevent="openPostalCode">Order Now</button>
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

       <!--  <section class="section-fullwidth reservation">
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
        </section> -->

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
                categories:[],
            };
        },
        mounted() {
            this.getStory();
            this.getCategories();
            document.documentElement.classList.remove("remove-overflow") ;


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


            getCategories() {
                let _this = this;
                _this.loading = true;
                axios.get('/api/categories')
                    .then((response) => {
                        _this.categories = response.data.data;
                    });
            },


            },
        computed:{
            info(){
                return this.$store.state.general_data;
            },
        }

    }
</script>


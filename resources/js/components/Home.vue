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
                            <img src="/images/gallery/1.png">
                            <div class="ctabox">
                                <button type="button" class="btn btn-outline-secondary" @click.prevent="openPostalCode">Order Now!</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="menubox">
                            <img src="/images/gallery/2.png">
                            <div class="ctabox">
                                <button type="button" class="btn btn-outline-secondary" @click.prevent="openPostalCode">Order Now!</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="menubox">
                            <img src="/images/gallery/3.png">
                            <div class="ctabox">
                                <button type="button" class="btn btn-outline-secondary" @click.prevent="openPostalCode">Order Now!</button>
                            </div>
                        </div>
                    </div>
                </div>
                 <div class="row mb-4">
                    <div class="col-lg-4 col-md-6">
                        <div class="menubox">
                            <img src="/images/gallery/3.png">
                            <div class="ctabox">
                                <button type="button" class="btn btn-outline-secondary" @click.prevent="openPostalCode">Order Now!</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="menubox">
                            <img src="/images/gallery/2.png">
                            <div class="ctabox">
                                <button type="button" class="btn btn-outline-secondary" @click.prevent="openPostalCode">Order Now!</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="menubox">
                            <img src="/images/gallery/1.png">
                            <div class="ctabox">
                                <button type="button" class="btn btn-outline-secondary" @click.prevent="openPostalCode">Order Now!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
   
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
                <button class="btn"  @click.prevent="openPostalCode">See More</button>
                <div class="menus pattern ">

                </div>
            </div>
          
        </section>



        <reservation></reservation>

        <!-- testimonials section -->
        
        <testimonials></testimonials>

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


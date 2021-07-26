<template>
    <div>
        <header-menu></header-menu>
        <section class="section-fullwidth deliver-area ">
            <div class="container">
                  <div class="row">
                    <div class="col-md-6 col-12">
                       <div class="card-offer text-center">
                           <div class="card-content">
                             <h3>Set Meals For Two</h3>
                             <p>For King Prawn dishes and thali add £2.00</p>
                             <p class="mb-3">Choice of 2 Starters, Choice of 2 Main Dishes, Choice of 1 Side Dish, Choice of 1 Nan &amp; Rice's</p>
                           </div>
                           <div class="row pries-bar">
                                <div class="col-12 col-lg-8 order-btn">
                                    <button type="button" class="btn btn-outline-secondary" @click.prevent="openPostalCode">Order Now!</button>
                                    <a href="#" class=""></a>
                                </div>
                                <div class="col-12 col-lg-4 pt-2 pt-lg-0">
                                    <div class="pries">
                                        <p>£23.95</p>
                                    </div>
                                </div>
                           </div>
                          

                      </div>
                    </div>
                    <div class="col-md-6 col-12">
                       <div class="card-offer text-center">
                           <div class="card-content">
                              <h3>Set Meals For Four</h3>
                              <p>For King prawn dishes and thali add £2.00</p>
                             <p class="mb-3">Choice of 4 Starters, Choice of 4 Main dishes, Choice of 2 side dishes, Choice of 2 Nan &amp; 2 Rice's</p>
                           </div>
                           <div class="row pries-bar">
                                <div class="col-12 col-lg-8 order-btn">
                                    <button type="button" class="btn btn-outline-secondary" @click.prevent="openPostalCode">Order Now!</button>
                                    <a href="#" class=""></a>
                                </div>
                                <div class="col-12 col-lg-4 pt-2 pt-lg-0">
                                    <div class="pries">
                                        <p>£44.95</p>
                                    </div>
                                </div>
                           </div>

                      </div>
                    </div>
    
                  </div>
            </div>
        </section>

        <section>
            <div class="resturant-image">
                <img src="images/masala-resturant.jpeg" alt="">
            </div>
        </section>

        <section class="resturant-detail deliver-area">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h3>About Masala</h3>
                    </div>
                    <div class="col-md-6">
                        <p>Masala  Indian Cuisine, serving to the satisfaction of our customers. We are proud to serve the local community and surrounding. We believe in total customer satisfaction hence why we offer quality in our food.</p>
                    </div>
                    <div class="col-md-6">
                        <p>
                            We have developed our menu to represent flavours &amp; tastes of India. We source the best quality meat, chicken, vegetables, spices &amp; herbs to create unique flavours &amp; tastes.
                        </p>
                        <p>We cater for small and large parties - Call us on <a href="tel:01262 671736">01262 671736</a> to discuss your needs. Masala, happy to serve our local community.</p>
                    </div>

                    <div class="order-now">
                        <a href="#" class="btn btn-rounded-default btn-rounded-danger"  @click.prevent="openPostalCode"> Order Online</a>
                    </div>

                    <div class="row resturant-gallery">
                        <div class="col-md-4">
                            <img src="images/masala-resturant-1.jpeg" alt="">
                        </div> 
                        <div class="col-md-4">
                            <img src="images/masala-resturant-2.jpeg" alt="">
                        </div> 
                        <div class="col-md-4">
                            <img src="images/masala-resturant-3.jpeg" alt="">
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
                                    <p>Free Home Delivery<br> In Bridlington b/w 5:00pm - 11:00pm</p>

                                </div>

                            </div>
                            <div class="located-num">
                                <strong>01262 671736 / 01262 674 628</strong>
                                <p>10-11 Marlborough terrace Bridlington, Y015 2PA</p>
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


                                    <h2>Specialities</h2>
                                    <div class="menu-content">
                                        <div class="row">
                                            <div class="col-10">
                                                <span class="badge badge-pill badge-danger">Meal</span>
                                            </div> 
                                            <div class="col-2 text-right">
                                                <span class="badge badge-pill badge-danger">Price</span>
                                            </div>   
                                          </div>
                                    </div>
                                    <div class="menu-item">

                                        <div class="box-borders">
                                            <div class="row">
                                                <div class="col-10">
                                                    <p>Pasanda (Chicken Or Lamb)</p>
                                                </div>
                                                <div class="col-2 text-right">
                                                    <span>£6.95</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="box-borders">
                                            <div class="row">
                                                <div class="col-10">
                                                    <p>Tandoori Butter Chicken</p>
                                                </div>
                                                <div class="col-2 text-right">
                                                    <span>£6.95</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="box-borders">
                                            <div class="row">
                                                <div class="col-10">
                                                    <p>Tikka Masala (Chicken Or Lamb)</p>
                                                </div>
                                                <div class="col-2 text-right">
                                                    <span>£6.95</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="box-borders">
                                            <div class="row">
                                                <div class="col-10">
                                                    <p>Chilli Masala (Chicken Or Lamb)</p>
                                                </div>
                                                <div class="col-2 text-right">
                                                    <span>£6.95</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="box-borders">
                                            <div class="row">
                                                <div class="col-10">
                                                    <p>Karhai (Chicken Or Lamb) Medium</p>
                                                </div>
                                                <div class="col-2 text-right">
                                                    <span>£6.95</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="box-borders">
                                            <div class="row">
                                                <div class="col-10">
                                                    <p>Jalfrezi (Chicken Or Lamb) Faily Hot</p>
                                                </div>
                                                <div class="col-2 text-right">
                                                    <span>£6.95</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="box-borders">
                                            <div class="row">
                                                <div class="col-10">
                                                    <p>Spice of Bengal Special Curry</p>
                                                </div>
                                                <div class="col-2 text-right">
                                                    <span>£7.95</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="box-borders">
                                            <div class="row">
                                                <div class="col-10">
                                                    <p>Naga Dish (Chicken Or Lamb)</p>
                                                </div>
                                                <div class="col-2 text-right">
                                                    <span>£7.50</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="box-borders">
                                            <div class="row">
                                                <div class="col-10">
                                                    <p>Murghi Masala</p>
                                                </div>
                                                <div class="col-2 text-right">
                                                    <span>£7.50</span>
                                                </div>
                                            </div>
                                        </div>

<!--                                         <div class="box-borders">
                                            <div class="row">
                                                <div class="col-10">
                                                    <p>Saga Chicken Or Gosht</p>
                                                </div>
                                                <div class="col-2 text-right">
                                                    <span>£7.50</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="box-borders">
                                            <div class="row">
                                                <div class="col-10">
                                                    <p>Tikka Rezalla (Chicken or Lamb)</p>
                                                </div>
                                                <div class="col-2 text-right">
                                                    <span>£6.95</span>
                                                </div>
                                            </div>
                                        </div> -->

                                    </div>
                                </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 px-0">
                        <div class="menus-pattern-second">
                            <div class="menu-second-before"></div>
                            <div class="second-menu title-styl">
                                <h2>Balti Dishes</h2>
                                <div class="menu-content">
                                    <div class="row ">
                                        <div class="col-10">
                                            <p>Menu:</p>
                                        </div>
                                        <div class="col-2 text-center">
                                            <span class="badge badge-warning">Price</span>
                                        </div>

                                    </div>
                                </div>
                                <div class="menu-item">
                                    <div class="box-borders">
                                        <div class="row">
                                            <div class="col-10">
                                                <p>Chicken / Meat / Prawn</p>
                                            </div>
                                            <div class="col-2 text-center">
                                                <span>£8.95</span>
                                            </div>
                                        </div>
                                    </div> 

                                    <div class="box-borders">
                                        <div class="row">
                                            <div class="col-10">
                                                <p>Chicken Or Lamb Tikka</p>
                                            </div>
                                            <div class="col-2 text-center">
                                                <span>£9.95</span>
                                            </div>
                                        </div>
                                    </div>   

                                    <div class="box-borders">
                                        <div class="row">
                                            <div class="col-10">
                                                <p>Garlic Chilli Balti (Lamb or Chicken)</p>
                                            </div>
                                            <div class="col-2 text-center">
                                                <span>£9.95</span>
                                            </div>
                                        </div>
                                    </div>  

                                    <div class="box-borders">
                                        <div class="row">
                                            <div class="col-10">
                                                <p>King Prawn</p>
                                            </div>
                                            <div class="col-2 text-center">
                                                <span>£13.95</span>
                                            </div>
                                        </div>
                                    </div> 

                                    <div class="box-borders">
                                        <div class="row">
                                            <div class="col-10">
                                                <p>Vegetable</p>
                                            </div>
                                            <div class="col-2 text-center">
                                                <span>£6.95</span>
                                            </div>
                                        </div>
                                    </div> 

                                    <div class="box-borders">
                                        <div class="row">
                                            <div class="col-10">
                                                <p>Masala Balti</p>
                                            </div>
                                            <div class="col-2 text-center">
                                                <span>£10.95</span>
                                            </div>
                                        </div>
                                    </div>  

                                    <div class="box-borders">
                                        <div class="row">
                                            <div class="col-10">
                                                <p>Chicken Mashroom</p>
                                            </div>
                                            <div class="col-2 text-center">
                                                <span>£8.95</span>
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
       

        </section>

        <reservation-table></reservation-table>


        <section class="masala-gallery deliver-area">
            <div class="row">
                <div class="col-md-12">
                    <h3>Masala Gallery</h3>
                    <div class="lightbox">
                        <silent-box :gallery="gallery"></silent-box>
                    </div>
                </div>
            </div>
          
        </section>

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
                                    <p>10-11 Marlborough terrace Bridlington, Y015 2PA</p>

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
                allergy: false,
                gallery: [
                    {
                        src: 'images/masala-gallery/1.jpg',
                        thumbnail:'images/masala-gallery/1.jpg',
                        thumbnailWidth: '220px',
                        thumbnailHeight: '220px',
                    },
                    {
                        src: 'images/masala-gallery/2.jpg',
                        thumbnail:'images/masala-gallery/2.jpg',
                        thumbnailWidth: '220px',
                        thumbnailHeight: '220px',
                    },
                    {
                        src: 'images/masala-gallery/3.jpg',
                        thumbnail:'images/masala-gallery/3.jpg',
                        thumbnailWidth: '220px',
                        thumbnailHeight: '220px',
                    },                    
                    {
                        src: 'images/masala-gallery/4.jpg',
                        thumbnail:'images/masala-gallery/4.jpg',
                        thumbnailWidth: '220px',
                        thumbnailHeight: '220px',
                    },                    
                    {
                        src: 'images/masala-gallery/5.jpg',
                        thumbnail:'images/masala-gallery/5.jpg',
                        thumbnailWidth: '220px',
                        thumbnailHeight: '220px',
                    },                    
                    {
                        src: 'images/masala-gallery/6.jpg',
                        thumbnail:'images/masala-gallery/6.jpg',
                        thumbnailWidth: '220px',
                        thumbnailHeight: '220px',
                    },                    
                    {
                        src: 'images/masala-gallery/7.jpg',
                        thumbnail:'images/masala-gallery/7.jpg',
                        thumbnailWidth: '220px',
                        thumbnailHeight: '220px',
                    },                    
                    {
                        src: 'images/masala-gallery/8.jpg',
                        thumbnail:'images/masala-gallery/8.jpg',
                        thumbnailWidth: '220px',
                        thumbnailHeight: '220px',
                    },                    
                    {
                        src: 'images/masala-gallery/9.jpg',
                        thumbnail:'images/masala-gallery/9.jpg',
                        thumbnailWidth: '220px',
                        thumbnailHeight: '220px',
                    },
                ]
            }
        },

        mounted() {
            this.getStory();
            console.log('Component mounted.');
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


<template>
    <div>
        <header-menu></header-menu>
        <section class="section-fullwidth deliver-area ">
            <div class="container">
                  <div class="row">
                    <div class="col-md-4 col-12">
                       <div class="card-offer text-center">
                           <div class="card-content">
                             <h3>Family Deal</h3>
                             <p>2x12" Pizza, Garlic Bread, Chips &nbsp;</p>
                             <img src="../../../images/card-img.png">
                           </div>
                           <div class="row pries-bar">
                                <div class="col-12 col-lg-8 order-btn">
                                    <button type="button" class="btn btn-outline-secondary" @click.prevent="openPostalCode">Order Now!</button>
                                    <a href="#" class=""></a>
                                </div>
                                <div class="col-12 col-lg-4 pt-2 pt-lg-0">
                                    <div class="pries">
                                        <p>£20.99</p>
                                    </div>
                                </div>
                           </div>
                          

                      </div>
                    </div>
                    <div class="col-md-4 col-12">
                       <div class="card-offer text-center">
                           <div class="card-content">
                              <h3>Pizza &amp; Chicken</h3>
                             <p>14" Pizza, Regular Chicken, Garlic Bread, Chips</p>
                             <img src="../../../images/card-img.png">
                           </div>
                           <div class="row pries-bar">
                                <div class="col-12 col-lg-8 order-btn">
                                    <button type="button" class="btn btn-outline-secondary" @click.prevent="openPostalCode">Order Now!</button>
                                    <a href="#" class=""></a>
                                </div>
                                <div class="col-12 col-lg-4 pt-2 pt-lg-0">
                                    <div class="pries">
                                        <p>£17.99</p>
                                    </div>
                                </div>
                           </div>

                      </div>
                    </div>
                    <div class="col-md-4 col-12">
                       <div class="card-offer text-center">
                           <div class="card-content">

                             <h3>Party Deal</h3>
                             <p>5x12" Pizza, 2x Garlic Bread, 2x Chips</p>
                             <img src="../../../images/card-img.png">
                           </div>
                           <div class="row pries-bar">
                                <div class="col-12 col-lg-8 order-btn">
                                    <button type="button" class="btn btn-outline-secondary" @click.prevent="openPostalCode">Order Now!</button>
                                    <a href="#" class=""></a>
                                </div>
                                <div class="col-12 col-lg-4 pt-2 pt-lg-0">
                                    <div class="pries">
                                        <p>£60.00</p>

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
                                <strong>0289 031 9242</strong>
                                <p>3-5 Bradbury Place, Belfast, BT71RQ</p>
                            </div>


                        </div>

                    </div>
                  <!--   <div class="col-lg-6 col-md-6 col-sm-12 px-0">
                         <img src="../../../images/rating-img.png">

                    </div> -->

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


                                    <h2>Kebabs</h2>
                                    <div class="menu-content">
                                        <div class="row">
                                            <div class="col-6">
                                                <p>All combination kebabs are served with fresh lettuce, Onion, Garlic, Chilli or kabab sauce.</p>
                                            </div>
                                            <div class="col-2 text-right">
                                                <span class="badge badge-pill badge-danger">Naan</span>
                                            </div>   
                                            <div class="col-2 text-right">
                                                <span class="badge badge-pill badge-danger">Pitta</span>
                                            </div>   
                                            <div class="col-2 text-right">
                                                <span class="badge badge-pill badge-danger">Chips</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="menu-item">

                                            <div class="box-borders">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <p>Doner Kabab</p>
                                                    </div>
                                                    <div class="col-2 text-right">
                                                        <span>£6.00</span>
                                                    </div>
                                                    <div class="col-2 text-right">
                                                        <span>£7.50</span>
                                                    </div>
                                                    <div class="col-2 text-right">
                                                        <span>£7.00</span>
                                                    </div>

                                                </div>
                                            </div>

                                            <div class="box-borders">
                                              <div class="row">
                                                  <div class="col-6">
                                                      <p>Chicken Tikka Kabab</p>
                                                  </div>
                                                  <div class="col-2 text-right">
                                                      <span>£6.00</span>
                                                  </div>
                                                  <div class="col-2 text-right">
                                                      <span>£7.50</span>
                                                  </div>
                                                  <div class="col-2 text-right">
                                                      <span>£7.50</span>
                                                  </div>
                                              </div>
                                            </div>

                                            <div class="box-borders">
                                                 <div class="row">
                                                     <div class="col-6">
                                                         <p>Chicken Pakora Kabab</p>
                                                     </div>
                                                     <div class="col-2 text-right">
                                                         <span>£6.00</span>
                                                     </div>
                                                     <div class="col-2 text-right">
                                                         <span>£7.50</span>
                                                     </div>
                                                     <div class="col-2 text-right">
                                                         <span>£7.50</span>
                                                     </div>

                                                 </div>
                                            </div>

                                            <div class="box-borders">
                                               <div class="row">
                                                   <div class="col-6">
                                                       <p>Vegi Pakora Kabab</p>
                                                   </div>
                                                   <div class="col-2 text-right">
                                                       <span>£6.00</span>
                                                   </div>
                                                   <div class="col-2 text-right">
                                                       <span>£6.00</span>
                                                   </div>
                                                   <div class="col-2 text-right">
                                                       <span>£6.00</span>
                                                   </div>

                                               </div>
                                            </div>

                                            <div class="box-borders">
                                              <div class="row">
                                                  <div class="col-6">
                                                      <p>Mix Pakora Kabab</p>
                                                  </div>
                                                  <div class="col-2 text-right">
                                                      <span>£7.50</span>
                                                  </div>
                                                  <div class="col-2 text-right">
                                                      <span>£7.50</span>
                                                  </div>
                                                  <div class="col-2 text-right">
                                                      <span>£7.50</span>
                                                  </div>
                                              </div>
                                            </div>
                                    </div>


                                    <h2 class="mt-4">Chicken</h2>
                                    <div class="menu-content">
                                        <div class="row">
                                            <div class="col-8">
                                                <p>All chicken comes with dip</p>
                                            </div>
                                            <div class="col-2 text-right">
                                                <span class="badge badge-pill badge-danger">Regular</span>
                                            </div>   
                                            <div class="col-2 text-right">
                                                <span class="badge badge-pill badge-danger">Large</span>
                                            </div>   
                                       

                                        </div>
                                    </div>

                                    <div class="menu-item">

                                            <div class="box-borders">
                                                <div class="row">
                                                    <div class="col-8">
                                                        <p>Chicken Dipper</p>
                                                    </div>
                                                    <div class="col-2 text-right">
                                                        <span>£5.00</span>
                                                    </div>
                                                    <div class="col-2 text-right">
                                                        <span>£7.00</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="box-borders">
                                              <div class="row">
                                                  <div class="col-8">
                                                      <p>Hot and Spicy Wings (6)</p>
                                                  </div>
                                                  <div class="col-2 text-right">
                                                      <span>£6.00</span>
                                                  </div>
                                                  <div class="col-2 text-right">
                                                      <span>£7.00</span>
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
                                <h2>Pizza Menu</h2>
                                <div class="menu-content">
                                    <div class="row ">
                                        <div class="col-4">
                                            <p>Pizzas:</p>
                                        </div>
                                        <div class="col-2 text-center">
                                            <span class="badge badge-warning">7”</span>
                                        </div>
                                        <div class="col-2 text-center">
                                            <span class="badge badge-danger">9”</span>
                                        </div>
                                        <div class="col-2 text-center">
                                            <span class="badge badge-warning">12”</span>
                                        </div>
                                        <div class="col-2 text-center">
                                            <span class="badge badge-warning">18”</span>
                                        </div>

                                    </div>
                                </div>
                                <div class="menu-item">
                                        <div class="box-borders">
                                            <div class="row">
                                                <div class="col-4">
                                                    <p>Margherita <span>Tomato sauce & mozzarella cheese</span></p>
                                                </div>
                                                <div class="col-2 text-center">
                                                    <span>£5.99</span>
                                                </div>
                                                <div class="col-2  text-center">
                                                    <span>£8.99</span>
                                                </div>
                                                <div class="col-2  text-center">
                                                    <span>£10.99</span>
                                                </div>
                                                <div class="col-2  text-center">
                                                    <span>£16.99</span>
                                                </div>

                                            </div>
                                        </div>

                                        <div class="box-borders">
                                            <div class="row">
                                                <div class="col-4">
                                                  <p>Pepperoni Buster<span> Double Pepperoni, Double Mozzarella</span></p>
                                                </div>
                                                <div class="col-2 text-center">
                                                    <span>£6.99</span>
                                                </div>
                                                <div class="col-2  text-center">
                                                    <span>£8.99</span>
                                                </div>
                                                <div class="col-2  text-center">
                                                    <span>£12.49</span>
                                                </div>
                                                <div class="col-2  text-center">
                                                    <span>£17.99</span>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="box-borders">
                                            <div class="row">
                                                <div class="col-4">
                                                     <p>Hawaiin <span>Ham & pineapple</span></p>
                                                </div>
                                                <div class="col-2 text-center">
                                                    <span>£6.99</span>
                                                </div>
                                                <div class="col-2  text-center">
                                                    <span>£8.99</span>
                                                </div>
                                                <div class="col-2  text-center">
                                                    <span>£11.99</span>
                                                </div>
                                                <div class="col-2  text-center">
                                                    <span>£17.99</span>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="box-borders">
                                            <div class="row">
                                                <div class="col-4">
                                                    <p>Our Special <span>Pepperoni, Ham, Bacon, Onion, Pepper, Sweetcorn</span></p>
                                                </div>
                                                <div class="col-2 text-center">
                                                    <span>£6.99</span>
                                                </div>
                                                <div class="col-2  text-center">
                                                    <span>£8.99</span>
                                                </div>
                                                <div class="col-2  text-center">
                                                    <span>£11.99</span>
                                                </div>
                                               <div class="col-2  text-center">
                                                    <span>£17.99</span>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="box-borders">
                                            <div class="row">
                                                <div class="col-4">
                                                   <p>Texan BBQ <span>BBQ Sauce, Onion, Pepper, Becon, Chicken</span></p>
                                                </div>
                                                <div class="col-2 text-center">
                                                    <span>£7.99</span>
                                                </div>
                                                <div class="col-2  text-center">
                                                    <span>£8.99</span>
                                                </div>
                                                <div class="col-2  text-center">
                                                    <span>£12.49</span>
                                                </div>      
                                                <div class="col-2  text-center">
                                                    <span>£17.99</span>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="box-borders">
                                            <div class="row">
                                                <div class="col-4">
                                                    <p>Meat Feast <span> Pepperoni, Ham, Sausage, Becon, Chilli Beef</span></p>
                                                </div>
                                                <div class="col-2 text-center">
                                                    <span>£7.99</span>
                                                </div>
                                                <div class="col-2  text-center">
                                                    <span>£9.99</span>
                                                </div>
                                                <div class="col-2  text-center">
                                                    <span>£13.99</span>
                                                </div>
                                                <div class="col-2  text-center">
                                                    <span>£17.99</span>
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
                                        Family Deal
                                        </h3>
                                        <ul>
                                            <li>2x12" Pizza</li>
                                            <li>Garlic Bread</li>
                                            <li>Chips</li>
                                        </ul>
                                        
                                        
                                         <!-- <img src="/images/theme-1/familys-line.png"> -->
                                       

                                         <div class="row pries-bar mt-3">
                                            <div class="col-8 order-btn">
                                                <button type="button" class="btn btn-outline-secondary" @click.prevent="openPostalCode">Order Now!</button>
                                                <a href="#" class=""></a>
                                            </div>
                                            <div class="col-4">
                                                <div class="pries">
                                                    <p>£20.99</p>

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
                                           Party Deal
                                        </h3>
                                         <ul>
                                             <li>5x12" Pizza</li>
                                             <li>2 x Garlic Bread</li>
                                             <li>2 x Chips</li>
                                         </ul>
                                         <!-- <img src="/images/theme-1/familys-line.png"> -->

                                         <div class="row pries-bar mt-3">
                                            <div class="col-8 order-btn">
                                                <button type="button" class="btn btn-outline-secondary" @click.prevent="openPostalCode">Order Now!</button>
                                                <a href="#" class=""></a>
                                            </div>
                                            <div class="col-4">
                                                <div class="pries">
                                                    <p>£60.00
                                                    </p>

                                                </div>

                                            </div>

                                 </div>
                                    </div>

                                </div>



                            </div>
                        </div>

                    </div>
                    <div class="view-btn text-center order-btn">
                       <a href="#" class="btn btn-rounded-danger"> VIEW ALL</a>

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
                                <h5>Meal For 1</h5>
                                <p>9" Pizza <br> Topped Chips or Twister Fries <br> Garlic Bread <br> 1x Dip, 1x Can</p>
                                <div class="pries"><strong>£10.99</strong></div>

                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="offers">
                                <h5>Meal For 2</h5>
                                <p>12" Pizza<br> Two sides or 2x Chips <br> 2x Can <br> &nbsp;</p>
                                <div class="pries"><strong>£16.99</strong></div>

                            </div>
                        </div>

                     </div>

                </div>
            </div>


        </section>

       <!--  <section class="covid-section mt-5">
            <div class="container">
                <div class="title">
                    <h3>Covid 19</h3>
                    <h3>Collection offers</h3>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="box red">
                            <h5>
                                2x 12 inch (8 slice) Pizzas
                                <span>£ 10.99</span>
                            </h5>
                            <h5>
                                2x 16 inch (12slice) Pizzas
                                <span>£13.99</span>
                            </h5>
                            <h5>  (Upto 5 toppings or a set pizza off the menu)</h5>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="box yellow">
                            <h5>
                                3x 12inch (8slice) pizzas
                                <span>£14.99</span>
                            </h5>
                            <h5>
                                3x 16 inch (12slice) Pizzas
                                <span>£19.99</span>
                            </h5>
                            <h5>
                                (Upto 5 toppings or a set pizza off the menu)
                            </h5>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 text-center callnow">
                        <p>Call and Collect offer Limited time only <a href="tel:0121 2422020">0121 2422020</a></p>
                    </div>
                </div>
            </div>
        </section> -->

        <!--  <section class="big-img">
            <div class="container">
                <div class="inner">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="info-box">
                                <h3>Explore Our All Delicious Dishes</h3>
                                <a href="#" class="custom-btn">view all <i class="fas fa-long-arrow-alt-right"></i></a>
                            </div>
                        </div>
                        <div class="col-md-9">
                            <div class="img-box">
                                <img src="https://i.ibb.co/9YY03V5/Png-Item-2134541.png">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="four-col">
            <div class="container">
                <div class="col-inner">
                    <div class="overlay-2"></div>
                    <div class="row c1">
                        <div class="col-md-6">
                            <div class="box offer">
                                <div class="info">
                                    <h3>£16.99</h3>
                                    <p>Donner in Nan (R),
                                        + Mix in Nan (R)
                                        + Chicken in Nan (R)
                                        + 1 Chips (R) + 1.5ltr Pepsi</p>
                                     <a href="#" class="custom-btn2">Recommend Now <i class="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                                <div class="overlay"></div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="box offer">
                                <div class="info">
                                    <h3>£16.99</h3>
                                    <p>2 Medium Pizzas
                                        + Garlic Bread (4pcs)
                                        + 1 Chips (R)
                                        + 1.5ltr Pepsi</p>
                                    <a href="#" class="custom-btn2">Recommend Now <i class="fas fa-long-arrow-alt-right"></i></a>
                                </div>
                                <div class="overlay"></div>
                            </div>
                        </div>

                    </div>
                    <div class="row c2">
                        <div class="col-md-12">
                            <div class="box about">
                                <div class="overlay"></div>
                                <div class="row">
                                    <div class="col-md-7">
                                        <div class="">
                                            <h4>Welcome At</h4>
                                            <h3>PAPA Ge'S </h3>
                                            <p>Papa Ge’s has been established in the UK since 2004 and started off in Tamworth in Staffordshire, it has now reached Birmingham with this new and improved store located at 888 Washwood Heath Road in Birmingham.
                                                We specialise in a wide range of foods such as great quality pizzas, traditional COD and chips, kebabs, burgers and southern fried chicken.
                                                We use the best ingredients to provide the best quality along with providing the best service. We specialise in traditional fish and chips and pizzas as these are our specialities and we have a combined experience of over 50 years. We endeavour to bring our customers the best quality food for the best price</p>
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <div class="img-box">
                                            <img src="https://i.ibb.co/gZrwt11/Png-Item-1941470.png">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="artboard">
                    <div class="row">
                        <div class="col-md-2">
                            <img src="/images/artboard-1-8.png">
                        </div>
                        <div class="col-md-10">
                            <h3>Traditional English Classic <span style="color:#01a8fb;">Fresh Cod</span> Cooked to Order</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section> -->

        <!-- Portfolio-->
<!--        <div class="gallery">-->
<!--            <div class="container">-->
<!--                <div class="gallery-area">-->
<!--                    <div class="title">-->

<!--                        <h3>Discover Our Offers</h3>-->
<!--                        <p>Check out our offers and follow us on  <a href="https://web.facebook.com/Papa-Ges-pizza-Fish-Bar-104170144525384" target="_blank">Facebook</a> and <a href="https://www.instagram.com/papa_ges/" target="_blank"> Instagram @papa_ges </a></p>-->
<!--                    </div>-->
<!--                    <div class="row">-->
<!--                        <div class="col-lg-3 col-sm-6 mb-4">-->
<!--                            <a class="portfolio-box" href="https://i.ibb.co/Rcrtpwx/dealimg1.jpg">-->
<!--                                <img class="img-fluid" src="https://i.ibb.co/Rcrtpwx/dealimg1.jpg" alt="" />-->
<!--                            </a>-->
<!--                        </div>-->
<!--                        <div class="col-lg-3 col-sm-6 mb-4">-->
<!--                            <a class="portfolio-box" href="https://i.ibb.co/X5jLgtf/bannertheme4-01.jpg">-->
<!--                                <img class="img-fluid" src="https://i.ibb.co/X5jLgtf/bannertheme4-01.jpg" alt="" />-->
<!--                            </a>-->
<!--                        </div>-->

<!--                        <div class="col-lg-3 col-sm-6 mb-4">-->
<!--                            <a class="portfolio-box" href="https://i.ibb.co/0cPGZJz/bannertheme4-04.jpg">-->
<!--                                <img class="img-fluid" src="https://i.ibb.co/0cPGZJz/bannertheme4-04.jpg" alt="" />-->
<!--                            </a>-->
<!--                        </div>-->
<!--                        <div class="col-lg-3 col-sm-6 mb-4">-->
<!--                            <a class="portfolio-box" href="https://i.ibb.co/NCLNQ5D/bannerthem4-02.jpg">-->
<!--                                <img class="img-fluid" src="https://i.ibb.co/NCLNQ5D/bannerthem4-02.jpg" alt="" />-->
<!--                            </a>-->
<!--                        </div>-->
<!--                        <div class="col-lg-3 col-sm-6 mb-4">-->
<!--                            <a class="portfolio-box" href="https://i.ibb.co/jhyx531/menutheme1-03.jpg">-->
<!--                                <img class="img-fluid" src="https://i.ibb.co/jhyx531/menutheme1-03.jpg" alt="" />-->
<!--                            </a>-->
<!--                        </div>-->
<!--                        <div class="col-lg-3 col-sm-6 mb-4">-->
<!--                            <a class="portfolio-box" href="https://i.ibb.co/gZt2SYN/menutheme1-04.jpg">-->
<!--                                <img class="img-fluid" src="https://i.ibb.co/gZt2SYN/menutheme1-04.jpg" alt="" />-->
<!--                            </a>-->
<!--                        </div>-->
<!--                        <div class="col-lg-3 col-sm-6 mb-4">-->
<!--                            <a class="portfolio-box" href="https://i.ibb.co/7k690Rw/menutheme1-02.jpg">-->
<!--                                <img class="img-fluid" src="https://i.ibb.co/7k690Rw/menutheme1-02.jpg" alt="" />-->
<!--                            </a>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->

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
                                    <p>3-5 Bradbury Place, Belfast, BT71RQ</p>

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


<template>
    <div>
        <header-menu></header-menu>
        <section class="section-fullwidth deliver-area ">
            <div class="container">
                  <div class="row">
                    <div class="col-md-4 col-12">
                       <div class="card-offer text-center">
                           <div class="card-content">
                             <h3>Pizza Offer 1</h3>
                             <p>Any 2 x 10” Pizzas, 10 Hot Wings,Chips & Bottle of Drinks</p>
                             <img src="../../../images/card-img.png">
                           </div>
                           <div class="row pries-bar">
                                <div class="col-12 col-lg-8 order-btn">
                                    <button type="button" class="btn btn-outline-secondary"  @click.prevent="openPostalCode">Order Now!</button>
                                    <a href="#" class=""></a>
                                </div>
                                <div class="col-12 col-lg-4 pt-2 pt-lg-0">
                                    <div class="pries">
                                        <p>£21.00</p>
                                    </div>
                                </div>
                           </div>
                          

                      </div>
                    </div>
                    <div class="col-md-4 col-12">
                       <div class="card-offer text-center">
                           <div class="card-content">
                              <h3>Pizza Offer 2</h3>
                             <p>Any 2 x 12” Pizzas, 10 Hot Wings,Chips & Bottle of Drinks</p>
                             <img src="../../../images/card-img.png">
                           </div>
                           <div class="row pries-bar">
                                <div class="col-12 col-lg-8 order-btn">
                                    <button type="button" class="btn btn-outline-secondary"  @click.prevent="openPostalCode" >Order Now!</button>
                                    <a href="#" class=""></a>
                                </div>
                                <div class="col-12 col-lg-4 pt-2 pt-lg-0">
                                    <div class="pries">
                                        <p>£25.00</p>
                                    </div>
                                </div>
                           </div>

                      </div>
                    </div>
                    <div class="col-md-4 col-12">
                       <div class="card-offer text-center">
                           <div class="card-content">

                             <h3>Pizza Offer 3</h3>
                             <p>Any 2 x 15
                             ” Pizzas, 10 Hot Wings,Chips & Bottle of Drinks</p>
                             <img src="../../../images/card-img.png">
                           </div>
                           <div class="row pries-bar">
                                <div class="col-12 col-lg-8 order-btn">
                                    <button type="button" class="btn btn-outline-secondary"  @click.prevent="openPostalCode">Order Now!</button>
                                    <a href="#" class=""></a>
                                </div>
                                <div class="col-12 col-lg-4 pt-2 pt-lg-0">
                                    <div class="pries">
                                        <p>£29.00</p>

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
                                    <span>Min. Order £20 within 3 miles.<br>Under £20, £3 delivery charge will apply</span>

                                </div>

                            </div>
                            <div class="located-num">
                                <strong>0203 490 2727</strong>
                                <p>10 Peckham Park Road, London SE15 6TW</p>
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
                                            <div class="col-9">
                                                <p>All combination kebabs are served with bread & salad</p>
                                            </div>
                                            <div class="col-3 text-right">
                                                <span class="badge badge-pill badge-danger">Large</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="menu-item">

                                            <div class="box-borders">
                                                <div class="row">
                                                    <div class="col-9">
                                                        <p>Lamb Doner </p>
                                                    </div>
                                                    <div class="col-3 text-right">
                                                        <span>£8.50</span>
                                                    </div>

                                                </div>
                                            </div>

                                            <div class="box-borders">
                                                <div class="row">
                                                    <div class="col-9 ">
                                                        <p>Chicken Doner</p>
                                                    </div>
                                                    <div class="col-3 text-right">
                                                        <span>£8.50</span>
                                                    </div>

                                                </div>
                                            </div>

                                            <div class="box-borders">
                                                <div class="row">
                                                    <div class="col-9 ">
                                                        <p>Chicken Shish & Rice</p>
                                                    </div>
                                                    <div class="col-3 text-right">
                                                        <span>£9.50</span>
                                                    </div>

                                                </div>
                                            </div>

                                            <div class="box-borders">
                                                <div class="row">
                                                    <div class="col-9 ">
                                                        <p>Kofta Shish & Rice</p>
                                                    </div>
                                                    <div class="col-3 text-right">
                                                        <span>£9.50</span>
                                                    </div>

                                                </div>
                                            </div>

                                            <div class="box-borders">
                                                <div class="row">
                                                    <div class="col-9">
                                                        <p>Lamb Shish & Rice</p>
                                                    </div>
                                                    <div class="col-3 text-right">
                                                        <span>£11.00</span>
                                                    </div>

                                                </div>
                                            </div>

                                            <div class="box-borders">
                                                <div class="row">
                                                    <div class="col-9">
                                                        <p>Grilled Wings & Chips</p>
                                                    </div>
                                                    <div class="col-3  text-right">
                                                        <span>£9.50</span>
                                                    </div>

                                                  </div>
                                            </div>
                                            <div class="box-borders">
                                                <div class="row">
                                                    <div class="col-9 ">
                                                        <p>Mix Grill<br>(Chicken shish, lamb shish & kofta)</p>
                                                    </div>
                                                    <div class="col-3 text-right">
                                                        <span>£16.00</span>
                                                    </div>

                                                </div>
                                            </div>

                                            <div class="box-borders">
                                                <div class="row">
                                                    <div class="col-9">
                                                        <p>Mix Doner</p>
                                                    </div>
                                                    <div class="col-3 text-right">
                                                        <span>£10.00</span>
                                                    </div>

                                                 </div>

                                            </div>

                                            <div class="box-borders">
                                                <div class="row">
                                                    <div class="col-9 ">
                                                        <p>Lamb Doner Meat & Chips</p>
                                                    </div>
                                                    <div class="col-3  text-right">
                                                        <span>£9.50</span>
                                                    </div>

                                                </div>

                                            </div>

                                            <div class="box-borders">
                                                <div class="row">
                                                    <div class="col-9 ">
                                                        <p>Chicken Doner Meat & Chips</p>
                                                    </div>
                                                    <div class="col-3 text-right">
                                                        <span>£9.50</span>
                                                    </div>

                                                </div>
                                            </div>

                                            <div class="box-borders">
                                                 <div class="row">
                                                    <div class="col-9 ">
                                                        <p>Mix Doner Meat & Chips</p>
                                                    </div>
                                                    <div class="col-3 text-right">
                                                        <span>£10.50</span>
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
                                        <div class="col-6">
                                            <p>All pizzas topped with Cheese & Tomato Paste</p>
                                        </div>
                                        <div class="col-2 text-center">
                                            <span class="badge badge-warning">Med 10”</span>
                                        </div>
                                        <div class="col-2 text-center">
                                            <span class="badge badge-danger">Lrg 12”</span>
                                        </div>
                                        <div class="col-2 text-center">
                                            <span class="badge badge-warning">Xlrg 15”</span>
                                        </div>

                                    </div>
                                </div>
                                <div class="menu-item">
                                        <div class="box-borders">
                                            <div class="row">
                                                <div class="col-6">
                                                    <p>Margherita<span>mozzarella cheese & tomato sauce</span></p>
                                                </div>
                                                <div class="col-2 text-center">
                                                    <span>£7.50</span>
                                                </div>
                                                <div class="col-2  text-center">
                                                    <span>£9.50</span>
                                                </div>
                                                <div class="col-2  text-center">
                                                    <span>£11.50</span>
                                                </div>

                                            </div>
                                        </div>

                                        <div class="box-borders">
                                            <div class="row">
                                                <div class="col-6">
                                                  <p>Hawaiian<span> ham & pineapple</span></p>
                                                </div>
                                                <div class="col-2 text-center">
                                                    <span>£8.00</span>
                                                </div>
                                                <div class="col-2  text-center">
                                                    <span>£10.00</span>
                                                </div>
                                                <div class="col-2  text-center">
                                                    <span>£12.00</span>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="box-borders">
                                            <div class="row">
                                                <div class="col-6">
                                                     <p>Pepperoni<span>pepperoni </span></p>
                                                </div>
                                                <div class="col-2 text-center">
                                                    <span>£8.00</span>
                                                </div>
                                                <div class="col-2  text-center">
                                                    <span>£8.00</span>
                                                </div>
                                                <div class="col-2  text-center">
                                                    <span>£12.00</span>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="box-borders">
                                            <div class="row">
                                                <div class="col-6">
                                                    <p>Seafood Special<span> prawns, tuna, anchovies </span></p>
                                                </div>
                                                <div class="col-2 text-center">
                                                    <span>£9.00</span>
                                                </div>
                                                <div class="col-2  text-center">
                                                    <span>£11.00</span>
                                                </div>
                                                <div class="col-2  text-center">
                                                    <span>£13.00</span>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="box-borders">
                                            <div class="row">
                                                <div class="col-6">
                                                   <p>Classic Pizza<span>  ham & mushroom</span></p>
                                                </div>
                                                <div class="col-2 text-center">
                                                    <span>£8.00</span>
                                                </div>
                                                <div class="col-2  text-center">
                                                    <span>£10.00</span>
                                                </div>
                                                <div class="col-2  text-center">
                                                    <span>£12.00</span>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="box-borders">
                                            <div class="row">
                                                <div class="col-6">
                                                    <p>Vegetarian<span> mushrooms, onions, pepper & sweetcorn</span></p>
                                                </div>
                                                <div class="col-2 text-center">
                                                    <span>£9.00</span>
                                                </div>
                                                <div class="col-2  text-center">
                                                    <span>£11.00</span>
                                                </div>
                                                <div class="col-2  text-center">
                                                    <span>£13.00</span>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="box-borders">
                                            <div class="row">
                                                <div class="col-6">
                                                    <p>B.B.Q. Original<span>  chicken, BBQ sauce, onion & pepper</span></p>
                                                </div>
                                                <div class="col-2 text-center">
                                                    <span>£9.00</span>
                                                </div>
                                                <div class="col-2  text-center">
                                                    <span>£11.00</span>
                                                </div>
                                                <div class="col-2  text-center">
                                                    <span>£13.00</span>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="box-borders">
                                            <div class="row">
                                                <div class="col-6">
                                                    <p>Meat Feast Pizza<span> chicken, salami, pepperoni & beef</span></p>
                                                </div>
                                                <div class="col-2 text-center">
                                                    <span>£9.00</span>
                                                </div>
                                                <div class="col-2  text-center">
                                                    <span>£11.00</span>
                                                </div>
                                                <div class="col-2  text-center">
                                                    <span>£13.00</span>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="box-borders">
                                            <div class="row">
                                                <div class="col-6">
                                                    <p>Cheese Garlic Pizza Bread</p>
                                                </div>
                                                <div class="col-2 text-center">
                                                    <span>£6.00</span>
                                                </div>
                                                <div class="col-2  text-center">
                                                    <span>£6.50</span>
                                                </div>
                                                <div class="col-2  text-center">

                                                </div>

                                            </div>
                                        </div>
                                        <div class="box-borders">
                                            <div class="row">
                                                <div class="col-6">
                                                    <p>Garlic Pizza Bread</p>
                                                </div>
                                                <div class="col-2 text-center">
                                                    <span>£3.50</span>
                                                </div>
                                                <div class="col-2  text-center">
                                                    <span>£4.50</span>
                                                </div>
                                                <div class="col-2  text-center">

                                                </div>

                                            </div>
                                        </div>

                                </div>


                            </div>
                        </div>


                    </div>

                </div>
                <div class="menus pattern ">

                    <!-- <div class="menu-area">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="menu-card">
                                    <h3 class="tt">Traditional Fish & Chips</h3>
                                    <ul>
                                        <li>
                                            <h3>Fresh Large COD <span>£6.00</span> </h3>

                                        </li>
                                        <li class="special">
                                            <h3>Fresh Large COD & Chips <span>£7.80</span></h3>

                                        </li>
                                        <li>
                                            <h3>Masala COD Fish <span>£6.0</span></h3>

                                        </li>
                                        <li>
                                            <h3>Masala COD Fish in Nan  <span>£7.80</span></h3>

                                        </li>

                                        <li>
                                            <h3>Fish Cake  <span>£1.50</span></h3>

                                        </li>

                                        <li>
                                            <h3>Sausage <span>£1.50</span></h3>

                                        </li>


                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="menu-card">
                                    <h3 class="tt">S. F. Chicken</h3>
                                    <ul>
                                        <li>
                                            <h3>1 Piece Chicken <span>£1.50</span></h3>

                                        </li>
                                        <li class="special">
                                            <h3>2 Pieces Chicken <span>£2.80</span></h3>

                                        </li>
                                        <li>
                                            <h3>3 Pieces Chicken<span>£4.00</span></h3>

                                        </li>
                                        <li>
                                            <h3>1 Piece Chicken & Chips <span>£2.60</span></h3>

                                        </li>

                                        <li>
                                            <h3>2 Pieces Chicken & Chips <span>£3.80</span></h3>

                                        </li>
                                        <li>
                                            <h3>3 Pieces Chicken & Chips <span>£4.80</span></h3>

                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="menu-card">
                                    <h3 class="tt">Pizzas</h3>
                                    <ul>
                                        <li>
                                            <h3>Margherita <span>Starting From £ 5.50*</span></h3>
                                        </li>
                                        <li class="special">
                                            <h3>Garlic Margherita <span>Starting From £ 5.50*</span></h3>

                                        </li>
                                        <li>
                                            <h3>Hawaiian Lou <span>Starting From £ 5.50*</span></h3>

                                        </li>
                                        <li>
                                            <h3>Farmhouse Bite <span>Starting From £ 5.50*</span></h3>

                                        </li>

                                        <li>
                                            <h3>Vegetable Supreme <span>Starting From £ 5.50*</span></h3>

                                        </li>

                                        <li>
                                            <h3>Fiery Veg<span>Starting From £ 5.50*</span></h3>

                                        </li>

                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="menu-card">
                                    <h3 class="tt">Pizzas</h3>
                                    <ul>
                                        <li>
                                            <h3>Seafood Sensation<span>Starting From £ 6.00*</span></h3>

                                        </li>
                                        <li class="special">
                                            <h3>California Chicken<span>Starting From £ 5.50*</span></h3>

                                        </li>
                                        <li>
                                            <h3>Tuna Special<span>Starting From £ 5.50*</span></h3>

                                        </li>
                                        <li>
                                            <h3>Carribean Dream<span>)Starting From £ 6.00*</span></h3>

                                        </li>
                                        <li>
                                            <h3>Mexicano<span>Starting From £  6.00*</span></h3>

                                        </li>
                                        <li>
                                            <h3>Donner Pizza<span>Starting From £  6.00*</span></h3>

                                        </li>

                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-md-12 text-center mt-5">
                                <a href="#" class="custom-btn">View All <i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div> -->
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
                                           Ali Baba Family Special 1
                                        </h3>
                                        <ul>
                                            <li>1 Lamb Shish,</li>
                                            <li>1 Chicken Shish,</li>
                                            <li>1 Kofta,1 Lamb Doner,</li>
                                            <li>1 Chicken Doner,</li>
                                           <li>1 Portion Grilled Wings & Bottle of Drink</li>
                                        </ul>
                                        
                                        
                                         <img src="/images/theme-1/familys-line.png">
                                       

                                         <div class="row pries-bar">
                                            <div class="col-8 order-btn">
                                                <button type="button" class="btn btn-outline-secondary"  @click.prevent="openPostalCode">Order Now!</button>
                                                <a href="#" class=""></a>
                                            </div>
                                            <div class="col-4">
                                                <div class="pries">
                                                    <p>£40.00</p>

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
                                           Ali Baba Family Special 2
                                        </h3>
                                         <ul>
                                             <li>1 Lamb Shish,1 Chicken Shish,</li>
                                             <li>1 Kofta,1 Lamb Doner,1 Chicken Doner,</li>
                                             <li>8pcs Grilled Wings, 4pcs Chicken,</li>
                                            <li>2x12" Pizzas <span>(from set menu),</span> & Bottle of Drink</li>
                                         </ul>
                                         <img src="/images/theme-1/familys-line.png">

                                         <div class="row pries-bar">
                                            <div class="col-8 order-btn">
                                                <button type="button" class="btn btn-outline-secondary"  @click.prevent="openPostalCode">Order Now!</button>
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
                                <h6>Family Pack 1</h6>
                                <p>8 Pieces Chicken<br>4 Hot Wings<br>3 Fries <br>Bottle of drink</p>
                                <div class="pries"><strong>£16.00</strong></div>

                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="offers">
                                <h6>Family Pack 2</h6>
                                <p>12 Pieces Chicken<br>6 Hot Wings<br>4 Fries <br>Bottle of drink</p>
                                <div class="pries"><strong>£19.00</strong></div>

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
                                    <p>10 Peckham Park Road, London SE15 6TW</p>

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
                allergy: false,
                postal_code: '',
                error_message: '',
                showPopup: false,
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
                this.showPopup = false;
                this.showPostalCode = true;
            },
                hideModal() {
                this.showPopup = false;
                this.showPostalCode = false;
            },

        }
    }
</script>


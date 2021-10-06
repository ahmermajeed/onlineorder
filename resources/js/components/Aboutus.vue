<template>
	<div>
		<div class="loader_wrapper">
			<div class="loader">
				<img src="images/loader.gif" alt="" />
			</div>
		</div>
		<div class="ice_main_wrapper">
			<div class="ice_banner_wrapper inner_banner">
				<img
					src="images/banner/inner_banner.png"
					alt=""
					class="img-responsive"
				/>
				<div class="banner_content">
					<div class="container">
						<div class="row">
							<div
								class="col-lg-10 col-md-10 col-sm-12 col-xs-12 col-lg-offset-1 col-md-offset-1 col-sm-offset-0 col-xs-offset-0"
							>
								<div class="header_wrapper">
									<div class="ice_logo">
										<router-link :to="{ path: '/' }">
											<a href="javascript:;"
												><img
													src="images/banner/logo-main.png"
													alt="dessert-king-logo"
											/></a>
										</router-link>
									</div>
									<div class="ice_menu_wraper">
										<a
											class="toggle"
											@click="responsiveMenu"
										>
											<span></span>
										</a>
										<div class="ice_menu collapse">
											<a class="toggle close"
												><span></span
											></a>
											<ul>
												<li>
													<router-link
														:to="{ path: '/' }"
													>
														<a>home</a>
													</router-link>
												</li>
												<li>
													<router-link
														:to="{
															path: '/about-us',
														}"
													>
														<a href="javascript:;"
															>about</a
														>
													</router-link>
												</li>
												<li>
				                                <router-link :to="{ path: '/contact-us'}">
													<a href="javascript:;">Contact</a>
												</router-link>
												</li>
												<li>
				                                <router-link :to="{ path: '/feedback'}">
													<a href="javascript:;">Feedback</a>
												</router-link>
												</li>
												<li>
				                                <router-link :to="{ path: '/allergy'}">
													<a href="javascript:;">Allergy</a>
												</router-link>
												</li>
												<li>
													<a
														href="javascript:;"
														@click.prevent="
															openPostalCode
														"
														>Order</a
													>
												</li>
												<li>
												<div class="cart-icon" v-click-outside="onClickOutside">
												    <a href="#" v-on:click="openCart = !openCart">
												        <i class="fa fa-shopping-cart"></i>
												        <span class="cart-count">{{getAllCartArray.length-1}}</span>
												    </a>

												    <div class="show-cart" v-if="openCart" id="hide">
												        <div class="card-body">
												            <div class="row">
												                    <div class="col-md-12 item-row scroll style-3">
												                        <div class="row selected-item-row" v-for="(cart, product_index) in getAllCartArray" v-if="product_index  > 0">
												                            <div class="col-md-8">
												                                <div class="item-list">
												                                    <h5>{{cart.product_name}}</h5>
												                                    <p v-if="cart.extras" v-for="(extra, extra_index) in cart.extras"><b>{{extra.group_name}} : </b>{{extra.choice}}</p>
												                                    <span class="item-quantity"><strong>Qunatity: </strong>{{ cart.quantity}}</span>
												                                </div>
												                            </div>
												                            <div class="col-md-4">
												                                <div class="edit-options">
												                                    <span class="remove-item mr-2"  v-b-tooltip.hover title="remove" @click.prevent="removeFromCart(product_index)"><i class="fa fa-times"></i></span>
												                                    <span class="edit-item" v-b-tooltip.hover title="edit" @click="updateProduct(cart.product_id,cart,product_index)"><i class="fas fa-pen"></i></span>
												                                </div>
												                            </div>
												                        </div>
												                        <p v-if="getAllCartArray.length == 1" class="empty-cart">No item in cart</p>
												                    </div>

												            </div>
												            <div class="view-total-menu" v-if="getAllCartArray.length !== 1">
												                <div class="col-md-12">
												                    <div class="total"><strong>Total: </strong>£{{priceFormat(total_amount)}}</div>
												                        <router-link  class="view-cart-menu" :to="{ path: '/online-order/'+postal_code}"> View Menu </router-link>
												                </div>
												                
												            </div>
												        </div>
												    </div>
												</div>

												</li>
											</ul>
										</div>
										<div class="pull-right search_wrapper">
											<ul>
												<li
													class="search"
													@click="openSearchBox"
												>
													<a>
														<i
															class="icon-search"
														></i>
													</a>
													<ul class="search_box">
														<li>
															<a
																class="search_close"
															></a>
														</li>
														<li>
															<form
																class="search_form"
															>
																<p>
																	<input
																		type="text"
																		value=""
																		name="search"
																		id="search"
																	/>
																	<label
																		for="search"
																		>search</label
																	>
																</p>
																<a
																	href="#"
																	class="search_btn"
																	><i
																		class="icon-search"
																	></i
																></a>
															</form>
														</li>
													</ul>
												</li>
											</ul>
										</div>
									</div>
								</div>

								<div class="slider_content">
									<h1>about us</h1>
									<ul class="breadcrumb">
										<li>
											<router-link :to="{ path: '/' }">
												<a>home</a>
											</router-link>
										</li>
										<li class="active">about</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="ice_main_section2 ice_special_wrapper">
				<div class="container">
					<div class="row">
						<div
							class="col-lg- col-md-6 col-sm-12 col-xs-12 col-lg-offset-3 col-md-offset-3 col-sm-offset-0 col-sx-offset-0"
						>
							<div
								class="heading_wrapper text-center wow slidedown"
							>
								<h1 class="ice_heading_white">
									Todays Special
								</h1>
								<p class="white">
									It is a paradisematic country, in which
									roasted parts of sentences fly into your
									mouth.Pityful a rethoric question.
								</p>
							</div>
						</div>
						<div class="ice_special">
							<div
								class="col-lg-4 col-md-4 col-sm-6 col-xs-12 pull-left"
							>
								<div
									class="special_section text-center wow slideright"
								>
									<div class="special_img">
										<img
											src="images/special/1.jpg"
											alt="icecream-parlour-special"
											class="img-responsive"
										/>
									</div>
									<h2 class="ice_sub_heading">
										<a href="javascript:;"
											><i class="icon-check-alt"></i>
											Cherry Ice Cream</a
										>
									</h2>
									<p>
										It is a paradisematic country, in which
										roasted parts of sentences fly into your
										mouth.Pityful a rethoric question.
									</p>
									<div class="wishlist_wrapper">
										<span class="pull-left">$70.00</span>
										<a href="#" class="pull-right"
											><i class="icon-heart-outlined"></i>
											add to wishlist</a
										>
									</div>
									<a
										href="javascript:;"
										@click.prevent="openPostalCode"
										class="ice_btn"
										>add to cart</a
									>
								</div>
							</div>
							<div
								class="col-lg-4 col-md-4 col-sm-6 col-xs-12 pull-left"
							>
								<div class="special_section text-center">
									<div class="special_img">
										<img
											src="images/special/2.jpg"
											alt="icecream-parlour-special2"
											class="img-responsive"
										/>
									</div>
									<h2 class="ice_sub_heading">
										<a href="javascript:;"
											><i class="icon-check-alt"></i>
											Grape-Nuts</a
										>
									</h2>
									<p>
										It is a paradisematic country, in which
										roasted parts of sentences fly into your
										mouth.Pityful a rethoric question.
									</p>
									<div class="wishlist_wrapper">
										<span class="pull-left">$70.00</span>
										<a href="#" class="pull-right"
											><i class="icon-heart-outlined"></i>
											add to wishlist</a
										>
									</div>
									<a
										href="javascript:;"
										@click.prevent="openPostalCode"
										class="ice_btn"
										>add to cart</a
									>
								</div>
							</div>
							<div
								class="col-lg-4 col-md-4 col-sm-6 col-xs-12 col-lg-offset-0 col-md-offset-0 col-sm-offset-3 col-sx-offset-0 pull-left"
							>
								<div
									class="special_section text-center wow slideleft"
								>
									<div class="special_img">
										<img
											src="images/special/3.jpg"
											alt="icecream-parlour-special3"
											class="img-responsive"
										/>
									</div>
									<h2 class="ice_sub_heading">
										<a href="javascript:;"
											><i class="icon-check-alt"></i>
											Butter Brickle</a
										>
									</h2>
									<p>
										It is a paradisematic country, in which
										roasted parts of sentences fly into your
										mouth.Pityful a rethoric question.
									</p>
									<div class="wishlist_wrapper">
										<span class="pull-left">$70.00</span>
										<a href="#" class="pull-right"
											><i class="icon-heart-outlined"></i>
											add to wishlist</a
										>
									</div>
									<a
										href="javascript:;"
										@click.prevent="openPostalCode"
										class="ice_btn"
										>add to cart</a
									>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="ice_main_section1">
				<div class="container">
					<div class="row">
						<div
							class="col-lg- col-md-6 col-sm-12 col-xs-12 col-lg-offset-3 col-md-offset-3 col-sm-offset-0 col-sx-offset-0"
						>
							<div
								class="heading_wrapper text-center wow slidedown"
							>
								<h1 class="ice_heading">our history</h1>
								<p>
									It is a paradisematic country, in which
									roasted parts of sentences fly into your
									mouth.Pityful a rethoric question.
								</p>
							</div>
						</div>
						<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div class="ice_timeline">
								<ul class="timeline">
									<li>
										<div
											class="timeline_wrapper directionl wow slideleft"
										>
											<div class="timeline_heading">
												<h2 class="ice_sub_heading">
													We started Our Business
												</h2>
												<h1>1990</h1>
											</div>
											<p>
												It is a long established fact
												that a reader will be distracted
												by the readable content of a
												page when looking at its layout.
												The point of using Lorem Ipsum
												is that it has a more-or-less
												normal distribution of letters,
												as opposed to using 'Content
												here, content here', making it
												look like readable English.
											</p>
										</div>
									</li>
									<li>
										<div
											class="timeline_wrapper directionr wow slideright"
										>
											<div class="timeline_heading">
												<h2 class="ice_sub_heading">
													We Got Boast Iin Our
													Businees
												</h2>
												<h1>1995</h1>
											</div>
											<p>
												It is a long established fact
												that a reader will be distracted
												by the readable content of a
												page when looking at its layout.
												The point of using Lorem Ipsum
												is that it has a more-or-less
												normal distribution of letters,
												as opposed to using 'Content
												here, content here', making it
												look like readable English.
											</p>
										</div>
									</li>
									<li>
										<div
											class="timeline_wrapper directionl wow slideleft"
										>
											<div class="timeline_heading">
												<h2 class="ice_sub_heading">
													Our Ice Cream is becoming
													People Favourite
												</h2>
												<h1>2000</h1>
											</div>
											<p>
												It is a long established fact
												that a reader will be distracted
												by the readable content of a
												page when looking at its layout.
												The point of using Lorem Ipsum
												is that it has a more-or-less
												normal distribution of letters,
												as opposed to using 'Content
												here, content here', making it
												look like readable English.
											</p>
										</div>
									</li>
									<li>
										<div
											class="timeline_wrapper directionr wow slideright"
										>
											<div class="timeline_heading">
												<h2 class="ice_sub_heading">
													We started Working World
													Wide
												</h2>
												<h1>2012</h1>
											</div>
											<p>
												It is a long established fact
												that a reader will be distracted
												by the readable content of a
												page when looking at its layout.
												The point of using Lorem Ipsum
												is that it has a more-or-less
												normal distribution of letters,
												as opposed to using 'Content
												here, content here', making it
												look like readable English.
											</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="ice_footer_wrapper">
				<div class="container">
					<div class="row">
						<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
							<div class="widget widget_info text-center">
								<div class="ice_logo">
									<a href="index.html"
										><img
											src="images/banner/logo.png"
											alt="icecream-parlour-footer-logo"
									/></a>
								</div>
								<p>
									Contrary to popular belief, Lorem Ipsum is
									not simply random text. It has roots in a
									piece of classical.
								</p>
								<ul class="social_icon">
									<li><a href="https://m.facebook.com/dessertkinguk/" target="_blank"><i class="icon-facebook"></i></a></li>
									<li><a href="https://instagram.com/dessertkinguk?igshid=1izqw2ubf5qw1" target="_blank"><i class="icon-instagram-symbol"></i></a></li>
								</ul>
							</div>
						</div>
						<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
							<div class="widget widget_news">
								<h2 class="ice_sub_heading widget-title">
									latest news
								</h2>
								<ul>
									<li>
										<div class="news_img">
											<a href="#"
												><img
													src="images/footer/1.jpg"
													alt="icecream-parlour-footer-latest-post"
											/></a>
										</div>
										<div class="news_detail">
											<a href="#">22 jul 2017</a>
											<p>
												Li nov lingua franca va simplic
												Europan. simplice Europan.
											</p>
										</div>
									</li>
									<li>
										<div class="news_img">
											<a href="#"
												><img
													src="images/footer/2.jpg"
													alt="icecream-parlour-footer-latest-post"
											/></a>
										</div>
										<div class="news_detail">
											<a href="#">22 jul 2017</a>
											<p>
												Li nov lingua franca va simplic
												Europan. simplice Europan.
											</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
							<div class="widget widget_page">
								<h2 class="ice_sub_heading widget-title">
									our pages
								</h2>
								<ul>
									<li>
										<router-link :to="{ path: '/' }">
											<a href="javascript:;"
												><i class="icon-check-alt"></i
												>Home</a
											>
										</router-link>
									</li>
									<li>
										<router-link
											:to="{ path: '/about-us' }"
										>
											<a href="javascript:;"
												><i class="icon-check-alt"></i
												>About Us</a
											>
										</router-link>
									</li>
								</ul>
							</div>
						</div>
						<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
							<div class="widget widget_address">
								<h2 class="ice_sub_heading widget-title">
									our contact
								</h2>
								<ul>
									<li>
										<div class="address_icon">
											<i class="icon-location"></i>
										</div>
										<div class="address_detail">
											<h3>Address</h3>
											<p>
												223-225 Edward Road, Balsall
												Heath, B12 9LH, Birmingham
											</p>
										</div>
									</li>
									<li>
										<div class="address_icon">
											<i class="icon-phone1"></i>
										</div>
										<div class="address_detail">
											<h3>Contact Numbers</h3>
											<p>0121 337 7378</p>
										</div>
									</li>
									<li>
										<div class="address_icon">
											<i class="icon-clock"></i>
										</div>
										<div class="address_detail">
											<h3>Office Timings</h3>
											<p>Mon - Sun</p>
											<p>1:00 PM - 5:30AM</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="ice_copyright_wrapper text-center">
				<div class="container">
					<div class="row">
						<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div class="">
								<p class="white">
									Copyrights &copy; 2021, All Rights Reserved
									by <a href="javascript:;">Dessert King</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="goto_wrapper"><img src="images/loader.gif" alt="" /></div>
		<postal-code-popup
			@HideModalValue="hideModal"
			:showModalProp="showPostalCode"
		></postal-code-popup>
	</div>
</template>
<script>
import vClickOutside from 'v-click-outside'

    export default {

    	directives: {
    	   clickOutside: vClickOutside.directive
    	 },

        data() {
            return {
                postal_code: '',
                error_message: '',
                showPopup: false,
                showPostalCode: false,
                menu: false,
                allergy: false,
                openCart: false,
                orderType: '',
                openCart: false,
                total_amount: 0,
                editProduct: false,
                list: {},
                editList: {},
                has_sizes: false,
                editIndex: '',
                editDeal: false,
                deals_data: {},
                editDealsData: {},
            }
        },

        computed: {
            loggedIn(){
                return this.$store.getters.getUserData ;
            },
            getAllCartArray() {
                let self = this;
                if (this.$store.getters.getAllCartArray.length > 1) {
                    let sum = 0;
                    let count = 0;
                    this.$store.getters.getAllCartArray.forEach(function (item) {
                        count++;
                        if (count > 1) {
                            sum += item.single_product_total_amount;
                        }
                    });
                    this.total_amount = sum;
                }
                return this.$store.getters.getAllCartArray;
            },
        },

        methods: {

        	onClickOutside (event) {
        	    this.openCart = false
        	},

            hideModal() {
                this.showPopup = false;
                this.showPostalCode = false;
            },

            openMenu() {
                this.showPopup = true;
                this.menu = true;
                this.allergy = false;
            },

            openAllergy() {
                this.showPopup = true;
                this.allergy = true;
                this.menu = false;
            },
            openPostalCode() {
                this.showPopup = false;
                this.allergy = false;
                this.menu = false;
                this.showPostalCode = true;
            },

            openSearchBox() {
            	$(".search > a").on("click", function(){
            		$(this).parent().addClass('show_search');
            	});
            	$(".search_close").on("click", function(){
            		$('.search_close').closest('.search').removeClass('show_search');
            	});	
            },

            responsiveMenu() {
	            $(".ice_menu_wraper a.toggle").on("click", function(){
                 $(".ice_menu").addClass("in");
	            });
	            $(".toggle.close").on("click", function(){
                  $(this).closest(".ice_menu").removeClass("in");
	            });
            },

            priceFormat(num) {
                return parseFloat(num).toFixed(2);
            },

            removeFromCart(index) {
                let cart_data = this.$store.getters.getAllCartArray;
                cart_data.splice(index, 1);
                this.updateCart();
            },

               updateProduct(id, cart, index) {
                let _this = this;
                var url = '';
                if (cart.product_type === "deal") {
                    this.editDealsData = cart;
                    _this.loading = true;
                    url = '/api/deals/' + id;

                } else {

                    this.editList = cart;
                    _this.loading = true;
                    url = '/api/products/' + id;
                }
                axios.get(url)
                    .then((response) => {
                        if (cart.product_type === 'deal') {

                            _this.deals_data = response.data.data;
                            _this.loading = false;
                            _this.editIndex = index;
                            _this.editDeal = true;

                        } else {

                            _this.list = response.data.data;
                            _this.has_sizes = _this.list.sizes.length > 0;
                            _this.loading = false;
                            _this.editIndex = index;
                            _this.editProduct = true;

                        }
                    });
            },

            updateCart() {
                let self = this;
                if (this.$store.getters.getAllCartArray.length > 1) {
                    let sum = 0;
                    let count = 0;
                    this.$store.getters.getAllCartArray.forEach(function (item) {
                        count++;
                        if (count >= 1) {
                            sum += item.single_product_total_amount;
                        }
                    });
                    self.total_amount = sum;
                }
                return this.$store.getters.getAllCartArray;
            },
    }
}
</script>

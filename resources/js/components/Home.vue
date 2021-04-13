<template>
	<div class="home-page">
	<div class="loader_wrapper">
		<div class="loader">
			<img src="images/icecream-parlour/loader.gif" alt="icecream-parlour-loader">
		</div>
	</div>
	<div class="ice_main_wrapper">
		<div class="ice_banner_wrapper">
			<img src="images/banner/main-banner.png" alt="icecream-parlour-banner" class="img-responsive">
			<div class="banner_content home-banner-content">
				<div class="container">
					<div class="row">
						<div class="col-lg-10 col-md-10 col-sm-12 col-xs-12 col-lg-offset-1 col-md-offset-1 col-sm-offset-0 col-xs-offset-0">
							<div class="header_wrapper">
								<div class="ice_logo">
			                        <router-link :to="{ path: '/'}">
										<a href="javascript:;"><img src="images/banner/logo-main.png" alt="dessert-king-logo"></a>
									</router-link>
								</div>
								<div class="ice_menu_wraper">
									<a class="toggle" @click="responsiveMenu">
										<span></span>
									</a>
									<div class="ice_menu collapse">
										<a class="toggle close"><span></span></a>
										<ul>
											<li>
			                                <router-link :to="{ path: '/'}">
												<a>home</a>
											</router-link>
											</li>
											<li>
			                                <router-link :to="{ path: '/about-us'}">
												<a href="javascript:;">about</a>
											</router-link>
											</li>
											<li><a href="javascript:;" @click.prevent="openPostalCode">Order Online</a></li>
										</ul>
									</div>
									<div class="pull-right search_wrapper">
										<ul>
											<li class="search" @click="openSearchBox">
												<a>
													<i class="icon-search"></i>
												</a>
												<ul class="search_box">
													<li><a class="search_close"></a></li>
													<li>
														<form class="search_form">
															<p>
																<input type="text" value="" name="search" id="search">
																<label for="search">search</label>
															</p>
															<a href="#" class="search_btn"><i class="icon-search"></i></a>
														</form>
													</li>
												</ul>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div class="slider_content">
								<h1>All YOu Need Is Love & Ice Cream</h1>
								<a href="javascript:;" class="btn btn-rounded-danger mt-3" @click.prevent="openPostalCode">Order Now</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	
		<div class="ice_main_section2 ice_special_wrapper">
			<div class="container">
				<div class="row">
					<div class="col-lg- col-md-6 col-sm-12 col-xs-12 col-lg-offset-3 col-md-offset-3 col-sm-offset-0 col-sx-offset-0">
						<div class="heading_wrapper text-center wow slidedown">
							<h1 class="ice_heading_white">Todays Special</h1>
							<p class="white">It is a paradisematic country, in which roasted parts of sentences fly into your mouth.Pityful a rethoric question.</p>
						</div>
					</div>
					<div class="ice_special">
						<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 pull-left">
							<div class="special_section text-center wow slideright">
								<div class="special_img">
									<img src="images/special/1.jpg" alt="icecream-parlour-special" class="img-responsive">
								</div>
								<h2 class="ice_sub_heading"><a href="javascript:;"><i class="icon-check-alt"></i>  Cherry Ice Cream</a></h2>
								<p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth.Pityful a rethoric question.</p>
								<div class="wishlist_wrapper">
									<span class="pull-left">$70.00</span>
									<a href="#" class="pull-right"><i class="icon-heart-outlined"></i> add to wishlist</a>
								</div>
								<a href="javascript:;" @click.prevent="openPostalCode" class="ice_btn">add to cart</a>
							</div>
						</div>
						<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 pull-left">
							<div class="special_section text-center">
								<div class="special_img">
									<img src="images/special/2.jpg" alt="icecream-parlour-special2" class="img-responsive">
								</div>
								<h2 class="ice_sub_heading"><a href="javascript:;"><i class="icon-check-alt"></i> Grape-Nuts</a></h2>
								<p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth.Pityful a rethoric question.</p>
								<div class="wishlist_wrapper">
									<span class="pull-left">$70.00</span>
									<a href="#" class="pull-right"><i class="icon-heart-outlined"></i> add to wishlist</a>
								</div>
								<a href="javascript:;" @click.prevent="openPostalCode" class="ice_btn">add to cart</a>
							</div>
						</div>
						<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 pull-left">
							<div class="special_section text-center">
								<div class="special_img">
									<img src="images/special/3.jpg" alt="icecream-parlour-special2" class="img-responsive">
								</div>
								<h2 class="ice_sub_heading"><a href="javascript:;"><i class="icon-check-alt"></i> Grape-Nuts</a></h2>
								<p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth.Pityful a rethoric question.</p>
								<div class="wishlist_wrapper">
									<span class="pull-left">$70.00</span>
									<a href="#" class="pull-right"><i class="icon-heart-outlined"></i> add to wishlist</a>
								</div>
								<a href="javascript:;" @click.prevent="openPostalCode" class="ice_btn">add to cart</a>
							</div>
						</div>
						<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 col-lg-offset-0 col-md-offset-0 col-sm-offset-3 col-sx-offset-0 pull-left">
							<div class="special_section text-center wow slideleft">
								<div class="special_img">
									<img src="images/special/4.jpg" alt="icecream-parlour-special3" class="img-responsive">
								</div>
								<h2 class="ice_sub_heading"><a href="javascript:;"><i class="icon-check-alt"></i>  Butter Brickle</a></h2>
								<p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth.Pityful a rethoric question.</p>
								<div class="wishlist_wrapper">
									<span class="pull-left">$70.00</span>
									<a href="#" class="pull-right"><i class="icon-heart-outlined"></i> add to wishlist</a>
								</div>
								<a href="javascript:;" @click.prevent="openPostalCode" class="ice_btn">add to cart</a>
							</div>
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
								<a href="index.html"><img src="images/banner/logo.png" alt="icecream-parlour-footer-logo"></a>
							</div>
							<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.</p>
							<ul class="social_icon">
								<li><a href="https://m.facebook.com/dessertkinguk/" target="_blank"><i class="icon-facebook"></i></a></li>
								<li><a href="https://instagram.com/dessertkinguk?igshid=1izqw2ubf5qw1" target="_blank"><i class="icon-instagram-symbol"></i></a></li>
							</ul>
						</div>
					</div>
					<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
						<div class="widget widget_news">
							<h2 class="ice_sub_heading widget-title">latest news</h2>
							<ul>
								<li>
									<div class="news_img"><a href="#"><img src="images/footer/1.jpg" alt="icecream-parlour-footer-latest-post"></a></div>
									<div class="news_detail"><a href="#">22 jul 2017</a> <p>Li nov lingua franca va simplic Europan. simplice Europan.</p></div>
								</li>
								<li>
									<div class="news_img"><a href="#"><img src="images/footer/2.jpg" alt="icecream-parlour-footer-latest-post"></a></div>
									<div class="news_detail"><a href="#">22 jul 2017</a> <p>Li nov lingua franca va simplic Europan. simplice Europan.</p></div>
								</li>
							</ul>
						</div>
					</div>
					<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
						<div class="widget widget_page footer-links">
							<h2 class="ice_sub_heading widget-title">our pages</h2>
							<ul>
								<li>
									<router-link :to="{ path: '/'}">
										<a href="javascript:;"><i class="icon-check-alt"></i>Home</a>
									</router-link>
								</li>
								<li>
									<router-link :to="{ path: '/about-us'}">
										<a href="javascript:;"><i class="icon-check-alt"></i>About Us</a>
									</router-link>
								</li>
							</ul>
						</div>
					</div>
					<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
						<div class="widget widget_address">
							<h2 class="ice_sub_heading widget-title">our contact</h2>
							<ul>
								<li>
									<div class="address_icon"><i class="icon-location"></i></div>
									<div class="address_detail"><h3>Address</h3> <p>223-225 Edward Road, Balsall Heath, B12 9LH, Birmingham.</p></div>
								</li>
								<li>
									<div class="address_icon"><i class="icon-phone1"></i></div>
									<div class="address_detail"><h3>Contact Numbers</h3> <p>0121 337 7378</p></div>
								</li>
								<li>
									<div class="address_icon"><i class="icon-clock"></i></div>
									<div class="address_detail"><h3>Office Timings</h3>
										<p>Mon - Sun</p>
										<p>1:00 PM - 5:30AM</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="overlay">
				<img src="images/footer/ice.png" alt="icecream-parlour-footer-overlay">
			</div>
		</div>
		<div class="ice_copyright_wrapper text-center">
			<div class="container">
				<div class="row">
					<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div class="">
							<p class="white">Copyrights &copy; 2021, All Rights Reserved by <a href="javascript:;">Dessert King</a></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="goto_wrapper"><img src="images/loader.gif" alt="icecream-parlour-sroll-go-to-up"></div>

	<postal-code-popup  @HideModalValue="hideModal"   :showModalProp="showPostalCode"></postal-code-popup>

	</div>
</template>
<script>
    export default {
        data() {
            return {
                postal_code: '',
                error_message: '',
                showPopup: false,
                showPostalCode: false,
                menu: false,
                allergy: false
            }
        },
        methods: {

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
    }
}
</script>
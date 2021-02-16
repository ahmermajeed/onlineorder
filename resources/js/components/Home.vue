<template>
	<div class="home-page">
	<div class="loader_wrapper">
		<div class="loader">
			<img src="images/icecream-parlour/loader.gif" alt="icecream-parlour-loader">
		</div>
	</div>
	<div class="ice_main_wrapper">
		<div class="ice_banner_wrapper">
			<img src="images/banner/banner_bg.jpg" alt="icecream-parlour-banner" class="img-responsive">
			<div class="banner_content">
				<div class="container">
					<div class="row">
						<div class="col-lg-10 col-md-10 col-sm-12 col-xs-12 col-lg-offset-1 col-md-offset-1 col-sm-offset-0 col-xs-offset-0">
							<div class="header_wrapper">
								<div class="ice_logo">
									<a href="javascript:;"><img src="images/banner/logo.png" alt="icecream-parlour-logo"></a>
								</div>
								<div class="ice_menu_wraper">
									<a data-toggle="collapse" data-target="#menu" class="toggle"><span></span></a>
									<div class="ice_menu collapse" id="menu">
										<a data-toggle="collapse" data-target="#menu" class="toggle close"><span></span></a>
										<ul>
											<li><a>home</a>
			
											</li>
											<li><a href="javascript:;">about</a></li>
											<li><a>blog</a>
												
											</li>
											<li><a href="javascript:;">shop</a>
												
											</li>
									<!-- 		<li><a>pages</a>
												<ul class="sub-menu">
													<li><a href="cart.html">cart</a></li>
													<li><a href="checkout.html">checkout</a>
													</li>
													
													<li><a href="faq.html">FAQS</a>
													</li>
													<li><a href="shortcodes.html">shortcodes</a>
													</li>
													<li><a href="term_condition.html">terms & conditions</a>
													</li>
												</ul>
											</li> -->
											<li><a href="javascript:;" @click.prevent="openPostalCode">Order Online</a></li>
										</ul>
									</div>
									<div class="pull-right search_wrapper">
										<ul>
											<li class="search">
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
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="overlay">
				<div class="chery c1"><img src="images/banner/1.png" alt="icecream-parlour-banner"></div>
				<div class="chery c2"><img src="images/banner/1.png" alt="icecream-parlour-banner"></div>
				<div class="chery c3"><img src="images/banner/1.png" alt="icecream-parlour-banner"></div>
				<div class="chery c4"><img src="images/banner/1.png" alt="icecream-parlour-banner"></div>
				<div class="chery c5"><img src="images/banner/1.png" alt="icecream-parlour-banner"></div>
				<div class="chery c6"><img src="images/banner/1.png" alt="icecream-parlour-banner"></div>
				<div class="chery c7"><img src="images/banner/1.png" alt="icecream-parlour-banner"></div>
				<div class="chery c8"><img src="images/banner/1.png" alt="icecream-parlour-banner"></div>
			</div>
		</div>

		<div class="ice_main_section1">
			<div class="container">
				<div class="row">
					<div class="ice_about_wrapper">
						<div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
							<div class="ice_about_Section wow slideleft">
								<h1 class="ice_heading">Something About Ice Creame</h1>
								<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the World of Grammar.</p>
								<p><i>It is a paradisematic country, in which roasted parts of sentences fly into your mouth.Pityful a rethoric question.</i></p>
								<ul>
									<li>
										<div class="pull-left">
											<i class="icon-ice-cream-cup"></i>
										</div>
										<div class="pull-left">
											<p><i>Fresh Ice Cream</i></p>
										</div>
									</li>
									<li>
										<div class="pull-left">
											<i class="icon-ice-cream-cup"></i>
										</div>
										<div class="pull-left">
											<p><i>Bacon ice cream</i></p>
										</div>
									</li>
									<li>
										<div class="pull-left">
											<i class="icon-ice-cream-cup"></i>
										</div>
										<div class="pull-left">
											<p><i>Brown bread ice cream</i></p>
										</div>
									</li>
									<li>
										<div class="pull-left">
											<i class="icon-ice-cream-cup"></i>
										</div>
										<div class="pull-left">
											<p><i>Cherry Ice Cream</i></p>
										</div>
									</li>
									<li>
										<div class="pull-left">
											<i class="icon-ice-cream-cup"></i>
										</div>
										<div class="pull-left">
											<p><i>Chocolate Ice Cream</i></p>
										</div>
									</li>
									<li>
										<div class="pull-left">
											<i class="icon-ice-cream-cup"></i>
										</div>
										<div class="pull-left">
											<p><i>Coffee Ice Cream</i></p>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div class="overlap_img">
							<img src="images/icecream-parlour/about.png" alt="icecream-parlour-about">
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
						<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 pull-left">
							<div class="special_section text-center wow slideright">
								<div class="special_img">
									<img src="images/special/1.jpg" alt="icecream-parlour-special" class="img-responsive">
								</div>
								<h2 class="ice_sub_heading"><a href="shop_single.html"><i class="icon-check-alt"></i>  Cherry Ice Cream</a></h2>
								<p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth.Pityful a rethoric question.</p>
								<div class="wishlist_wrapper">
									<span class="pull-left">$70.00</span>
									<a href="#" class="pull-right"><i class="icon-heart-outlined"></i> add to wishlist</a>
								</div>
								<a href="shop_single.html" class="ice_btn">add to cart</a>
							</div>
						</div>
						<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 pull-left">
							<div class="special_section text-center">
								<div class="special_img">
									<img src="images/special/2.jpg" alt="icecream-parlour-special2" class="img-responsive">
								</div>
								<h2 class="ice_sub_heading"><a href="shop_single.html"><i class="icon-check-alt"></i> Grape-Nuts</a></h2>
								<p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth.Pityful a rethoric question.</p>
								<div class="wishlist_wrapper">
									<span class="pull-left">$70.00</span>
									<a href="#" class="pull-right"><i class="icon-heart-outlined"></i> add to wishlist</a>
								</div>
								<a href="shop_single.html" class="ice_btn">add to cart</a>
							</div>
						</div>
						<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 col-lg-offset-0 col-md-offset-0 col-sm-offset-3 col-sx-offset-0 pull-left">
							<div class="special_section text-center wow slideleft">
								<div class="special_img">
									<img src="images/special/3.jpg" alt="icecream-parlour-special3" class="img-responsive">
								</div>
								<h2 class="ice_sub_heading"><a href="shop_single.html"><i class="icon-check-alt"></i>  Butter Brickle</a></h2>
								<p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth.Pityful a rethoric question.</p>
								<div class="wishlist_wrapper">
									<span class="pull-left">$70.00</span>
									<a href="#" class="pull-right"><i class="icon-heart-outlined"></i> add to wishlist</a>
								</div>
								<a href="shop_single.html" class="ice_btn">add to cart</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="ice_main_section2">
			<div class="container">
				<div class="row">
					<div class="col-lg- col-md-6 col-sm-12 col-xs-12 col-lg-offset-3 col-md-offset-3 col-sm-offset-0 col-sx-offset-0">
						<div class="heading_wrapper text-center wow slidedown">
							<h1 class="ice_heading">our services</h1>
							<p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth.Pityful a rethoric question.</p>
						</div>
					</div>
					<div class="service_wrapper">
						<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 pull-left">
							<div class="service_section text-center wow zoomIn" style="background-image: url('images/service/1.png');">
								<span class="flaticon-ice-cream"></span>
								<h2 class="ice_sub_heading"><a href="#" class="white">Ice Cream Parlour</a></h2>
								<p class="white">It is a paradisematic country, in which roasted parts.</p>
							</div>
						</div>
						<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 pull-left">
							<div class="service_section text-center wow zoomIn"  data-wow-delay="0.2s" style="background-image: url('images/service/2.png');">
								<span class="flaticon-restaurant-cutlery-circular-symbol-of-a-spoon-and-a-fork-in-a-circle"></span>
								<h2 class="ice_sub_heading"><a href="#" class="white">restaurant</a></h2>
								<p class="white">It is a paradisematic country, in which roasted parts.</p>
							</div>
						</div> 
						<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 pull-left">
							<div class="service_section text-center wow zoomIn"  data-wow-delay="0.4s" style="background-image: url('images/service/3.png');">
								<span class="flaticon-wine-glasses"></span>
								<h2 class="ice_sub_heading"><a href="#" class="white">Bar Club Hall</a></h2>
								<p class="white">It is a paradisematic country, in which roasted parts.</p>
							</div>
						</div>
						<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 pull-left">
							<div class="service_section text-center wow zoomIn"  data-wow-delay="0.6s" style="background-image: url('images/service/4.png');">
								<span class="flaticon-stair-of-a-swimming-pool"></span>
								<h2 class="ice_sub_heading"><a href="#" class="white">Ice Cream Parlour</a></h2>
								<p class="white">It is a paradisematic country, in which roasted parts.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="ice_main_section1">
			<div class="container">
				<div class="row">
					<div class="col-lg- col-md-6 col-sm-12 col-xs-12 col-lg-offset-3 col-md-offset-3 col-sm-offset-0 col-sx-offset-0">
						<div class="heading_wrapper text-center wow slidedown">
							<h1 class="ice_heading">Handmade Ice Creams</h1>
							<p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth.Pityful a rethoric question.</p>
						</div>
					</div>
					<div class="ice_cream_wrapper">
						<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
							<div class="handmade_section wow slideleft">
								<h2 class="ice_sub_heading">Handmade Cones</h2>
								<ul>
									<li>
										<div class="product_detail">
											<a href="shop_single.html" class="pull-left ice_sub_heading">Vannila Scotch</a>
											<span class="pull-right ice_sub_heading">6.5$</span>
										</div>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
									</li>
									<li>
										<div class="product_detail">
											<a href="shop_single.html" class="pull-left ice_sub_heading">Strawberry Gems</a>
											<span class="pull-right ice_sub_heading">7.5$</span>
										</div>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
									</li>
									<li>
										<div class="product_detail">
											<a href="shop_single.html" class="pull-left ice_sub_heading">Butter Scotch</a>
											<span class="pull-right ice_sub_heading">9.5$</span>
										</div>
										<p>There are many variations of passages of Lorem Ipsum available.</p>
									</li>
								</ul>
							</div>
						</div>
						<div class="handmade_img wow slideright">
							<img src="images/handmade/1.png" alt="icecream-parlour-handmade1">
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="ice_video_wrapper">
			<div class="container">
				<div class="row">
					<div class="col-lg-8 col-md-8 col-lg-offset-2 col-md-offset-2 col-sm-12 col-xs-12 col-sm-offset-0 col-sx-offset-0">
						<div class="video_detail text-center">
							<a href="https://www.youtube.com/embed/Zy33XDwGVxc" class="video"><i class="icon-play3"></i></a>
							<h1 class="ice_heading_white">How We Make Best Ice Cream</h1>
							<p class="white">It is a paradisematic country, in which roasted parts of sentences fly into your mouth.Pityful a entences fly into your mouth.Pityful a rethoric question.</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="ice_main_section2">
			<div class="container">
				<div class="row">
					<div class="col-lg- col-md-6 col-sm-12 col-xs-12 col-lg-offset-3 col-md-offset-3 col-sm-offset-0 col-sx-offset-0">
						<div class="heading_wrapper text-center wow slidedown">
							<h1 class="ice_heading">Our Blogs</h1>
							<p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth.Pityful a rethoric question.</p>
						</div>
					</div>
					<div class="blog_wrapper">
						<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 pull-left">
							<div class="blog_Section wow slideup">
								<div class="blog_img ice_hover">
									<img src="images/blog/1.jpg" alt="icecream-parlour-blog-1" class="img-responsive">
									<div class="overlay">
										<a href="blog_single.html"><i class="fa fa-link"></i></a>
									</div>
								</div>
								<div class="blog_detail">
									<h2 class="ice_sub_heading"><a href="blog_single.html">We Post Amazing Post Blogs </a></h2>
									<ul>
										<li><span>by</span><a href="#" class="link">admin</a></li>
										<li><a href="#" class="link">24 Nov 2017</a></li>
										<li><span>in</span><a href="#" class="link">Mechanic</a></li>
									</ul>
									<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.</p>
									<ul class="share_wrapper">
										<li><a href="#"><i class="flaticon-favorite-heart-button"></i>360</a></li>
										<li><a href="#"><i class="icon-bubble"></i>26</a></li>
										<li class="share"><a href="#"><i class="icon-share2"></i>share</a>
											<ul class="social_icon">
												<li><a href="#"><i class="icon-facebook"></i></a></li>
												<li><a href="#"><i class="icon-twitter"></i></a></li>
												<li><a href="#"><i class="icon-linkedin"></i></a></li>
												<li><a href="#"><i class="icon-google-plus-logo"></i></a></li>
											</ul>
										</li>
									</ul>
								</div>
							</div>
							<div class="blog_Section wow slideup">
								<div class="blog_img ice_hover">
									<img src="images/blog/4.jpg" alt="icecream-parlour-blog-2" class="img-responsive">
									<div class="overlay">
										<a href="blog_single.html"><i class="fa fa-link"></i></a>
									</div>
								</div>
								<div class="blog_detail">
									<h2 class="ice_sub_heading"><a href="blog_single.html">	Jeni's Splendid Ice Creams </a></h2>
									<ul>
										<li><span>by</span><a href="#" class="link">admin</a></li>
										<li><a href="#" class="link">24 Nov 2017</a></li>
										<li><span>in</span><a href="#" class="link">Mechanic</a></li>
									</ul>
									<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.at Hampden-Sydney College in Virginia, looked up one of the more.</p>
									<ul class="share_wrapper">
										<li><a href="#"><i class="flaticon-favorite-heart-button"></i>360</a></li>
										<li><a href="#"><i class="icon-bubble"></i>26</a></li>
										<li class="share"><a href="#"><i class="icon-share2"></i>share</a>
											<ul class="social_icon">
												<li><a href="#"><i class="icon-facebook"></i></a></li>
												<li><a href="#"><i class="icon-twitter"></i></a></li>
												<li><a href="#"><i class="icon-linkedin"></i></a></li>
												<li><a href="#"><i class="icon-google-plus-logo"></i></a></li>
											</ul>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 pull-left">
							<div class="blog_Section wow slideup">
								<div class="blog_img ice_hover">
									<img src="images/blog/2.jpg" alt="icecream-parlour-blog-3" class="img-responsive">
									<div class="overlay">
										<a href="blog_single.html"><i class="fa fa-link"></i></a>
									</div>
								</div>
								<div class="blog_detail">
									<h2 class="ice_sub_heading"><a href="blog_single.html">	Ice Cream Journal </a></h2>
									<ul>
										<li><span>by</span><a href="#" class="link">admin</a></li>
										<li><a href="#" class="link">24 Nov 2017</a></li>
										<li><span>in</span><a href="#" class="link">Mechanic</a></li>
									</ul>
									<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
									<ul class="share_wrapper">
										<li><a href="#"><i class="flaticon-favorite-heart-button"></i>360</a></li>
										<li><a href="#"><i class="icon-bubble"></i>26</a></li>
										<li class="share"><a href="#"><i class="icon-share2"></i>share</a>
											<ul class="social_icon">
												<li><a href="#"><i class="icon-facebook"></i></a></li>
												<li><a href="#"><i class="icon-twitter"></i></a></li>
												<li><a href="#"><i class="icon-linkedin"></i></a></li>
												<li><a href="#"><i class="icon-google-plus-logo"></i></a></li>
											</ul>
										</li>
									</ul>
								</div>
							</div>
							<div class="blog_Section wow slideup">
								<div class="blog_img ice_hover">
									<img src="images/blog/5.jpg" alt="icecream-parlour-blog4" class="img-responsive">
									<div class="overlay">
										<a href="blog_single.html"><i class="fa fa-link"></i></a>
									</div>
								</div>
								<div class="blog_detail">
									<h2 class="ice_sub_heading"><a href="blog_single.html">	Reddit - Ice cream </a></h2>
									<ul>
										<li><span>by</span><a href="#" class="link">admin</a></li>
										<li><a href="#" class="link">24 Nov 2017</a></li>
										<li><span>in</span><a href="#" class="link">Mechanic</a></li>
									</ul>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum culpa qui officia deserunt mollit anim id est laborum</p>
									<ul class="share_wrapper">
										<li><a href="#"><i class="flaticon-favorite-heart-button"></i>360</a></li>
										<li><a href="#"><i class="icon-bubble"></i>26</a></li>
										<li class="share"><a href="#"><i class="icon-share2"></i>share</a>
											<ul class="social_icon">
												<li><a href="#"><i class="icon-facebook"></i></a></li>
												<li><a href="#"><i class="icon-twitter"></i></a></li>
												<li><a href="#"><i class="icon-linkedin"></i></a></li>
												<li><a href="#"><i class="icon-google-plus-logo"></i></a></li>
											</ul>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12  col-lg-offset-0 col-md-offset-0 col-sm-offset-3 col-sx-offset-0 pull-left">
							<div class="blog_Section wow slideup">
								<div class="blog_img ice_hover">
									<img src="images/blog/3.jpg" alt="icecream-parlour-blog5" class="img-responsive">
									<div class="overlay">
										<a href="blog_single.html"><i class="fa fa-link"></i></a>
									</div>
								</div>
								<div class="blog_detail">
									<h2 class="ice_sub_heading"><a href="blog_single.html">Ice Cream Rolls | Youtube </a></h2>
									<ul>
										<li><span>by</span><a href="#" class="link">admin</a></li>
										<li><a href="#" class="link">24 Nov 2017</a></li>
										<li><span>in</span><a href="#" class="link">Mechanic</a></li>
									</ul>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
									<ul class="share_wrapper">
										<li><a href="#"><i class="flaticon-favorite-heart-button"></i>360</a></li>
										<li><a href="#"><i class="icon-bubble"></i>26</a></li>
										<li class="share"><a href="#"><i class="icon-share2"></i>share</a>
											<ul class="social_icon">
												<li><a href="#"><i class="icon-facebook"></i></a></li>
												<li><a href="#"><i class="icon-twitter"></i></a></li>
												<li><a href="#"><i class="icon-linkedin"></i></a></li>
												<li><a href="#"><i class="icon-google-plus-logo"></i></a></li>
											</ul>
										</li>
									</ul>
								</div>
							</div>
							<div class="blog_Section wow slideup">
								<div class="blog_img ice_hover">
									<img src="images/blog/6.jpg" alt="icecream-parlour-blog6" class="img-responsive">
									<div class="overlay">
										<a href="blog_single.html"><i class="fa fa-link"></i></a>
									</div>
								</div>
								<div class="blog_detail">
									<h2 class="ice_sub_heading"><a href="blog_single.html">	Smitten Ice Cream</a></h2>
									<ul>
										<li><span>by</span><a href="#" class="link">admin</a></li>
										<li><a href="#" class="link">24 Nov 2017</a></li>
										<li><span>in</span><a href="#" class="link">Mechanic</a></li>
									</ul>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
									<ul class="share_wrapper">
										<li><a href="#"><i class="flaticon-favorite-heart-button"></i>360</a></li>
										<li><a href="#"><i class="icon-bubble"></i>26</a></li>
										<li class="share"><a href="#"><i class="icon-share2"></i>share</a>
											<ul class="social_icon">
												<li><a href="#"><i class="icon-facebook"></i></a></li>
												<li><a href="#"><i class="icon-twitter"></i></a></li>
												<li><a href="#"><i class="icon-linkedin"></i></a></li>
												<li><a href="#"><i class="icon-google-plus-logo"></i></a></li>
											</ul>
										</li>
									</ul>
								</div>
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
								<li><a href="#"><i class="icon-facebook"></i></a></li>
								<li><a href="#"><i class="icon-twitter"></i></a></li>
								<li><a href="#"><i class="icon-linkedin"></i></a></li>
								<li><a href="#"><i class="icon-google-plus-logo"></i></a></li>
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
						<div class="widget widget_page">
							<h2 class="ice_sub_heading widget-title">our pages</h2>
							<ul>
								<li><a href="javascript:;"><i class="icon-check-alt"></i>Home</a></li>
								
							</ul>
						</div>
					</div>
					<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
						<div class="widget widget_address">
							<h2 class="ice_sub_heading widget-title">our contact</h2>
							<ul>
								<li>
									<div class="address_icon"><i class="icon-location"></i></div>
									<div class="address_detail"><h3>Address</h3> <p>Rainbow Drive Youngstown</p></div>
								</li>
								<li>
									<div class="address_icon"><i class="icon-phone1"></i></div>
									<div class="address_detail"><h3>Contact Numbers</h3> <p>1800 450 1245</p></div>
								</li>
								<li>
									<div class="address_icon"><i class="icon-clock"></i></div>
									<div class="address_detail"><h3>Office Timings</h3> <p>Mon - Fri 9.00am : 6.00pm</p></div>
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


    
        },
      
    }
</script>
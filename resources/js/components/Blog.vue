<template>
	<div>
		<div class="loader_wrapper">
			<div class="loader">
				<img src="images/loader.gif" alt="">
			</div>
		</div>
		<div class="ice_main_wrapper">
			
			<div class="ice_banner_wrapper inner_banner">
				<img src="images/banner/banner_bg.jpg" alt="icecream-parlour-banner" class="img-responsive">
				<div class="banner_content">
					<div class="container">
						<div class="row">
							<div class="col-lg-10 col-md-10 col-sm-12 col-xs-12 col-lg-offset-1 col-md-offset-1 col-sm-offset-0 col-xs-offset-0">
								<div class="header_wrapper">
									<div class="ice_logo">
				                        <router-link :to="{ path: '/'}">
											<a href="javascript:;"><img src="images/banner/logo-white.png" alt="dessert-king-logo"></a>
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
												<li>
					                                <router-link :to="{ path: '/blog'}">
														<a href="javascript:;">Blog</a>
													</router-link>
												</li>
												<li>							    
													<router-link :to="{ path: '/shop'}">
														<a href="javascript:;">Shop</a>
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
									<h1>blog</h1>
									<ul class="breadcrumb">
										<li><a href="index.html">Home</a></li>
										<li class="active">blog</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="overlay">
					<div class="chery c1"><img src="images/banner/1.png" alt=""></div>
					<div class="chery c2"><img src="images/banner/1.png" alt=""></div>
					<div class="chery c3"><img src="images/banner/1.png" alt=""></div>
					<div class="chery c4"><img src="images/banner/1.png" alt=""></div>
					<div class="chery c5"><img src="images/banner/1.png" alt=""></div>
				</div>
			</div>
			<div class="ice_main_section1">
				<div class="container">
					<div class="row">
						<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 theiaStickySidebar">
							<div class="ice_sidebar">
								<div class="widget widget_search">
									<form class="search_form">
										<p>
											<input type="text" name="search" value="" class="search-feild" id="sidebar_search">
											<label for="sidebar_search">search...</label>
										</p>
										<a href="" class="search_btn"><i class="icon-search"></i></a>
									</form>
								</div>
								<div class="widget widget_category">
									<h2 class="widget-title ice_sub_heading">category</h2>
									<ul>
										<li>
											<a><i class="icon-check-alt"></i>Handmade Ice Cream</a>
										</li>
										<li>
											<a><i class="icon-check-alt"></i>Cups, Cones and Candies</a>
										</li>
										<li>
											<a><i class="icon-check-alt"></i>Frozen Custurd and Scotch </a>
										</li>
										<li>
											<a><i class="icon-check-alt"></i>Butter Scotch and Candies</a>
										</li>
										<li>
											<a><i class="icon-check-alt"></i>Candies and Frozen Custurd</a>
										</li>
										<li>
											<a><i class="icon-check-alt"></i>Frozen Custurd and Scotch </a>
										</li>
									</ul>
								</div>
								<div class="widget widget_news">
									<h2 class="widget-title ice_sub_heading">category</h2>
									<ul>
										<li>
											<div class="news_img">
												<a href=""><img alt="" src="http://via.placeholder.com/70x56"></a>
											</div>
											<div class="news_detail">
												<h4><a href="">There are many</a></h4>
												<ul>
													<li><a><i class="icon-heart"></i>1500</a></li>
													<li><a><i class="icon-bubble"></i>250</a></li>
												</ul>
											</div>
										</li>
										<li>
											<div class="news_img">
												<a href=""><img alt="" src="http://via.placeholder.com/70x56"></a>
											</div>
											<div class="news_detail">
												<h4><a href="">There are many Very</a></h4>
												<ul>
													<li><a><i class="icon-heart"></i>1500</a></li>
													<li><a><i class="icon-bubble"></i>250</a></li>
												</ul>
											</div>
										</li>
										<li>
											<div class="news_img">
												<a href=""><img alt="" src="http://via.placeholder.com/70x56"></a>
											</div>
											<div class="news_detail">
												<h4><a href="">There are many Versio</a></h4>
												<ul>
													<li><a><i class="icon-heart"></i>1500</a></li>
													<li><a><i class="icon-bubble"></i>250</a></li>
												</ul>
											</div>
										</li>
									</ul>
								</div>
								<div class="widget widget_tags">
									<h2 class="widget-title ice_sub_heading">tags</h2>
									<div class="tags">
										<a>workers</a>
										<a>work</a>
										<a>service</a>
										<a>service provider</a>
										<a>labour</a>
										<a>directory</a>
										<a>helper</a>
										<a>service provider</a>
										<a>labour</a>
									</div>
								</div>
								<div class="widget widget_social">
									<ul class="social_icon">
										<li><a href=""><i class="icon-facebook"></i></a></li>
										<li><a href=""><i class="icon-linkedin"></i></a></li>
										<li><a href=""><i class="icon-twitter"></i></a></li>
										<li><a href=""><i class="icon-google-plus-logo"></i></a></li>
										<li><a href=""><i class="icon-instagram-symbol"></i></a></li>
										<li><a href=""><i class="icon-pinterest-logo"></i></a></li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
							<div class="row">
								<div class="blog_wrapper">
									<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
										<div class="blog_Section wow slideup">
											<div class="blog_img ice_hover">
												<img src="http://via.placeholder.com/372x296" alt="" class="img-responsive">
												<div class="overlay">
													<a href="blog_single.html"><i class="flaticon-right-arrow"></i></a>
												</div>
											</div>
											<div class="blog_detail">
												<h2 class="ice_sub_heading"><a href="blog_single.html">We Post Amazing Post Blogs </a></h2>
												<ul>
													<li><span>by</span><a href="" class="link">admin</a></li>
													<li><a href="" class="link">24 Nov 2017</a></li>
													<li><span>in</span><a href="" class="link">Mechanic</a></li>
												</ul>
												<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.</p>
												<ul class="share_wrapper">
													<li><a href="#"><i class="icon-heart"></i>360</a></li>
													<li><a href="#"><i class="icon-bubble"></i>26</a></li>
													<li class="share"><a href="#"><i class="flaticon-share"></i>share</a>
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
												<img src="http://via.placeholder.com/372x296" alt="" class="img-responsive">
												<div class="overlay">
													<a href="blog_single.html"><i class="flaticon-right-arrow"></i></a>
												</div>
											</div>
											<div class="blog_detail">
												<h2 class="ice_sub_heading"><a href="blog_single.html">Ice Cream Journal </a></h2>
												<ul>
													<li><span>by</span><a href="" class="link">admin</a></li>
													<li><a href="" class="link">24 Nov 2017</a></li>
													<li><span>in</span><a href="" class="link">Mechanic</a></li>
												</ul>
												<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.</p>
												<ul class="share_wrapper">
													<li><a href="#"><i class="icon-heart"></i>360</a></li>
													<li><a href="#"><i class="icon-bubble"></i>26</a></li>
													<li class="share"><a href="#"><i class="flaticon-share"></i>share</a>
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
												<img src="http://via.placeholder.com/372x296" alt="" class="img-responsive">
												<div class="overlay">
													<a href="blog_single.html"><i class="flaticon-right-arrow"></i></a>
												</div>
											</div>
											<div class="blog_detail">
												<h2 class="ice_sub_heading"><a href="blog_single.html">Ice Cream Rolls | Youtube</a></h2>
												<ul>
													<li><span>by</span><a href="" class="link">admin</a></li>
													<li><a href="" class="link">24 Nov 2017</a></li>
													<li><span>in</span><a href="" class="link">Mechanic</a></li>
												</ul>
												<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
												<ul class="share_wrapper">
													<li><a href="#"><i class="icon-heart"></i>360</a></li>
													<li><a href="#"><i class="icon-bubble"></i>26</a></li>
													<li class="share"><a href="#"><i class="flaticon-share"></i>share</a>
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
									<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
										<div class="blog_Section wow slideup">
											<div class="blog_img ice_hover">
												<img src="http://via.placeholder.com/372x296" alt="" class="img-responsive">
												<div class="overlay">
													<a href="blog_single.html"><i class="flaticon-right-arrow"></i></a>
												</div>
											</div>
											<div class="blog_detail">
												<h2 class="ice_sub_heading"><a href="blog_single.html">Jeni's Splendid Ice Creams</a></h2>
												<ul>
													<li><span>by</span><a href="" class="link">admin</a></li>
													<li><a href="" class="link">24 Nov 2017</a></li>
													<li><span>in</span><a href="" class="link">Mechanic</a></li>
												</ul>
												<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
												<ul class="share_wrapper">
													<li><a href="#"><i class="icon-heart"></i>360</a></li>
													<li><a href="#"><i class="icon-bubble"></i>26</a></li>
													<li class="share"><a href="#"><i class="flaticon-share"></i>share</a>
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
												<img src="http://via.placeholder.com/372x296" alt="" class="img-responsive">
												<div class="overlay">
													<a href="blog_single.html"><i class="flaticon-right-arrow"></i></a>
												</div>
											</div>
											<div class="blog_detail">
												<h2 class="ice_sub_heading"><a href="blog_single.html">Reddit - Ice Cream</a></h2>
												<ul>
													<li><span>by</span><a href="" class="link">admin</a></li>
													<li><a href="" class="link">24 Nov 2017</a></li>
													<li><span>in</span><a href="" class="link">Mechanic</a></li>
												</ul>
												<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.</p>
												<ul class="share_wrapper">
													<li><a href="#"><i class="icon-heart"></i>360</a></li>
													<li><a href="#"><i class="icon-bubble"></i>26</a></li>
													<li class="share"><a href="#"><i class="flaticon-share"></i>share</a>
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
												<img src="http://via.placeholder.com/372x296" alt="" class="img-responsive">
												<div class="overlay">
													<a href="blog_single.html"><i class="flaticon-right-arrow"></i></a>
												</div>
											</div>
											<div class="blog_detail">
												<h2 class="ice_sub_heading"><a href="blog_single.html">Smitten Ice Cream</a></h2>
												<ul>
													<li><span>by</span><a href="" class="link">admin</a></li>
													<li><a href="" class="link">24 Nov 2017</a></li>
													<li><span>in</span><a href="" class="link">Mechanic</a></li>
												</ul>
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
												<ul class="share_wrapper">
													<li><a href="#"><i class="icon-heart"></i>360</a></li>
													<li><a href="#"><i class="icon-bubble"></i>26</a></li>
													<li class="share"><a href="#"><i class="flaticon-share"></i>share</a>
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
						<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
							<div class="ice_pagination">
								<ul class="pagination">
									<li class="disabled"><a href="#">&laquo;</a></li>
									<li class="active"><a href="#">1</a></li>
									<li><a href="#">2</a></li>
									<li><a href="#">3</a></li>
									<li><a href="#">4</a></li>
									<li><a href="#">5</a></li>
									<li><a href="#">&raquo;</a></li>
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
									<li>
										<router-link :to="{ path: '/shop'}">
											<a href="javascript:;"><i class="icon-check-alt"></i>Shop</a>
										</router-link>
									</li>
									<li>
		                                <router-link :to="{ path: '/blog'}">
											<a href="javascript:;"><i class="icon-check-alt"></i>Blog</a>
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
										<div class="address_detail"><h3>Address</h3> <p>
											223-225 Edward Road, Balsall Heath, B12 9LH, Birmingham
										</p></div>
									</li>
									<li>
										<div class="address_icon"><i class="icon-phone1"></i></div>
										<div class="address_detail"><h3>Contact Numbers</h3> <p>0121 337 7378</p></div>
									</li>
									<li>
										<div class="address_icon"><i class="icon-clock"></i></div>
										<div class="address_detail"><h3>Office Timings</h3>
											<p>Mon, Tue, Wed, Thurs, Sun</p>
											<p>4:00PM - 4:00AM</p>
											<p>Fri - Sat</p>
											<p>4:00PM - 5:00AM</p>
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
		<div class="goto_wrapper"><img src="images/loader.gif" alt=""></div>
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
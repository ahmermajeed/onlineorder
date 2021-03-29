<template>
	<div>
		
		<carousel :centerMode="true" :perPage="1" :autoplayTimeout="3000" :loop="true" :mouse-drag="true" :autoplay="true" :paginationEnabled="false">
		    <slide class="slide-1">
		        <img src="images/new-design/banner/b3.jpg">
		          <div class="header-detial">
		            <h2>Food Delivery at your Door Step</h2>
		            <p>Feel Amazed by our food</p>
		            <a 
		                href="#" 
		                class="btn btn-rounded-default btn-rounded-danger"  
		                @click.prevent="openPostalCode"> 
		                Order Now
		            </a>
		        </div> 
		    </slide>
		    <slide class="slide-2">
		        <img src="images/new-design/banner/b4.jpg">
		          <div class="header-detial">
		            <h2>Food Delivery at your Door Step</h2>
		            <p>Feel Amazed by our food</p>
		            <a 
		                href="#" 
		                class="btn btn-rounded-default btn-rounded-danger"  
		                @click.prevent="openPostalCode"> 
		                Order Now
		            </a>
		        </div> 
		    </slide>
		    <slide class="slide-3">
		        <img src="images/new-design/banner/b5.jpg">
		          <div class="header-detial">
		            <h2>Food Delivery at your Door Step</h2>
		            <p>Feel Amazed by our food</p>
		            <a 
		                href="#" 
		                class="btn btn-rounded-default btn-rounded-danger"  
		                @click.prevent="openPostalCode"> 
		                Order Now
		            </a>
		        </div> 
		    </slide>
		</carousel>
	</div>
</template>
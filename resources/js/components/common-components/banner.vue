<template>
	<div>
		
		<carousel :centerMode="true" :perPage="1" :autoplayTimeout="3000" :loop="true" :mouse-drag="true" :autoplay="true" :paginationEnabled="false">
		    <slide class="slide-1">
		        <img src="images/new-design/banner/pizza1.png">
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
		        <img src="images/new-design/banner/pizza2.png">
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
		        <img src="images/new-design/banner/pizza3.png">
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
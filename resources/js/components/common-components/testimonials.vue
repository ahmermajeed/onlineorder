<template>
	<div>
		<section class="section-fullwidth testimonial-section">
		    <div class="container">
		        <div class="testimonial">
		            <h2 class="text-center">Testimonials</h2>
		            <h4>What our client says about us!</h4>
		            <div class="testimonial-reviews">
		            	<div class="row">

		            		<div class="col-md-4">
		            			<div class="review-box">
		            				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
		            			<p>We were looking for a nice Halwa poori and chana breakfast place, and luckily went there. Food was amazing, service was great and even the price was reasonable. A family business run well. I highly recommend this place.</p>
		            			<p class="customer-name">- Muhammad A</p>
		            		</div>
		            		</div>
		            		<div class="col-md-4">
		            			<div class="review-box">
		            				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
			            			<p>Lovely food and great atmosphere. Nice homely vibes. All Halal, tasty breakfast and dinner options. Good fresh homemade food. Nihari is highly recommended.</p>
			            			<p class="customer-name">- Aqeel S </p>
			            		</div>
			            	</div>

    	            		<div class="col-md-4">
    	            			<div class="review-box">
    	            				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
    		            			<p>Went on Sunday afternoon with 20 members of the family and we all enjoyed it. The paratha and achar were lovely and the English breakfast was very filling. We ordered the food and waited 20 mins before it arrived. <a href="javascript:;" @click="openPopup()">Read more...</a></p>
			            			<p class="customer-name">- atifhaquk</p>
    		            		</div>
    	            		</div>
		            	</div>
		            </div>
		        </div>
		    </div>
		</section>
		<testimonials-popup @HideModalValue="hideModal" :showModalProp="showTestimonialPopup"></testimonials-popup>
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
                showTestimonialPopup: false,
            }
        },
        methods: {

            hideModal() {
                this.showTestimonialPopup = false;
            },

            openPopup() {
                this.showTestimonialPopup = true;
            },
         
        },


    }

</script>

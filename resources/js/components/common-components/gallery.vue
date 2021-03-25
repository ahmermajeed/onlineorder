<template>
	<div>
		<div class="container">
		    <div class="row">
		        <div class="col-md-12">
		            <div class="about-us">
		                <h2>
		                    Our Gallery
		                </h2>
		                <div class="gallery-images">
		                    <div class="row">
		                        <viewer :images="images">
		                            <img class="col-md-4" v-for="src in images"  :src="src" :key="src">
		                        </viewer>
		                    </div>
		                </div>
		            </div>                     
		        </div>
		    </div>
		</div>
	</div>
</template>

<script>
    export default {
        data: function () {
            return {
                images: [
                    'images/new-design/gallery/1.png',
                    'images/new-design/gallery/2.png',
                    'images/new-design/gallery/3.png',
                    'images/new-design/gallery/4.png',
                    'images/new-design/gallery/5.png',
                    'images/new-design/gallery/6.png',
                ],
                stories: [],
                index: null,
                showPopup: false,
                menu: false,
                allergy: false,
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
                this.showPostalCode = true;
            },
            hideModal() {
                this.showPostalCode = false;
            },

        }
    }
</script>
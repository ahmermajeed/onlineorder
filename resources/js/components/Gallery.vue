<template>
    <div>
        <header-menu></header-menu>

        <section class="menu-gallery">
            <div class="container">
                <div class="row main-title">
                    <div class="col-12">
                        <h3 class="mt-5">Our Gallery</h3>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-lg-4 col-md-6">
                        <div class="menubox">
                            <!-- <LightBox :media="media" :showLightBox="true"></LightBox> -->

                            <img src="/images/gallery/1.jpeg">
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="menubox">
                            <img src="/images/gallery/2.jpg">
                            
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="menubox">
                            <img src="/images/gallery/3.jpg">
                            
                        </div>
                    </div>
                </div>
                 <div class="row mb-4">
                    <div class="col-lg-4 col-md-6">
                        <div class="menubox">
                            <img src="/images/gallery/4.jpg">
                       
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="menubox">
                            <img src="/images/gallery/5.jpg">
                            
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="menubox">
                            <img src="/images/gallery/6.jpg">
                         
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <footer-menu></footer-menu>
    </div>
</template>
<script src="path/to/dist/vue-image-lightbox.js"></script>
<script>
    import LightBox from 'vue-image-lightbox'


    export default {
        components: {
            LightBox
        },
        data() {
            return {
                media: [
                      { // For image
                        thumb: 'https://cdn.pixabay.com/photo/2016/06/26/22/45/india-1481494__340.jpg',
                        src: 'https://cdn.pixabay.com/photo/2016/06/26/22/45/india-1481494__340.jpg',
                      },
                    
                    ]
            };
        },
    }                           
</script>


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
                    <div class="col-lg-4 col-md-6"   v-for="(src, index) in imgs"       
                            :key="index">
                        <div class="menubox pic"       
                          
                            @click="() => showImg(index)">
                            <img :src="src">
                        </div>
                    </div>

                </div>
            <!--      <div class="row mb-4">
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
                </div> -->
                  <vue-easy-lightbox
                    :visible="visible"
                    :imgs="imgs"
                    :index="index"
                    @hide="handleHide"
                  ></vue-easy-lightbox>
            </div>
        </section>

        <footer-menu></footer-menu>
    </div>
</template>
<script>
    import VueEasyLightbox from 'vue-easy-lightbox'


    export default {
        components: {
            VueEasyLightbox
        },
        data() {
            return {
                visible: false,
                index: 0,   // default: 0
                imgs: [
                      '/images/gallery/1.jpeg',
                      '/images/gallery/2.jpg',
                      '/images/gallery/3.jpg',
                      '/images/gallery/4.jpg',
                      '/images/gallery/5.jpg',
                      '/images/gallery/6.jpg',
                    ]
            };
        },
        methods: {
            showImg (index) {
              this.index = index
              this.visible = true
            },
            handleHide () {
              this.visible = false
            }
          }
    }                           
</script>


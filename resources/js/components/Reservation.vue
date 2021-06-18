<template>
    <div>
        <header-menu></header-menu>
        <div class="header-reservation section-fullwidth">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-xl-5">

                    </div>
               
                </div>
            </div>
        </div>

        <section class="section-gallery">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h3>Gallery</h3>
                        <div class="row image-gallery">
                            <lingallery
                                :iid.sync="currentId"
                                :width="width"
                                :height="height"
                                :items="items"
                                :responsive="true"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Book your reservation section start -->
        <reservation></reservation>
        <!-- Book your reservation section end -->
        

        <!-- Footer start -->
        <footer-menu></footer-menu>
        <!-- Footer end -->
        
    </div>
</template>

<script>
import Lingallery from 'lingallery'

    export default {

        components: {
            Lingallery,
        },

        data: function() {
            return {
                gallery: [],
                width: 400,
                height: 400,

                items: [
                    {
                        src: 'images/tasty-land/gallery/1.jpg',
                        thumbnail: 'images/tasty-land/gallery/1.jpg',
                    },
                    {
                        src: 'images/tasty-land/gallery/2.jpg',
                        thumbnail: 'images/tasty-land/gallery/2.jpg',
                    },
                    {
                        src: 'images/tasty-land/gallery/3.jpg',
                        thumbnail: 'images/tasty-land/gallery/3.jpg',
                    },
                ],
                currentId: null,
            }
        },

        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<template>
    <div class="home-page">
        <header-menu></header-menu>
        
        <!-- banner start -->
        <section class="hero-sec">
            <banner></banner>
        </section>
        <!-- banner end -->

        <!-- Welcome section -->
        <section class="section-fullwidth welcome-banner-parallax" style="background-image: url(/images/new-design/welcome-image/welcome-banner.png);
">
            <welcome></welcome>
        </section>        
        <!-- Welcome section end -->

        <!-- Gallery Section -->
        <section class="section-fullwidth">
            <gallery></gallery>
        </section> 
        <!-- Gallery Section end -->

        <!-- About section -->
        <section class="section-fullwidth">
            <about-us></about-us>
        </section>
        <!-- About section end -->


        <section class="section-fullwidth">
            <contact></contact>
        </section>
        <footer-menu></footer-menu>
          <postal-code-popup  @HideModalValue="hideModal"   :showModalProp="showPostalCode"></postal-code-popup>
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


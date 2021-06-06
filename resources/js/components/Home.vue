<template>
    <div>
        <header-menu></header-menu>
        <section class="photo-gal-sec">
            <div class="container">
                <div class="row">
                    <div class="title col-12">
                        <h4>Photos</h4>
                        <h3>Our Food Gallery!</h3>
                        <p>
                            Follow Us On Social Media To Keep In Check With Our
                            Latest Updates.
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <div class="img-box">
                            <img src="/images/flame-inn/menu-img/1.png" />
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="img-box">
                            <img src="/images/flame-inn/menu-img/2.png" />
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="img-box">
                            <img src="/images/flame-inn/menu-img/3.png" />
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="img-box">
                            <img src="/images/flame-inn/menu-img/4.png" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="photo-gal-sec hero-sec video-section">
            <div class="title">
                <h4>Videos</h4>
                <h3>Our Menu!</h3>
                <carousel
                    :centerMode="true"
                    :perPage="1"
                    :autoplayTimeout="9000"
                    :loop="true"
                    :mouse-drag="true"
                    :autoplay="true"
                >
                    <slide class="slide-1">
                        <video
                            width="1000"
                            height="500"
                            controls
                            autoplay
                            muted
                            loop
                        >
                            <source
                                src="images/flame-inn/video/video1.mp4"
                                type="video/mp4"
                            />
                            Your browser does not support HTML video.
                        </video>
                    </slide>
                    <slide class="slide-2">
                        <video
                            width="1000"
                            height="500"
                            controls
                            autoplay
                            muted
                            loop
                        >
                            <source
                                src="images/flame-inn/video/video2.mp4"
                                type="video/mp4"
                            />
                            Your browser does not support HTML video.
                        </video>
                    </slide>
                    <slide class="slide-3">
                        <video
                            width="1000"
                            height="500"
                            controls
                            autoplay
                            muted
                            loop
                        >
                            <source
                                src="images/flame-inn/video/video3.mp4"
                                type="video/mp4"
                            />
                            Your browser does not support HTML video.
                        </video>
                    </slide>
                    <slide class="slide-4">
                        <video
                            width="1000"
                            height="500"
                            controls
                            autoplay
                            muted
                            loop
                        >
                            <source
                                src="images/flame-inn/video/video4.mp4"
                                type="video/mp4"
                            />
                            Your browser does not support HTML video.
                        </video>
                    </slide>
                </carousel>
            </div>
        </section>

        <footer-menu></footer-menu>
        <postal-code-popup  @HideModalValue="hideModal"   :showModalProp="showPostalCode"></postal-code-popup>
    </div>
</template>

<script>
    import VueGallery from 'vue-gallery';
    import { Carousel, Slide } from 'vue-carousel';

    export default {
        components: {
            Slide,
            Carousel,
        },
        data: function () {
            return {
                images: [
                    '../../images/mainbanner1.jpeg',
                    '../../images/image00003.jpg',
                ],
                stories: [],
                index: null,
                showPopup: false,
                menu: false,
                showPostalCode: false,
                allergy: false
            };
        },
        mounted() {
            this.getStory();
            this.autoPlayVideo()

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
            autoPlayVideo() {
                $(document).ready(function() {
                    if ($(window).width() < 767) {
                        $('#video_player')[0].load()
                        $('#video_player')[0].play()
                        $('#video_player')[0].autoplay = true
                    }
                })
            },

        }
    }
</script>


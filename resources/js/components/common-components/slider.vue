<template>
    <div>
        <hooper style="height: 400px" >
            <slide v-for="(item, index) in sliders">
                <img :src="item.image">
            </slide>
            <hooper-navigation slot="hooper-addons"></hooper-navigation>
        </hooper>
        <div class="space-70"></div>
    </div>
</template>

<script>
    import VueGallery from 'vue-gallery';
    import {
        Hooper,
        Slide,
        Navigation as HooperNavigation
    } from 'hooper';

    import 'hooper/dist/hooper.css';
    export default {
        components: {
            Hooper,
            Slide,
            HooperNavigation,
            'gallery': VueGallery,
        },
        methods: {
            getSlider(){
                let  _this = this
                _this.loading  = true;
                axios.get('/api/slider')
                    .then((response) => {
                        _this.sliders =  response.data.data;
                        _this.loading  = false;
                    });
            },
        },
        data: function () {
            return {
                images: [
                    'https://cdn.ekuep.com/img/cms/snd-2021/New/SND_Ekuep_Dektop_EN.png',

                ],
                sliders: [],
                index: null
            };
        },
        mounted() {
            this.getSlider();
            console.log('Component mounted.')
        }
    }
</script>


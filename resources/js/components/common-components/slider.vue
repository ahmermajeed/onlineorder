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
                    'https://dummyimage.com/800/ffffff/000000',
                    'https://dummyimage.com/1600/ffffff/000000',
                    'https://dummyimage.com/1280/000000/ffffff',
                    'https://dummyimage.com/400/000000/ffffff',
                    'https://dummyimage.com/800/ffffff/000000',
                    'https://dummyimage.com/1600/ffffff/000000',
                    'https://dummyimage.com/1280/000000/ffffff',
                    'https://dummyimage.com/400/000000/ffffff'
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


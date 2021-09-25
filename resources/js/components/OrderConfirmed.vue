<template>
    <div>
        <header-menu></header-menu>
        <section class="hero-sec">            
        </section>

        <section class="order-information mt-5">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3 class="mb-3">Order Confirmed</h3>
                    <div>
               </div>
                </div>
        	</div>
        </div>
    </section>

        <footer-menu></footer-menu>

    </div>
</template>

<script>

    export default {
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
                allergy: false,
                categories:[],
                postal_code: '',
                error_message: '',

                showPostalCode: false,
                listingHeads: [
                    {
                        title: 'ID',
                    },
                    {
                        title: 'Menu',
                        width: 300,
                    },
                    {
                        title: 'Description',
                        width: 150,
                    },
					{
                        title: 'Quantity',
                        width: 150,
                    },
                    {
                        title: 'Status',
                        width: 150,
                    },
                    {
                        title: 'Price',
                        width: 600,
                    },
                ],
                records: [
                	{
                		id: '1',
                		item_name: 'Margherita Pizza',
                		item_descp: 'Pepperoni.',
                		quantity: '1',
                		price: '£7.50'

                	},
                	{
                		id: '2',
                		item_name: 'Hawaiian Pizza',
                		item_descp: 'ham & pineapple..',
                		quantity: '2',
                		price: '£8.00'
                	},
                	{
                		id: '3',
                		item_name: 'Vegetarian',
                		item_descp: 'mushrooms, onions, pepper & sweetcorn.',
                		quantity: '3',
                		price: '£9.00'
                	}
                ]
            };
        },
        created() {
            this.getStory();
            this.getCategories();
            var scripts = [
                "https://apps.elfsight.com/p/platform.js",

            ];
            scripts.forEach(script => {
                let tag = document.createElement("script");
                tag.setAttribute("src", script);
                document.head.appendChild(tag);

            });

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
                this.showPopup = false;
                this.allergy = false;
                this.menu = false;
                this.showPostalCode = true;
            },

            getCategories(){
                let  _this = this;
                _this.loading  = true;
                axios.get('/api/categories')
                    .then((response) => {
                        _this.categories =  response.data.data;
                        console.log(this.categories);
                        _this.loading  = false;

                    });
            },

            returnPriceValue(product){
                let price_string = '';
                if(product.sizes.length){

                    for(var price in  product.sizes){
                        price_string = product.sizes[0].price;
                    }
                }else {
                    price_string = product.price;
                }

                return '£'+price_string

            },

            hideModal() {
                this.showPopup = false;
                this.showPostalCode = false;
            },

        }
    }
</script>



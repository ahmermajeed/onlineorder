<template>
    <div>

        <section class="order-information mt-5">
            <div class="container">
                <div class="order-confirm-header">
                    <img src="/images/tasty-land/sen-logo.png" alt="">
                </div>
                    <div class="order-confirm">
                        <h3 class="mb-3">Your Order Confirmed!</h3>
                        <p><strong>Hi Whitney,</strong></p>
                        <p>Your order has been confirmed and will be shipping soon.</p>
                    </div>
                    <div class="order-detail">
                        <table class="table">
                            <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                              </tr>
                            </thead>
                          <tbody>
                            <tr>
                              <td>Otto</td>
                              <td>Thornton</td>
                              <td>the Bird</td>
                              <td>the Bird</td>
                            </tr>
                          </tbody>
                        </table>
                    </div>
                    <div class="item-detail">
                        <table class="table">
                          <tbody>
                            <tr>
                              <td><img src="/images/tasty-land/bee-hive.jpg" style="width: 90px;" alt=""></td>
                              <td>
                                <p>Complete Bee Hive Starter Kit</p>
                                <p class="more-info">BeeCastle Hives</p>
                            </td>
                              <td>Qty 1</td>
                              <td>$199.99</td>
                            </tr>
                          </tbody>
                        </table>
                    </div>
                    <div class="bill-info">
                        <table class="table">
                          <tbody>
                            <tr>                             
                              <td>Sub Total</td>
                              <td>$199.99</td>
                            </tr>
                            <tr>
                              <td>Express Shipping</td>
                              <td>$6.99</td>
                            </tr>
                            <tr>
                                <td>Taxes</td>
                                <td>$13.99</td>
                            </tr>
                            <tr>
                                <td>Discount(SAVE20)</td>
                                <td>-20% ($39.99)</td>
                            </tr>
                          </tbody>
                        </table>
                    </div>
                    <div class="total-bill-info">
                       <table class="table">
                         <tbody>
                           <tr>                             
                             <td>Sub Total</td>
                             <td>$180.98</td>
                           </tr>
                         </tbody>
                       </table> 
                    </div>
                    <div class="shipping-info">
                        <p>We'll send you shipping confirmation when your item(s) are on the way! We appreciate your business, and hope you enjoy your purchase.</p>
                        <p>Thank you!</p>
                        <p>Beekeeper Supplies</p>
                    </div>
                    <div class="order-confirm-footer">
                        <p>Question? Contact our <a href="javascript:;">Customer Support </a></p>
                        <p>&copy; Beekeeper Supplies</p>
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



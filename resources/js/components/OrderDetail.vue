<template>
    <div>
        <header-menu></header-menu>
        <section class="hero-sec">            
        </section>

        <section class="order-information mt-5">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3 class="mb-3">Order Details</h3>
                    <div>
                 <b-card no-body>
                   <b-tabs pills card vertical>
                     <b-tab title="Order Detail" active>
                        <b-card-text>
                            <div class="row">
                                <div class="col-md-12">
                                    <h4 class="mb-3">Your Order</h4>
                                    <div class="row">
                                        <div class="col-md-12">
                                              <div class="table-responsive table-borderless">
                                                  <table class="table">
                                                      <thead>
                                                          <tr>
                                                              <th class="text-center">S. No.</th>
                                                              <th>Order #</th>
                                                              <th>Menu</th>
                                                              <th>Status</th>
                                                              <th>Description</th>
                                                              <th>Quantity</th>
                                                              <th>Price</th>
                                                              <th></th>
                                                          </tr>
                                                      </thead>
                                             <tbody class="table-body">
                                                <tr class="cell-1" data-toggle="collapse" data-target="#demo">
                                                    <td class="text-center">1</td>
                                                    <td>1</td>
                                                    <td>Supreme Pizza</td>
                                                    <td><span class="badge badge-danger">Fullfilled</span></td>
                                                    <td>$26</td>
                                                    <td>2</td>
                                                    <td class="table-elipse" data-toggle="collapse" data-target="#demo"><i class="fa fa-ellipsis-h text-black-50"></i></td>
                                                         
                                                </tr>
                                                <tr>
                                                   <td colspan="8" class="p-0">
                                                       <div id="demo" class="product-detail table-data-toogle collapse cell-1 row-child">
                                                     <h4>Product Detail</h4> 
                                                     <table class="table">
                                                       <tbody>
                                                         <tr>
                                                           <td>Product Name</td>
                                                           <td>Cheese Pizza</td>
                                                         </tr>
                                                         <tr>
                                                           <td>Product Quantity</td>
                                                           <td>2</td>

                                                         </tr>
                                                         <tr>
                                                           <td>Delivery Status</td>
                                                           <td>Delivered</td>

                                                         </tr>
                                                         <tr>
                                                           <td>Sub Total</td>
                                                           <td>500</td>

                                                         </tr>
                                                         <tr>
                                                           <td>Total</td>
                                                           <td>500</td>

                                                         </tr>
                                                       </tbody>
                                                     </table>
                                                    </div>
                                                </td>
                                                </tr>
                                              
                                                <tr class="cell-1" data-toggle="collapse" data-target="#demo-2">
                                                    <td class="text-center">2</td>
                                                    <td>2</td>
                                                    <td>Cheese Pizza</td>
                                                    <td><span class="badge badge-success">Fullfilled</span></td>
                                                    <td>$36</td>
                                                    <td>3</td>
                                                    <td class="table-elipse" data-toggle="collapse" data-target="#demo"><i class="fa fa-ellipsis-h text-black-50"></i></td>
                                                </tr>
                                                <tr>
                                                   <td colspan="8" class="p-0">
                                                      <div id="demo-2" class="product-detail collapse cell-1 row-child">
                                                   <h4>Product Detail</h4> 
                                             <table class="table">
                                               <tbody>
                                                 <tr>
                                                   <td>Product Name</td>
                                                   <td>Cheese Pizza</td>
                                                 </tr>
                                                 <tr>
                                                   <td>Product Quantity</td>
                                                   <td>2</td>

                                                 </tr>
                                                 <tr>
                                                   <td>Delivery Status</td>
                                                   <td>Delivered</td>

                                                 </tr>
                                                 <tr>
                                                   <td>Sub Total</td>
                                                   <td>500</td>

                                                 </tr>
                                                 <tr>
                                                   <td>Total</td>
                                                   <td>500</td>

                                                 </tr>
                                               </tbody>
                                             </table>
                                                  </div>
                                                  </td>
                                                </tr>
                                            
                                            </tbody>
                                           </table>
                                           


                                           
                                               
                                              </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-card-text>
                     </b-tab>
                     <b-tab title="Account Setting">
                        <b-card-text>
                        <div class="row">
                            <div class="col-md-12">
                                <h3 class="mb-2">Password Change</h3>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="">Current Password</label>
                                            <input type="text" class="form-control" placeholder="Enter current password">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="">New Password</label>
                                            <input type="text" class="form-control" placeholder="Enter new password">
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="">Confirm New Password</label>
                                            <input type="text" class="form-control" placeholder="Enter confirm new password">
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <a href="javascript:;" class="btn cstm-btn btn-primary">
                                          Change Password 
                                        </a>
                                    </div>
                                </div>
                            </div>
                            </div>
                       </b-card-text>
                   </b-tab>
               </b-tabs>
             </b-card>
                     
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



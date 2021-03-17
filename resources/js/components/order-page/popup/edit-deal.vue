<template>
    <div>
        <b-modal id="add-deal" centered @hidden="onHidden" :hide-footer=true title-tag="h4" ok-variant="primary" ref="myModalRef" custom-modal no-close-on-backdrop class="custom-modal">
            <b-alert show variant="danger" v-if="error_message" style="text-transform: capitalize;">{{error_message}}</b-alert>


            <h3>{{deals_data.name}}</h3>

            <div class="product-gallery" >
                <h4> £ {{deals_data.price}}  </h4>
            </div> 
            <div class="description">
                <div class="info-item section-border mb-4 ">
                    <h4 class="text-left float-none">Description</h4>
                    <p>{{deals_data.description}}</p>
                </div>
                
            </div>


            <div  v-for="(item, index) in dealsProducts" class="addcart-form  section-border mb-3">
                <div v-for="(n,index) in item.quantity">
                    <h4>{{item.name}} {{n}} </h4>
                    <div  v-for="(product, index) in item.products">
                        <ul class="selectionlist radio-list">
                            <li>
                                <label>
                                    <input type="radio"  :value="product.name"   v-model="productData[item.name +' '+n]" >
                                    {{product.name}}
                                    
                                    <span class="checkmark"></span>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div class="input-holder">
                <h4>Special instructions <span class="required-text"> *</span></h4>
                <textarea class="form-control" rows="3" cols="12"  v-model="productData['special_instruction']"></textarea>

            </div>


                    <div class="row count-footer section-border">
                        <div class="col-lg-6 col-md-6 col-sm-12 increment-buttons ">
                            <div class="cont-section">
                                <div class=" quantity-head text-left">
                                    <h4>Quantity</h4>
                                </div>
                                <div class="select-num text-right">
                                    <div class="qunt-btn">
                                        <button type="button" class="btn-plus"  @click.prevent="plusQuantity()" >
                                            <i class="icon-plus"></i>
                                        </button>

                                   
                                        <span class="btn-badge-count">{{product_quantity}}</span> 

                                          <button type="button" class="btn-minus" @click.prevent="minusQuantity()">
                                        <i class="icon-subtract"></i>
                                         </button>  
                                       
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-6 col-sm-12 text-right ">
                            <div class="priec-add">
                                <h4 class="text-left">Total Amount : </h4>
                               <span class="text-right">{{priceFormat(total_amount_of_single_product * product_quantity)}}</span>
                            </div>
                               
                        </div>
                    </div>

            <div class="row mt-3">
                <div class="col text-right">
                    <button  @click.prevent="addToCart()" class="custom-btn add-count-button btn  btn-danger">Update</button>
                </div>
            </div>

        </b-modal>
    </div>
</template>
<script>
    export default {
        props: ['showModalProp','deals_data','editIndex','editDealsData'],
        data: function () {
            return {
                errorMessage: '',
                successMessage: '',
                isError: false,
                product_quantity:1,
                main_array : [],
                productData: {},
                total_amount_of_single_product : 0,
                product_array:{},
                cart:[],
                error_message:'',
                dealsProducts:[]

            };
        },
        methods: {

            scrollToTop() {
                $('div#add-product').stop().animate({
                    scrollTop: 0
                }, 'slow', 'swing');
            },

            priceFormat (num) {
                return  parseFloat(num).toFixed(2);
            },

            showModal() {
                if(this.deals_data.items.length > 0 ){
                    this.dealsProducts = this.deals_data.items;
                }
                this.$refs.myModalRef.show();

                this.total_amount_of_single_product = this.priceFormat(this.deals_data.price);

                this.product_quantity = this.editDealsData.quantity;
                console.log(this.editDealsData.extras);
                for (var key in this.editDealsData.extras) {
                    this.productData[this.editDealsData.extras[key]['group_name']] = this.editDealsData.extras[key]['choice'] ;
                }

            },
            onHidden() {
                this.dealsProducts = [];
                this.$emit('HideModalValue');
            },
            hideModal() {
                var self = this;
                self.total_amount_of_single_product= 0;
                self.product_quantity =1;
                this.productData = {};
                this.main_array=[];
                this.error_message = '';
                this.$refs.myModalRef.hide();
            },
            addToCart()
            {
                this.error_message = '';
                this.product_array = {};
                let total_amount = 0;
                total_amount = this.total_amount_of_single_product * this.product_quantity;
                let extras = [];
                console.log(this.productData);
                // return;

                this.product_array = {
                    'product_id':this.deals_data.id,
                    'product_type':'deal',
                    'quantity' :  this.product_quantity,
                    'product_name':this.deals_data.name,
                    'price':this.total_amount_of_single_product,
                    'special_instructions':this.productData.special_instruction,
                    'single_product_total_amount':total_amount,
                };

                let group_check = [];

                for (var key in this.productData) {
                    if(key != undefined){
                        if(key != 'special_instruction'){

                            extras.push({group_name:key,choice:this.productData[key],'price':0})
                            group_check.push(key)
                        }
                    }
                }
                if(extras.length > 0 ){
                    this.product_array.extras = extras;
                }
                this.$store.getters.getAllCartArray[this.editIndex]  = this.product_array;
                this.hideModal();

            },
            validateBeforeSubmit() {
                var form_data = this.productData;
                this.errorBag.clear();
                this.$validator.validateAll().then((result) => {
                    if (result && !this.errorBag.all().length) {
                        if(this.productData.name === "") {
                            this.errorBag.add({
                                msg: 'The Name is required.',
                                rule: 'required',
                            });
                            this.errorMessage = this.errorBag.all()[0];

                        }
                    }
                    //his.errorMessage = this.errorBag.all()[0];
                });
            },
            plusQuantity(){
                this.quantity = this.product_quantity ++;
            },
            minusQuantity(){
                if(this.product_quantity  > 1){
                    this.quantity = this.product_quantity --;

                }
            },
            checkMandatory(){
                let _this = this;
                let  mandatory = [];
                if(this.has_sizes){
                    mandatory.push('size')
                }
                if(this.list.groups.length > 0 ){
                    for( let group in  this.list.groups){
                        if(this.list.groups[group].type == 'Mandatory'){
                            mandatory.push(_this.list.groups[group].name)
                        }
                    }
                }
                return mandatory;
            },

            productSum(array_key,value){
                setTimeout(()=>{
                    let total = 0;
                    let vm  = this;
                    if(!this.has_sizes){
                        total =  parseFloat(this.list.price);
                    }
                    for (var key in this.productData) {
                        let price =  this.productData[key].split("##@@");
                        total +=  parseFloat(price[1]) ;
                    }
                    this.total_amount_of_single_product = total;
                },300);
            },



        },
        watch: {
            showModalProp(value) {
                if (value) {
                    this.showModal();
                }
                if (!value) {
                    this.hideModal();
                }
            }
        }
    }
</script>

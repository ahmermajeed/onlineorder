<template>
    <div>
        <b-modal id="edit-product" centered @hidden="onHidden" :hide-footer=true title-tag="h4" ok-variant="primary" ref="myModalRef" no-close-on-backdrop class="custom-modal ">
            <b-alert show variant="danger" v-if="error_message" style="text-transform: capitalize;">{{error_message}}</b-alert>
            <h3>Name : {{list.name}}</h3>
            <div class="product-gallery" >
                <h4 v-if="!has_sizes">Price :  £ {{list.price}}  </h4>

            </div>
            <div class="description">
                <div class="info-item section-border mb-3">
                    <h4 class="text-left float-none">Description</h4>
                    <p>{{list.description}}</p>
                </div>
                

                <h4 v-if="list.food_allergy">Allergy Information</h4>
                <p v-if="list.food_allergy">{{list.food_allergy}} </p>

                <form action="" method="">

                    <div v-if="has_sizes">
                        <h4>Sizes</h4>
                        <ul class="selectionlist radio-list" >
                            <li v-for="(item, index) in list.sizes" >
                                <label>
                                    <input type="radio" :value="item.size+'##@@'+priceFormat(item.price)"    v-model="productData['size']"  @click="productSum('size',item.price)">
                                    {{item.size}}
                                    
                                    <span class="checkmark"></span>
                                </label>
                                <span style="float:right"> £  {{item.price}}</span>
                            </li>
                        </ul>
                    </div>


                    <div  v-for="(item, index) in list.groups">
                        <h4>{{item.name}}</h4>
                        <ul class="selectionlist radio-list" >
                            <li v-for="(choice,choice_index) in item.choices" >
                                <label>
                                     <input type="radio"  :value="choice.name+'##@@'+priceFormat(choice.price)"   v-model="productData[item.name]" @click="productSum(item.name,choice.price)" >
                                    {{choice.name}}

                                    {{item.name}}
                                   
                                    <span class="checkmark"></span>

                                </label>
                                <span style="float:right"> £  {{choice.price}}</span>
                            </li>
                        </ul>
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
                </form>

            </div>
        </b-modal>
    </div>
</template>
<script>
    export default {
        props: ['showModalProp','list','has_sizes','editList','editIndex'],
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
                error_message:''
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
                this.$refs.myModalRef.show();
                this.total_amount_of_single_product = this.priceFormat(this.list.price);
                this.product_quantity = this.editList.quantity;
                let vm = this;
                for (var choice in this.editList.extras) {
                    let index = this.editList.extras[choice]['group_name'];
                    this.productData[index] = this.editList.extras[choice]['choice']+'##@@'+this.priceFormat(this.editList.extras[choice]['price']);
                }
            },
            onHidden() {
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
                this.product_array = {
                    'product_id':this.list.id,
                    'quantity' :  this.product_quantity,
                    'product_name':this.list.name,
                    'price':this.total_amount_of_single_product,
                    'special_instructions':this.productData.special_instruction,
                    'single_product_total_amount':total_amount,
                };

                let group_check = [];

                for (var key in this.productData) {
                    if(key != undefined){
                        if(key != 'special_instruction'){
                            let choice =  this.productData[key].split("##@@");
                            extras.push({group_name:key,choice:choice[0],'price':choice[1]})
                            group_check.push(key)
                        }
                    }
                }



                let checkMandatory = this.checkMandatory();

                if(checkMandatory.length > 0 ){
                    for( var cm in checkMandatory) {
                        if(group_check.indexOf(checkMandatory[cm]) === -1) {
                            this.error_message  = checkMandatory[cm] + ' is Required'
                            this.scrollToTop();
                            return;
                        }
                    }
                }

                if(extras.length > 0 ){
                    this.product_array.extras = extras;
                }

                // let cart_data =  this.$store.getters.getAllCartArray;
                this.$store.getters.getAllCartArray[this.editIndex]  = this.product_array;

                // if(cart_data.length === 0){
                //     this.$store.commit('setAllCartArray', this.product_array);
                // }else {
                //     let _this = this;
                //     let old = this.$store.getters.getAllCartArray;
                //     old.push(this.product_array);
                //     this.$store.commit('setAllCartArray', old);
                // }
                this.hideModal();

            },
            validateBeforeSubmit() {


                this.productData =
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
                },200);
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

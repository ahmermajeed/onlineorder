<template>
    <div>
        <b-modal id="add-deal" centered @hidden="onHidden" :hide-footer=true title-tag="h4" ok-variant="primary" ref="myModalRef" custom-modal no-close-on-backdrop class="custom-modal">
            <b-alert show variant="danger" v-if="error_message" style="text-transform: capitalize;">{{error_message}}</b-alert>
             <h3>{{deals_data.name}}</h3>

            <div class="product-gallery" >
                <h4> £ {{deals_data.price}}  </h4>
            </div>
            <div class="description">
                <h4>Description</h4>
                <p>{{deals_data.description}}</p>
            </div>


            <div  v-for="(item, index) in dealsProducts">
                <div v-for="(n,index) in item.quantity">
                    <h4>{{item.name}} {{n}} </h4>
                    <div  v-for="(product, index) in item.products">
                        <ul class="selectionlist radio-list">
                            <li>
                                <label>
                                    {{product.name}}
                                    <input type="radio"  :value="product.name"   v-model="productData[item.name +' '+n]" >
                                    <span class="checkmark"></span>
                                </label>
                            </li>
                        </ul>
                    </div>
                    <div v-if="item.is_options == 1">
                        <div  v-for="(item, index) in item.products[0].groups">
                            <h4>{{item.name}}</h4>
                            <ul class="selectionlist radio-list" >
                                <li v-for="(choice,choice_index) in item.choices">
                                    <label>
                                        {{choice.name}}
                                        <input type="radio"  :value="choice.name+'##@@'+priceFormat(choice.price)"   v-model="productData[item.name +' '+n]" @click="productSum(item.name,priceFormat(choice.price))">
                                        <span class="checkmark"></span>
                                    </label>
                                    <span style="float:right"> £  {{choice.price}}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <div class="input-holder">
                <h4>Special instructions <span class="required-text"> *</span></h4>
                <textarea class="form-control" rows="3" cols="12"  v-model="productData['special_instruction']"></textarea>

            </div>


            <div class="row count-footer">
                <div class="col increment-buttons">
                    <button type="button" class="btn-minus" @click.prevent="minusQuantity()">
                        <i class="fas fa-minus-circle"></i>
                    </button>
                    <span class="btn-badge-count">{{product_quantity}}</span>
                    <button type="button" class="btn-plus"  @click.prevent="plusQuantity()" >
                        <i class="fas fa-plus-circle"></i>
                    </button>
                </div>

                <div class="col text-right">
                    <h3 >Total Amount : <span>{{priceFormat(total_amount_of_single_product * product_quantity)}}</span></h3>
                </div>
            </div>

            <div class="row mt-3 pt-4" style="border-top: 1px solid #ddd;">
                <div class="col text-center">
                    <button  @click.prevent="addToCart()" class="custom-btn add-count-button">Add</button>
                </div>
            </div>

        </b-modal>
    </div>
</template>
<script>
    export default {
        props: ['showModalProp','deals_data'],
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
                            let choice =  this.productData[key].split("##@@");
                            if(choice[0] != undefined){
                                extras.push({group_name:key,choice:choice[0],'price':choice[1]})
                            }else {
                                extras.push({group_name:key,choice:this.productData[key],'price':0})
                            }
                            group_check.push(key)
                        }
                    }
                }
                //
                // let checkMandatory = this.checkMandatory();
                //
                // if(checkMandatory.length > 0 ){
                //     for( var cm in checkMandatory) {
                //         if(group_check.indexOf(checkMandatory[cm]) === -1) {
                //             this.error_message  = checkMandatory[cm] + ' is Required'
                //             this.scrollToTop();
                //             return;
                //         }
                //     }
                // }

                if(extras.length > 0 ){
                    this.product_array.extras = extras;
                }

                let cart_data =  this.$store.getters.getAllCartArray;

                if(cart_data.length === 0){
                    this.$store.commit('setAllCartArray', this.product_array);
                }else {
                    let _this = this;
                    let old = this.$store.getters.getAllCartArray;
                    old.push(this.product_array);
                    this.$store.commit('setAllCartArray', old);
                }
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

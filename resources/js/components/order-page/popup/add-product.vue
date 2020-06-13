<template>
    <div>
        <b-modal id="add-product" centered @hidden="onHidden" :hide-footer=true title-tag="h4" ok-variant="primary" ref="myModalRef" no-close-on-backdrop class="custom-modal ">
            <h3>Name : {{list.name}}</h3>
            <div class="product-gallery" >
                <h4 v-if="!has_sizes">Price :  £ {{list.price}}  </h4>

            </div>
            <div class="description">
                <h4>Description</h4>
                <p>{{list.description}}</p>

                <h4>Allergy Information</h4>
                <p>lorem ipsume lorem ipsume lorem ipsume lorem ipsume lorem ipsume lorem ipsume lorem ipsume lorem ipsume lorem ipsume lorem ipsume lorem ipsume lorem ipsume lorem ipsume lorem ipsume lorem ipsume lorem ipsume lorem ipsume lorem ipsume lorem ipsume lorem ipsume lorem ipsume lorem ipsume </p>

                <form action="" method="">

<!--                    <div>-->
<!--                    <h4>Gourmet Fries</h4>-->
<!--                    <ul class="selectionlist">-->
<!--                        <li>-->
<!--                            <label>One-->
<!--                                <input type="checkbox" checked="checked">-->
<!--                                <span class="checkmark"></span>-->
<!--                            </label>-->
<!--                        </li>-->
<!--                        <li>-->
<!--                            <label>Two-->
<!--                                <input type="checkbox">-->
<!--                                <span class="checkmark"></span>-->
<!--                            </label>-->
<!--                        </li>-->
<!--                        <li>-->
<!--                            <label>Three-->
<!--                                <input type="checkbox">-->
<!--                                <span class="checkmark"></span>-->
<!--                            </label>-->
<!--                        </li>-->
<!--                        <li>-->
<!--                            <label>Four-->
<!--                                <input type="checkbox">-->
<!--                                <span class="checkmark"></span>-->
<!--                            </label>-->
<!--                        </li>-->
<!--                    </ul>-->
<!--                    </div>-->


                    <div v-if="has_sizes">
                        <h4>Sizes</h4>
                        <ul class="selectionlist radio-list" >
                            <li v-for="(item, index) in list.sizes" >
                                <label>
                                    {{item.size}}
                                    <input type="radio" :value="item.size+'##@@'+item.price"    v-model="productData['size']"  @click="productSum('size',item.price)">
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
                                {{choice.name}}
                                <input type="radio"  :value="choice.name+'##@@'+choice.price"   v-model="productData[item.name]" @click="productSum(item.name,choice.price)" >
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
                    <div class="row count-footer">
                        <div class="col increment-buttons">
                            <button type="button" class="btn-minus" @click.prevent="minusQuantity()">
                               <i class="fa fa-minus-square-o"></i>
                            </button>
                            <span class="btn-badge-count">{{product_quantity}}</span>   
                            <button type="button" class="btn-plus"  @click.prevent="plusQuantity()" >
                                <i class="fa fa-plus-square-o"></i>
                            </button>
                        </div>

                        <div class="col text-right">

                               <h3 >Total Amount : {{priceFormat(total_amount_of_single_product * product_quantity)}}</h3>
                                <button  @click.prevent="addToCart()" class="add-count-button">Add</button>
                        </div>
                    </div>
                </form>

            </div>
        </b-modal>
    </div>
</template>
<script>
    export default {
        props: ['showModalProp','list','has_sizes'],
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
            };
        },
        methods: {

            priceFormat (num) {
                return  parseFloat(num).toFixed(2);
            },

            showModal() {

                this.$refs.myModalRef.show();
                this.total_amount_of_single_product = this.priceFormat(this.list.price);
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
                this.$refs.myModalRef.hide();
            },
            addToCart() {
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



                for (var key in this.productData) {
                    if(key != undefined){
                            if(key != 'special_instruction'){
                                let choice =  this.productData[key].split("##@@");
                                extras.push({group_name:key,choice:choice[0],'price':choice[1]})
                            }
                    }
                }

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
                },1000);
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

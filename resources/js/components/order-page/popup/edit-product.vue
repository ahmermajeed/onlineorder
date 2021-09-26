<template>
    <div>
        <b-modal id="edit-product" ok-only ok-title="Update to Order" @ok="addToCart()" centered @hidden="onHidden" title-tag="h4" ok-variant="primary" ref="myModalRef" no-close-on-backdrop modal-class="custom-modal order-product custom-btm-popup">
            <b-alert show variant="danger" v-if="error_message" style="text-transform: capitalize;">{{error_message}}</b-alert>
            <template #modal-title>{{list.name}}</template>
            <div class="product-gallery text-center" >
                <h4 v-if="!has_sizes">Price: £ {{list.price}}</h4>

            </div>
            <div class="description">
                <div class="info-item section-border">
                    <!-- <h4 class="text-left float-none">Description</h4> -->
                    <p class="pb-2 text-center">{{list.description}}</p>
                </div>
                

                <h4 v-if="list.food_allergy">Allergy Information</h4>
                <p v-if="list.food_allergy">{{list.food_allergy}} </p>

                <form action="" method="">

                    <div v-if="has_sizes" class="sub-cat addcart-form mb-3">
                        <h4>Sizes</h4>
                        <ul class="selectionlist radio-list" >
                            <li v-for="(item, index) in list.sizes" >
                                <label>
                                    <input type="radio" :value="item.size+'##@@'+priceFormat(item.price)" v-model="productData['size']"  @click="productSum('size',item.price, item)">
                                      {{item.size}}
                                    
                                    <span class="checkmark"></span>
                                </label>
                                <span style="float:right" v-if="item.price <= 0"> Free</span>
                                <span style="float:right" v-else>£  {{item.price}}</span>
                            </li>
                        </ul>
                    </div>

                    <div v-if="sizeGroups.length > 0" class="sub-cat mt-3" v-for="(item, index) in sizeGroups">
                      <h4>{{item.group.name}}</h4>
                      <ul class="selectionlist radio-list" >
                        <li v-for="(choice,choice_index) in item.group.choices" >
                          <label>
                            <input type="radio" :value="choice.name+'##@@'+priceFormat(choice.price)"   v-model="productData[item.group.name]" @click="productSum(item.name,choice.price, item)" >
                            {{choice.name}}
                            <span class="checkmark"></span>

                          </label>
                          <span style="float:right" v-if="choice.price <= 0"> Free</span>
                          <span style="float:right" v-else>£  {{choice.price}}</span>
                        </li>
                      </ul>
                    </div>


                    <div class="sub-cat mt-3"  v-for="(item, index) in list.groups">
                        <h4>{{item.name}}</h4>
                        <ul class="selectionlist radio-list" >
                            <li v-for="(choice,choice_index) in item.choices" >
                                <label>
                                     <input type="radio" :value="choice.name+'##@@'+priceFormat(choice.price)"   v-model="productData[item.name]" @click="productSum(item.name,choice.price,item)" >
                                    {{choice.name}}
                                    <span class="checkmark"></span>

                                </label>
                                <span style="float:right" v-if="choice.price <= 0"> Free</span>
                                <span style="float:right" v-else>£  {{choice.price}}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="input-holder">
                        <h4>Special instructions <span class="required-text"> *</span></h4>
                        <textarea class="form-control" rows="3" cols="12"  v-model="productData['special_instruction']"></textarea>

                    </div>
                    <div class="count-footer section-border">
                        <div class="increment-buttons ">
                            <div class="cont-section">
                                <!-- <div class=" quantity-head text-left">
                                    <h4>Quantity</h4>
                                </div> -->
                                <div class="select-num text-right">
                                    <div class="qunt-btn">

                                      <button type="button" class="btn-minus" @click.prevent="minusQuantity()">
                                        <i class="icon-subtract"></i>
                                      </button>

                                        <span class="btn-badge-count">{{product_quantity}}</span>

                                      <button type="button" class="btn-plus"  @click.prevent="plusQuantity()" >
                                        <i class="icon-plus"></i>
                                      </button>

                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                        <!-- <div class="col-lg-6 col-md-6 col-sm-12 text-right ">
                            <div class="priec-add">
                                <h4 class="text-left">Total Amount : </h4>
                               <span class="text-right">{{priceFormat(total_amount_of_single_product * product_quantity)}}</span>
                            </div>
                               
                        </div> -->
                    </div>
<!--                    <div class="modal-ftr">
                        <button  @click.prevent="addToCart()" class="custom-btn add-count-button btn btn-rounded-danger">Update <span class="text-right">{{priceFormat(total_amount_of_single_product * product_quantity)}}</span></button>
                    </div>-->
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
      error_message:'',
      totalPrice : 0,
      sizeGroups : []
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
      this.product_quantity = this.editList.quantity;

      this.totalPrice = this.editList.price * this.editList.quantity;
      this.total_amount_of_single_product = this.editList.price

      for (var choice in this.editList.extras) {
        let index = this.editList.extras[choice]['group_name'];

        if(index == 'size') {
          for (var ss in this.list.sizes) {
            for (var ed in this.editList.extras) {
                if(this.editList.extras[ed].choice == this.list.sizes[ss].size) {
                    this.sizeGroups = this.list.sizes[ss].size_groups;
                }
            }
          }
        }

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
      this.$bvModal.hide('edit-product');
      this.sizeGroups = [];

    },
    addToCart()
    {
      let old_quantity =  this.$store.state.cartItems[this.editIndex]['quantity'];

      this.$store.state.cartItems.splice(this.editIndex, 1);
      this.$store.state.cartItemsCount -= old_quantity;

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

      this.$store.commit('addToCart', this.product_array);

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
      this.product_quantity ++;
      //this.productSum()
    },

    minusQuantity(){
      if(this.product_quantity  > 1){
        this.product_quantity --;
       // this.productSum()
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

    productSum(array_key,value, item){

      setTimeout(()=>{
        let total = 0;
        let vm  = this;

        if(item.size_groups) {
          this.sizeGroups = item.size_groups

          console.log(this.productData)

          var keys = Object.keys(this.productData)
          console.log(keys)

          Object.keys(this.productData).forEach(function(itm){
            if(itm != "size") delete vm.productData[itm];
          });

        }

        if(!this.has_sizes){
          total =  parseFloat(this.list.price);
        }
        for (var key in this.productData) {
          let price =  this.productData[key].split("##@@");
          total +=  parseFloat(price[1]) ;
        }
        this.total_amount_of_single_product = total;
        this.totalPrice = total * this.product_quantity
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
  }/*,
        computed: {

          totalPrice() {
            let price = this.total_amount_of_single_product * this.product_quantity;
            return price;
          }
        }*/

}
</script>

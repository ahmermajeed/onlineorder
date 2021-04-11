<template>
    <div>
        <b-modal
            id="postal-code-popup"
            @hidden="onHidden"
            centered
            ok-variant="primary"
            title-tag="h6"
            size="md"
            :hide-footer=true
            ref="myModalRef"
            custom-modal
            no-close-on-backdrop
            modal-class="postal-code-modal custom-modal">

            <template #modal-title>Select your Resturant</template>

            <div class="form-cart order-selection">
                <div class="switch-field" >
                    <input t v-model="order_type"  type="radio" id="radio-btn-one" @change="pushToOrderPage" name="switch-btn-one" value="Taj Grill Catering 508 High Road SevenKings IG1 1UE 0208 262 6476"/>
                    <label for="radio-btn-one">
                    <img src="/images/theme-2/food-serving.png" alt="">
                      Taj Grill &amp; Catering
                        <span>508 High Road SevenKings IG1 1UE 0208 262 6476</span></label>
                    <input v-model="order_type" type="radio" id="radio-btn-two" name="switch-btn-one" @change="pushToOrderPage" value="Taj Grill 1 72 Ilford Lane Ilford Essex IG1 2LA 0208 478 8352" />
                    <label for="radio-btn-two">
                    <img src="/images/theme-2/food-serving.png" alt="">
                        Taj Grill 1
                      <span>72 Ilford Lane Ilford Essex IG1 2LA 0208 478 8352</span></label>
                </div>
            </div>
            <div class="note">
              <p><img src="images/theme-2/info.png" alt="">We are taking only collection orders.</p>
            </div>

        </b-modal>
    </div>
</template>


<script>
    export default {
        props: ['showModalProp'],
        data: function () {
            return {
                postal_code:'',
                error_message:'',
                order_type : '',
                showPostal: false,


            };
        },
        methods: {
            openMenu() {
                this.$emit('HideModalValue');
                javascript:window.open('./../files/our_menu.pdf');
            },

            showModal() {
                this.$refs.myModalRef.show();
            },
            onHidden() {
                this.$emit('HideModalValue');
            },
            hideModal() {
                var self = this;
                this.$refs.myModalRef.hide();
                this.$bvModal.hide('postal-code-popup');
                this.showPostal = false;
                this.order_type = ''
                },

            checkPostCode(){

                       let vm = this;

                       if (this.order_type == '') {
                           vm.error_message = 'Please Select Order Type';
                           setTimeout(function(){ vm.errorMessage = ""; }, 2000);
                       } else if(this.order_type == 'Delivery' && this.postal_code == "") {
                           vm.error_message = 'Please Enter Your Post Code';
                           setTimeout(function(){ vm.errorMessage = ""; }, 2000);
                       } else {


                           if(vm.order_type == "Pickup"){
                               vm.$store.commit('setOrderType', 'Pickup');

                               vm.$router.push({path: 'online-order'})
                           }else {
                               axios({
                                   method: 'post',
                                   url: '/api/check-postal',
                                   data: {
                                       order_type: this.order_type,
                                       postal_code:this.postal_code
                                   },
                               }).then(function (response) {
                                   if(response.data.error === undefined){
                                       vm.error_message = response.data.data.amount;
                                       vm.$store.commit('setDeliveryCharges', response.data.data.amount);
                                       vm.$store.commit('setOrderType', vm.order_type);
                                       vm.$store.commit('setPostalCode', vm.postal_code);
                                       vm.$router.push({path: 'online-order'})

                                   }else {
                                       vm.error_message = 'We are not providing food in your area.';
                                   }
                               })
                                   .catch(function (response) {
                                       //handle error
                                       console.log(response);
                                   });
                           }



                       }

                   },

            pushToOrderPage() {
                let vm = this;
                vm.$store.commit('setOrderType', vm.order_type);
                alert(vm.order_type);
                window.location.href = '/online-order';

                // this.$router.push({ path: '/online-order' })
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

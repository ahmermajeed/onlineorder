<template>
    <div>
        <b-modal 
            id="postal-code-popup"  
            @hidden="onHidden" 
            centered  
            ok-variant="primary" 
            title-tag="h4"  
            title="Choose your order type" 
            :hide-footer=true  
            size="sm"
            ref="myModalRef" 
            custom-modal 
            no-close-on-backdrop 
            modal-class="postal-code-modal custom-modal">

      

            <div class="form-cart order-selection">
                <label><span>Select order type:</span></label>
                <div class="switch-field" >
                    <input type="radio" id="radio-one" @change="showPostalCode" v-model="order_type" name="switch-one" value="Delivery"/>
                    <label for="radio-one">
                    <img src="/images/delivery.png" alt="">
                    </i>Delivery
                        <span>30 - 45 mins</span></label>
                    <input type="radio" id="radio-two" name="switch-one" @change="showPostalCode" value="Pickup"  v-model="order_type" />
                    <label for="radio-two">
                    <img src="/images/shopping-basket.png" alt="">
                        Collection
                        <span>20 mins</span></label>
                </div>
            </div>

            <div class="row postal-code-details">
                <form>
                    <div class="form-group" v-if="showPostal">
                        <label for=""><span>Enter your Postcode:</span></label>
                        <input type="text"  class="form-control" v-model="postal_code" placeholder="Enter your Postcode">
                    </div>

             

                    <button type="button" class="btn btn-rounded-default btn-rounded-danger"  v-on:click="checkPostCode">
                        <span>Submit! <i class="fas fa-long-arrow-alt-right"></i></span>

                    </button>
                    <p style="color:red">{{error_message}} </p>
                </form>

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
                showPostal: false

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

                    /*if(vm.order_type == "Pickup")
                        vm.postal_code = "B8"*/

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
                            vm.error_message = 'We are not providing food in your Area';
                        }
                    })
                        .catch(function (response) {
                            //handle error
                            console.log(response);
                        });
                }

            },

            showPostalCode() {
                let self = this;

                if(self.order_type == "Delivery")
                    self.showPostal = true
                else
                    self.showPostal = false
            }
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

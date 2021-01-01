<template>
    <div>
        <b-modal id="postal-code-popup"  @hidden="onHidden" centered  ok-variant="primary" title-tag="h4"   :hide-footer=true  ref="myModalRef" custom-modal no-close-on-backdrop modal-class="postal-code-modal custom-modal">
            <template #modal-title>Enter Your Postal Code</template>
            <div class="home-popup">
                <div class="row d-flex justify-content-center ">

                    <form>
                        <div class="form-group">
                            <input type="text"  class="form-control form-control-rounded" v-model="postal_code" placeholder="Enter your Postal code">
                        </div>

                        <button type="button" class="btn btn-rounded-danger"  v-on:click="checkPostCode">
                            <span>Submit!</span>
                        </button>
                        <p class="error mt-2">{{error_message}} </p>
                    </form>

                </div>
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
            },

            checkPostCode(){
                let vm = this;
                if(this.postal_code == ''){
                    vm.error_message = 'Please Enter Your Postal Code';
                }else {
                    axios({
                        method: 'post',
                        url: '/api/check-postal',
                        data: {
                            postal_code:this.postal_code
                        },
                    }).then(function (response) {
                        if(response.data.error === undefined){
                            vm.error_message = response.data.data.amount;
                            vm.$store.commit('setDeliveryCharges', response.data.data.amount);
                            vm.$router.push({path: 'online-order/'+ vm.postal_code})

                        }else {
                            vm.error_message = 'We are not providing food in your Area';
                        }
                    })
                        .catch(function (response) {
                            //handle error
                            console.log(response);
                        });
                }

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

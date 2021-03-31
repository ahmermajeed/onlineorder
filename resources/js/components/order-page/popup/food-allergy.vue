<template>
    <div>
        <b-modal id="food-allergy" centered @hidden="onHidden" :hide-footer=true title-tag="h4" ok-variant="primary" ref="myModalRef" custom-modal no-close-on-backdrop class="custom-modal">
             <h3>Food Allergy</h3>

             
             <p>Please contact our kitchen staff on <a href="tel:0208 262 6476">0208 262 6476</a> for more information.</p>

        </b-modal>
    </div>
</template>
<script>
    export default {
        props: ['showModalProp'],

        data: function () {
            return {
                error_message:''
            };
        },

        methods: {
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
            addToCart() {
                this.hideModal();
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

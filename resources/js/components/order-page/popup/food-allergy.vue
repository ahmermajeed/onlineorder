<template>
    <div>
        <b-modal id="food-allergy" centered @hidden="onHidden" :hide-footer=true title-tag="h4" ok-variant="primary" ref="myModalRef" custom-modal no-close-on-backdrop class="custom-modal">
            <b-alert show variant="danger" v-if="error_message" style="text-transform: capitalize;">{{error_message}}</b-alert>
             <h3>Food Allergy</h3>
             <p>Please speak to our staff about the ingredients in your meal, when making your order. Thank you.</p>

        </b-modal>
    </div>
</template>
<script>
    export default {
        props: ['showModalProp'],

        data: function () {
            return {
                errorMessage: '',
                successMessage: '',
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

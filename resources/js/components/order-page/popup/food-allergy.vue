<template>
    <div>
        <b-modal id="food-allergy" centered @hidden="onHidden" :hide-footer=true title-tag="h4" ok-variant="primary" ref="myModalRef" custom-modal no-close-on-backdrop class="custom-modal">
             <h3>Food Allergy</h3>

             
             <p>Please contact our kitchen staff on <a href="tel:01214403393">0121 440 3393</a> for more information.</p>

        </b-modal>
    </div>
</template>
<script>
    export default {
        props: ['showModalProp'],

        data: function () {
            return {
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

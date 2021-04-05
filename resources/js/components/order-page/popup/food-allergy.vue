<template>
    <div>
        <b-modal id="food-allergy" centered @hidden="onHidden" :hide-footer=true title-tag="h4" ok-variant="primary" ref="myModalRef" custom-modal no-close-on-backdrop class="custom-modal">
             <h3>Food Allergy</h3>

             
             <p>Please be advised that food prepared here may contain milk, eggs, wheat, soybean, peanuts, fish, and shellfish. For more information please contact to our kitchen staff at <a href="tel:0208 6698 448">0208 6698 448</a></p>

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

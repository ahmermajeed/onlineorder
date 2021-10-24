<template>
    <div>
        <b-modal id="food-allergy" centered @hidden="onHidden" :hide-footer=true title-tag="h4" ok-variant="primary" ref="myModalRef" custom-modal no-close-on-backdrop class="custom-modal">
  
             <h3>Testimonial</h3>
             <div class="testimonial-text">
                 <p>Went on Sunday afternoon with 20 members of the family and we all enjoyed it. The paratha and achar were lovely and the English breakfast was very filling. We ordered the food and waited 20 mins before it arrived. So when you guys go make sure your prepared to wait. The staff were brilliant and the lady that I assume owns it was brilliant host and looked after everyone that was there. Will definitely come back.</p>
             </div>
         

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

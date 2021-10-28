// auth components
Vue.component('header-menu', require('./components/common-components/nav-menu.vue').default);
Vue.component('slider', require('./components/common-components/slider.vue').default);
Vue.component('footer-menu', require('./components/common-components/footer.vue').default);
Vue.component('alert', require('./components/common-components/Alert.vue').default);

Vue.component('add-product', require('./components/order-page/popup/add-product.vue').default);
Vue.component('edit-product', require('./components/order-page/popup/edit-product.vue').default);

Vue.component('download-menu', require('./components/common-components/download-menu.vue').default);
Vue.component('postal-code-popup', require('./components/common-components/postal-code-popup.vue').default);

Vue.component('add-deal', require('./components/order-page/popup/add-deal.vue').default);

Vue.component('edit-deal', require('./components/order-page/popup/edit-deal.vue').default);

Vue.component('food-allergy', require('./components/order-page/popup/food-allergy.vue').default);
Vue.component('testimonials-popup', require('./components/order-page/popup/testimonials.vue').default);
Vue.component('reservation', require('./components/common-components/reservation.vue').default);
Vue.component('testimonials', require('./components/common-components/testimonials.vue').default);

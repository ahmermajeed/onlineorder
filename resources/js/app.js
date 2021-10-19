require('./bootstrap');
window.Vue = require('vue');

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex';
import store from './store.js'
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';

import Datepicker from 'vuejs-datepicker';

Vue.use(Datepicker);

Vue.use(VueRouter);

window.moment = require('moment');

import BootstrapVue from 'bootstrap-vue';
import { ModalPlugin } from 'bootstrap-vue'


import VeeValidate from 'vee-validate';
const config = {
    errorBagName: 'errorBag',
    events: 'input'
};
Vue.use(VeeValidate, config);

Vue.use(ModalPlugin);
Vue.use(BootstrapVue);

Vue.use(Vuex);
Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker)

require('./components-tags');
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: require('./components/Home.vue').default,
        },
        {
            path: '/reservation',
            name: 'reservation',
            component: require('./components/Reservation.vue').default,
        },
        {
            path: '/feedback',
            name: 'feedback',
            component: require('./components/Feedback.vue').default,
        },
        {
            path: '/check-out',
            name: 'check-out',
            component: require('./components/Checkout.vue').default,
        },
        {
            path: '/thankyou',
            name: 'thankyou',
            component: require('./components/Thankyou.vue').default,
        },

        {
            path: '/contact-us',
            name: 'contact-us',
            component: require('./components/Contactus.vue').default,
        },

        {
            path: '/about-us',
            name: 'about-us',
            component: require('./components/Aboutus.vue').default,
        },

        {
            path: '/online-order',
            name: 'online-order',
            component: require('./components/order-page/main.vue').default,
        },
        {
            path: '/reservation-table',
            name: 'reservation-table',
            component: require('./components/Reservation.vue').default,
        },
        {
            path: '/order-detail',
            name: 'order-detail',
            component: require('./components/OrderDetail.vue').default,
        },

        {
            path: '/order-confirmed/:id',
            component: require('./components/OrderConfirmed.vue').default,
        },

        {
            path: '/kitchen-screen',
            component: require('./components/KitchenScreen.vue').default,
        },

    ],

});

new Vue({
    el: '#app',
    components: { },
    router,
    store,
    data() {
        return {
            loading: true
        }
    },
    created() {
        setTimeout(() => {
            this.loading = false
        }, 1000);
    }
});






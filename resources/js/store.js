import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({

    // You can use it as state property
    state: {
        cartArray:[{}],
        delivery_charges:'',
        postal_code: localStorage.getItem('postal_code') ? localStorage.getItem('postal_code') : '',
        order_type: localStorage.getItem('order_type') ? localStorage.getItem('order_type') : '',
        user_data: localStorage.getItem('user_data') ? localStorage.getItem('user_data') : '',
    },

    // You can use it as a state getter function (probably the best solution)
    getters: {
        getAllCartArray(state){
            return     state.cartArray;
        },
        getDeliveryCharges(state){
            return state.delivery_charges;
        },
        getPostalCode(state){

            if (state.postal_code == "" || state.postal_code == null) {
                return localStorage.getItem('postal_code');
            } else {
                return state.postal_code;
            }
        },
        getOrderType(state){
            if (state.order_type == "" || state.order_type == null) {
                return localStorage.getItem('order_type');
            } else {
                return state.order_type;
            }
        },

        getUserData(state){
            if (state.user_data == "" || state.user_data == null) {
                return localStorage.getItem('user_data');
            } else {
                return state.user_data;
            }
        }
    },

    // Mutation for when you use it as state property
    mutations: {
        setAllCartArray(state, data){
            state.cartArray = data;
        },
        setDeliveryCharges(state,data){
            state.delivery_charges = data
        },
        setPostalCode(state,data){
            localStorage.setItem('postal_code', data);
            state.postal_code = localStorage.getItem('postal_code');
        },
        setOrderType(state,data){
            localStorage.setItem('order_type', data);
            state.order_type = localStorage.getItem('order_type');
            console.log(state.order_type)

        },
        setUserData(state,data){
            localStorage.setItem('user_data',data);
            state.order_type = localStorage.getItem('user_data');
        }

    },
});

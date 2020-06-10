import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({

    // You can use it as state property
    state: {
        cartArray:[{}],
        delivery_charges:'',
        postal_code:'',
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
            return state.postal_code;
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
            state.postal_code = data
        }

    },
});

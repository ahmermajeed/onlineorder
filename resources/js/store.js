import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const store = new Vuex.Store({

    // You can use it as state property
    state: {
        /* Cart State Management */

        cartItemsCount: 0,
        cartItems: [],
        delivery_charges: localStorage.getItem('delivery_charges') ? localStorage.getItem('delivery_charges') : '',
        postal_code: localStorage.getItem('postal_code') ? localStorage.getItem('postal_code') : '',
        order_type: localStorage.getItem('order_type') ? localStorage.getItem('order_type') : '',
        user_data: localStorage.getItem('user_data') ? localStorage.getItem('user_data') : '',
        general_data:  localStorage.getItem('general_data') ?  JSON.parse(localStorage.getItem('general_data')) : '',
    },

    // You can use it as a state getter function (probably the best solution)
    getters: {
        /*getAllCartArray(state){
            return     state.cartArray;
        },*/
        getDeliveryCharges(state){
            if (state.delivery_charges == "" || state.delivery_charges == null) {
                return localStorage.getItem('delivery_charges');
            } else {
                return state.delivery_charges;
            }
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
        },


        getGeneralData(state){
                return state.general_data;
        }

    },

    // Mutation for when you use it as state property
    mutations: {

        addToCart(state, payload) {

            let item = payload
            item = { ...item, quantity : item.quantity}
            if(state.cartItems.length > 0) {
                let bool = state.cartItems.some(i => i.product_id === item.product_id)
                if(bool) {

                    let bool1 = state.cartItems.some(i => i.product_type === item.product_type)

                    if(bool1) {
                        let itemIndex = state.cartItems.findIndex(el => el.product_id === item.product_id)
                        state.cartItems[itemIndex]['quantity'] += item.quantity;
                    } else {
                        state.cartItems.push(item)
                    }

                } else {
                    state.cartItems.push(item)
                }

            } else {
                state.cartItems.push(item)
            }
            state.cartItemsCount += item.quantity;
        },

        removeFromCart(state, payload) {

            if(state.cartItems.length > 0) {
                let bool = state.cartItems.some(i => i.product_id === payload.product_id)
                if(bool) {
                    let itemIndex = state.cartItems.findIndex(el => el.product_id === payload.product_id)
                    if(state.cartItems[itemIndex]["quantity"] !== 0) {
                        state.cartItems[itemIndex]['quantity'] -= payload.removalQuantity;
                        state.cartItemsCount -= payload.removalQuantity;
                    }
                    if(state.cartItems[itemIndex]["quantity"] === 0) {
                        state.cartItems.splice(itemIndex, 1)
                    }
                }
            }
        },



        /*setAllCartArray(state, data){
            state.cartArray = data;
        },*/
        setDeliveryCharges(state,data){
            localStorage.setItem('delivery_charges', data);
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
        },

        setGeneralData(state,data){
            state.general_data = data;
        }

    },
    plugins: [createPersistedState()]
});

export default store

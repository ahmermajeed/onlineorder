import VueRouter from 'vue-router'
const routes = [
    {
        name: '/home',
        path: '/',
        meta: {
            title: 'home',
        },
        component: require('./components/home.vue').default,
    },
    {
        name: '/reservation',
        path: '/',
        meta: {
            title: 'home',
        },
        component: require('./components/reservaion.vue').default,
    },


];
// Create the router instance
const router = new VueRouter({
    mode: 'history',
    routes, // short for `routes: routes`
});
export default router

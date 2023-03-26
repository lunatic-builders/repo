import {createRouter,createWebHistory} from 'vue-router'
import {useAppStore} from "./stores/app";

// 0. Define guards
import type {NavigationGuard} from "vue-router";

const ifNotAuthenticated: NavigationGuard = async (to, from, next) => {
    console.log('ifNotAuthenticated')
    const store = useAppStore()

    if (to.query.verify !== undefined && await store.verifyToken()) {
        console.log('Logged in')
        next('/');
        return
    }

    //check for hash in url
    if (store.user === null) {

        next();

    } else {
        next('/');
    }
    return
};

const ifAuthenticated: NavigationGuard = (to, from, next) => {
    const store = useAppStore()
    if (store.isLoggedIn) {
        next();
        return;
    }
    next("/login");
};

// 1. Define route components.
// These can be imported from other files
const loadView = (view: string) => () => import(`./views/${view}.vue`)

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    { path: '/', component: loadView('Home') },
    { path: '/about', component: loadView('About') },
    { path: '/login', component: loadView('Login'), beforeEnter: ifNotAuthenticated },
    { path: '/dashboard', component: loadView('Dashboard'), beforeEnter: ifAuthenticated},
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export default createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

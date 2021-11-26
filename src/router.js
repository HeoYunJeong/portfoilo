import {createWebHistory,createRouter} from "vue-router";
import About from './components/About.vue';
import Home from './components/main.vue';

const routes = [
    {
        path: "/",
        component: Home,
    }, 
    {
    path: "/about",
    component: About,
}, 
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
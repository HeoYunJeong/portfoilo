import {
    createWebHistory,
    createRouter
} from "vue-router";
import About from './components/About.vue';
import Home from './components/main.vue';
import Work from './components/Work.vue';

const routes = [{
        path: "/",
        component: Home,
    },
    {
        path: "/about",
        component: About,
    },
    {
        path: "/work",
        component: Work,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
import {
    createWebHistory,
    createRouter
} from "vue-router";
import About from './components/About.vue';
import Home from './components/Main.vue';
import Work from './components/Work.vue';
import Contact from './components/Contact.vue';

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
    {
        path: "/Contact",
        component: Contact,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
import Login from "@/views/Login.vue";
import Dashboard from "@/views/Dashboard.vue";
import { createRouter, createWebHistory } from "vue-router";
import RequestPassword from "@/views/RequestPassword.vue";
import PasswordReset from "@/views/PasswordReset.vue";

const routes = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/request-password',
        name: 'request-password',
        component: RequestPassword
    },
    {
        path: '/password-reset',
        name: 'password-reset',
        component: PasswordReset
    },
];


const router = createRouter( {
    history: createWebHistory(),
    routes
})

export default router;
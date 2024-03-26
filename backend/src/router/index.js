import Login from "@/views/Login.vue";
import Dashboard from "@/views/Dashboard.vue";
import { createRouter, createWebHistory } from "vue-router";
import RequestPassword from "@/views/RequestPassword.vue";
import PasswordReset from "@/views/PasswordReset.vue";

import {computed} from 'vue'
import store from '@/store';
import SignUp from "@/views/SignUp.vue";

const token = computed(() => store.state.token)

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
        path: '/signup',
        name: 'signup',
        component: SignUp
    },
    {
        path: '/request-password',
        name: 'request-password',
        component: RequestPassword
    },
    {
        path: '/password-reset/:token',
        name: 'password-reset',
        component: PasswordReset,
        props: true
    },
];


const router = createRouter( {
    history: createWebHistory(),
    routes
})

export default router;
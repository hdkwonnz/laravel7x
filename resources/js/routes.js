import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/js/views/Home';
// import Login from '@/js/components/Login'
// import Register from '@/js/components/Register'
// import Dashboard from '@/js/components/Dashboard'

Vue.use(VueRouter);

let router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            component: () =>
                import ("@/js/views/About")
        },
        {
            path: '/notice',
            name: 'notice',
            component: () =>
                import ("@/js/views/NoticeBoard")
        },
        {
            path: '/login',
            name: 'login',
            component: () =>
                import ("@/js/views/apiAuth/Login")
        },
        {
            path: '/register',
            name: 'register',
            component: () =>
                import ("@/js/views/apiAuth/Register")
        },
        {
            path: '/password-request',
            name: 'passwordRequest',
            component: () =>
                import ("@/js/views/apiAuth/passwords/PasswordRequest")
        },
        {
            path: '/password-reset/:tokenId',
            name: 'passwordReset',
            component: () =>
                import ("@/js/views/apiAuth/passwords/PasswordReset")
        },
        {
            path: '/email-verify',
            name: 'emailVerify',
            component: () =>
                import ("@/js/views/apiAuth/Verify")
        },
        {
            path: '/password-confirm',
            name: 'passwordConfirm',
            component: () =>
                import ("@/js/views/apiAuth/passwords/PasswordConfirm")
        },
        {
            path: '/task',
            name: 'task',
            component: () =>
                import("@/js/views/Task")
        },
        {
            path: '/profile',
            name: 'profile',
            component: () =>
                import("@/js/views/Profile")
        },
        {
            path: '/*',
            redirect: '/'
        }
    ]
});

export default router;

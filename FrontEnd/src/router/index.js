import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import HomeView from '../views/HomeView.vue';
import RegisterView from '../views/RegisterView.vue';
import LoginView from '../views/LoginView.vue';
import UsersView from '../views/UsersView.vue';
import EditView from '../views/EditView.vue';
import RecoverPasswordView from '../views/RecoverPasswordView.vue';
import ChangePasswordView from '../views/ChangePasswordView.vue';

function AdminAuth(to, from, next) {
  if (localStorage.getItem('token') !== undefined) {
    const req = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };

    axios.post('http://localhost:8686/validate', {}, req).then((res) => {
      console.log(res);
      next();
    }).catch((err) => {
      console.log(err.response);
      next('/login');
    });
  } else {
    next('/login');
  }
}

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/admin/users',
    name: 'Users',
    component: UsersView,
    beforeEnter: AdminAuth,
  },
  {
    path: '/admin/users/edit/:id',
    name: 'UserEdit',
    component: EditView,
    beforeEnter: AdminAuth,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/recoverpassword',
    name: 'RecoverPassword',
    component: RecoverPasswordView,
  },
  {
    path: '/changepassword',
    name: 'ChangePassword',
    component: ChangePasswordView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

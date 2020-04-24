import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../views/List.vue'),
  },
  {
    path: '/share',
    name: 'share',
    component: () => import('../views/Share.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;

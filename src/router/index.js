import Vue from 'vue';
import VueRouter from 'vue-router';
// import lazyLoadView from './lazyload-view';

Vue.use(VueRouter);

const routes = [
  // 前台頁面
  {
    path: '/',
    component: () => import('../views/front/Front.vue'),
    // conponent: () => lazyLoadView(import('../views/front/Front')),
    children: [
      {
        path: '',
        component: () => import('../views/front/About.vue'),
        // component: () => lazyLoadView(import('../views/front/About')),
      },
      {
        path: 'shop',
        component: () => import('../views/front/Shop.vue'),
      },
      {
        path: 'checkout',
        component: () => import('../views/front/Checkout.vue'),
      },
      {
        path: 'cart',
        component: () => import('../views/front/Cart.vue'),
      },
      {
        path: 'FAQ',
        component: () => import('../views/front/FAQ.vue'),
      },
    ],
  },
  // 登入頁面
  {
    path: '/login',
    component: () => import('../views/admin/Login.vue'),
    // conponent: () => lazyLoadView(import('../views/admin/Login.vue')),
  },
  // 後台頁面
  {
    path: '/admin',
    component: () => import('../views/admin/Admin.vue'),
    children: [
      {
        path: 'productsmanagement',
        component: () => import('../views/admin/Productsmanagement.vue'),
      },
      {
        path: 'ordersmanagement',
        component: () => import('../views/admin/Ordersmanagement.vue'),
      },
      {
        path: 'orderdetail/:id',
        component: () => import('../views/admin/Orderdetail.vue'),
      },
      {
        path: 'couponsmanagement',
        component: () => import('../views/admin/Couponsmanagement.vue'),
      },
      {
        path: 'coupondetail/:id',
        component: () => import('../views/admin/Coupondetail.vue'),
      },
      {
        path: 'storagesmanagement',
        component: () => import('../views/admin/Storagesmanagement.vue'),
      },
    ],
  },
  // 錯誤頁面
  {
    path: '*',
    component: () => import('../views/404'),
    // conponent: () => lazyLoadView(import('../views/404')),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

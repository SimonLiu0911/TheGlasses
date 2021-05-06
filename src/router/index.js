import Vue from 'vue';
import VueRouter from 'vue-router';
// import lazyLoadView from './lazyload-view';

Vue.use(VueRouter);

const routes = [
  // 前台頁面
  {
    path: '/',
    component: () => import('../views/front/Home/Index'),
    // conponent: () => lazyLoadView(import('../views/front/Front')),
    children: [
      {
        path: '',
        component: () => import('../views/front/About/Index'),
        // component: () => lazyLoadView(import('../views/front/About')),
      },
      {
        path: 'shop',
        component: () => import('../views/front/Shop/Index'),
      },
      {
        path: 'checkout',
        component: () => import('../views/front/Checkout/Index'),
      },
      {
        path: 'cart',
        component: () => import('../views/front/Cart/Index'),
      },
      {
        path: 'FAQ',
        component: () => import('../views/front/FAQ/Index'),
      },
    ],
  },
  // 登入頁面
  {
    path: '/login',
    component: () => import('../views/admin/Login/Index'),
    // conponent: () => lazyLoadView(import('../views/admin/Login.vue')),
  },
  // 後台頁面
  {
    path: '/admin',
    component: () => import('../views/admin/Admin/Index'),
    children: [
      {
        path: 'productsmanagement',
        component: () => import('../views/admin/ProductManagement/Index'),
      },
      {
        path: 'ordersmanagement',
        component: () => import('../views/admin/OrderManagement/Index'),
      },
      {
        path: 'orderdetail/:id',
        component: () => import('../views/admin/OrderDetail/Index'),
      },
      {
        path: 'couponsmanagement',
        component: () => import('../views/admin/CouponManagement/Index'),
      },
      {
        path: 'coupondetail/:id',
        component: () => import('../views/admin/CouponDetail/Index'),
      },
      {
        path: 'storagesmanagement',
        component: () => import('../views/admin/StorageManagement/Index'),
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

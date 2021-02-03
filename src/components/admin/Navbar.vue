<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white navbar__border">
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav navbar-nav__position">
          <li id="product_list" class="nav-item mr-2 ml-2">
            <router-link class="nav-link" to="/admin/productsmanagement"
              >ProductList</router-link
            >
          </li>
          <li id="order_list" class="nav-item mr-2 ml-2">
            <router-link class="nav-link" to="/admin/ordersmanagement"
              >OrderList</router-link
            >
          </li>
          <li id="coupon_list" class="nav-item mr-2 ml-2">
            <router-link class="nav-link" to="/admin/couponsmanagement"
              >CouponList</router-link
            >
          </li>
          <li id="storage_list" class="nav-item mr-2 ml-2">
            <router-link class="nav-link" to="/admin/storagesmanagement"
              >Storage</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
.navbar__border {
  border-bottom: 1px solid black;
}
.navbar-nav__position {
  margin: 0 auto;
}
</style>

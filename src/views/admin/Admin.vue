<template>
  <div class="admin">
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
              <router-link class="nav-link" to="/admin/productsmanagement">ProductList</router-link>
            </li>
            <li id="order_list" class="nav-item mr-2 ml-2">
              <router-link class="nav-link" to="/admin/ordersmanagement">OrderList</router-link>
            </li>
            <li id="coupon_list" class="nav-item mr-2 ml-2">
              <router-link class="nav-link" to="/admin/couponsmanagement">CouponList</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
    <footer class="footer mt-auto text-center">
      <p>***僅個人練習使用．不做商業用途***</p>
      <p style="font-size: .875rem;">
        Vue電商網站
        <br />圖面來源：
        <a href="https://unsplash.com">Unsplash</a>
        <br />Cover template for
        <a href="https://getbootstrap.com/">Bootstrap</a>
        <br />
      </p>
    </footer>
  </div>
</template>

<style lang="scss">
.navbar__border {
  border-bottom: 1px solid black;
}
.navbar-nav__position {
  margin: 0 auto;
}
</style>

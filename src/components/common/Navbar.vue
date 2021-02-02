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
          <li
            id="about"
            class="nav-item mr-2 ml-2"
            :class="{ active: current === 'about' }"
            @click="current = 'about'"
          >
            <router-link class="nav-link" to="/">ABOUT</router-link>
          </li>
          <li
            id="shop"
            class="nav-item mr-2 ml-2"
            :class="{ active: current === 'shop' }"
            @click="current = 'shop'"
          >
            <router-link class="nav-link" to="/shop">SHOP</router-link>
          </li>
          <li
            id="cart"
            class="nav-item mr-2 ml-2"
            :class="{ active: current === 'cart' }"
            @click="current = 'cart'"
          >
            <router-link class="nav-link" to="/cart">CART</router-link>
          </li>
          <li
            id="faq"
            class="nav-item mr-2 ml-2"
            :class="{ active: current === 'faq' }"
            @click="current = 'faq'"
          >
            <router-link class="nav-link" to="/FAQ">FAQ</router-link>
          </li>
          <li
            id="admin"
            class="nav-item mr-2 ml-2"
            :class="{ active: current === 'admin' }"
            @click="current = 'admin'"
          >
            <router-link class="nav-link" to="/admin/login">ADMIN</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      current: 'about',
    };
  },
};
</script>

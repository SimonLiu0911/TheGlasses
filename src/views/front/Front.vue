<template>
  <div id="home">
    <Navbar></Navbar>
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
    <!-- Vue Loading -->
    <loading :active.sync="this.$store.state.isLoading"></loading>
  </div>
</template>

<script>
import Navbar from '@/components/common/Navbar.vue';

export default {
  name: 'Home',
  data() {
    return {
      cartLength: 0,
    };
  },
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
.navbar__border {
  border-bottom: 1px solid black;
}
.navbar-nav__position {
  margin: 0 auto;
}
</style>

<script>
import lazyloadView from '@/router/lazyload-view';

export default {
  name: 'Home',
  data() {
    return {
      cartLength: 0,
    };
  },
  components: {
    Navbar: () => lazyloadView(import('@/components/front/Navbar.vue')),
    Footer: () => lazyloadView(import('@/components/common/Footer.vue')),
  },
};
</script>

<template>
  <div id="home">
    <Navbar></Navbar>
    <router-view />
    <Footer></Footer>
    <!-- Vue Loading -->
    <loading :active.sync="this.$store.state.isLoading"></loading>
  </div>
</template>

<template>
  <div id="home">
    <Navbar></Navbar>
    <router-view />
    <Footer></Footer>
    <!-- Vue Loading -->
    <loading :active.sync="this.$store.state.isLoading"></loading>
  </div>
</template>

<script>
import Navbar from '@/components/front/Navbar.vue';
import Footer from '@/components/common/Footer.vue';

export default {
  name: 'Home',
  data() {
    return {
      cartLength: 0,
    };
  },
  components: {
    Navbar,
    Footer,
  },
};
</script>

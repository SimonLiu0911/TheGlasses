<script>
import lazyloadView from '@/router/lazyload-view';

export default {
  components: {
    Navbar: () => lazyloadView(import('@/components/admin/Navbar.vue')),
    Footer: () => lazyloadView(import('@/components/common/Footer.vue')),
  },
};
</script>

<template>
  <div class="admin">
    <Navbar></Navbar>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    signin() {
      this.$store.commit('isLoading');
      const url = `${process.env.VUE_APP_APIPATH}/api/auth/login`;
      this.$http
        .post(url, this.user)
        .then((response) => {
          const { token, expired } = response.data;
          // 伺服器回傳token和expired後，將其存到cookie裡面
          document.cookie = `myToken=${token}; expires=${new Date(
            expired * 1000,
          )}; path=/`;
          this.$router.push('/admin/productsmanagement');
        })
        .catch(() => {
          alert('登入失敗！！！');
          window.location.reload();
        });
    },
    goBackFront() {
      this.$router.push('/');
    },
  },
};
</script>

<template>
  <div class="login">
    <!-- <Loading :active.sync="isLoading"></Loading> -->
    <div class="container">
      <form class="form-signin" @submit.prevent="signin">
        <h1 class="h3 mb-3 font-weight-normal">Sign in</h1>
        <div class="form-group">
          <label for="inputEmail" class="sr-only">Email address</label>
          <input
            id="inputEmail"
            type="email"
            class="form-control rounded-0 input_style"
            placeholder="Email address"
            v-model="user.email"
            required
            autofocus
          />
        </div>
        <div class="form-group">
          <label for="inputPassword" class="sr-only">Password</label>
          <input
            id="inputPassword"
            type="password"
            class="form-control rounded-0 input_style"
            placeholder="Password"
            v-model="user.password"
            required
          />
        </div>
        <button class="btn btn-lg btn-dark btn-block rounded-0" type="submit">Sign In</button>
        <button
          class="btn btn-lg btn-outline-dark btn-block rounded-0"
          type="submit"
          @click="goBackFront"
        >Go Back to Front Page</button>
        <p class="my-3 text-muted">&copy; 2020~∞ - 練習用</p>
      </form>
    </div>
    <!-- Vue Loading -->
    <loading :active.sync="this.$store.state.isLoading"></loading>
  </div>
</template>

<style lang="scss">
html,
body {
  height: 100%;
  text-align: center;
}
.form-signin {
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.input_style:focus {
  border-style: solid;
  border-color: gray;
  box-shadow: 0 0 3px gray;
}
</style>

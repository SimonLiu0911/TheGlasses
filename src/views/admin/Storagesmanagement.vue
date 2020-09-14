<template>
  <div class="storagesmanagement">
    <div class="container">
      <div class="table-responsive">
        <table class="table table-striped mt-5" v-if="storages.length > 0">
          <thead>
            <tr>
              <th scope="col">IMG</th>
              <th scope="col">DELETE</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in storages" :key="item.id">
              <td align="center" valign="center">
                <div
                  style="
                    height: 100px;
                    width: 100px;
                    background-size: cover;
                    background-position: center;
                  "
                  :style="{ backgroundImage: `url(${ item.path })` }"
                ></div>
              </td>
              <td align="center" valign="center">
                <button
                  class="btn btn-outline-danger rounded-0"
                  @click.prevent="deleteImg(item.id)"
                >DELETE</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <!-- Vue Loading -->
    <Loading :active.sync="isLoading"></Loading>
  </div>
</template>

<script>
export default {
  data() {
    return {
      storages: [],
      isLoading: true,
    };
  },

  methods: {
    getFiles() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/storage`;
      this.$http.get(url).then((response) => {
        this.storages = response.data.data;
        this.isLoading = false;
      });
    },
    deleteImg(id) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/storage/${id}`;
      this.$http.delete(url).then(() => {
        this.getFiles();
        this.isLoading = false;
      });
    },
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.getFiles();
  },
};
</script>

<style lang="scss" scoped>
.storagesmanagement {
  margin: 0 auto;
}
</style>

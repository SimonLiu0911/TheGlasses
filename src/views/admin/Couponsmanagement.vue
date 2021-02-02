<template>
  <div class="couponsmanagement">
    <div class="container my-5">
      <div class="row">
        <div class="col-md-6 pb-5 text-left">
          <form>
            <div class="form-group">
              <label for="coupon_title">Title</label>
              <input
                type="string"
                class="form-control input_style rounded-0"
                id="coupon_title"
                v-model="newCoupon.title"
                placeholder="Coupon Title"
              />
            </div>
            <div class="form-group">
              <label for="coupon_code">Code</label>
              <input
                type="string"
                class="form-control input_style rounded-0"
                id="coupon_code"
                v-model="newCoupon.code"
                placeholder="Coupon Code"
              />
            </div>
            <div class="form-group">
              <label for="coupon_percent">Percent(%)</label>
              <input
                type="number"
                class="form-control input_style rounded-0"
                id="coupon_percent"
                v-model="newCoupon.percent"
                placeholder="Percent"
              />
            </div>
            <div class="form-group">
              <label for="coupon_deadline">Deadline</label>
              <input
                type="text"
                class="form-control input_style rounded-0"
                id="coupon_deadline"
                v-model="newCoupon.deadline_at"
                placeholder="YYYY-MM-DD H:M:S"
              />
            </div>
            <div class="form-group form-check text-left ml-4">
              <input
                type="checkbox"
                class="form-check-input"
                id="coupon_enabled"
                v-model="newCoupon.enabled"
              />
              <label class="form-check-label" for="coupon_enabled">Enabled</label>
            </div>
            <button
              type="button"
              class="btn btn-block btn-dark rounded-0"
              @click="addnewCoupon"
            >Submit</button>
          </form>
        </div>
        <div class="col-md-6 pb-5">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Percent</th>
                <th scope="col">Deadline</th>
                <th scope="col">Enabled</th>
              </tr>
            </thead>
            <tbody>
              <router-link
                class="test"
                v-for="(item, index) in couponList"
                :to="`/admin/coupondetail/${item.id}`"
                tag="tr"
                :key="item.id"
              >
                <th>{{ index + 1 }}</th>
                <td>{{ item.title }}</td>
                <td>{{ item.percent }}</td>
                <td>{{ item.deadline.datetime }}</td>
                <td>
                  <span class="text-success" v-if="item.enabled === true">Active</span>
                  <span class="text-danger" v-else>Unactive</span>
                </td>
              </router-link>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- Vue loading -->
    <Loading :active.sync="this.$store.state.isLoading"></Loading>
  </div>
</template>

<script>
export default {
  data() {
    return {
      couponList: [],
      newCoupon: {
        percent: 0,
        enabled: false,
      },
    };
  },
  computed: {
    convertNum() {
      return parseInt(this.newCoupon.percent, 10);
    },
  },
  methods: {
    update() {
      this.$store.commit('isLoading');
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/coupons`;
      this.$http.get(url).then((response) => {
        this.couponList = response.data.data;
        this.$store.commit('finishedLoading');
      });
    },
    addnewCoupon() {
      this.$store.commit('isLoading');
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/coupon`;
      this.$http.post(url, this.newCoupon).then(() => {
        this.update();
        this.newCoupon = {
          percent: 0,
          enabled: false,
        };
        this.$store.commit('finishedLoading');
      });
    },
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.update();
  },
};
</script>

<style lang="scss">
.input_style:focus {
  border-style: solid;
  border-color: gray;
  box-shadow: 0 0 3px gray;
}
td:hover,
th:hover {
  cursor: pointer;
}
</style>

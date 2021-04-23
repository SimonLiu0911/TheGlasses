<script>
export default {
  data() {
    return {
      couponDetail: {},
      couponCreated: '',
      couponDeadline: '',
      couponUpdated: '',
      couponID: '',
      editing: false,
    };
  },
  methods: {
    deleteCoupon() {
      this.$store.commit('isLoading');
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/coupon/${this.couponID}`;
      this.$http.delete(url).then(() => {
        this.$router.push('/admin/couponsmanagement');
      })
        .catch((error) => {
          alert(error.response);
          this.$store.commit('finishedLoading');
        });
    },
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.couponID = this.$route.params.id;
    const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/ec/coupon/${this.couponID}`;
    this.$http.get(url).then((response) => {
      this.couponDetail = response.data.data;
      this.couponCreated = response.data.data.created.datetime;
      this.couponDeadline = response.data.data.deadline.datetime;
      this.couponUpdated = response.data.data.updated.datetime;
    });
  },
};
</script>

<template>
  <div class="coupondetail">
    <div class="container text-left mt-5">
      <div class="row">
        <div class="col-md-6 px-5 pb-3">
          <div class="order_ID mb-3">
            <p class="font-weight-bold mb-0">CouponTitle:</p>
            <span class="word_break">{{ this.couponDetail.title }}</span>
          </div>
          <div class="order_date mb-3">
            <p class="font-weight-bold mb-0">Percent:</p>
            <span>{{ this.couponDetail.percent }}</span>
          </div>
          <div class="order_date mb-3">
            <p class="font-weight-bold mb-0">Code:</p>
            <span>{{ this.couponDetail.code }}</span>
          </div>
          <div class="order_date mb-3">
            <p class="font-weight-bold mb-0">Enabled:</p>
            <span class="text-success" v-if="this.couponDetail.enabled === true">Active</span>
            <span class="text-danger" v-if="this.couponDetail.enabled === false">Unactive</span>
          </div>
        </div>
        <div class="col-md-6 px-5 pb-3">
          <div class="order_payment mb-3">
            <p class="font-weight-bold mb-0">Created:</p>
            <span>{{ this.couponCreated }}</span>
          </div>
          <div class="order_date mb-3">
            <p class="font-weight-bold mb-0">Deadline:</p>
            <span>{{ this.couponDeadline }}</span>
          </div>
          <div class="order_date mb-3">
            <p class="font-weight-bold mb-0">Updated:</p>
            <span>{{ this.couponUpdated }}</span>
          </div>
          <div class="btn-group" role="group">
            <!-- <button type="button" class="btn btn-dark rounded-0">Edit</button> -->
            <button
             type="button"
             class="btn btn-dark rounded-0"
             @click="deleteCoupon"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Vue loading -->
    <Loading :active.sync="this.$store.state.isLoading"></Loading>
  </div>
</template>

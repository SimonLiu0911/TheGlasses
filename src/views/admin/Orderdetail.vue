<script>
export default {
  data() {
    return {
      orderID: '',
      orderDetail: {},
      orderProducts: [],
      orderDate: '',
      orderUser: {},
    };
  },
  methods: {
    getorderUser() {
      this.$store.commit('isLoading');
      this.orderID = this.$route.params.id;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/orders/${this.orderID}`;
      this.$http.get(url).then((response) => {
        this.orderDetail = response.data.data;
        this.orderDate = response.data.data.created.datetime;
        this.orderUser = response.data.data.user;
        this.orderProducts = response.data.data.products;
        this.$store.commit('finishedLoading');
      });
    },
  },
  created() {
    this.getorderUser();
  },
};
</script>

<template>
  <div class="productdetail">
    <div class="container text-left">
      <div class="row">
        <div class="col-md-6 order_content_left p-5">
          <div class="order_ID mb-3">
            <p class="font-weight-bold mb-0">OrderID:</p>
            <span class="word_break">{{ this.orderDetail.id }}</span>
          </div>
          <div class="order_payment mb-3">
            <p class="font-weight-bold mb-0">Payment:</p>
            <span>{{ this.orderDetail.payment }}</span>
          </div>
          <div class="order_date mb-3">
            <p class="font-weight-bold mb-0">Date:</p>
            <span>{{ this.orderDate }}</span>
          </div>
          <div class="order_paid mb-3">
            <p class="font-weight-bold mb-0">Paid:</p>
            <span class="text-danger" v-if="this.orderDetail.paid === false">Not yet paid</span>
            <span class="text-success" v-if="this.orderDetail.paid === true">Already Paid</span>
          </div>
        </div>
        <div class="col-md-6 order_content_right p-5">
          <div class="order_user mb-3">
            <p class="font-weight-bold mb-0">User:</p>
            <span>{{ this.orderUser.name }}</span>
          </div>
          <div class="order_email mb-3">
            <p class="font-weight-bold mb-0">Email:</p>
            <span>{{ this.orderUser.email }}</span>
          </div>
          <div class="order_tel mb-3">
            <p class="font-weight-bold mb-0">Tel:</p>
            <span>{{ this.orderUser.tel }}</span>
          </div>
          <div class="order_address mb-3">
            <p class="font-weight-bold mb-0">Address:</p>
            <span>{{ this.orderUser.address }}</span>
          </div>
          <div class="order_message mb-3">
            <p class="font-weight-bold mb-0">Message:</p>
            <span>{{ this.orderDetail.message }}</span>
          </div>
        </div>
      </div>
      <table class="table table-striped my-5 text-center">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product</th>
            <th scope="col">Category</th>
            <th scope="col">quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in orderProducts" :key="item.id">
           <!-- <tr> -->
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ item.product.title }}</td>
            <td>{{ item.product.category }}</td>
            <td>{{ item.quantity }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Vue Loading -->
    <loading :active.sync="this.$store.state.isLoading"></loading>
  </div>
</template>

<style lang="scss">
.order_content_right {
  background-color: rgba(0, 0, 0, 0.03);
}
.word_break {
  word-break: break-all;
}
</style>

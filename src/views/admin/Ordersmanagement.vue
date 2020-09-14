<template>
  <div class="ordermanagement">
    <div class="orders_management container">
      <div class="mt-5 clearfix">
        <button
        class="btn btn-dark rounded-0 float-left"
        type="button"
        @click="signout"
        >
          SIGN OUT
        </button>
      </div>
      <table class="table table-responsive-xl mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Order(id)</th>
            <th>Payment</th>
            <th>Paid</th>
            <th>Time</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in orderList" :key="item.id">
            <td>{{ index + 1 }}</td>
            <td class="overflow-auto">{{ item.id }}</td>
            <td>{{ item.payment }}</td>
            <td>
              <span class="text-danger" v-if="item.paid === false">{{ item.paid }}</span>
              <span class="text-success" v-else>{{ item.paid }}</span>
            </td>
            <td>{{ item.created.datetime }}</td>
            <td>
              <router-link
              class="btn btn-outline-dark btn-sm rounded-0"
              :to="`/admin/orderdetail/${item.id}`"
              >
                Detail
              </router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Vue Loading -->
    <loading :active.sync="isLoading"></loading>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      orderList: [],
    };
  },
  methods: {
    signout() {
      document.cookie = 'myToken=;expires=;';
      this.$router.push('/admin/login');
    },
    getOrderData() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/orders`;
      this.$http.get(url).then((response) => {
        this.orderList = response.data.data;
        console.log(this.orderList);
        this.isLoading = false;
      });
    },
  },
  created() {
    this.getOrderData();
  },
};
</script>

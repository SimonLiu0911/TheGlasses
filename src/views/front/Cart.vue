<template>
  <div class="cart">
    <div class="row justify-content-center my-2">
      <div class="col-md-8" v-if="shoppongBagItems">
        <div class="text-right mb-3">
          <button
            type="button"
            class="btn btn-outline-danger btn-sm rounded-0"
            @click="removeAllCartItem()"
          >Delete All</button>
        </div>
        <table class="table text-center">
          <thead>
            <th>Commodity</th>
            <th width="150px">Qty</th>
            <th>Price for Each</th>
            <th>Unit</th>
            <th>Delete</th>
          </thead>
          <tbody v-if="cart.length">
            <tr v-for="item in cart" :key="item.id">
              <td class="align-middle">{{ item.product.title }}</td>
              <td class="align-middle">
                <div class="input-group bg-light">
                  <div class="input-group-append">
                    <button
                      class="btn btn-outline-dark"
                      type="button"
                      @click="quantityUpdata(item.product.id, item.quantity - 1)"
                      :disabled="item.quantity === 1"
                    >-</button>
                  </div>
                  <input
                    id="inlineFormInputGroupUsername"
                    type="text"
                    class="form-control text-center"
                    :value="item.quantity"
                    @keyup.enter="quantityUpdata(item.product.id, $event.target.value)"
                  />
                  <div class="input-group-prepend">
                    <button
                      class="btn btn-outline-dark"
                      type="button"
                      @click="quantityUpdata(item.product.id, item.quantity + 1)"
                    >+</button>
                  </div>
                </div>
              </td>
              <td class="align-middle">{{ item.product.price | thousandth }}</td>
              <td class="align-middle">{{ item.product.unit }}</td>
              <td class="align-middle">
                <button
                  type="button"
                  class="btn btn-outline-danger btn-sm rounded-0"
                  @click="removeCartItem(item.product.id)"
                >Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div id="totalcart">
          <div class="totalcart__table">
            <table class="border-bottom">
              <tbody>
                <tr>
                  <th width="150px">Subtotal</th>
                  <td>
                    <span>{{ cartTotal | thousandth }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <button
              type="button"
              class="btn btn-dark btn-block rounded-0 mt-2"
              @click="goingCheckout"
            >CHECKOUT</button>
          </div>
        </div>
        <span class="clearBoth"></span>
      </div>
      <div class="emptyShoppingBag mt-5" v-else>
      <p class="h2">Shopping Bag</p>
      <p>You have nothing in your bag.</p>
      </div>
    </div>
    <!-- Vue Loading -->
    <loading :active.sync="this.$store.state.isLoading"></loading>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
      cartTotal: 0,
      shoppongBagItems: true,
    };
  },
  filters: {
    thousandth(num) {
      const parts = num.toString().split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return parts.join('.');
    },
  },
  methods: {
    removeCartItem(id) {
      this.$store.commit('isLoading');
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping/${id}`;
      this.$http.delete(url).then((response) => {
        alert(response.data.message);
        this.upload();
        this.$store.commit('finishedLoading');
      });
    },
    removeAllCartItem() {
      this.$store.commit('isLoading');
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping/all/product`;
      this.$http.delete(url).then((response) => {
        alert(response.data.message);
        this.upload();
        this.$store.commit('finishedLoading');
      });
    },
    quantityUpdata(id, num) {
      const data = {
        product: id,
        quantity: num,
      };
      this.$store.commit('isLoading');
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http.patch(url, data).then(() => {
        this.upload();
        this.$store.commit('finishedLoading');
      });
    },
    goingCheckout() {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http.get(url).then((response) => {
        if (response.data.data.length === 0) {
          alert('Please choose at least one commodity!');
        } else {
          this.$router.push('checkout');
        }
      });
    },
    upload() {
      this.$store.commit('isLoading');
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http.get(url).then((response) => {
        this.cart = response.data.data;
        this.cartLength = this.cart.length;
        this.cartTotal = 0;
        this.cart.forEach((item) => {
          this.cartTotal += item.product.price * item.quantity;
        });
        if (this.cart.length === 0) {
          this.shoppongBagItems = false;
        }
        this.$store.commit('finishedLoading');
      });
    },
  },
  created() {
    this.upload();
  },
};
</script>

<style lang="scss">
.cart {
  margin: 70px 0;
}
.emptyShoppingBag {
  width: 100%;
  padding: 56px 0 40px 0;
  background-color: rgba(0, 0, 0, 0.03) !important;

}
#totalcart {
  float: right;
}
#totalcart .totalcart__table {
  font-size: 30px;
}
.clearBoth {
  clear: both;
}
#totalcart .totalcart__table .border-bottom {
  border-color: black !important;
}
</style>

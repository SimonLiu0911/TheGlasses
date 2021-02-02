<template>
  <div class="checkout">
    <div id="CheckingPage" class="container">
      <div class="orderCompleted" v-if="completed">The Order Completed!</div>
      <div class="row" v-else>
        <div class="col-md-6 p-5 text-left">
          <h3 class="text-center border-bottom mb-4 pb-3">Contact Information</h3>
          <validation-observer v-slot="{ invalid }">
            <form @submit.prevent="createOrder">
              <div class="form-group">
                <validation-provider rules="required" v-slot="{errors, classes}">
                  <label for="username">Name</label>
                  <input
                    id="username"
                    class="form-control rounded-0 input_style"
                    type="text"
                    v-model="form.name"
                    :class="classes"
                    name="User Name"
                    placeholder="User Name"
                  />
                  <span class="invalid-feedback">{{ errors[0] }}</span>
                </validation-provider>
              </div>
              <div class="form-group">
                <validation-provider rules="email|required" v-slot="{errors, classes}">
                  <label for="email">Email</label>
                  <input
                    id="email"
                    class="form-control rounded-0 input_style"
                    type="email"
                    v-model="form.email"
                    name="Email"
                    :class="classes"
                    placeholder="Email Address"
                  />
                  <span class="invalid-feedback">{{errors[0]}}</span>
                </validation-provider>
              </div>
              <div class="form-group">
                <validation-provider rules="min:8|required" v-slot="{errors, classes}">
                  <label for="tel">Phone Number</label>
                  <input
                    id="tel"
                    class="form-control rounded-0 input_style"
                    :class="classes"
                    type="tel"
                    v-model="form.tel"
                    name="Phone Number"
                    placeholder="Phone Number"
                  />
                  <span class="invalid-feedback">{{errors[0]}}</span>
                </validation-provider>
              </div>
              <div class="form-group">
                <validation-provider rules="required" v-slot="{errors, classes}">
                  <label for="address">Address</label>
                  <input
                    id="address"
                    class="form-control rounded-0 input_style"
                    :class="classes"
                    type="text"
                    v-model="form.address"
                    placeholder="Address"
                  />
                  <span class="invalid-feedback">{{errors[0]}}</span>
                </validation-provider>
              </div>
              <div class="form-group">
                <label for="message">Payment</label>
                <select class="form-control input_style" v-model="form.payment" required>
                  <option value selected disabled>Payment</option>
                  <option value="WebATM">WebATM</option>
                  <option value="ATM">ATM</option>
                  <option value="CVS">CVS</option>
                  <option value="Barcode">Barcode</option>
                  <option value="Credit">Credit</option>
                  <option value="ApplePay">ApplePay</option>
                  <option value="GooglePay">GooglePay</option>
                </select>
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  class="form-control rounded-0 input_style"
                  cols="30"
                  rows="3"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  class="btn btn-dark btn-block rounded-0 my-2"
                  :disabled="invalid"
                >CHECK</button>
                <div class="ReturnToCart">
                  <router-link class="ReturnToCart_color" to="/cart">Return to Cart</router-link>
                </div>
              </div>
            </form>
          </validation-observer>
        </div>
        <div class="col-md-6 col-md-6_right p-5">
          <table class="table border-bottom mb-0 text-center">
            <thead>
              <th>Product</th>
              <th>Qty</th>
              <th>Price</th>
            </thead>
            <tbody>
              <tr v-for="item in cart" :key="item.id">
                <td class="align-middle">{{item.product.title}}</td>
                <td class="align-middle">{{item.quantity}}</td>
                <td class="align-middle">{{item.product.price | thousandth}}</td>
              </tr>
            </tbody>
          </table>
          <div class="input-group py-3 border-bottom">
            <input
              type="text"
              class="form-control rounded-0 input_style"
              v-model="form.coupon"
              placeholder="Discount Code"
            />
            <button
              type="button"
              class="btn btn-dark rounded-0"
              @click="searchCoupon"
            >
              APPLY
            </button>
          </div>
          <div id="totalcart" class="my-3">
            <div class="totalcart__table">
              <table class="border-bottom">
                <tbody>
                  <tr>
                    <th width="150px">Subtotal</th>
                    <td>
                      <span v-if="applyCoupon === false">
                        {{ cartTotal | thousandth}} <em>NT</em>
                      </span>
                      <span class="text-danger" v-else>
                        {{ cartTotalafterCoupon | thousandth}} <em>NT</em>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <small class="text-danger" v-if="applyCoupon === true">
                <em>
                  saved {{ saveMoney }} NT
                </em>
              </small>
            </div>
          </div>
        </div>
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
      cart: {},
      cartTotal: 0,
      cartTotalafterCoupon: 0,
      saveMoney: 0,
      form: {
        name: '',
        email: '',
        tel: '',
        address: '',
        payment: '',
        coupon: '',
        message: '',
      },
      applyCoupon: false,
      couponEnabled: '',
      orderID: '',
      completed: false,
      priceAfterCoupon: '',
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
    createOrder() {
      this.$store.commit('isLoading');
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/orders`;
      this.$http.post(url, this.form).then(() => {
        console.log('訂單已傳送！！！');
        this.$store.commit('finishedLoading');
        this.completed = true;
      });
    },
    searchCoupon() {
      this.$store.commit('isLoading');
      if (this.form.coupon) {
        const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/coupon/search`;
        this.$http.post(url, { code: this.form.coupon }).then((response) => {
          this.couponEnabled = response.data.data.enabled;
          if (this.couponEnabled) {
            this.cartTotalafterCoupon = Math.ceil(
              this.cartTotal * (response.data.data.percent / 100),
            );
            this.saveMoney = this.cartTotal - this.cartTotalafterCoupon;
            this.applyCoupon = true;
            this.$store.commit('finishedLoading');
          } else {
            alert("Can't Use Coupon Code.");
            this.form.coupon = '';
            this.applyCoupon = false;
            this.$store.commit('finishedLoading');
          }
        })
          .catch(() => {
            alert('Not Exist!!');
            this.form.coupon = '';
            this.applyCoupon = false;
            this.$store.commit('finishedLoading');
          });
      } else {
        alert('Need Coupon Code!!');
        this.form.coupon = '';
        this.applyCoupon = false;
        this.$store.commit('finishedLoading');
      }
    },
  },
  created() {
    this.$store.commit('isLoading');
    const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`;
    this.$http.get(url).then((response) => {
      this.cart = response.data.data;
      this.cart.forEach((item) => {
        this.cartTotal += item.product.price * item.quantity;
        this.$store.commit('finishedLoading');
      });
    });
  },
};
</script>

<style lang="scss">
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
#CheckingPage .col-md-6_right {
  background-color: rgba(0, 0, 0, 0.03) !important;
}
.ReturnToCart {
  text-align: left;
}
.ReturnToCart_color {
  color: #545454;
}
.ReturnToCart_color:hover {
  text-decoration: none;
  color: black;
}
.input_style:focus {
  border-style: solid;
  border-color: gray;
  box-shadow: 0 0 3px gray;
}
.orderCompleted{
  font-size: 36px;
  padding: 60px;
  margin: 60px 0;
}
</style>

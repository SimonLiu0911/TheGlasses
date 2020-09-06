<template>
  <div class="shop">
    <div class="container my-2">
      <div class="row">
        <div class="col-md-4 col-sm-6 mb-4" v-for="item in products" :key="item.id">
          <div class="card border-0 bg-white">
            <img :src="item.imageUrl" class="card-img-top commidity_img" alt />
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.content }}</p>
              <div class="d-flex justify-content-between align-items-baseline">
                <div class="h5" v-if="!item.price">{{ item.origin_price | thousandth }} 元</div>
                <div v-else>
                  <del class="h6">Price: {{ item.origin_price | thousandth }} {{ item.unit }}</del>
                  <div
                    class="h5 text-danger"
                  >Now just only {{ item.price | thousandth }} {{ item.unit }}</div>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex border-0 bg-white">
              <button
                type="button"
                class="btn btn-outline-secondary btn-sm rounded-0"
                @click="getDetailed(item)"
              >Detail</button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm ml-auto rounded-0"
                @click="addToCart(item)"
              >Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Vue Loading -->
    <loading :active.sync="isLoading"></loading>
    <!-- Pagination -->
    <Pagination :pages="pagination" @update="getFrontProducts"></Pagination>
    <!-- Product Detail Modal -->
    <Productdetail :temp-product="tempProduct" @addtocart="addToCart"></Productdetail>
  </div>
</template>

<script>
import $ from 'jquery';
import Pagination from '../../components/Pagination.vue';
import Productdetail from '../../components/front/ProductDetail.vue';

export default {
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isLoading: false,
    };
  },
  components: {
    Pagination,
    Productdetail,
  },
  filters: {
    thousandth(num) {
      const parts = num.toString().split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      return parts.join('.');
    },
  },
  methods: {
    getFrontProducts(page = 1) {
      this.isLoading = true;
      // GET api/{uuid}/ec/products
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/products?page=${page}`;
      this.$http.get(url).then((response) => {
        this.products = response.data.data;
        this.pagination = response.data.meta.pagination;
        this.isLoading = false;
      });
    },
    getDetailed(item) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/product/${item.id}`;
      this.$http.get(url).then((response) => {
        this.tempProduct = response.data.data;
        $('#productModal').modal('show');
        this.isLoading = false;
      });
    },
    addToCart(item, quantity = 1) {
      this.isLoading = true;
      const cart = {
        product: item.id,
        quantity,
      };
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http.post(url, cart).then(() => {
        this.isLoading = false;
        $('#productModal').modal('hide');
      }).catch((error) => {
        this.isLoading = false;
        alert(error.response.data.errors[0]);
        $('#productModal').modal('hide');
      });
    },
  },
  created() {
    this.getFrontProducts();
  },
};
</script>

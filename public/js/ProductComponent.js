Vue.component('products', {
  props: ['products', 'img', 'icon'],
  template: `
  <div class="featured-card">
    <product v-for="item of products" :key="item.id_product" :img="img" :icon="icon" :product="item"></product>
  </div>
  
  `,
});
Vue.component('product', {
  props: ['product', 'img', 'icon'],
  template: `  
    <div class="featured-card__item">
      <div class="featured-card__wrap-img">
        <div class="featured-card__img">
          <img :src="product.img" :alt="product.product_name" />
        </div>
        <div class="featured-card__cover">
          <a href="#" class="featured-card__btn" @click.prevent="$parent.$emit('add-product', product)">
            <img :src="icon" alt="cart" />
            Add to Cart
          </a>
        </div>
      </div>
      <div class="featured-card__body">
        <div class="featured-card__title">{{product.product_name}}</div>
        <div class="featured-card__desc">
          {{product.product_desc}}
        </div>
        <div class="featured-card__price">{{product.price}} ₽</div>
      </div>
    </div>
  `,
});

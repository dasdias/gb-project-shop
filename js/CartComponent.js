Vue.component('cart', {
  props: ['item', 'img'],
  template: `
    <div class="cart-item">
      <div class="cart-item__body">
        <div class="cart-item__img">
          <img :src="img" alt="Some img" />
        </div>
        <div class="cart-item__desc">
          <div class="cart-item__title">{{item.name}}</div>
          <div class="cart-item__quantity">Quantity: {{item.quantity}}</div>
          <div class="cart-item__single-price">$ {{item.price}}</div>
        </div>
      </div>
      <div class="cart-item__right-block">
        <div class="cart-item__total-price">Итого: {{item.price * item.quantity}}</div>
        <button class="cart-item__del-btn" @click="$root.remove(item)">&times;</button>
      </div>
    </div>
  `,
});

Vue.component('search-form', {
  template: `
    <form action="#" class="catalog-form" @input.prevent="$parent.filter">
      <input type="text" class="catalog-form__name" name="search" placeholder="Поиск" v-model="$parent.userSearch" />
      <button type="submit" class="catalog-form__btn" @click.prevent="$parent.filter">
        <img src="/images/search.png" alt="Поиск" />
      </button>
    </form>
  `,
});

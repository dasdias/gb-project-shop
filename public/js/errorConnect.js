const errorconnect = {
  data() {
    return {
      error: false,
      text: '',
    };
  },
  method: {
    setParam(err) {
      this.text = err;
      this.error = true;
    },
  },
  computed: {
    isVisible() {
      this.error = true;
      return this.text !== '';
    },
  },
  template: `
    <div class="modal-error modal-error__cover" @click="error = !error" v-show="error" v-if="isVisible">
      <div class="modal-error__body" @click.stop>
        <div class="modal-error__message">Ошибка соединения с сервером <br> попробуйте чуть позже.<br> {{text}}</div>
        <button class="modal-error__btn" @click="error = !error">Ok</button>
      </div>
    </div>  
  `,
};

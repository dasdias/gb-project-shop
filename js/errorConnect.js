const errorconnect = {
  data() {
    return {
      error: true,
    };
  },
  template: `
    <div class="modal-error modal-error__cover" @click="error = !error" v-show="error">
      <div class="modal-error__body" @click.stop>
        <div class="modal-error__message">Ошибка соединения с сервером <br> попробуйте чуть позже.</div>
        <button class="modal-error__btn" @click="error = !error">Ok</button>
      </div>
    </div>  
  `,
};
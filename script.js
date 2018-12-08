new Vue({
  el: '#app',
  data: {
    heading: 'Forms',
    fullName: ''
  },
  methods: {
    submitForm: function (e) {
      this.fullName = this.$refs.firstName.value + ' ' + this.$refs.lastName.value
    }
  }
});

/*
Do zczytania wartosci pol input sluzy obiekt $refs wbudowany we Veu.
Obiekt posiada wlasciwosci o nzawie naszych atrybutow ref

Ta metoda nie jest rekomendowana poniewaz nie jest to two-way data binding
*/



new Vue({
  el: '#app',
  data: {
    heading: 'Helo World',
    paragraph: 'Wecome to the Vue.js'
  },
  methods: {
    toUpperCase: function (val) {
      return val.toUpperCase();
    }
  }
});

/*
Wszystkie metody definiujemy w obiekcie methods jako kolejny obiekt z funkcja jako wartosc
*/
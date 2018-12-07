new Vue({
  el: '#app',
  data: {
    heading: 'Helo World',
    paragraph: 'Wecome to the Vue.js',
    firstName: 'John',
    lastName: 'Smith'
  },
  methods: {
    toUpperCase: function (val) {
      return val.toUpperCase();
    },
    bolder: function(val) {
      return '<strong>' + val + '</strong>';
    }
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName;
    }
  }
});

/*
Aby zwrocic do elementu DOM wartosc HTML znajdujaca sie w metodzie lub we wlasciwosci computed
nalezy uzyc dyrektywy v-html (patrz plik index.html, tag h2)
*/
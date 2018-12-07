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
    }
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName;
    }
  }
});

/*
wlasciwosc computed dzial podobnie jak metoda.
Roznica jest taka ze metoda re-renderuje cala strone, natomiast computed jedynie zmieniona czesc.
*/
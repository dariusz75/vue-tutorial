new Vue({
  el: '#app',
  data: {
    heading: 'Forms with two-way data binding',
    firstName: '',
    lastName: '',
    age: null
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName;
    },
    isFilled: function () {
      return this.firstName && this.lastName && this.age >= 18;
    }
  },
  methods: {
    submitForm: function (e) {
      console.log('Data sent: ' + this.fullName + ' ' + this.age);
    }
  }
});

/*
https://eduweb.pl/player/vuejs-od-podstaw/dwukierunkowe-wiazanie-danych
*/



new Vue({
  el: '#app',
  data: {
    heading: 'Forms with two-way data binding',
    firstName: '',
    lastName: ''
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName;
    }
  },
  methods: {
    submitForm: function (e) {
      console.log('Data sent: ' + this.fullName);
    }
  }
});

/*

https://eduweb.pl/player/vuejs-od-podstaw/dwukierunkowe-wiazanie-danych
*/



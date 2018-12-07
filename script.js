new Vue({
  el: '#app',
  data: {
    heading: 'Events',
    paragraph: 'Counter: ',
    counter: 0
  },
  methods: {
    increment: function () {
      this.counter++;
    },
    decrement: function () {
      this.counter--;
    },
    reset: function () {
      this.counter = 0;
    }
  }
});

/*

*/
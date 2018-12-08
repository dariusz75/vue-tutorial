new Vue({
  el: '#app',
  data: {
    heading: 'Counter',
    counter: 10,
    inProgress: false
  },
  methods: {
    start: function () {
      this.inProgress = true;
      this.countdown();
    },
    increment: function () {
      this.counter++;
    },
    decrement: function () {
      if (this.counter > 0) {
        this.counter--;
      }
    },
    countdown: function () {
      this.counter--;

      if (this.counter > 0) {
        setTimeout(this.countdown, 1000);
      } else {
        this.counter = 10;
        this.inProgress = false;
      }
    }
  }
});

/*

*/



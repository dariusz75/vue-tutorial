Vue.component('df-counter', {
  template: `
  <div>
  <h2 class="text-center">{{ counter }}</h2>
  <div class="text-center">
    <button type="button" class="btn btn-primary" @click="increment" :disabled="inProgress">Increment Counter</button>
    <button type="button" class="btn btn-primary" @click="decrement" :disabled="inProgress">Decement Counter</button>
    <button type="button" class="btn btn-primary" @click="start" :disabled="inProgress">Count down</button>
    <div class="alert alert-primary text-center mt-2" role="alert" v-show="!inProgress">Set up the counter or Start
      counting down</div>
  </div>
  </div>
  `,
  data: function () {
    return {
      counter: 10,
      inProgress: false
    }
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

new Vue({
  el: '#app',
  data: {
    heading: 'Counter',
  }
});

/*
https://eduweb.pl/player/vuejs-od-podstaw/tworzenie-wlasnych-komponentow
*/



new Vue({
  el: '#app',
  data: {
    heading: 'Helo World',
    paragraph: 'Wecome to the Vue.js',
    firstName: 'John',
    lastName: 'Smith',
    url1: 'https://www.bbc.co.uk/',
    url2: 'https://www.dailymail.co.uk/home/index.html'
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
Aby dynamicznie wstawic do elementu DOM atrybut musimy zadeklarowac go w obiekcie data 
a naastepnie w tagu HTML uzyc dyrektywy v-bind:href lub :href 
jak ponizej (oraz w pliku index.html)

<ul>
        <li>
          <a v-bind:href="url1">{{ url1 }}</a>
        </li>
        <li>
          <a :href="url2">{{ url2 }}</a>
        </li>
      </ul>
*/
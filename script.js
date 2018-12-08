new Vue({
  el: '#app',
  data: {
    heading: 'v-for directive',
    counter: 0,
    users: [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz"
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv"
      },
      {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net"
      },
      {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org"
      },
      {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca"
      }
    ]
  },
  methods: {
    remove: function (index) {
      this.users.splice(index, 1);
    }
  }
});

/*
metoda remove to funkcja do ktorej przekazujemy argument w postaci numeru indexu urzytkownika
przekazany z elementu row tabeli, podczas wykonywanie eventu click. 
Patrz plik index.html
<tr v-for="(user, index) in users" @click="remove(index)">

Nastepnie funkcja metody remove wycina element tablicy users o podanym indexie.
*/



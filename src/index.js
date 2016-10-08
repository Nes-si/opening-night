import Vue from 'vue';

import pic from 'images/alona.png';
//import styles from 'styles/layout.scss';


new Vue({
  el: '#app-root',
  
  data: {
    message: 'Hello Vue.js!'
  },
  
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('');
    }
  }
});

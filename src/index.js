import Vue from 'vue';

import styles from 'styles/layout.sss';
//import pug from 'pages/index.pug';


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

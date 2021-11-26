<template>
<Header/>
<router-view></router-view>
</template>
<script>
import Header from './components/Header.vue';

  export default {

    name: 'App',
    components: {
      Header,
    }
  }
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Playfair+Display:wght@400;500;600;700&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
  }
  a {
    color: #0b1015;
  }
  button {
    background: none;
    border: none;
  }
  img {
    border: 0;
    vertical-align: middle;
  }
  li,
  ul {
    list-style: none;
  }
  html {
    font-size: 10px;
    overflow-x: hidden;
  }

  .mainPage {
    background: url('./assets/background.png')no-repeat center;
}

  .wrap {
    position: relative;
    display: block;
    width: 144rem;
    margin: 0 auto;
}

.clearfix::after {
    content: '';
    position: relative;
    display: block;
    width: 100%;
    clear: both;
}
/* 
  section {
    padding-top: 12rem;
  } */

</style>
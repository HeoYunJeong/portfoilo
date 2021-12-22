<template>
  <div class="wrap">
      <Header />
      <router-view></router-view>
      <Footer />
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';

  export default {
    name: 'App',

    components: {
      Header,
      Footer,
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
    text-decoration: none;
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

  body {
    font-family: 'Playfair Display', 'Noto Sans KR', sans-serif;
  }

  .wrap {
     /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#13437e+0,13437e+50,ffffff+50,ffffff+100 */
    background: #13437e;
    /* Old browsers */
    background: -moz-linear-gradient(left, #13437e 0%, #13437e 50%, #ffffff 50%, #ffffff 100%);
    /* FF3.6-15 */
    background: -webkit-linear-gradient(left, #13437e 0%, #13437e 50%, #ffffff 50%, #ffffff 100%);
    /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right, #13437e 0%, #13437e 50%, #ffffff 50%, #ffffff 100%);
    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#13437e', endColorstr='#ffffff', GradientType=1);
    /* IE6-9 */

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100vw;
    height: 100vh;
  }

  .container {
    position: relative;
    display: flex;
    justify-content: space-between;
    max-width: 144rem;
    width: 100%;
    margin: 0 auto;
  }

  .clearfix::after {
    content: '';
    position: relative;
    display: block;
    width: 100%;
    clear: both;
  }

  @media screen and (max-width: 425px) {
    .wrap {
      /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#13437e+0,13437e+50,ffffff+50,ffffff+100 */
      background: #13437e;
      /* Old browsers */
      background: -moz-linear-gradient(top, #13437e 0%, #13437e 50%, #ffffff 50%, #ffffff 100%);
      /* FF3.6-15 */
      background: -webkit-linear-gradient(top, #13437e 0%, #13437e 50%, #ffffff 50%, #ffffff 100%);
      /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(to bottom, #13437e 0%, #13437e 50%, #ffffff 50%, #ffffff 100%);
      /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#13437e', endColorstr='#ffffff', GradientType=0);
      /* IE6-9 */
    }

    .container {
    flex-direction: column;
  }
  }
</style>
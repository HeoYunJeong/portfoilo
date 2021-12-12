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
    data() {
      return {}
    },
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

  .wrap {
    background: url('./assets/background.png')no-repeat center / cover;
    position: relative;
    display: flex !important;
    flex-direction: column;
    justify-content: space-between;
    width: 100vw;
    height: 100vh;
    display: block;
  }

  .container {
    position: relative;
    display: flex;
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
</style>
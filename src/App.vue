<template>


  <div class="wrap">

    <div class="black-bg" v-if="OpenModal == true">
      <div class="white-bg">
        <div class="modal-contents">
        <h1>반갑습니다 허윤정의 포트폴리오 입니다.</h1>
        <p> <span>본 포트폴리오는 <strong>Vue.js</strong> 로 제작되었으며,</span> <br> <span><strong>Google Chrome</strong> 에 최적화되어
            있습니다.</span> <br> <span> (해상도: 1440px,
            1024px, 768px, 425px)</span> </p>
        <button @click="OpenModal = false" class="modal-close-bt">닫기</button>
        </div>
      </div>
    </div>

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
      return {
        OpenModal: true,
      }
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

  .black-bg {
    position: fixed;
    display: block;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    padding: 20px;
    z-index: 999;
  }

  .white-bg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 60rem;
    height: 40rem;
    background: #fff;
    border-radius: 30px;
    padding: 20px;
  }

  .modal-contents {
    position: relative;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
  }

  .modal-contents h1 {
    margin-top: 3rem;
    text-align: center;
  }

  .modal-contents p {
    margin-top: 3rem;
    text-align: center;
    font-size: 1.8rem;
  }

  .modal-close-bt {
    margin-top: 3rem;
    font-size: 2rem;
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

  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 50%;
    background: #cdc3c8;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    width: 17px;
    height: 8px;
    border-radius: 10px;
    opacity: 1;
    background: #948b92;
  }

  .swiper-button-next,
  .swiper-button-prev {
    top: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    color: #fff;
    border: 1px solid #12437e;
    border-radius: 50%;
    background: rgba(18, 67, 126, 0.8);
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-family: swiper-icons;
    font-size: 20px;
    /* font-weight: bold; */
    text-transform: none !important;
    /* text-shadow: -2px 0 #12437e, 0 2px #12437e, 2px 0 #12437e, 0 -2px #12437e; */
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
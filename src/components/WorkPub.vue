<template>
    <swiper class="swiper" v-bind="swiperOptions" :modules="moudules">
        <swiper-slide class="swiper-slide01">
            <p><a href="https://heoyunjeong.github.io/STXconst/" target="_blank">STX건설</a></p>
        </swiper-slide>
        <swiper-slide class="swiper-slide02">
            <p><a href="https://heoyunjeong.github.io/SONY/" target="_blank">SONY 코리아</a></p>
        </swiper-slide>
        <swiper-slide class="swiper-slide03">
            <p><a href="https://heoyunjeong.github.io/NEXUS/" target="_blank">넥서스 플래그십</a></p>
        </swiper-slide>
        <swiper-slide class="swiper-slide04">
            <p><a href="https://heoyunjeong.github.io/inha-university/" target="_blank">인하대학교</a></p>
        </swiper-slide>
    </swiper>
</template>

<script>
    import SwiperCore, {
        Autoplay,
        Pagination,
        Navigation
    } from 'swiper';
    import {
        Swiper,
        SwiperSlide
    } from 'swiper/vue';
    import 'swiper/swiper-bundle.min.css';
    import 'swiper/components/navigation/navigation.min.css'
    import 'swiper/components/pagination/pagination.min.css'
    SwiperCore.use([Autoplay, Pagination, Navigation]);
    export default {
        components: {
            Swiper,
            SwiperSlide
        },
        methods: {
            // onSwiper(swiper) {
            //     this.swiper = swiper;
            // },

            // handleSlideTo() {
            //     this.swiper.slideTo(3);
            // },
        },
        setup() {
            return {
                swiperOptions: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    centeredSlides: true,
                    loop: true,
                    autoplay: {
                        "delay": 2000,
                        "disableOnInteraction": false
                    },
                    pagination: {
                        "clickable": true
                    },
                    navigation: true,
                    breakpoints: {
                        320: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                        },
                        375: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                        },
                        425: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                        },
                        768: {
                            slidesPerView: 2,
                            slidesPerGroup: 1,
                        },
                    },
                },

                modules: [Navigation, Pagination, Autoplay],
            };
        },
    }
</script>

<style>
    .swiper {
        position: relative;
        display: block;
        width: 57rem;
        height: 40rem;
        border-radius: 1rem;
    }

    .swiper .swiper-slide {
        display: block;
        width: 30rem;
        height: 100%;
        border-radius: 1rem;
    }

    .swiper .swiper-slide01 {
        background: url('../assets/stx_img.png') no-repeat center;
        background-size: cover;
    }
        .swiper .swiper-slide02 {
        background: url('../assets/sony_img.webp') no-repeat center;
        background-size: cover;
    }
        .swiper .swiper-slide03 {
        background: url('../assets/nexus_img.jpg') no-repeat center;
        background-size: cover;
    }
        .swiper .swiper-slide04 {
        background: url('../assets/inha_img.jpg') no-repeat center;
        background-size: cover;
    }

    .swiper .swiper-slide a {
        position: relative;
        display: block;
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 400;
        font-size: 1.8rem;
        color: #fff;
        text-align: center;
        padding-top: 10rem;
        text-decoration: none;
    }
</style>
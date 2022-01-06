<template>
    <swiper class="swiper" v-bind="swiperOptions" :modules="moudules">
        <swiper-slide class="swiper-slide swiper-slide01">
            <div class="overlay"></div>
            <a href="https://heoyunjeong.github.io/STXconst/" target="_blank">하바나우냐냐</a>
        </swiper-slide>
        <swiper-slide class="swiper-slide swiper-slide02">
            <div class="overlay"></div>
            <a href="https://heoyunjeong.github.io/SONY/" target="_blank">SONY 코리아</a>
        </swiper-slide>
        <swiper-slide class="swiper-slide swiper-slide03">
            <div class="overlay"></div>
            <a href="https://heoyunjeong.github.io/NEXUS/" target="_blank">넥서스 플래그십</a>
        </swiper-slide>
        <swiper-slide class="swiper-slide swiper-slide04">
            <div class="overlay"></div>
            <a href="https://heoyunjeong.github.io/inha-university/" target="_blank">인하대학교</a>
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
            SwiperSlide,
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
                        "delay": 3000,
                        "disableOnInteraction": false
                    },
                    pagination: {
                        "clickable": true
                    },
                    navigation: true,
                    breakpoints: {
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

<style scoped>

    .swiper .swiper-slide {
        border-radius: 5rem;
    }
    .swiper .swiper-slide01 {
        background: url('../assets/stx_img.jpg') no-repeat center;
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

</style>
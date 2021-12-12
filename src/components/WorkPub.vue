<template>
    <swiper class="swiper" v-bind="swiperOptions" :modules="moudules">
        <swiper-slide class="swiper-slide01">
            <div class="overlay"></div>
            <p><a href="https://heoyunjeong.github.io/STXconst/" target="_blank">STX건설</a></p>
        </swiper-slide>
        <swiper-slide class="swiper-slide02">
            <div class="overlay"></div>
            <p><a href="https://heoyunjeong.github.io/SONY/" target="_blank">SONY 코리아</a></p>
        </swiper-slide>
        <swiper-slide class="swiper-slide03">
            <div class="overlay"></div>
            <p><a href="https://heoyunjeong.github.io/NEXUS/" target="_blank">넥서스 플래그십</a></p>
        </swiper-slide>
        <swiper-slide class="swiper-slide04">
            <div class="overlay"></div>
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
                        "delay": 2500,
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

    .overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        display: block;
        border-radius: 5rem;

        background: rgba(0, 0, 0, 0.5);
        opacity: 0;
        transition: all 0.2s;
    }

    .overlay:hover {
        opacity: 1;
    }
</style>
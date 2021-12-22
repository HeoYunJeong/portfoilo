<template>
    <swiper class="swiper" v-bind="swiperOptions" :modules="moudules">
        <swiper-slide class="swiper-slide01">
            <div class="overlay">
                <div class="overlay-contents">
                    <p class="overlay-contents__name">STX건설</p>
                    <p class="overlay-contents__lang">html css jquery</p>
                    <p class="overlay-contents__time">2 weeks</p>
                    <p class="overlay-contents__link">
                        <a href="https://heoyunjeong.github.io/STXconst/" target="_blank"
                            class="overlay-contents__clone"><i class="fab fa-github-square"></i></a>
                        <a href="http://www.stxconst.co.kr/" target="_blank" class="overlay-contents__original"><i
                            class="fas fa-window-maximize"></i></a>
                    </p>
                </div>
            </div>
            <a href="https://heoyunjeong.github.io/STXconst/" target="_blank"></a>
        </swiper-slide>
        <swiper-slide class="swiper-slide02">
            <div class="overlay"></div>
            <a href="https://heoyunjeong.github.io/SONY/" target="_blank"></a>
        </swiper-slide>
        <swiper-slide class="swiper-slide03">
            <div class="overlay"></div>
            <a href="https://heoyunjeong.github.io/NEXUS/" target="_blank"></a>
        </swiper-slide>
        <swiper-slide class="swiper-slide04">
            <div class="overlay"></div>
            <a href="https://heoyunjeong.github.io/inha-university/" target="_blank"></a>
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
        z-index: 9;
    }

    .overlay:hover {
        opacity: 1;
    }

    .overlay-contents {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 1.8rem;
        color: #fff;
    }

</style>
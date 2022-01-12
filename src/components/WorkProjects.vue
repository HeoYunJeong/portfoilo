<template>
    <swiper v-bind="swiperOptions" :modules="moudules">
        <swiper-slide>
            <div class="swiper-slide01">
                <!-- <div class="overlay"></div> -->
                <div class="projects-img projects-img01">
                    <a href="https://heoyunjeong.github.io/STXconst/" target="_blank"></a>
                </div>
                <div class="projects-contents">
                    <p>STX 건설</p>
                    <p>제작기간: 1 week</p>
                    <p>사용언어: HTML5 / CSS3 / JQuery</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="swiper-slide02">
                <!-- <div class="overlay"></div> -->
                <div class="projects-img projects-img02">
                    <a href="https://heoyunjeong.github.io/SONY/" target="_blank"></a>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="swiper-slide03">
                <!-- <div class="overlay"></div> -->
                <div class="projects-img projects-img03">
                    <a href="https://heoyunjeong.github.io/NEXUS/" target="_blank"></a>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="swiper-slide04">
                <!-- <div class="overlay"></div> -->
                <div class="projects-img projects-img04">
                    <a href="https://heoyunjeong.github.io/inha-university/" target="_blank"></a>
                </div>
            </div>
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
                    spaceBetween: 15,
                    centeredSlides: true,
                    loop: true,
                    // observer: true,
                    // dbserverParents: true,
                    autoplay: {
                        "delay": 2000,
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
    .swiper-container {
        width: 100%;
        height: 95%;
        padding-top: 2rem;
        padding-bottom: 4rem;
    }

    .swiper-slide>div {
        border-radius: 5rem;
        width: 100%;
        height: 100%;
    }

    .projects-img {
        position: relative;
        display: block;
        width: 100%;
        height: 50%;
        background-size: cover !important;
        border-radius: 3rem;
    }

    .projects-img01 {
        background: url('../assets/stx_img.jpg') no-repeat center;
    }

    .projects-img02 {
        background: url('../assets/sony_img.webp') no-repeat center;
    }

    .projects-img03 {
        background: url('../assets/nexus_img.jpg') no-repeat center;
    }

    .projects-img04 {
        background: url('../assets/inha_img.jpg') no-repeat center;
    }

    .overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        display: block;
        border-radius: 5rem;
        background: rgba(0, 0, 0, 0.7);
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
        text-align: center;
        font-size: 1.8rem;
        color: #fff;
    }

    .swiper-pagination {
        bottom: 0;
    }
</style>
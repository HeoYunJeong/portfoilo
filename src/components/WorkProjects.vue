<template>
    <swiper v-bind="swiperOptions" :modules="moudules" @swiper="onSwiper"
        @mouseenter="() => this.swiper.autoplay.stop()" @mouseleave="() => this.swiper.autoplay.start()">

        <swiper-slide>
            <div class="swiper-slide01">

                <div class="overlay">
                    <div class="overlay-original">
                        <a href="https://heoyunjeong.github.io/" target="_blank">
                            <i class="fab fa-chrome"></i>
                            <span>original page</span>
                        </a>
                    </div>

                    <div class="overlay-github overlay-github01">
                        <a href="https://github.com/HeoYunJeong/portfolio" target="_blank">
                            <i class="fab fa-github"></i>
                            <span>github Source</span>
                        </a>
                    </div>
                </div>

                <a href="https://heoyunjeong.github.io/" target="_blank">
                    <div class="projects-img projects-img01"></div>
                </a>
                <div class="projects-contents">
                    <p class="projects-contents__name"><i class="fas fa-caret-right"></i>&nbsp;yunjeong's portfolio</p>
                    <p class="projects-contents__time">제작기간: 4 weeks</p>
                    <p class="projects-contents__lang">사용언어: Vue.js / HTML5 / CSS3 </p>
                </div>
            </div>
        </swiper-slide>

        <swiper-slide>
            <div class="swiper-slide02">

                <div class="overlay">
                    <div class="overlay-original">
                        <a href="http://www.stxconst.co.kr/" target="_blank">
                            <i class="fab fa-chrome"></i>
                            <span>original page</span>
                        </a>
                    </div>
                    <div class="overlay-clone">
                        <a href="https://heoyunjeong.github.io/STXconst/" target="_blank">
                            <i class="fas fa-clone"></i>
                            <span>clone page</span>
                        </a>
                    </div>
                    <div class="overlay-github">
                        <a href="https://github.com/HeoYunJeong/STXconst" target="_blank">
                            <i class="fab fa-github"></i>
                            <span>github Source</span>
                        </a>
                    </div>
                </div>

                <a href="https://heoyunjeong.github.io/STXconst/" target="_blank">
                    <div class="projects-img projects-img02"></div>
                </a>
                <div class="projects-contents">
                    <p class="projects-contents__name"><i class="fas fa-caret-right"></i>&nbsp;stx 건설</p>
                    <p class="projects-contents__time">제작기간: 1 week</p>
                    <p class="projects-contents__lang">사용언어: HTML5 / CSS3 / JQuery</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="swiper-slide03">

                <div class="overlay">
                    <div class="overlay-original">
                        <a href="https://www.sony.co.kr/" target="_blank">
                            <i class="fab fa-chrome"></i>
                            <span>original page</span>
                        </a>
                    </div>
                    <div class="overlay-clone">
                        <a href="https://heoyunjeong.github.io/SONY/" target="_blank">
                            <i class="fas fa-clone"></i>
                            <span>clone page</span>
                        </a>
                    </div>
                    <div class="overlay-github">
                        <a href="https://github.com/HeoYunJeong/SONY" target="_blank">
                            <i class="fab fa-github"></i>
                            <span>github Source</span>
                        </a>
                    </div>
                </div>

                <a href="https://heoyunjeong.github.io/SONY/" target="_blank">
                    <div class="projects-img projects-img03"></div>
                </a>
                <div class="projects-contents">
                    <p class="projects-contents__name"><i class="fas fa-caret-right"></i>&nbsp;sony korea</p>
                    <p class="projects-contents__time">제작기간: 1 week</p>
                    <p class="projects-contents__lang">사용언어: HTML5 / CSS3 / JQuery</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="swiper-slide04">


                <div class="overlay">
                    <div class="overlay-original">
                        <a href="https://nexus-official.com/" target="_blank">
                            <i class="fab fa-chrome"></i>
                            <span>original page</span>
                        </a>
                    </div>
                    <div class="overlay-clone">
                        <a href="https://heoyunjeong.github.io/NEXUS/" target="_blank">
                            <i class="fas fa-clone"></i>
                            <span>clone page</span>
                        </a>
                    </div>
                    <div class="overlay-github">
                        <a href="https://github.com/HeoYunJeong/NEXUS" target="_blank">
                            <i class="fab fa-github"></i>
                            <span>github Source</span>
                        </a>
                    </div>
                </div>


                <a href="https://heoyunjeong.github.io/NEXUS/" target="_blank">
                    <div class="projects-img projects-img04"></div>
                </a>
                <div class="projects-contents">
                    <p class="projects-contents__name"><i class="fas fa-caret-right"></i>&nbsp;NEXUS</p>
                    <p class="projects-contents__time">제작기간: 2 weeks</p>
                    <p class="projects-contents__lang">사용언어: HTML5 / CSS3 / JQuery</p>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="swiper-slide05">



                <div class="overlay">
                    <div class="overlay-original">
                        <a href="https://www.inha.ac.kr/kr/index.do" target="_blank">
                            <i class="fab fa-chrome"></i>
                            <span>original page</span>
                        </a>
                    </div>
                    <div class="overlay-clone">
                        <a href="https://heoyunjeong.github.io/inha-university/" target="_blank">
                            <i class="fas fa-clone"></i>
                            <span>clone page</span>
                        </a>
                    </div>
                    <div class="overlay-github">
                        <a href="https://github.com/HeoYunJeong/inha-university" target="_blank">
                            <i class="fab fa-github"></i>
                            <span>github Source</span>
                        </a>
                    </div>
                </div>



                <a href="https://heoyunjeong.github.io/inha-university/" target="_blank">
                    <div class="projects-img projects-img05"></div>
                </a>
                <div class="projects-contents">
                    <p class="projects-contents__name"><i class="fas fa-caret-right"></i>&nbsp;인하대학교</p>
                    <p class="projects-contents__time">제작기간: 3 weeks</p>
                    <p class="projects-contents__lang">사용언어: HTML5 / CSS3 / JQuery</p>
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
            onSwiper(swiper) {
                this.swiper = swiper;
            },

            // handleSlideTo() {
            //     this.swiper.slideTo(3);
            // },
        },
        setup() {
            return {
                swiperOptions: {
                    slidesPerView: 1,
                    spaceBetween: 30,
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
        /* background-size: cover !important; */
        border: .1rem solid #cdc3c8;
        border-radius: 3rem;
    }

    .projects-img01 {
        background: #12437e url('../assets/main-text.png') no-repeat;
        background-size: contain;

    }

    .projects-img02 {
        background: url('../assets/stx_img.jpg') no-repeat;
        background-size: cover;

    }

    .projects-img03 {
        background: url('../assets/sony_img.webp') no-repeat;
        background-size: cover;

    }

    .projects-img04 {
        background: url('../assets/nexus_img.jpg') no-repeat;
        background-size: cover;

    }

    .projects-img05 {
        background: url('../assets/inha_img.jpg') no-repeat;
        background-size: cover;


    }

    .overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 3rem;
        background: rgba(0, 0, 0, 0.7);
        opacity: 0;
        transition: all 0.2s;
        z-index: 9;
        color: #fff;
    }

    .overlay-original,
    .overlay-clone,
    .overlay-github,
    .projects-contents__name,
    .projects-contents__time,
    .projects-contents__lang {
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 500;
        font-size: 2rem;
        line-height: 2.2rem;
        color: #fff;
        text-align: center;
        text-transform: capitalize;
    }


    .overlay-original a,
    .overlay-clone a,
    .overlay-github a {
        color: #fff;
    }

    .overlay-original i,
    .overlay-clone i,
    .overlay-github i {
        display: block;
        font-size: 2.5rem;
        color: #fff;
    }

    .overlay-clone,
    .overlay-github01 {
        margin: 4rem 0;
    }

    .overlay:hover {
        opacity: 1;
    }

    .projects-contents {
        position: relative;
        margin-top: 5rem;
        width: 60%;
        left: 3rem;
    }

    .projects-contents__name,
    .projects-contents__time,
    .projects-contents__lang {
        color: #12437e;
        text-transform: uppercase;
        text-align: left;
    }

    .projects-contents__time,
    .projects-contents__lang {
        margin-top: 1rem;
        font-weight: 300;
        font-size: 1.8rem;
        text-transform: none;
        color: #675f65;
    }
</style>
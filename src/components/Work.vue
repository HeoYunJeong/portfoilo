<template>
    <div class="mainPage">
        <div class="wrap">
            <section class="work">
                <div class="work-left">
                    <div class="work-left__title">
                        <h4>hard skill</h4>
                    </div>
                    <div class="skill">
                        <div class="skill-container__top">
                            <div class="skill-img" @mouseenter="step = 0"><i class="fab fa-html5 fa-6x" :class="{skill_focus: step == 0}"></i>
                                <p>html5</p>
                            </div>
                            <div class="skill-img" @mouseenter="step = 1"><i class="fab fa-css3-alt fa-6x" :class="{skill_focus: step == 1}"></i>
                                <p>css3</p>
                            </div>
                            <div class="skill-img jquery" @mouseenter="step = 2"><svg :class="{skill_focus: step == 2}" xmlns="http://www.w3.org/2000/svg"
                                    height="64" width="64" viewBox="0 0 32 32">
                                    <path
                                        d="M2.144 7.705c-2.83 4.07-2.48 9.364-.316 13.7.05.104.105.206.158.308l.1.195c.02.038.042.075.063.112.037.07.075.134.113.202l.207.354.118.194.24.375.102.158c.113.168.228.336.347.5l.068.092a16.39 16.39 0 0 0 .316.42l.12.152.292.36.112.134c.133.157.27.313.407.465.014.015.02.02.024.026a20.44 20.44 0 0 0 .414.436l.133.134.33.324.135.13a16.98 16.98 0 0 0 .453.412l.496.42.17.136.343.268.183.14.385.276.18.127c.123.085.248.166.374.247l.162.108a20.81 20.81 0 0 0 .585.358l.162.1.44.246c.08.043.162.084.243.125l.314.163.073.035.13.062.498.23.105.047a17.83 17.83 0 0 0 .581.241l.14.056.548.203.07.024a21.72 21.72 0 0 0 .61.2l.148.044c.2.063.416.14.63.178 13.694 2.497 17.67-8.23 17.67-8.23-3.34 4.352-9.27 5.5-14.9 4.222-.213-.048-.42-.114-.627-.176l-.156-.047a18.62 18.62 0 0 1-.604-.197l-.083-.03a20.87 20.87 0 0 1-.532-.197l-.15-.06a15.16 15.16 0 0 1-.575-.24l-.115-.05-.485-.226-.14-.067c-.126-.06-.25-.127-.375-.2l-.25-.13c-.152-.08-.3-.166-.45-.252l-.152-.085a21.76 21.76 0 0 1-.585-.358c-.053-.034-.105-.07-.158-.105l-.416-.277c-.046-.03-.1-.064-.134-.094l-.394-.285-.175-.132-.355-.278-.158-.127-.442-.373a.73.73 0 0 0-.05-.04l-.465-.423-.13-.126-.332-.33-.13-.13c-.14-.143-.276-.287-.4-.434-.007-.007-.014-.014-.02-.022a16.98 16.98 0 0 1-.416-.474l-.1-.13-.3-.37-.1-.137-.346-.46C2.982 15.6 1.86 9.722 4.354 4.902m6.58-.625c-2.048 2.947-1.937 6.9-.34 10.008a13.06 13.06 0 0 0 .906 1.512c.307.44.647.963 1.054 1.316.148.163.302.32.46.477l.12.12a13.41 13.41 0 0 0 .469.436c.007.005.012.012.02.017.182.16.366.3.553.458l.124.097a13.46 13.46 0 0 0 .574.419l.017.012c.086.06.174.115.262.173.042.027.082.056.124.082a11.64 11.64 0 0 0 .425.26l.06.035.376.2c.044.025.1.046.134.07l.263.136c.013.007.027.012.04.018a11.39 11.39 0 0 0 .548.255l.12.05a14.16 14.16 0 0 0 .45.182l.192.07a14.26 14.26 0 0 0 .413.143l.187.06c.197.06.4.14.597.173 10.573 1.752 13.014-6.4 13.014-6.4-2.2 3.17-6.46 4.68-11.008 3.5a13.06 13.06 0 0 1-.599-.173c-.06-.018-.12-.038-.18-.058l-.42-.144-.2-.07a15.08 15.08 0 0 1-.45-.182l-.122-.05a12.58 12.58 0 0 1-.552-.256l-.277-.14-.16-.082a13.16 13.16 0 0 1-.35-.197l-.084-.047a12.34 12.34 0 0 1-.424-.26c-.043-.027-.085-.057-.128-.085l-.275-.182a13.24 13.24 0 0 1-.57-.418l-.13-.1c-2-1.572-3.568-3.72-4.318-6.154-.786-2.525-.617-5.36.745-7.66m5.732-.183C17.12 3.5 17 5.698 17.838 7.66c.883 2.083 2.693 3.716 4.806 4.5l.262.1.116.036.377.1c5.838 1.128 7.42-2.996 7.843-3.603-1.387 1.997-3.718 2.476-6.578 1.782-.226-.055-.474-.137-.692-.214a8.46 8.46 0 0 1-.822-.341 8.5 8.5 0 0 1-1.441-.879C19.15 7.2 17.56 3.486 19.23.47" />
                                </svg>
                                <p>jquery</p>
                            </div>
                            <div class="skill-img" @mouseenter="step = 3"><i class="fab fa-js fa-6x" :class="{skill_focus: step == 3}"></i>
                                <p>javascript</p>
                            </div>
                        </div>
                        <div class="skill-container__bottom">
                            <div class="skill-img" @mouseenter="step = 4"><i class="fab fa-vuejs fa-6x" :class="{skill_focus: step == 4}"></i>
                                <p>vue.js</p>
                            </div>
                            <div class="skill-img" @mouseenter="step = 5"><i class="fab fa-sass fa-6x" :class="{skill_focus: step == 5}"></i>
                                <p>sass</p>
                            </div>
                            <div class="skill-img photoshop" @mouseenter="step = 6"><svg :class="{skill_focus: step == 6}" version="1.1" id="Capa_1"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    x="0px" y="0px" viewBox="0 0 17.469 17.469"
                                    style="enable-background:new 0 0 17.469 17.469;" xml:space="preserve">
                                    <path d="M5.925,4.982c-0.442,0-0.742,0.043-0.898,0.087v2.841C5.213,7.952,5.44,7.966,5.754,7.966
			c1.157,0,1.871-0.585,1.871-1.571C7.624,5.511,7.01,4.982,5.925,4.982z" />
                                    <path d="M16.4,0.002H1.07C0.479,0.002,0,0.48,0,1.069v15.329c0,0.59,0.479,1.069,1.07,1.069H16.4
			c0.59,0,1.069-0.479,1.069-1.069V1.07C17.469,0.48,16.99,0.002,16.4,0.002z M8.894,8.624c-0.741,0.7-1.842,1.014-3.125,1.014
			c-0.287,0-0.543-0.014-0.743-0.043v3.442H2.869V3.541C3.54,3.428,4.482,3.342,5.811,3.342c1.341,0,2.299,0.256,2.94,0.771
			c0.617,0.486,1.03,1.286,1.03,2.228S9.466,8.08,8.894,8.624z M12.145,13.179c-0.916,0-1.729-0.198-2.258-0.485l0.385-1.556
			c0.4,0.241,1.229,0.527,1.873,0.527c0.655,0,0.927-0.228,0.927-0.586c0-0.356-0.214-0.527-1.027-0.799
			c-1.442-0.485-2-1.271-1.986-2.099c0-1.298,1.114-2.286,2.842-2.286c0.814,0,1.542,0.187,1.97,0.4l-0.385,1.5
			c-0.314-0.172-0.913-0.399-1.514-0.399c-0.527,0-0.826,0.214-0.826,0.571c0,0.328,0.269,0.499,1.126,0.8
			c1.328,0.456,1.886,1.128,1.899,2.154C15.171,12.222,14.141,13.179,12.145,13.179z" />


                                </svg>
                                <p>photoshop</p>
                            </div>
                            <div class="skill-img" @mouseenter="step = 7"><svg :class="{skill_focus: step == 7}" version="1.1" id="Capa_1"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    x="0px" y="0px" viewBox="0 0 16.871 16.871"
                                    style="enable-background:new 0 0 16.871 16.871;" xml:space="preserve">
                                    <path
                                        d="M6.847,5.772H6.822c-0.127,0.511-0.254,1.16-0.395,1.657L5.917,9.25h1.898L7.28,7.429C7.128,6.919,6.975,6.283,6.847,5.772z" />
                                    <path
                                        d="M15.837,0H1.033C0.462,0,0,0.462,0,1.033v14.805c0,0.57,0.462,1.033,1.033,1.033h14.805c0.57,0,1.033-0.463,1.033-1.033V1.033C16.871,0.463,16.408,0,15.837,0z M8.758,12.905l-0.663-2.203H5.638l-0.612,2.203H3.014l2.624-8.583h2.546l2.663,8.583H8.758z M13.793,12.905h-1.937V6.678h1.937V12.905z M12.813,5.914c-0.611,0-1.019-0.434-1.007-0.969c-0.012-0.561,0.396-0.979,1.021-0.979c0.623,0,1.018,0.419,1.03,0.979C13.857,5.48,13.45,5.914,12.813,5.914z" />
                                </svg>
                                <p>illustrator</p>
                            </div>
                        </div>

                        <div class="skill-contents">
                            <transition-group name="fade">

                                <div v-if="step == 0">
                                    <p>웹표준, 웹접근성, 크로스브라우징, 시멘틱 마크업 규격에 대해 깊이 이해하고 있습니다. 디자인 구성 요소들이 어떤 의미를 가지고 어떻게 쓰이는지
                                        해석하고
                                        판단하여
                                        구조화할 수 있습니다</p>
                                </div>
                                <div v-if="step == 1">
                                    <p>Cascading의 작동 원리를 이해하고 있으며, 미디어쿼리를 활용한 반응형 웹 제작이 가능합니다. 확장성, 재활용성을 고려한 css설계를
                                        지향합니다.
                                        부트스트랩과 같은 라이브러리를 활용하여 개발시간과 코드 길이를 효율적으로 단축할 수 있습니다. </p>
                                </div>
                                <div v-if="step == 2">
                                    <p>기존에 jQuery로 작성된 코드를 읽고 해석할 줄 알며, jQuery를 활용하여 간단한 DOM조작과 ui 애니메이션을 구현할 수 있습니다.
                                    </p>
                                </div>
                                <div v-if="step == 3">
                                    <p>Javascript의 기본문법과 이벤트버블링과 같은 동작의 원리에 대해 이해하고 있으며 현재 온라인 교육프로그램을 통해 꾸준히 학습하고 있습니다.
                                    </p>
                                </div>
                                <div v-if="step == 4">
                                    <p>Vue.js의 데이터 바인딩과 컴포넌트 라우터 등의 문법을 이해하고 있습니다. 이를 활용하여 웹사이트 제작이 가능합니다. 현재 페이지도 vue로
                                        구현하였습니다. 현재 온라인 교육프로그햄을 통해 꾸준히 학습하고 있습니다.</p>
                                </div>
                                <div v-if="step == 5">
                                    <p>Sass를 활용할 줄 알며 반복된 코드를 최소화하고 명시적으로 깔끔한 css코드를 작성할 수 있습니다.</p>
                                </div>
                                <div v-if="step == 6">
                                    <p>Photoshop 포토샵 시안을 바탕으로 마크업 설계를 할 수 있습니다. 또한 기본 툴을 활용한 광고 배너 제작, 사진 편집이 가능합니다.
                                    </p>
                                </div>
                                <div v-if="step == 7">
                                    <p>Illustrater 기본 툴을 활용한 폰트와 캐릭터 제작이 가능합니다. </p>
                                </div>
                            </transition-group>

                        </div>
                    </div>
                </div>
                <div class="work-right">
                    <div class="work-right__menu">
                        <p @click="showPub">퍼블리싱</p>
                        <p @click="showDes">디자인</p>
                    </div>
                    <div class="work-right__view">
                        <Publishing v-if="pubShow==true" />
                        <Design v-if="designShow==true" />
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    import Publishing from '../components/WorkPub.vue';
    import Design from '../components/WorkDesign.vue';

    export default {
        name: 'work',
        props: {},
        components: {
            Publishing,
            Design,
        },
        data() {
            return {
                pubShow: true,
                designShow: false,
                step: 0,
            }
        },
        methods: {
            showPub() {
                if (this.pubShow == false) {
                    this.pubShow = true
                    this.designShow = false
                }
            },
            showDes() {
                if (this.designShow == false) {
                    this.designShow = true
                    this.pubShow = false
                }
            },
        },
    }
</script>

<style>
::-webkit-scrollbar {
    width: 0px;
}
    .clearfix::after {
        content: '';
        position: relative;
        display: block;
        width: 100%;
        clear: both;
    }

    .work {
        position: relative;
        display: flex;
        padding-top: 6rem;
        width: 100%;
        height: 100vh;
    }

    .work-left {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 50%;
        padding-right: 9rem;
        padding-left: 6rem;
        align-content: center;
    }

    .work-left__title {
        position: relative;
        display: block;
        margin: 0 auto;
        padding-top: 9rem;
        margin-bottom: 6rem;
    }

    .work-left__title h4 {
        font-family: 'Playfair Display', serif;
        font-weight: 400;
        font-size: 1.8rem;
        transform: scale(1, 0.9);
        color: #fff;
        text-transform: uppercase;
    }

    .skill {
        position: relative;
        display: flex;
        flex-direction: column;
        align-content: center;
        width: 70%;
        margin: 0 auto;
    }

    .skill-container__top,
    .skill-container__bottom {
        position: relative;
        display: flex;
        justify-content: space-around;
        align-content: center;
    }

    .skill-container__bottom {
        padding-top: 6rem;
    }

    .skill_focus {
        color: #fff !important;
        fill: #fff !important;
    }

    .skill-img {
        width: 6rem;
        height: 6rem;
        cursor: pointer;
    }

    .skill-img i {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        text-align: center;
        color: #cdc3c8 ;
    }

    .skill i:hover {
        color: #fff;
        transition: all 0.5s;
    }

    .skill-img svg {
        fill: #cdc3c8 ;
        
    }


    .skill-img:hover svg {
        fill: #fff;
        transition: all 0.5s;
    }

    .skill-img p {
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 100;
        font-size: 1.6rem;
        color: #fff;
        text-transform: capitalize;
        text-align: center;
        margin-top: 0.5rem;
    }

    .work-right {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
        padding-left: 9rem;
    }

    .work-right__menu {
        position: relative;
        display: flex;
        justify-content: center;
        margin-bottom: 10rem;
    }

    .work-right__menu p {
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 400;
        font-size: 1.8rem;
        color: #12437e;
        text-align: center;
        margin-right: 6rem;
        cursor: pointer;
    }

    .work-right__view {
        position: relative;
        width: 57rem;
        height: 51rem;
    }

    .skill-contents {
        position: relative;
        display: block;
        top: 10rem;
        width: 100%;
        height: 30rem;
        padding-top: 2rem;
        border: 1px solid #fff;
        border-radius: 1rem;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;    
        }

    .skill-contents p {
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 100;
        line-height: 1.6;
        font-size: 2rem;
        color: #fff;
        text-align: left;
        padding: 1rem 2rem;
        word-break: keep-all;
    }

    .fade-enter-from {
        opacity: 0;
    }

    .fade-enter-active {
        transition: all 0.5s;
    }

    .fade-enter-to {
        opacity: 1;
    }

</style>
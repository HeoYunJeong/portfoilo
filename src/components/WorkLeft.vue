<template>
    <article class="skill">
        <div class="skill-container">
            <div class="skill-container__top">
                <div class="skill-img" @mouseenter="step = 0"><i class="fab fa-html5 fa-6x"
                        :class="{skill_focus: step == 0}"></i>
                </div>
                <div class="skill-img" @mouseenter="step = 1"><i class="fab fa-css3 fa-6x"
                        :class="{skill_focus: step == 1}"></i>
                </div>
                <div class="skill-img jquery" @mouseenter="step = 2"><svg :class="{skill_focus: step == 2}"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35">
                        <path
                            d="M2.144 7.705c-2.83 4.07-2.48 9.364-.316 13.7.05.104.105.206.158.308l.1.195c.02.038.042.075.063.112.037.07.075.134.113.202l.207.354.118.194.24.375.102.158c.113.168.228.336.347.5l.068.092a16.39 16.39 0 0 0 .316.42l.12.152.292.36.112.134c.133.157.27.313.407.465.014.015.02.02.024.026a20.44 20.44 0 0 0 .414.436l.133.134.33.324.135.13a16.98 16.98 0 0 0 .453.412l.496.42.17.136.343.268.183.14.385.276.18.127c.123.085.248.166.374.247l.162.108a20.81 20.81 0 0 0 .585.358l.162.1.44.246c.08.043.162.084.243.125l.314.163.073.035.13.062.498.23.105.047a17.83 17.83 0 0 0 .581.241l.14.056.548.203.07.024a21.72 21.72 0 0 0 .61.2l.148.044c.2.063.416.14.63.178 13.694 2.497 17.67-8.23 17.67-8.23-3.34 4.352-9.27 5.5-14.9 4.222-.213-.048-.42-.114-.627-.176l-.156-.047a18.62 18.62 0 0 1-.604-.197l-.083-.03a20.87 20.87 0 0 1-.532-.197l-.15-.06a15.16 15.16 0 0 1-.575-.24l-.115-.05-.485-.226-.14-.067c-.126-.06-.25-.127-.375-.2l-.25-.13c-.152-.08-.3-.166-.45-.252l-.152-.085a21.76 21.76 0 0 1-.585-.358c-.053-.034-.105-.07-.158-.105l-.416-.277c-.046-.03-.1-.064-.134-.094l-.394-.285-.175-.132-.355-.278-.158-.127-.442-.373a.73.73 0 0 0-.05-.04l-.465-.423-.13-.126-.332-.33-.13-.13c-.14-.143-.276-.287-.4-.434-.007-.007-.014-.014-.02-.022a16.98 16.98 0 0 1-.416-.474l-.1-.13-.3-.37-.1-.137-.346-.46C2.982 15.6 1.86 9.722 4.354 4.902m6.58-.625c-2.048 2.947-1.937 6.9-.34 10.008a13.06 13.06 0 0 0 .906 1.512c.307.44.647.963 1.054 1.316.148.163.302.32.46.477l.12.12a13.41 13.41 0 0 0 .469.436c.007.005.012.012.02.017.182.16.366.3.553.458l.124.097a13.46 13.46 0 0 0 .574.419l.017.012c.086.06.174.115.262.173.042.027.082.056.124.082a11.64 11.64 0 0 0 .425.26l.06.035.376.2c.044.025.1.046.134.07l.263.136c.013.007.027.012.04.018a11.39 11.39 0 0 0 .548.255l.12.05a14.16 14.16 0 0 0 .45.182l.192.07a14.26 14.26 0 0 0 .413.143l.187.06c.197.06.4.14.597.173 10.573 1.752 13.014-6.4 13.014-6.4-2.2 3.17-6.46 4.68-11.008 3.5a13.06 13.06 0 0 1-.599-.173c-.06-.018-.12-.038-.18-.058l-.42-.144-.2-.07a15.08 15.08 0 0 1-.45-.182l-.122-.05a12.58 12.58 0 0 1-.552-.256l-.277-.14-.16-.082a13.16 13.16 0 0 1-.35-.197l-.084-.047a12.34 12.34 0 0 1-.424-.26c-.043-.027-.085-.057-.128-.085l-.275-.182a13.24 13.24 0 0 1-.57-.418l-.13-.1c-2-1.572-3.568-3.72-4.318-6.154-.786-2.525-.617-5.36.745-7.66m5.732-.183C17.12 3.5 17 5.698 17.838 7.66c.883 2.083 2.693 3.716 4.806 4.5l.262.1.116.036.377.1c5.838 1.128 7.42-2.996 7.843-3.603-1.387 1.997-3.718 2.476-6.578 1.782-.226-.055-.474-.137-.692-.214a8.46 8.46 0 0 1-.822-.341 8.5 8.5 0 0 1-1.441-.879C19.15 7.2 17.56 3.486 19.23.47" />
                    </svg>
                </div>
                <div class="skill-img" @mouseenter="step = 3"><i class="fab fa-js fa-6x"
                        :class="{skill_focus: step == 3}"></i>
                </div>
            </div>
            <div class="skill-container__bottom">
                <div class="skill-img" @mouseenter="step = 4"><i class="fab fa-vuejs fa-6x"
                        :class="{skill_focus: step == 4}"></i>
                </div>
                <div class="skill-img" @mouseenter="step = 5"><i class="fab fa-sass fa-6x"
                        :class="{skill_focus: step == 5}"></i>
                </div>
                <div class="skill-img photoshop" @mouseenter="step = 6"><svg :class="{skill_focus: step == 6}"
                        version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 17.469 17.469"
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
                </div>
                <div class="skill-img illustrator" @mouseenter="step = 7"><svg :class="{skill_focus: step == 7}"
                        version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16.871 16.871"
                        style="enable-background:new 0 0 16.871 16.871;" xml:space="preserve">
                        <path
                            d="M6.847,5.772H6.822c-0.127,0.511-0.254,1.16-0.395,1.657L5.917,9.25h1.898L7.28,7.429C7.128,6.919,6.975,6.283,6.847,5.772z" />
                        <path
                            d="M15.837,0H1.033C0.462,0,0,0.462,0,1.033v14.805c0,0.57,0.462,1.033,1.033,1.033h14.805c0.57,0,1.033-0.463,1.033-1.033V1.033C16.871,0.463,16.408,0,15.837,0z M8.758,12.905l-0.663-2.203H5.638l-0.612,2.203H3.014l2.624-8.583h2.546l2.663,8.583H8.758z M13.793,12.905h-1.937V6.678h1.937V12.905z M12.813,5.914c-0.611,0-1.019-0.434-1.007-0.969c-0.012-0.561,0.396-0.979,1.021-0.979c0.623,0,1.018,0.419,1.03,0.979C13.857,5.48,13.45,5.914,12.813,5.914z" />
                    </svg>
                </div>
            </div>
        </div>
        <div class="skill-separation"></div>
        <div class="skill-contents">
            <transition-group name="fade">

                <div v-if="step == 0">
                    <p><strong>HTML5</strong><br>웹 표준, 웹 접근성, Cross Browsing, Semantic Markup 규격에 대해 깊이
                        이해하고 있습니다. 디자인 구성
                        요소들이 어떤 의미를 가지고 어떻게 쓰이는지 해석하고 구조화할 수 있습니다.</p>
                </div>
                <div v-if="step == 1">
                    <p><strong>CSS3</strong><br>Cascading의 원리를 이해하고 있으며, 미디어 쿼리를 통한 반응형 웹 제작이 가능합니다. 확장성,
                        재활용성을 고려한 css 설계를 지향합니다. 부트스트랩과 같은 라이브러리를 활용하여 개발 시간과 코드 길이를 효율적으로 단축할 수 있습니다.
                    </p>
                </div>
                <div v-if="step == 2">
                    <p><strong>jQuery</strong><br>기존 jQuery로 작성된 코드를 읽고 해석할 줄 알며, jQuery를 활용하여 간단한
                        DOM 조작과 ui 애니메이션을 구현할 수 있습니다.
                    </p>
                </div>
                <div v-if="step == 3">
                    <p><strong>Javascript</strong><br>Javascript의 기본 문법과 이벤트 버블링과 같은 동작의 원리에 대해 이해하고 있으며
                        현재 온라인 교육 프로그램을 통해 꾸준히 학습하고 있습니다.
                    </p>
                </div>
                <div v-if="step == 4">
                    <p><strong>Vue.js</strong><br>Vue.js의 Data Binding과 Component, Router 등의 문법을 활용하여
                        간단한 웹사이트 제작이 가능합니다. 현재 온라인 교육 프로그램을 통해 꾸준히 학습하고 있습니다.</p>
                </div>
                <div v-if="step == 5">
                    <p><strong>Sass</strong><br>Sass를 사용하여 반복된 코드를 최소화하고 명시적으로 깔끔한 css 코드를 작성할 수 있습니다.
                    </p>
                </div>
                <div v-if="step == 6">
                    <p><strong>Photoshop</strong><br>시안을 바탕으로 마크업 설계를 할 수 있습니다. 또한 기본 툴을 활용한 광고 배너 제작,
                        사진 편집이 가능합니다.
                    </p>
                </div>
                <div v-if="step == 7">
                    <p><strong>Illustrater</strong><br>기본 툴을 활용한 폰트와 캐릭터 제작이 가능합니다. </p>
                </div>
            </transition-group>
        </div>
    </article>
</template>

<script>
    export default {
        name: 'WorkLeft',
        data() {
            return {
                step: 0,
            }
        },
    }
</script>

<style scoped>
    /* 스킬 박스 */

    .skill {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .skill-container,
    .skill-contents {
        position: relative;
        display: block;
        width: 80%;
        padding: 2.5rem;
        border: 1px solid rgba(255, 255, 255, 0.7);
        border-radius: 3rem;
        box-shadow: 1.5rem 1.5rem rgba(255, 255, 255, 0.7);
        animation: shadow-pop-br 1s;

    }

    @keyframes shadow-pop-br {
        0% {
            box-shadow: 0 0 rgba(255, 255, 255, 0.3);
            opacity: 0;
        }

        100% {
            box-shadow: 15px 15px rgba(255, 255, 255, 0.7);
            opacity: 1;
        }
    }




    .skill-container__top,
    .skill-container__bottom {
        position: relative;
        display: flex;
        justify-content: space-around;
        align-content: center;
    }

    .skill-container__bottom {
        margin-top: 2.5rem;
    }

    .skill_focus {
        color: #fff !important;
        fill: #fff !important;
    }

    .skill-img {
        width: 6rem;
        height: 6rem;
        cursor: pointer;
        text-align: center;
    }

    .skill-img i {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        font-size: 6rem;
        color: rgba(255, 255, 255, 0.3);
    }

    .skill i:hover {
        color: #fff;
        transition: color 0.5s ease-in-out;
        animation: rotate-vert-center 0.5s;
    }

    @keyframes rotate-vert-center {
        0% {
            transform: rotateY(0);
        }

        100% {
            transform: rotateY(360deg);
        }
    }

    .skill-img svg {
        fill: rgba(255, 255, 255, 0.3);
    }


    .skill-img:hover svg {
        fill: #fff;
        transition: fill 0.5s ease-in-out;
        animation: rotate-vert-center 0.5s;
    }

    @keyframes rotate-vert-center {
        0% {
            transform: rotateY(0);
        }

        100% {
            transform: rotateY(360deg);
        }
    }

    /* 구분선 */

    .skill-separation {
        position: relative;
        display: block;
        background: rgba(255, 255, 255, 0.1);
        width: 80%;
        height: 0.5rem;
        margin-top: 5.5rem;
        border-radius: 0.5rem;
    }

    /* 스킬 설명 */

    .skill-contents {
        height: 30rem;
        margin-top: 4rem;

    }

    .skill-contents p {
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 100;
        line-height: 1.6;
        font-size: 2rem;
        color: #fff;
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

        /* workleft 영역 반응형 : 1024px */
    @media screen and (max-width:1024px) {

    .skill-img {
        width: 3.5rem;
        height: 3.5rem;
    }

    .skill-img i {
        font-size: 4rem;
    }

        .skill-contents {
        height: 25rem;
    }

    .skill-contents p {
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 100;
        line-height: 1.8;
        font-size: 1.4rem;
        color: #fff;
        word-break: keep-all;
    }

    }
</style>
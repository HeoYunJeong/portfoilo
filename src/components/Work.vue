<template>
    <section class="work">
        <div class="container">
            <article class="work-left">
                <h4 class="work-left__title">hard skill</h4>
                <WorkLeft />
            </article>
            <article class="work-right">
                <div class="work-right__menu">
                    <p @click="showPub" :class="{work_right_focus: pubShow==true}">퍼블리싱</p>
                    <p @click="showDes" :class="{work_right_focus: designShow==true}">디자인</p>
                </div>
                <div class="work-right__view">
                    <Publishing v-if="pubShow==true" />
                    <Design v-if="designShow==true" />
                </div>
            </article>
        </div>
    </section>
</template>

<script>
    import Publishing from '../components/WorkPub.vue';
    import Design from '../components/WorkDesign.vue';
    import WorkLeft from '../components/WorkLeft.vue';


    export default {
        name: 'work',
        props: {},
        components: {
            Publishing,
            Design,
            WorkLeft,
        },
        data() {
            return {
                pubShow: true,
                designShow: false,
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

    .work {
        position: relative;
        display: block;
        width: 100%;
    }

    .work .container {
        justify-content: space-between;
    }

    .work-left {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 40%;
        margin-left: 6rem;
        margin-right: 6rem;
    }

    /* Hard skill word */

    .work-left__title {
        font-family: 'Playfair Display', serif;
        font-weight: 400;
        font-size: 1.8rem;
        text-align: center;
        margin-bottom: 3rem;
        transform: scale(1, 0.9);
        color: #fff;
        text-transform: uppercase;
    }

    /* work 오른쪽 */
    .work-right {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 45%;
        height: 65rem;
        margin-left: 6rem;
    }


    .work-right__menu {
        position: relative;
        display: flex;
        justify-content: center;
        margin-bottom: 6rem;
    }

    .work-right__menu p {
        width: 15%;
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 400;
        font-size: 1.8rem;
        color: #12437e;
        text-align: center;
        margin-right: 9rem;
        cursor: pointer;
    }

    .work-right__menu p:last-child {
        margin-right: 0rem;
    }

    .work_right_focus {
        /* background: #12437e;
        color: #fff !important;
        border-radius: 0.5rem;
        text-decoration: underline; */
        text-underline-position: under;
        text-decoration: solid underline rgba(18, 67, 126, 0.8) 0.5rem;
        transition: all 1s;
    }

    .work-right__view {
        width: 100%;
        height: 55rem;
        border: 1px solid #12437e;
        border-radius: 3rem;
        box-shadow: 1.5rem 1.5rem rgba(18, 67, 126, 0.8);
        padding-top: 5rem;
        animation: shadow-pop-br 1s;
    }

    @keyframes shadow-pop-br {
        0% {
            box-shadow: 0 0 rgba(18, 67, 126, 0.3);
            opacity: 0;
        }

        100% {
            box-shadow: 15px 15px rgba(18, 67, 126, 0.8);
            opacity: 1;
        }
    }

    .swiper {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        padding-bottom: 6rem;
    }

    .swiper .swiper-slide {
        display: block;
        border-radius: 5rem;
    }

    /* .swiper .swiper-slide a {
        position: relative;
        display: block;
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 500;
        font-size: 1.8rem;
        text-align: center;
        padding-top: 10rem;
        text-decoration: none;
        color: #fff;
    } */

    /* work 영역 반응형 : 1024px */
    @media screen and (max-width:1024px) {

        .work-left {
            margin-right: 0rem;
            justify-content: center;
        }

        .work-left__title {
            font-size: 1.6rem;
        }

        /* work 오른쪽 반응형 1024 */
        .work-right {
            width: 45%;
            height: 50rem;
            margin-left: 0rem;
            display: flex;
            justify-content: center;
        }

        .work-right__menu {
            width: 85%;
            margin-bottom: 3rem;
        }

        .work-right__menu p {
            font-size: 1.4rem;
            margin-right: 3rem;
        }

        .work-right__menu p:last-child {
            margin-right: 0rem;
            font-size: 1.4rem;

        }

        .work-right__view {
            width: 85%;
            height: 40rem;
            border: 1px solid #12437e;
            border-radius: 3rem;
            box-shadow: 1.5rem 1.5rem rgba(18, 67, 126, 0.8);
            padding-top: 5rem;
            animation: shadow-pop-br 1s;
        }

    }
</style>
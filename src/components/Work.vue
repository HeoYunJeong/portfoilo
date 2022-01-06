<template>
    <section class="work">
        <div class="container">
            <article class="work-left">
                <h4 class="work-left__title">hard skill</h4>
                <WorkLeft />
            </article>
            <article class="work-right">
                <div class="work-right__menu">
                    <span @click="showPro" :class="{work_right_focus: projectsShow==true}">Projects</span>
                    <span @click="showDes" :class="{work_right_focus: designShow==true}">Design</span>
                </div>
                <div class="work-right__view">
                    <Projects v-if="projectsShow==true" />
                    <Design v-if="designShow==true" />
                </div>
            </article>
        </div>
    </section>
</template>

<script>
    import Projects from './WorkProjects.vue';
    import Design from '../components/WorkDesign.vue';
    import WorkLeft from '../components/WorkLeft.vue';


    export default {
        name: 'work',
        props: {},
        components: {
            Projects,
            Design,
            WorkLeft,
        },
        data() {
            return {
                projectsShow: true,
                designShow: false,
            }
        },
        methods: {
            showPro() {
                if (this.projectsShow == false) {
                    this.projectsShow = true
                    this.designShow = false
                }
            },
            showDes() {
                if (this.designShow == false) {
                    this.designShow = true
                    this.projectsShow = false
                }
            },
        },
    }
</script>

<style scoped>
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
        margin-bottom: 3rem;
    }

    .work-right__menu span {
        width: 15%;
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 400;
        font-size: 1.8rem;
        color: #12437e;
        text-align: center;
        margin-right: 9rem;
        cursor: pointer;
    }

    .work-right__menu span:last-child {
        margin-right: 0rem;
    }

    .work_right_focus {
        position: relative;
    }

    .work_right_focus::after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: -.5rem;
        transform: translateX(-50%);
        width: 70%;
        height: .5rem;
        background: rgba(18, 67, 126, 0.8);
        animation: fadeIn .5s ease;
    }

    .work_right_focus:last-child:after {
        width: 60%;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
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

    .swiper-container .swiper-button-prev {
        color: pink;
    }

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
            width: 90%;
            margin-bottom: 3rem;
        }

        .work-right__menu span {
            font-size: 1.4rem;
            margin-right: 3rem;
        }

        .work-right__menu span:last-child {
            margin-right: 0rem;
            font-size: 1.4rem;

        }

        .work-right__view {
            width: 90%;
            height: 40rem;
            border: 1px solid #12437e;
            border-radius: 3rem;
            box-shadow: 1.5rem 1.5rem rgba(18, 67, 126, 0.8);
            padding-top: 5rem;
            animation: shadow-pop-br 1s;
        }
    }

        /* work 반응형 768px */

    @media screen and (max-width: 768px) {

        .work-right__menu {
            margin-top: 3rem;
            width: 90%;
            margin-bottom: 3rem;
        }

        .work-right__menu span {
            width: 50%;
            margin-right: 0;
            font-size: 1.6rem;
            color: #12437e;
            text-align: center;
            cursor: pointer;
        }

        .work-right__menu span:last-child {
            margin-right: 0rem;
            font-size: 1.6rem;
        }

        .work_right_focus {
            margin: 0;
        }

}

    /* work 반응형 425px */

    @media screen and (max-width: 425px) {

        .work-left {
            width: 100%;
            margin: 0rem;
            background: #12437e;
            padding-bottom: 3rem;
        }

        .work-left__title {
            font-size: 1.5rem;
        }

        /* work 오른쪽 반응형 425px */
        .work-right {
            width: 100%;
            height: 60rem;
            align-items: center;
            padding-bottom: 3rem;
        }

        .work-right__menu span {
            width: 40%;
            font-size: 1.8rem;
            color: #12437e;
            text-align: center;
            cursor: pointer;
        }

        .work-right__menu span:last-child {
            margin-right: 0rem;
            font-size: 1.8rem;
        }

        .work-right__view {
            height: 45rem;
        }
    }
</style>
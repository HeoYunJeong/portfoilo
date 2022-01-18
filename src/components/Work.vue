<template>
    <section class="work">
        <div class="container">
            <article class="work-right">
                <p class="work-right__menu">Projects</p>
                <div class="work-right__view">
                    <Projects />
                </div>
            </article>
        </div>
    </section>
</template>

<script>
    import Projects from './WorkProjects.vue';
    // import WorkLeft from '../components/WorkLeft.vue';


    export default {
        name: 'work',
        props: {},
        components: {
            Projects,
            // WorkLeft,
        },
        data() {

        },
        methods: {},
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
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        align-items: center;
    }

    /* work 오른쪽 */
    .work-right {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 70%;
        height: 65rem;
    }


    .work-right__menu {
        position: relative;
        width: 15rem;
        height: 3.5rem;
        margin: 0 auto;
        margin-bottom: 3rem;
        letter-spacing: .1rem;
        line-height: 1.8;
        font-weight: 700;
        font-size: 1.6rem;
        text-align: center;
        color: #12437e;
        text-transform: uppercase;
        border: 1.5px solid #12437e;
        border-radius: 1rem;
        background: #fff;
    }

    .work-right__menu::after {
        content: '';
        display: block;
        position: absolute;
        left: 50%;
        bottom: -1.2rem;
        transform: translateX(-50%);
        width: 90%;
        height: .7rem;
        background: #cdc3c8;
        opacity: 0.7;
        animation: to-right-slide 1s;
    }

    @keyframes to-right-slide {
        0% {
            width: 0%;
            left: 5%;
        }

        100% {
            width: 90%;
            left: 50%;
        }

    }

    .work-right__view {
        width: 100%;
        height: 55rem;
        border: 1px solid #cdc3c8;
        border-radius: 5rem;
        box-shadow: 1.5rem 1.5rem rgba(205, 195, 200, 0.9);
        padding-top: 3rem;
        background: #fff;
        animation: shadow-pop-br 1s;
    }

    @keyframes shadow-pop-br {
        0% {
            box-shadow: 0 0 rgba(205, 195, 200, 0.3);
            opacity: 0;
        }

        100% {
            box-shadow: 15px 15px rgba(205, 195, 200, 0.9);
            opacity: 1;
        }
    }


    /* work 영역 반응형 : 1024px */
    @media screen and (max-width:1024px) {

        .work-right {
            width: 45%;
            height: 50rem;
            margin-left: 0rem;
            display: flex;
            justify-content: center;
        }

        .work-right__menu {
            width: 90%;
        }

        .work-right__menu span {
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

    }

    /* work 반응형 425px */

    @media screen and (max-width: 425px) {

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


        .work-right__view {
            height: 45rem;
        }
    }
</style>
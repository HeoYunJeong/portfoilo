<template>
    <section class="work">
        <div class="container">
            <article class="work-left">
                <h4 class="work-left__title">hard skill</h4>
                <WorkLeft />
            </article>
            <article class="work-right">
                <div class="work-right__menu">
                    <p @click="showPub">퍼블리싱</p>
                    <p @click="showDes">디자인</p>
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
        justify-content: space-between;
        width: 45%;
        height: 66rem;
        margin-left: 6rem;
    }

    .work-right__menu {
        position: relative;
        display: flex;
        justify-content: space-around;
        margin-bottom: 3rem;
    }

    .work-right__menu p {
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 400;
        font-size: 1.8rem;
        color: #12437e;
        text-align: center;
        cursor: pointer;
    }

    .work-right__view{
        width: 100%;
        height: 55rem;
    }

    .swiper {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        padding-bottom: 5rem;
    }

    .swiper .swiper-slide {
        display: block;
        border-radius: 5rem;
    }

    .swiper .swiper-slide p {
        position: relative;
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 500;
        font-size: 1.8rem;
        color: #fff;
        text-align: center;
        padding-top: 10rem;
        text-decoration: none;
    }

        .swiper .swiper-slide p a {
            color: #fff;
        }
</style>
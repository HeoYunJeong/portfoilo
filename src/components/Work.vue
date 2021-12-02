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
                            <div class="skill-img"><img src="../assets/html5-icon.png" alt="html5-icon">
                                <p>html5</p>
                            </div>
                            <div class="skill-img"><img src="../assets/css3-icon.png" alt="css3-icon">
                                <p>css3</p>
                            </div>
                            <div class="skill-img"><img src="../assets/jquery-icon.png" alt="jquery-icon">
                                <p>jquery</p>
                            </div>
                            <div class="skill-img"><img src="../assets/js-icon.png" alt="js-icon">
                                <p>javascript</p>
                            </div>
                        </div>
                        <div class="skill-container__bottom">
                            <div class="skill-img"><img src="../assets/vuejs-icon.png" alt="vue-icon">
                                <p>vue.js</p>
                            </div>
                            <div class="skill-img"><img src="../assets/sass-icon.png" alt="sass-icon">
                                <p>sass</p>
                            </div>
                            <div class="skill-img"><img src="../assets/photoshop-icon.png" alt="photoshop-icon">
                                <p>photoshop</p>
                            </div>
                            <div class="skill-img"><img src="../assets/illustrator-icon.png" alt="illustrator-icon">
                                <p>illustrator</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="work-right">
                    <div class="work-right__menu">
                        <p @click="showPub">퍼블리싱</p>
                        <p @click="showDes">디자인</p>
                    </div>
                    <div class="work-right__view">
                        <Publishing v-if="pubShow==true"/>
                        <Design v-if="designShow==true"/>
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
            }
        },
        methods : {
            showPub(){
                if(this.pubShow == false){
                    this.pubShow = true
                    this.designShow = false
                }  
            },
            showDes(){
                if(this.designShow == false){
                    this.designShow = true
                    this.pubShow = false
                }  
            },
        },
    }
</script>

<style>
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

    .skill-img {
        width: 5rem;
        height: 5rem;
    }

    .skill-img img {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        background-size: contain;
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
</style>
<template>
    <div class="mainPage">
        <div class="wrap">
            <section class="main ">
                <div class="main-left">
                    <h1>&#60; GitHub &#62;</h1>
                    <h3> If you interested in my works, Please click on the GitHub icon&#160;&#160;<i
                            class="far fa-laugh-beam"></i></h3>
                    <a href="https://github.com/HeoYunJeong" target="_blank"><i class="fab fa-github-square fa-9x"></i></a>
                </div>
                <div class="main-right">

                    <h1>&#60; kakaotalk Open Chat &#62;</h1>
                    <h3>Please feel free to contact me at any time&#160;&#160;<i
                            class="far fa-laugh-beam"></i></h3>
                    <div class="main-right__img">
                        <!-- <img src="../assets/QRcode.jpg" alt="qr코드"> -->
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        // name: Contact,
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

    .main {
        position: relative;
        display: flex;
        padding-top: 6rem;
        width: 100%;
        height: 100vh;
    }

    .main h1 {
        font-family: 'Playfair Display', serif;
        font-weight: 700;
        transform: scale(1, 0.9);
        color: #383437;
        margin-top: -6rem;
        margin-bottom: 2rem;
    }

    .main h3 {
        /* font-family: 'Playfair Display', serif; */
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 400;
        /* transform: scale(1, 0.9); */
        color: #675f65;
        margin-bottom: 5rem;
    }

    .main-left {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
        padding-right: 9rem;
    }

    .main-left h1 {
        color: #fff;
    }

    .main-left i {
        font-size: 40rem;
        color: #fff;
    }

    .main-left h3 {
        font-weight: 100;
        color: #fff;
    }

    .main-left h3 > i {
        font-size: 2.7rem;
        color: #fff;
    }

    .main-right {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
        padding-left: 9rem;
    }


    .main-right i {
        font-size: 2.7rem;
    }

    .main-right__img {
        position: relative;
        display: block;
        /* border: 3px solid #cdc3c8; */
        width: 40rem;
        height: 40rem;
        /* border-radius: 2rem; */
        background: url(../assets/QRcode.jpg) no-repeat center;
        background-size: 40rem;
    }

    /* .main-right img {
        position: relative;
        display: block;
        width: 40rem;
    } */
</style>
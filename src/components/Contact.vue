<template>
    <div class="mainPage">
        <div class="wrap">
            <section class="contact">
                <div class="contact-left">
                    <h1 class="title left-title">&#60; GitHub &#62;</h1>
                    <p class="messege left-messege"> If you interested in my works, Please click on the GitHub icon&#160;
                        <i class="far fa-laugh-beam"></i></p>
                    <div class="github-img">
                        <a href="https://github.com/HeoYunJeong" target="_blank"><i
                                class="fab fa-github-square"></i></a>
                    </div>
                </div>
                <div class="contact-right">
                    <h1 class="title right-title">&#60; kakaotalk Open Chat &#62;</h1>
                    <p class="messege right-messege">Please feel free to contact me at any time&#160;
                        <i class="far fa-laugh-beam"></i></p>
                    <div class="qrcode__img">
                    </div>
                    <p class="thank-messege">Thank you for taking time out of your busy schedule to read my portfolio.
                    </p>
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

    .contact {
        position: relative;
        display: flex;
        padding-top: 6rem;
        width: 100%;
        height: 100vh;
    }

    .contact-left {
        position: relative;
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
        width: 50%;
        padding-right: 9rem;
    }

    .title {
        position: relative;
        font-family: 'Playfair Display', serif;
        font-weight: 700;
        transform: scale(1, 0.9);
        color: #fff;
    }

    .left-title {
        position: relative;
        margin-top: 16rem;
    }


    .messege {
        /* font-family: 'Playfair Display', serif; */
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 100;
        font-size: 1.8rem;
        /* transform: scale(1, 0.9); */
        color: #fff;
    }

    .left-messege {
        margin-top: 1rem;
        margin-bottom: 10rem;
    }

    .messege i {
        font-size: 2.5rem;
        color: #fff;
    }

    .github-img {
        position: relative;
        display: block;
    }

    .github-img i {
        font-size: 30rem;
        color: #fff;
        transition: all 0.5s;
    }

    .github-img i:hover {
        font-size: 40rem;
        transform: translateY(-5rem);
    }

    .contact-right {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
        padding-left: 9rem;
    }

    .right-title {
        color: #383437;
    }

    .right-messege,
    .right-messege i {
        font-weight: 400;
        color: #675f65;
    }

    .qrcode__img {
        position: relative;
        display: block;
        /* border: 3px solid #cdc3c8; */
        width: 40rem;
        height: 40rem;
        /* border-radius: 2rem; */
        background: url(../assets/QRcode.jpg) no-repeat center;
        background-size: 40rem;
        /* margin-bottom: 3rem; */
    }

    .thank-messege {
        /* font-family: 'Playfair Display', serif; */
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 700;
        font-size: 2.5rem;
        /* transform: scale(1, 0.9); */
        color: #12437e;
        /* margin-bottom: 5rem; */
        text-align: center;
    }
</style>
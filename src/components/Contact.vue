<template>
    <section class="contact">
        <div class="container">
            <article class="contact-left">
                <h1 class="title left-title">&#60; GitHub &#62;</h1>
                <p class="messege left-messege"> If you interested in my works, <br>Please click on the GitHub
                    icon&#160;
                    <i class="far fa-laugh-beam"></i></p>
                <div class="github-img">
                    <a href="https://github.com/HeoYunJeong" target="_blank"><i class="fab fa-github-square"></i></a>
                </div>
            </article>
            <article class="contact-right">
                <h1 class="title right-title">&#60; kakaotalk Open Chat &#62;</h1>
                <p class="messege right-messege">Please feel free to contact me at any time&#160;
                    <i class="far fa-laugh-beam"></i></p>

                <a href="https://open.kakao.com/o/szHWNSMd" target="_blank">
                    <div class="qrcode__img"></div>
                </a>

                <p class="thank-messege">Thank you for taking time out of your <br>busy schedule to read my portfolio.
                </p>
            </article>
        </div>
    </section>
</template>

<script>
    export default {
        // name: Contact,
    }
</script>

<style>
    .contact {
        position: relative;
        display: block;
        width: 100%;
    }

    .contact-left {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        padding-right: 9rem;
        animation: slide-right 1s;
    }

    @keyframes slide-right {
        0% {
            opacity: 0;
            transform: translateX(-10rem);
        }

        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .title {
        position: relative;
        font-size: 2.5rem;
        font-family: 'Playfair Display', serif;
        font-weight: 700;
        transform: scale(1, 0.9);
        color: #fff;
        margin-bottom: 1rem;
    }

    .messege {
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 100;
        font-size: 1.8rem;
        color: #fff;
    }

    .left-messege {
        text-align: center;
        margin-bottom: 6rem;
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
        font-size: 35rem;
        transform: translateY(-5rem);
    }

    .contact-right {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        width: 50%;
        padding-left: 9rem;
        animation: slide-left 1s;
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
        width: 40rem;
        height: 40rem;
        background: url(../assets/QRcode.jpg) no-repeat center;
        background-size: 40rem;
    }

    @keyframes slide-left {
        0% {
            opacity: 0;
            transform: translateX(10rem);
        }

        100% {
            opacity: 1;
            transform: translateX(0rem);
        }
    }


    .thank-messege {
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 700;
        font-size: 2.5rem;
        color: #12437e;
        text-align: center;
    }

    /* contact 영역 반응형 : 1024px */
    @media screen and (max-width:1024px) {

        .contact .container {
            justify-content: space-between;
        }

        .contact-left {
            padding-right: 0rem;
            margin-left: 0rem;
        }

        .title {
            font-size: 1.8rem;
        }

        .messege {
            font-size: 1.4rem;
        }

        .left-messege {
            margin-bottom: 3rem;
        }

        .messege i {
            font-size: 2.5rem;
        }

        .github-img i {
            font-size: 25rem;
        }

        .github-img i:hover {
            font-size: 30rem;
        }

        /* 컨택트 오른쪽 반응형 1024 */

        .contact-right {
            padding-left: 0rem;
        }

        .qrcode__img {
            width: 30rem;
            height: 30rem;
            background-size: 25rem;
        }

        .thank-messege {
            font-family: 'Noto Sans KR', sans-serif;
            font-weight: 700;
            font-size: 1.8rem;
            color: #12437e;
            text-align: center;
        }

    }
</style>
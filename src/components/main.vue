<template>
    <section class="main">
        <div class="container">
            <div class="main-left">
                <div class="main-text">
                    <img src="../assets/main-text.png" alt="positive-waves">
                </div>
                <div class="intro">
                    <p>I'm<br>web publisher<br>front-end developer<br>Heo Yun Jeong</p>
                </div>
            </div>
            <div class="main-right">
                Main image
                <!-- <img src="../assets/main-img.png" alt="main-img"> -->
            </div>
        </div>
    </section>
</template>

<script>
    export default {

    }
</script>

<style>
    .main {
        position: relative;
        display: block;
        width: 100%;
    }

    .main-left {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        width: 50%;
    }

    .intro {
        position: relative;
        display: block;
        margin-top: 7rem;
        padding-right: 6rem;
    }

    .intro p {
        text-align: right;
        font-size: 1.8rem;
        font-family: 'Playfair Display', serif;
        line-height: 2.5rem;
        letter-spacing: 0.001em;
        transform: scale(1, 0.9);
        text-decoration: underline;
        text-underline-position: under;
        color: #fff;
    }

    .main-right {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
        height: 50rem;
        font-size: 0;
        background: url('../assets/main-img.png') no-repeat center / contain;
    }

    /* main 영역 반응형 : 1024px */
    @media screen and (max-width:1024px) {

        .main .container {
            display: flex;
            justify-content: space-between;
        }

        .main-left {
            width: 40%;
            margin-left: 6rem;
            padding-right: 0rem;
        }

        .main-text img {
            width: 100%;
        }

        .intro {
            margin-top: 6rem;
            margin-bottom: 8rem;
            padding-right: 1rem;
        }

        .intro p {
            font-size: 1.4rem;
            line-height: 2.1rem;
        }

        .main-right {
            width: 40%;
            margin-right: 6rem;
            margin-left: 0rem;
        }
    }


    /* main 반응형 425px */
    @media screen and (max-width:425px) {

        .main-left {
            width: 100%;
            margin-left: 0rem;
            padding-left: 6rem;
        }
        .main-text {
            width: 70%;
        }

        .intro {
            margin-top: 3rem;
            margin-bottom: 0rem;
            padding-right: 0rem;
        }

        .intro p {
            text-align: left;
        }

        .main-right {
            width: 100%;
            height: 25rem;
            margin-top: 6rem;
            margin-right: 0rem;
        }
    }
</style>
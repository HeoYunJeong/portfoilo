<template>
    <div class="mainPage">
        <div class="wrap">
            <section class="main ">
                <div class="main-left">
                    <div class="main-text">
                        <img src="../assets/main-text.png" alt="positive-waves">
                    </div>
                    <div class="intro">
                        <p>I'm<br>web publisher<br>front-end developer<br>Heo Yun Jeong</p>
                    </div>
                </div>
                <div class="main-right">
                    <img src="../assets/main-img.png" alt="main-img">
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {

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
    padding-top: 12rem;
    width: 100%;
    height: 100vh;
}

.main-left {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    padding-right: 9rem;
}

.main-text{}
.main-text img{}

.intro {
    position: relative;
    display: block;
    margin-top: 7rem;
}
.intro p {
    margin: 0;
    text-align: right;
    font-size: 1.8rem;
    font-family: 'Playfair Display', serif;
    line-height: 2.5rem;
    letter-spacing: 0.001em;
    transform: scale(1, 0.9);
    text-decoration: underline;
    color: #fff;
}

.main-right {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    padding-left: 9rem;
}

.main-right img {
    width: 63rem;
}
</style>
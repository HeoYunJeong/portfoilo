<template>
    <footer class="footer">
        <div class="container">
            <div class="footer-left">
                <p>this &nbsp;portfolio &nbsp;made &nbsp;by &nbsp;vue.js</p>
            </div>
            <div class="footer-right">
                <div class="copy">
                    <span class="copy-title">COPYRIGHT</span>
                    <span> 2021. HEO YUN JEONG. ALL RIGHTS RESERVED.</span>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'footer',
        data() {
            return {

            }
        },
    }
</script>

<style>
    .footer {
        position: relative;
        display: flex;
        width: 100%;
        height: 6rem;
        z-index: 999;

    }

    .footer .container {
        align-items: center;
        height: 100%;
    }

    .footer-left {
        position: relative;
        display: block;
        width: 50%;
    }

    .footer-left p {
        font-family: 'Playfair Display', serif;
        font-weight: 500;
        color: #cdc3c8;
        font-size: 1.5rem;
        transform: scale(1, 0.9);
        text-transform: uppercase;
        letter-spacing: 0.05rem;
    }

    .footer-right {
        position: relative;
        display: flex;
        width: 50%;
        align-content: center;
        justify-content: flex-end;
    }

    .copy-title:after {
        content: ' \00A9';
    }

    .footer-right span {
        font-family: 'Playfair Display', serif;
        font-weight: 500;
        color: #675f65;
        font-size: 1.4rem;
        transform: scale(1, 0.9);
        letter-spacing: 0.05rem;

    }

    /* footer 영역 반응형 : 1024px */
    @media screen and (max-width:1024px) {
    .footer {
        height: 6rem;

    }

    .footer-left {
        display: flex;
        justify-content: center;
    }

    .footer-left p {
        font-size: 1.2rem;
    }

    .footer-right {
        position: relative;
        display: flex;
        width: 50%;
        align-content: center;
        justify-content: center;
    }

    .footer-right span {
        font-family: 'Playfair Display', serif;
        font-weight: 500;
        color: #675f65;
        font-size: 1.2rem;
        transform: scale(1, 0.9);
        letter-spacing: 0.05rem;

    }


    }
</style>
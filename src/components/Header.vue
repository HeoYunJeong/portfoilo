<template>
    <div class="header-wrap">
        <header class="header">
            <div class="container">
                <div class="header-left">
                    <router-link to="/" class="logo">logo</router-link>
                </div>
                <div class="header-right">
                    <ul class="menu">
                        <li>
                            <router-link to="/">Home</router-link>
                        </li>
                        <li>
                            <router-link to="/about">About</router-link>
                        </li>
                        <li>
                            <router-link to="/work">Works</router-link>
                        </li>
                        <li>
                            <router-link to="/contact">Contact</router-link>
                        </li>
                    </ul>
                    <div class="mb-menu-btn">
                        <button @click="snbOpen = true"><i class="fas fa-bars"></i></button>
                    </div>
                </div>
            </div>
        </header>
        <div class="black-bg" v-if="snbOpen == true">
            <div class="mb-menu">
                <button @click="snbOpen = false"><i class="fas fa-times close-btn"></i></button>
                <ul class="snb">
                    <li>
                        <router-link to="/">Home</router-link>
                    </li>
                    <li>
                        <router-link to="/about">About</router-link>
                    </li>
                    <li>
                        <router-link to="/work">Works</router-link>
                    </li>
                    <li>
                        <router-link to="/contact">Contact</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'header',
        data() {
            return {
                snbOpen: false,
            }
        },
    }
</script>

<style scoped>
    .header {
        position: relative;
        display: block;
        width: 100%;
        height: 9rem;
        z-index: 10;
    }

    .header-left,
    .header-right {
        position: relative;
        display: block;
        width: 50%;
    }

    .logo {
        position: absolute;
        left: 3rem;
        transform: translateY(25%);
        width: 6rem;
        height: 6rem;
        background: url('../assets/LOGO.png')no-repeat center;
        background-size: contain;
        font-size: 0;
        transition: .5s;

    }


    .menu {
        position: absolute;
        right: 3rem;
        top: 50%;
        transform: translateY(75%);
        display: flex;
        justify-content: space-between;
        width: 50rem;
        transition: .5s;
    }

    .menu li a {
        font-weight: 700;
        font-size: 2.6rem;
        transform: scale(1, 0.9);
        color: #12437e;
        transition: .5s;
    }

    .mb-menu-btn {
        position: absolute;
        right: 3rem;
        top: 50%;
        transform: translateY(50%);
        display: none;
        width: 4rem;
        height: 4rem;
    }

    .mb-menu-btn i {
        font-size: 4rem;
        color: #12437e;
        transition: .5s;
    }

    .black-bg {
        position: fixed;
        left: 0;
        top: 0;
        display: block;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.6);
        z-index: 999;
    }

    .mb-menu {
        position: absolute;
        right: 0;
        top: 0;
        width: 30rem;
        height: 100vh;
        background: #cdc3c8;
    }

    /* header 영역 반응형 : 1024px */
    @media screen and (max-width:1024px) {

        .logo {
            width: 5rem;
            height: 5rem;
        }

        .menu {
            width: 40rem;
        }

        .menu li a {
            font-size: 2rem;
            transform: scale(1, 0.9);
        }

    }

    @media screen and (max-width:768px) {

        .menu {
            width: 30rem;
        }

        .menu li a {
            font-size: 1.5rem;
            transform: scale(1, 0.9);
        }

        .menu li {
            font-size: 1.8rem;
            font-weight: 700;
        }
    }

    @media screen and (max-width:425px) {

        .header-wrap {
            height: 6rem;
        }

        .header {
            height: 6rem;
        }

        .header .container {
            flex-direction: row !important;
            height: 100%;
        }

        .header-left,
        .header-right {
            height: 100%;
        }

        .menu {
            display: none;
        }

        .logo {
            width: 4rem;
            height: 4rem;
        }

        .mb-menu-btn {
            display: block;
            width: 3rem;
            height: 3rem;
            transform: translateY(-50%);
        }

        .mb-menu-btn i {
            font-size: 3rem;
            color: #fff;
        }

        .snb,
        .close-btn {
            margin-top: 6rem;
            margin-left: 3rem;
            margin-right: 3rem;
        }

        .close-btn {
            font-size: 4rem;
            color: #675f65;
        }

        .snb li {
            border-bottom: 0.1rem solid #675f65;
        }

        .snb li:last-child {
            border-bottom: none;
        }

        .snb li a {
            font-size: 2rem;
            font-weight: 600;
            line-height: 6rem;
            /* padding-left: 1rem; */
            color: #383437;
            transform: scale(1, 0.9);
        }

    }
</style>
<template>
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
                <div class="sub-menu">
                    <button><i class="fas fa-bars"></i></button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header',
    }
</script>

<style scoped>
    .header {
        position: relative;
        display: block;
        width: 100%;
        height: 10rem;
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
        left: 4rem;
        top: 50%;
        transform: translateY(-50%);
        width: 6rem;
        height: 6rem;
        background: url('../assets/LOGO.png')no-repeat center;
        background-size: contain;
        font-size: 0;
    }

    .menu {
        position: absolute;
        right: 4rem;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        justify-content: space-between;
        width: 50rem;
        transition: .5s;
    }

    .menu li a {
        font-size: 2.6rem;
        color: #12437e;
        font-weight: 700;
        transition: .5s;
    }

    .sub-menu {
        position: absolute;
        right: 4rem;
        top: 50%;
        transform: translateY(-50%);
        display: none;
        width: 4rem;
        height: 4rem;
    }

    .sub-menu i {
        font-size: 4rem;
        color: #12437e;
        transition: .5s;
    }

    /* header 영역 반응형 : 768px */
    @media screen and (max-width:1024px) {
        .menu {
            width: 40rem;
        }

        .menu li a {
            font-size: 2rem;
        }
    }

    /* header 영역 반응형 : 768px */
    @media screen and (max-width:768px) {
        .menu li {
            font-size: 1.8rem;
            font-weight: 700;
        }

        .menu {
            display: none;
        }

        .sub-menu {
            display: block;
        }
    }

    /* header 영역 반응형 : 425px */
    @media screen and (max-width:425px) {
        .header {
            height: 6rem;
        }

        .logo {
            width: 4rem;
            height: 4rem;
        }

        .sub-menu {
            width: 3rem;
            height: 3rem;
        }

        .sub-menu i {
            font-size: 3rem;
            color: #FFF;
        }
    }
</style>
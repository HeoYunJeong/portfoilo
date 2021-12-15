<template>
    <header class="header">
        <div class="container">
            <div class="header-left">
                <a href="#" class="logo" @click="$router.push('/')"></a>
            </div>
            <div class="header-right">
                <ul class="menu">
                    <li @click="$router.push('/')"><a href="#">Home</a></li>
                    <li @click="$router.push('/about')"><a href="#">About</a></li>
                    <!-- <li><router-link to="/about">About</router-link></li> -->
                    <li @click="$router.push('/work')"><a href="#">Works</a></li>
                    <li @click="$router.push('/Contact')"><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'header',
        data() {
            return {

            }
        },
    }
</script>

<style>
    .header {
        position: relative;
        display: block;
        width: 100%;
        height: 9rem;
        z-index: 999;
    }

    .header .container {
        align-items: center;
        height: 100%;

    }

    .header-left {
        position: relative;
        display: block;
        width: 50%;
        float: left;
    }

    .logo {
        display: block;
        width: 6rem;
        height: 6rem;
        background: url('../assets/LOGO.png')no-repeat center;
        background-size: contain;
    }

    .header-right {
        position: relative;
        display: block;
        width: 50%;
        float: left;
    }

    .menu {
        position: relative;
        display: flex;
        justify-content: space-between;
        margin-left: 12rem;
    }

    .menu li {
        font-family: 'Playfair Display', serif;
        font-weight: 700;
        font-size: 2.6rem;
        transform: scale(1, 0.9);
    }

    .menu li a {
        display: block;
        text-decoration: none;
    }

    .menu a {
        color: #12437e;
    }

    /* header 영역 반응형 : 1024px */
    @media screen and (max-width:1024px) {
        .header {
            height: 6rem;
        }

        .logo {
            width: 5rem;
            height: 5rem;
            margin-left: 6rem;
        }

        .menu {
            margin-right: 6rem;
            margin-left: 3rem;
        }

        .menu li {
            font-size: 2rem;
            transform: scale(1, 0.9);
        }

    }
</style>
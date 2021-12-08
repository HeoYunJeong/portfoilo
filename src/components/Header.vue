<template>
    <div class="mainPage">
        <div class="wrap">
            <header class="header">
                <nav class="nav clearfix">
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
                </nav>
            </header>
        </div>
    </div>
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
        position: absolute;
        left: 0;
        top: 0;
        display: block;
        width: 100%;
        height: 12rem;
        z-index: 999;
    }

    .nav {
        position: relative;
        display: block;
        padding-top: 3rem;
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
        width: 72rem;
        justify-content: space-around;
        align-items: center;
        padding-left: 9rem;
        margin: 0 auto;
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
</style>
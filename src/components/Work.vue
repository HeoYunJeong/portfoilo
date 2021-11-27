<template>
        <div class="mainPage">
        <div class="wrap">
            <section class="work">
                <div class="work-left">
                </div>
                <div class="work-right">
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

.work {
    position: relative;
    display: flex;
    padding-top: 9rem;
    width: 100%;
    height: 100vh;
}

.work-left {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    padding-right: 9rem;
}

.work-right {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    padding-left: 9rem;
}
</style>
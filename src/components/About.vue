<template>
    <div class="mainPage">
        <div class="wrap">
            <section class="about">
                <div class="about-left">
                    <div class="about-left__title">
                        <h4>soft skill</h4>
                    </div>
                    <div class="about-left__intro"><img src="../assets/about-text.png"
                            alt="I’m a Positive Waves Surfer">
                    </div>
                    <div class="about-left__content">
                        <p>저는 상대의 감정을 헤아리는 <span>공감 능력</span>이 뛰어납니다.<br>상대방의 기술적 배경을 고려해 제 생각을 <span>조리 있게
                                설명</span>하고자 합니다.<br><span>건설적인 대화</span>를 위해 작은 토론도 <span>목적</span>과
                            <span>목표</span>를
                            분명히 합니다.</p>
                        <p>과대표, 평창올림픽 식음료팀 리더로서<span> 팀을 이끌어 보기도 하고</span><br>다양한 조직사회의 <span>팔로워</span>를 경험
                            했습니다.
                            <br>이를 통해 <span>건강한 커뮤니케이션의 메커니즘</span>에 대하여 <br>깊이 고민하고 이해했습니다.</p>
                        <p><span>소통의 주춧돌</span>은 <span>긍정과 존중</span>이라고 생각합니다.<br>이를
                            바탕으로한 <span>이해</span>로 <span>생산적인 소통</span>을 <span>시작</span>합니다. <br>앞선 통찰을
                            토대로
                            다른 직군과 원활히 협업하고 <br><span>함께 일하고 싶은 동료</span>가 되겠습니다.</p>
                    </div>
                </div>
                <div class="about-right">
                    <div class="about-right__left">
                        <div><img src="../assets/about-img-1.png" alt="photo1"></div>
                        <div class="personal-data">
                            <div class="personal-data__important">
                                <div class="important-name">
                                    <p class="personal-data__title important">name</p>
                                    <p>허윤정</p>
                                </div>
                                <div class="important-birth">
                                    <p class="personal-data__title important">birth</p>
                                    <p>1995.10.02</p>
                                </div>
                            </div>
                            <div class="personal-data__education">
                                <p class="personal-data__title">education</p>
                                <p>항공서비스전공<span>정화예술대학교 관광학부</span></p>
                                <p>PWA 제작 웹앱 프론트엔드 개발 양성과정<span>(주)지아이티아카데미 대구</span></p>
                            </div>
                            <div class="personal-data__certificate">
                                <p class="personal-data__title">certificate</p>
                                <p>항공 예약 발권 사무원 3급</p>
                                <p>바리스타 2급</p>
                                <p>운전면허 2종 보통</p>
                            </div>
                        </div>
                    </div>
                    <div class="about-right__right">
                        <div class="slogan">
                            <p class="slogan-title">작은 <span>긍정의 파도</span>가<br><span>큰 발전</span>을 이끈다고 믿습니다</p>
                            <p class="slogan-content">함께 익히고 함께 고민하고<br>함께 만들어가는 것이 개발이라고 생각합니다.<br>적극적으로 참여하고 사려깊게
                                경청하는<br>개발자 허윤정 입니다.</p>
                        </div>
                        <div><img src="../assets/about-img-2.png" alt="photo1"></div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'about',
    }
</script>

<style>
    .about {
        position: relative;
        display: flex;
        padding-top: 6rem;
        width: 100%;
        height: 100vh;
    }

    .about-left {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 50%;
        padding-right: 9rem;
        padding-left: 6rem;
    }

    .about-left__title {
        position: relative;
        display: block;
        margin: 0 auto;
        padding-top: 9rem;
        margin-bottom: 6rem;
    }

    .about-left__title h4 {
        font-family: 'Playfair Display', serif;
        font-weight: 400;
        font-size: 1.8rem;
        transform: scale(1, 0.9);
        color: #fff;
        text-transform: uppercase;
    }

    .about-left__intro {
        position: relative;
        display: block;
        margin-bottom: 6rem;
        /* text-align: center; */
    }

    .about-left__content {
        position: relative;
        display: flex;
        flex-direction: column;
        /* text-align: center; */
    }

    .about-left__content p {
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 100;
        font-size: 1.8rem;
        line-height: 1.8;
        color: #fff;
        margin-bottom: 5rem;
        word-break: keep-all;
    }

    .about-left__content span {
        font-weight: 500;
    }

    .about-right {
        position: relative;
        display: flex;
        width: 50%;
        padding-left: 9rem;
    }

    .about-right__left {
        position: relative;
        display: flex;
        flex-direction: column;
        padding-top: 8.9rem;
    }

    .personal-data {
        position: relative;
        display: block;
        padding-top: 3rem;
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 300;
        font-size: 1.6rem;
        color: #675f65;
        text-align: center;
    }

    .personal-data>div {
        margin-bottom: 1rem;
    }

    .personal-data__important {
        position: relative;
        display: flex;
        justify-content: space-between;
    }

    .personal-data__title,
    .important {
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 100;
        font-size: 1.5rem;
        line-height: 2.2rem;
        color: #fff;
        text-transform: uppercase;
        background: #cdc3c8;
        margin-bottom: 0.5rem;
    }

    .important {
        width: 13.5rem;
    }

    .personal-data span {
        display: block;
        font-size: 1.4rem;
    }

    .personal-data__certificate p {
        margin-bottom: 0;
    }

    .personal-data__certificate p:first-child {
        margin-bottom: 0.5rem;
    }

    .about-right__right {
        position: relative;
        display: flex;
        flex-direction: column;
        padding-top: 13rem;
        margin-left: 3rem;
    }

    .slogan {
        position: relative;
        display: block;
    }

    .slogan-title {
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 300;
        font-size: 2.5rem;
        line-height: 4rem;
        color: #675f65;
    }

    .slogan-title span {
        font-weight: 400;
        color: #12437e;
    }

    .slogan-content {
        font-family: 'Noto Sans KR', sans-serif;
        font-weight: 300;
        font-size: 1.6rem;
        line-height: 2.4rem;
        color: #675f65;
        margin-top: 4rem;
    }

    .about-right__right img {
        margin-top: 6rem;
    }
</style>
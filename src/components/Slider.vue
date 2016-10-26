<template lang="pug">
  .slider
    transition(
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:enter-cancelled="enter"
      )
      .quote.rob(v-if="slideNum == 1" key="1" data="1")
        .bg
        .quotes
          .quote-left
            | “
          .quote-right
            | “
        .person
        .shade
        .content
          .in-touch
            .icon
            | In Touch Weekly

          .title
            | “THE SHOW GOES THE F*CK ON”

      .quote.alona(v-if="slideNum == 2" key="2" data="2")
        .bg
        .quotes
          .quote-left
            | “
          .quote-right
            | “
        .person
        .shade
        .content
          .in-touch
            .icon
            | In Touch Weekly

          .title
            | “FUNNIEST MOVIE TO OPEN THIS YEAR!”

      .quote.topher(v-if="slideNum == 3" key="3" data="3")
        .bg
        .quotes
          .quote-left
            | “
          .quote-right
            | “
        .person
        .shade
        .content
          .in-touch
            .icon
            | In Touch Weekly

          .title
            | “NEVER ENDING WRECK OF <span>HILARIOUS</span><span>NESS”</span>


    .arrows
      .arrow.arrow-left(@click="onClickLeft")
      .arrow.arrow-right(@click="onClickRight")

</template>
<script>
  import {TweenLite, Power0} from 'gsap';
  import throttle from 'throttle-debounce/debounce';

  const SLIDES = 3;

  export default {
    name: "SliderComponent",

    data: function () {
      return {
        slideNum: 1,

        elmY: 0,
        elmHeight: 0,
        elmWidth: 0,

        container: null,
        person: null,
        content: null,
        quotes: null,

        entering: false,

        timer: 0
      };
    },

    mounted: function () {
      window.addEventListener('scroll', this.onScroll);

      this.person = document.querySelector('.slider .quote .person');
      this.content = document.querySelector('.slider .quote .content');
      this.quotes = document.querySelector('.slider .quote .quotes');

      this.container = document.querySelector('.slider');

      this.autoChange();
    },

    methods: {
      autoChange: function () {
        clearInterval(this.timer);
        this.timer = setInterval(this.onTimer, 5000);
      },

      _onScroll: function() {

        let ch = this.content.clientHeight;

        let wh = window.innerHeight;
        let dur = 2 * wh;
        let offset = 1 * wh;
        let progress = (window.pageYOffset + offset - this.container.offsetTop) / dur;

        if (progress >= 0 && progress <= 1) {
          TweenLite.to(this.person, 0.1, {y: (progress * wh / 5), z: '0.01', ease: Power0.easeInOut});
          TweenLite.to(this.content, 0.1, {y: -(progress * (wh - ch)), z: '0.01', ease: Power0.easeInOut});
          TweenLite.to(this.quotes, 0.1, {y: -(progress * wh / 5), z: '0.01', ease: Power0.easeInOut});
        }

      },
      onScroll: function () {
        throttle(100, () => {this._onScroll()})();
      },

      beforeEnter: function (el) {
        this.person = el.childNodes[2] // document.querySelector(`.slider .quote[data="${this.slideNum}"] .person`);
        this.content = el.childNodes[4] // document.querySelector(`.slider .quote[data="${this.slideNum}"] .content`);
        this.quotes = el.childNodes[1] // document.querySelector(`.slider .quote[data="${this.slideNum}"] .quotes`);
        this._onScroll();
      },
      enter: function () {
        this.entering = false;
        this._onScroll();
      },

      onClickLeft: function () {
        this.autoChange();
        this.entering = true;
        if (this.slideNum > 1)
          this.slideNum--;
        else
          this.slideNum = SLIDES;
      },
      onClickRight: function () {
        this.autoChange();
        this.entering = true;
        if (this.slideNum < SLIDES)
          this.slideNum++;
        else
          this.slideNum = 1;
      },

      onTimer: function () {
        this.entering = true;
        if (this.slideNum < SLIDES)
          this.slideNum++;
        else
          this.slideNum = 1;
      }
    }
  }
</script>

<style lang="sss" scoped rel="stylesheet/sass">
  .slider
    height: 100vh
    width: 100%
    position: relative

    .arrows
      position: absolute
      bottom: 10%
      left: 12%
      display: flex
      flex-flow: row nowrap
      justify-content: center
      align-items: center
      z-index: 100

    .arrow
      width: 31px
      height: 38px
      cursor: pointer

    .arrow:hover
      filter: drop-shadow(0px 0px 2px #ffffff)

    .arrow-left
      background: url("~assets/images/arrow-left.svg") no-repeat center center / contain
      margin-right: 24px

    .arrow-right
      background: url("~assets/images/arrow-right.svg") no-repeat center center / contain
      margin-left: 24px

    .quote
      height: 100%
      width: 100%
      position: absolute
      overflow: hidden

      .bg
        height: 100%
        width: 100%
        position: absolute
        top: 0
        left: 0

      .shade
        position: absolute
        left: 0
        top: 0
        height: 80px
        width: 100%
        z-index: 5

      .quotes
        height: 100%
        width: 100%
        position: absolute
        z-index: 4

      .quote-left, .quote-right
        font-family: 'Helvetica', sans-serif
        font-size: 500px
        letter-spacing: 0.54px
        line-height: 416px
        position: absolute

      .quote-left
        left: 5%
        bottom: 12vh

      .quote-right
        transform: rotate(180deg)
        left: 42%
        bottom: 20vh

      .person
        width: 100%
        height: 100%
        position: absolute
        left: 0
        bottom: 0
        z-index: 10

      .content
        position: absolute
        left: 12%
        bottom: 5vh
        z-index: 55

        .in-touch
          opacity: 0.8
          font-size: 36px
          color: #FFFFFF
          letter-spacing: 1.2px
          display: flex
          flex-flow: row nowrap
          align-items: center

          .icon
            background: url("~assets/images/in-touch.png") no-repeat center center / contain
            height: 60px
            width: 60px
            margin-right: 25px

        .title
          margin-top: 31px
          font-weight: bold
          font-size: 82.36px
          color: #FFFFFF
          letter-spacing: 2.23px
          line-height: 92.66px
          position: relative

        .twitter
          margin-top: 22px
          opacity: 0.5
          font-family: 'Open Sans', sans-serif
          font-style: italic
          font-size: 16px
          color: #FFFFFF
          letter-spacing: 0.9px
          display: flex
          flex-flow: row nowrap
          align-items: center

          .icon
            margin-right: 14px
            background: url("~assets/images/twitter-large.svg") no-repeat center center / contain
            width: 32px
            height: 26px

      &.rob
        .bg
          background-image: linear-gradient(-174deg, #6f26d9 0%, #4125b8 100%)

        .shade
          background: rgba(27, 2, 30, 0.12)

        .person
          background: url("~assets/images/rob.png") no-repeat right bottom / contain

        .quote-left, .quote-right
          color: #6E3AF0

        .title
          width: 55%

      &.alona
        .bg
          background-image: linear-gradient(-174deg, #ffe038 0%, #fea345 100%)

        .shade
          background: rgba(246, 186, 64, 0.4)

        .person
          background: url("~assets/images/alona.png") no-repeat right bottom / contain

        .quote-left, .quote-right
          color: #FFE57A

        .quote-left
          left: 5%
          bottom: 22vh

        .quote-right
          left: 48%
          bottom: 30vh

        .title
          width: 60%

      &.topher
        .bg
          background-image: linear-gradient(2deg, #fa228d 0%, #fd20d4 98%)

        .shade
          background: #F413C2

        .person
          background: url("~assets/images/topher.png") no-repeat right bottom / contain

        .quote-left, .quote-right
          color: #FC56CE

        .quote-left
          left: 5%
          bottom: 22vh

        .quote-right
          left: 50%
          bottom: 30vh

        .title
          width: 70%

  .v-leave-active
    transition-duration: 1s

    .bg, .shade
      transition-property: opacity
      transition-duration: 1s

    .person, .content, .quotes
      transition-property: opacity
      transition-duration: .5s

    .content, .quotes
      transition-property: opacity, transform

  .v-enter-active
    transition-duration: 2s

    .bg, .shade
      transition-property: opacity
      transition-duration: 1s

    .person, .content, .quotes
      transition-property: opacity
      transition-delay: .5s
      transition-duration: .5s

    .content, .quotes
      transition-property: opacity, transform
      transition-delay: .7s

  .v-leave-active, .v-enter
    .bg, .person, .shade, .content, .quotes
      opacity: 0.01
    .content, .quotes
      //- transform: translate3d(0, -50px, 0)
  .content, .quotes
    transition: opacity .3s !important


</style>
<style lang="scss" scoped rel="stylesheet/scss">
  @media (max-width: 768px) {
    .slider {
      .quote {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        transition: transform .5s ease;

        .quotes {
          display: none;
        }

        .person {
          left: initial;
          right: -20%;
          bottom: 0;
        }

        .content {
          width: 100%;
          left: 0;
          padding: 0 6%;
          /*//position: static;*/
          bottom: 1vh;

          .title {
            width: 100%;
            font-size: 70px;
            color: #FFFFFF;
            letter-spacing: 1.89px;
            line-height: 67.66px;
          }
        }
      }

      .arrow-left {
        margin-right: 10px;
      }

      .arrow-right {
        margin-left: 10px;
      }

      .arrow-left,
      .arrow-right {
        height: 22px;
        width: 18px;
      }
    }
  }

  @media (max-width: 525px) {
    .slider {
      .person {
        display: none;
      }

      .arrows {
        bottom: 20%;
        left: initial;
        right: 12%;
      }

      .quote .content .title {
        font-size: 60px;
        span { display: block; }
      }
    }
  }
</style>

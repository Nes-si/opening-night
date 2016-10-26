<template lang="pug">
  .header
    .bg

    .logo-w-btn
      .logo

      .watch
        .watch-button
          .watch-now(@click="onClickWatch")
            .bg-1
            .bg-2
            .text
              | Watch It Now
          .watch-starting
            | starting at
            span $2.99
            | on Amazon Demand

        .watch-button
          .watch-trailer(@click="onClickWatchTrailer")
            .play
            | Watch Trailer

    characters-component(v-on:showCharMobile="clickCharMobile")
    .smule(@click="onClickSmule")
</template>

<script>
  import {TweenLite} from 'gsap';
  import ScrollToPlugin from 'gsap/src/uncompressed/plugins/ScrollToPlugin';
  import throttle from 'throttle-debounce/debounce';

  import CharactersComponent from 'components/Characters';
  import store from 'store/Store';


  export default {
    name: "HeaderComponent",

    components: {
      CharactersComponent
    },

    data: function () {
      return {
        karaoke: null,
        background: null,
        logo: null,
      };
    },

    mounted: function () {
      window.addEventListener('scroll', this.onScroll);

      this.karaoke = document.querySelector('.header .smule');
      this.background = document.querySelector('.header .bg');
      this.logo = document.querySelector('.header .logo-w-btn');
    },

    methods: {
      onClickWatch: function () {
        this.$emit('watchOpen');
      },

      onClickWatchTrailer: function () {
        this.$emit('watchTrailer');
      },

      onClickSmule: function () {
        TweenLite.to(window, 1, {scrollTo: store().sectionContest.offsetTop});
      },

      onScroll: function () {
        throttle(100, () => {
          let dur = window.innerHeight;
          let progress = window.pageYOffset / dur;
          if (progress >= 0 && progress <= 1) {
            progress *= window.innerHeight / 100;
            TweenLite.to(this.background, 0.1, {y: (progress * 10), z: '0.01', ease: Power0.easeInOut});
            TweenLite.to(this.karaoke, 0.1, {y: (progress * 30), z: '0.01', ease: Power0.easeInOut});
            TweenLite.to(this.logo, 0.1, {y: -(progress * 20), z: '0.01', ease: Power0.easeInOut});
          }
        })();
      },

      clickCharMobile: function (char) {
        this.$emit('showCharMobile', char);
      }
    }
  }
</script>

<style lang="sss" scoped rel="stylesheet/sass">
  .header
    height: 100vh
    min-height: 670px
    overflow: hidden
    display: flex
    flex-flow: column nowrap
    align-items: center
    position: relative
    
    .bg
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      z-index: -1
      background: url("~assets/images/head-bg.jpg") no-repeat center center / cover
      transform: translate3d(0,0,0)

    .logo
      background: url("~assets/images/logo.png") no-repeat center center / contain
      height: 274px
      margin-top: 46px

    .watch
      display: flex
      flex-flow: row nowrap

      &-button
        display: flex
        flex-flow: column nowrap
        align-items: center
        margin-right: 27px

        &:last-child
          margin-right: 0

      &-now
        box-shadow: 0px 3px 10px 0px rgba(79, 24, 91, 0.68)
        padding: 0 59px
        border-radius: 120px
        font-weight: bold
        font-size: 20.79px
        color: #FFFFFF
        letter-spacing: 1.68px
        text-align: center
        line-height: 55px
        cursor: pointer

        position: relative
        overflow: hidden

        .text
          position: relative
          z-index: 4

        .bg-1,
        .bg-2
          position: absolute
          top: 0
          left: 0
          width: 100%
          height: 100%
          border-radius: 100px
          background: linear-gradient(-182deg, #f45232 0%, #e52816 100%)

        .bg-2
          background: linear-gradient(-182deg, #FF7340 0%, #F9412F 100%)
          opacity: 0.01
          transition: opacity 0.1s ease
          will-change: opacity

        &:hover .bg-2
          opacity: 0.99


      &-starting
        margin-top: 10px
        font-weight: 300
        font-size: 16px
        color: #FFFFFF
        letter-spacing: 1.29px

        span
          font-weight: bold
          margin-left: 5px
          margin-right: 5px

      &-trailer
        background: rgba(255, 255, 255, 0.09)
        border: 1px solid #FFFFFF
        box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.5)
        border-radius: 130px
        font-family: 'Open Sans Condensed', sans-serif
        padding: 0 33px
        min-width: 250px
        line-height: 53px
        font-weight: bold
        font-size: 20.79px
        color: #FFFFFF
        letter-spacing: 1.68px
        cursor: pointer
        display: flex
        flex-flow: row nowrap
        align-items: center
        outline: none

        transition: background 0.1s ease

        &:hover
          @media (min-width: 769px)
            background: hsla(0,0%, 100%, .3)

      &-trailer .play
        background: url("~assets/images/play.svg") no-repeat center center / contain
        margin-right: 10px
        height: 27px
        width: 27px

    .smule
      position: absolute
      top: 163px
      right: 76px
      background: url("~assets/images/smule.png") no-repeat center center / contain
      height: 211px
      width: 215px
      cursor: pointer
      z-index: 1000

    .smule:hover
      filter: drop-shadow(0px 0px 5px rgba(255, 200, 220, .5))


</style>

<style scoped lang="scss" rel="stylesheet/scss">

  @media (max-width: 1140px) {
    .header {
      .smule {
        top: 70px;
        right: 30px;
      }
    }
  }

  @media (max-width: 768px) {
    .header {
      height: 1030px;
      
      .smule {
        background: url("~assets/images/smule-tablet.png") no-repeat center center / contain;
        height: 63px;
        width: 269px;

        top: 5px;
        right: initial;
        left: 18px;
      }

      .logo {
        margin-top: 70px;
      }
    }
  }

  @media (max-width: 688px) {
    .header {
      .logo {
        width: 359px;
        height: 207px;
      }

      .watch {
        margin-top: -10px;
        flex-flow: column nowrap;
      }

      .watch-button {
        margin: 0;
      }

      .watch-trailer {
        border: none;
        background: none;
        box-shadow: none;
        margin-top: 20px;
      }
    }
  }

  @media (max-width: 425px) {
    .header {
      height: 740px;

      .smule {
        height: 50px;
        width: 214px;
        top: 10px;
      }
    }
  }
</style>

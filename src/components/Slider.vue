<template lang="pug">
  .slider
    transition(
      v-on:enter="enter"
      v-on:enter-cancelled="enter"
      )
      .quote.rob(v-if="slideNum == 1" key="1" data="1")
        .bg
        .person
        .shade
        .content
          .in-touch
            .icon
            | In Touch Weekly

          .title
            .quote-left
              | “
            | “THE SHOW GOES THE F*CK ON”
            .quote-right
              | “

          a.twitter(href="http://twitter.com")
            .icon
            | via Twitter

      .quote.alona(v-if="slideNum == 2" key="2" data="2")
        .bg
        .person
        .shade
        .content
          .in-touch
            .icon
            | In Touch Weekly

          .title
            .quote-left
              | “
            | “FUNNIEST MOVIE TO OPEN THIS YEAR!”
            .quote-right
              | “

          a.twitter(href="http://twitter.com")
            .icon
            | via Twitter

      .quote.topher(v-if="slideNum == 3" key="3" data="3")
        .bg
        .person
        .shade
        .content
          .in-touch
            .icon
            | In Touch Weekly

          .title
            .quote-left
              | “
            | “NEVER ENDING WRECK OF HILARIOUSNESS”
            .quote-right
              | “

          a.twitter(href="http://twitter.com")
            .icon
            | via Twitter

    .arrows
      .arrow.arrow-left(@click="onClickLeft")
      .arrow.arrow-right(@click="onClickRight")

</template>

<script>
  import {TweenLite, Power0} from 'gsap';
  
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
        
        entering: false
      };
    },
    
    mounted: function () {
      window.addEventListener('scroll', this.onScroll);
      
      this.person = document.querySelector('.slider .quote .person');
      this.content = document.querySelector('.slider .quote .content');
  
      this.container = document.querySelector('.slider');
    },

    methods: {
      onScroll: function () {
        if (this.entering)
          return;
        
        let dur = window.innerHeight * 1.5;
        let progress = (window.pageYOffset - this.person.offsetTop) / dur;
        if (progress >= 0 && progress <= 1) {
          TweenLite.to(this.person, 0.1, {y: (progress * 100), z: '0.01', ease: Power0.easeInOut});
          TweenLite.to(this.content, 0.1, {y: -(progress * 500), z: '0.01', ease: Power0.easeInOut});
        }
      },
      
      enter: function () {
        this.person = document.querySelector(`.slider .quote[data="${this.slideNum}"] .person`);
        this.content = document.querySelector(`.slider .quote[data="${this.slideNum}"] .content`);
        this.entering = false;
      },

      onClickLeft: function () {
        this.entering = true;
        if (this.slideNum > 1)
          this.slideNum--;
        else
          this.slideNum = SLIDES;
      },
      onClickRight: function () {
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

      .shade
        position: absolute
        left: 0
        top: 0
        height: 80px
        width: 100%
        z-index: 5

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
        bottom: 2vh
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
  
          .quote-left, .quote-right
            font-family: 'Helvetica', sans-serif
            font-size: 500px
            letter-spacing: 0.54px
            line-height: 416px
            z-index: -1
            position: absolute
    
          .quote-left
            left: -16%
            top: -20%
    
          .quote-right
            transform: rotate(180deg)
            right: 0
            top: -90%
    
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
          left: -25%

        .quote-right
          right: 0
          top: initial
          bottom: -40%

        .title
          width: 57%

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
          left: -25%

        .quote-right
          right: 15%
          top: initial
          bottom: -40%

        .title
          width: 70%

  .v-leave-active
    transition-duration: 1s
  
    .bg, .shade
      transition-property: opacity
      transition-duration: 1s
  
    .person, .content
      transition-property: opacity
      transition-duration: .5s
  
    .content
      transition-property: opacity, transform

  .v-enter-active
    transition-duration: 2s

    .bg, .shade
      transition-property: opacity
      transition-duration: 1s

    .person, .content
      transition-property: opacity
      transition-delay: .5s
      transition-duration: .5s
      
    .content
      transition-property: opacity, transform
      transition-delay: .7s

  .v-leave-active, .v-enter
    .bg, .person, .shade, .content
      opacity: 0.01
    .content
      transform: translate3d(0, -50px, 0)


</style>

<template lang="pug">
  transition
    .preloader(v-if="!load" style="position: fixed; top: 0; left:0;width: 100%;height:100%; z-index: 10000;background-image: linear-gradient(-182deg, #F45232 0%, #E52816 100%);" )
      .logo
      transition(name="fade" mode="out-in")
        .text(v-if="slideNum == 1" key="1" data="1")
          .title
            | “...comedy’s most talented actors”
          .site
            | -
            a(href="http://cinemacasdasdy.com") Cinemacasdasdy.com

        .text(v-if="slideNum == 2" key="2" data="2")
          .title
            | “Clever, funny and upbeat”
          .site
            | -
            a(href="http://blogCritics.org") BlogCritics.org

        .text(v-if="slideNum == 3" key="3" data="3")
          .title
            | “Worth a standing ovation!”
          .site
            | -
            a(href="http://cinemacy.com") Cinemacy.com
      .loader
</template>

<script>
  const SLIDES = 3;

  export default {
    name: "PreloaderComponent",
    data: function() {
      return {
        load: false,
        slideNum: 1,
        timer: 0
      }
    },
    methods: {
      autoChange: function () {
        clearInterval(this.timer);
        this.timer = setInterval(this.onTimer, 1500);
      },

      handleLoad: function () {
        this.load = true;
      },

      onTimer: function () {
        if (this.slideNum < SLIDES)
          this.slideNum++;
        else
          this.slideNum = 1;
      }
    },
    mounted: function() {
      window.addEventListener('load', this.handleLoad);
      this.autoChange();
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  .preloader {
    background-image: linear-gradient(-182deg, #F45232 0%, #E52816 100%);
    box-shadow: 0px 3px 10px 0px rgba(79,24,91,0.68);

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    z-index: 10000;

    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    will-change: transform;

    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s ease;
    }

    .fade-enter, .fade-leave-active {
      opacity: 0;
    }

    &-hidden {
      display: none;
    }

    .logo {
      background: url('~assets/images/logo-no-shadow.png') no-repeat center center / contain;
      width: 174px;
      height: 101px;
    }

    .text {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
    }

    .title {
      margin-top: 10px;
      font-weight: bold;
      font-size: 24px;
      color: #FFFFFF;
      letter-spacing: 1.65px;
      line-height: 34px;
      text-align: center;
    }

    .site {
      margin-top: 5px;
      font-family: 'Open Sans', sans-serif;
      font-size: 16px;
      color: #FFFFFF;
      letter-spacing: 1.97px;
      line-height: 34px;

      a {
        color: #fff;
        margin-left: 5px;
      }
    }

    @keyframes spin {
      from {transform:rotate(0deg);}
      to {transform:rotate(360deg);}
    }

    .loader {
      background: url('~assets/images/preloader.svg') no-repeat center center / contain;
      margin-top: 120px;
      width: 40px;
      height: 40px;
      animation: spin 2s infinite linear;
      will-change: transform, opacity;
    }
  }

  .v-enter-active, .v-leave-active {
    transition: transform 1s cubic-bezier(0.7,0,0.3,1);

    .faces,
    .title {
      transition: transform 2s cubic-bezier(0.7,0,0.3,1);
    }

    .loader {
      transition: opacity 1s cubic-bezier(0.7,0,0.3,1);
    }
  }
  .v-enter, .v-leave-active {
    transform: translate3d(0,-100vh,0);

    .faces,
    .title {
      transform: translate3d(0,-100%,0) scale3d(0.3,0.3,1)
    }

    .loader {
      opacity: 0.01;
    }
  }


  @media (max-width: 768px) {
    .preloader {
      .title {
        font-size: 16px;
      }

      .site {
        font-size: 14px;
        margin-top: 0;
        line-height: 20px;
      }
    }
  }
</style>

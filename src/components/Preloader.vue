<template lang="pug">
  transition
    .preloader(v-if="!load")
      .faces
        .face-1
        .face-2

      .title
        | THE SHOW GOES THE F*&K ON!

      .loader
        .loader-inner
</template>

<script>
  export default {
    name: "PreloaderComponent",
    data: function() {
      return {
        load: false
      }
    },
    methods: {
      handleLoad: function () {
        this.load = true;
      }
    },
    mounted: function() {
      window.addEventListener('load', this.handleLoad);
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

    &-hidden {
      display: none;
    }

    @keyframes face-1 {
      0% {transform:translateX(0px);}
      50% {transform:translateX(65px);}
      100% {transform: translateX(0px);}
    }

    @keyframes face-2 {
      0% {transform:translateX(0px);}
      50% {transform:translateX(-65px);}
      100% {transform: translateX(0px);}
    }

    .faces {
      margin-top: 70px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      will-change: transform;

      .face-1 {
        background: url('~assets/images/face-1.png') no-repeat center center / contain;
        height: 70px;
        width: 44px;
        margin-right: 17px;
        animation: face-1 1.1s infinite ease;
      }

      .face-2 {
        background: url('~assets/images/face-2.png') no-repeat center center / contain;
        height: 71px;
        width: 49px;
        animation: face-2 1.1s infinite ease;
      }
    }

    .title {
      margin-top: 17px;
      font-weight: bold;
      font-size: 16px;
      color: #FFFFFF;
      letter-spacing: 1.97px;
      line-height: 34px;
      will-change: transform;
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
</style>

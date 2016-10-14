<template lang="pug">
  .preloader(v-bind:class="{ 'preloader-hidden': this.load }")
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
      handleLoad () {
        this.load = true;
      }
    },
    mounted: function() {
      window.addEventListener('load', this.handleLoad());
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

    &-hidden {
      display: none;
    }

    .faces {
      margin-top: 70px;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;

      .face-1 {
        background: url('~assets/images/face-1.png') no-repeat center center / contain;
        height: 70px;
        width: 44px;
        margin-right: 17px;
      }

      .face-2 {
        background: url('~assets/images/face-2.png') no-repeat center center / contain;
        height: 71px;
        width: 49px;
      }
    }

    .title {
      margin-top: 17px;
      font-weight: bold;
      font-size: 16px;
      color: #FFFFFF;
      letter-spacing: 1.97px;
      line-height: 34px;
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
    }
  }
</style>

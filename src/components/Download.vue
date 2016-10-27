<template lang="pug">
  .download
    .chasez
    .one-hit
      | #1HitWonder
      .socials
        a.fb
        a.twitter
        a.ig

    .download-item
      .title
        .title-image
        .title-inner
          | Sing a Karaoke Duet with a Broadway Star!

      .steps
        .steps-item
          .steps-point
            | 1.
          .steps-text
            | Download the <span>Sing! Karaoke by Smule</span> App
            .images
              a.image-1(href="https://itunes.apple.com/us/app/sing!-karaoke-by-smule/id509993510?mt=8")
              a.image-2(href="https://play.google.com/store/apps/details?id=com.smule.singandroid")

        .steps-item
          .steps-point
            | 2.
          .steps-text
            | Record a duet to <span>"I Know What Boys Like" with Lesli Margherita</span>
        .steps-item
          .steps-point
            | 3.
          .steps-text
            | Post to Facebook, Twitter or Instagram with the hashtag <span>#1HitWonder</span> and you will be entered to win $100 itunes gift card!
</template>

<script>
  export default {
    name: "DownloadComponent",

    methods: {
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  .download {
    background-image: linear-gradient(-180deg, #30E1FF 7%, #178DFD 100%);
    padding: 60px 30px 0 50px;
    position: relative;
    overflow: hidden;
    min-height: 561px;

    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;

    .one-hit {
      font-weight: bold;
      font-size: 7vw;
      color: #FFFFFF;
      letter-spacing: 1.29px;
      line-height: 24px;
      width: 100%;
      z-index: 7;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 35px;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: flex-start;
      z-index: 555;
    }

    &-item {
      flex: 0 0 560px;
      z-index: 10;
      padding: 0 3%;
    }

    .chasez {
      background: url('~assets/images/chasez.png') no-repeat center bottom / contain;
      width: 55vw;
      height: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
    }

    .title {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;

      &-image {
        background: url('~assets/images/smule-logo.png') no-repeat center center / contain;
        width: 76px;
        height: 76px;
        flex: 0 0 76px;
        margin-right: 21px;
      }

      &-inner {
        font-weight: bold;
        font-size: 36px;
        color: #FFFFFF;
        letter-spacing: 1.01px;
        line-height: 44px;

        span { font-size: 22px; font-weight: 400; }
      }
    }

    .steps {
      padding: 0 3%;

      .images {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        margin-top: 5px;

        .image-1 {
          background: url('~assets/images/app-store.png') no-repeat center center / contain;
          width: 108px;
          height: 38px;
          margin-right: 18px;
        }

        .image-2 {
          background: url('~assets/images/google-play.png') no-repeat center center / contain;
          width: 107px;
          height: 35px;
        }
      }

      &-item {
        margin-top: 15px;

        display: flex;
        flex-flow: row nowrap;
        align-items: flex-start;
      }

      &-point {
        margin-right: 10px;

        font-weight: bold;
        font-size: 24px;
        color: #FFFFFF;
        letter-spacing: -0.45px;
      }

      &-text {
        margin-top: 2px;

        font-family: 'Open Sans', sans-serif;
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: 1px;
        line-height: 24px;

        span { font-weight: bold; }
      }
    }


    .socials {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      margin-left: 100px;

      .fb {
        background: url('~assets/images/fb-d.svg') no-repeat center center / contain;
        height: 42px;
        width: 20px;
        margin-right: 33px;
      }

      .twitter {
        background: url('~assets/images/twitter-2.svg') no-repeat center center / contain;
        height: 37px;
        width: 46px;
        margin-right: 24px;
      }

      .ig {
        background: url('~assets/images/instagram-2.svg') no-repeat center center / contain;
        height: 42px;
        width: 43px;
      }
    }
  }


  @media (max-width: 920px) {
    .download {
      justify-content: flex-start;
      height: 762px;

      .chasez {
        width: 450px;
        left: initial;
        right: 0;
      }
    }
  }

  @media (max-width: 580px) {
    .download {
      justify-content: center;
      height: 762px;
      padding-left: 30px;
      padding-right: 30px;

      &-item {
        flex: 0 0 100%;
        padding: 0;
      }

      .chasez {
        width: 450px;
        left: initial;
        right: 0;
      }

      .title-inner {
        font-size: 30px;
        color: #FFFFFF;
        letter-spacing: 0.28px;
        line-height: 30px;

        span { font-size: 20px; }
      }
    }
  }

  @media (max-width: 512px) {
    .download .socials {
      margin-left: 0;
      width: 100%;
      margin-top: 20px;
    }
  }

  @media (max-width: 480px) {
    .download {
      height: 500px;

      padding-top: 20px;

      .chasez {
        display: none;
      }

      .title-inner {
        font-size: 24px;
        color: #FFFFFF;
        letter-spacing: 0.28px;
        line-height: 30px;

        span { font-size: 16px; }
      }
    }
  }
</style>

<template lang="pug">
  .header
    .logo

    .watch
      .watch-button
        .watch-now
          | Watch It Now
        .watch-starting
          | starting at
          span $2.99
          | on Amazon Demand

      .watch-button
        .watch-trailer
          .play
          | Watch Trailer

    characters-component
    a.smule(href="/")
    .arrow
</template>

<script>
  import CharactersComponent from 'components/Characters';
  export default {
    name: "HeaderComponent",
    components: {
      CharactersComponent
    }
  }
</script>

<style lang="sss" scoped rel="stylesheet/sass">
  .header
    background: url("~assets/images/head-bg.png") no-repeat center center / cover
    // height: 100vh;
    height: 100vh
    display: flex
    flex-flow: column nowrap
    align-items: center
    position: relative

    .logo
      background: url("~assets/images/logo.png") no-repeat center center / contain
      width: 474px
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
        background-image: linear-gradient(-182deg, #f45232 0%, #e52816 100%)
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

      &-starting
        margin-top: 10px
        font-weight: 300
        font-size: 16px
        color: #FFFFFF
        letter-spacing: 1.29px

        span
          font-weight: bold

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

    .arrow
      position: absolute
      bottom: 24px
      left: 50%
      transform: translateX(-50%)
      background: url("~assets/images/arrow.svg") no-repeat center center / contain
      height: 29px
      width: 29px
      cursor: pointer


</style>

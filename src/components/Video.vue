<template lang="pug">
  .video
    .video-full
      img(src="~assets/images/video-full.png")
      .play

    .video-list
      .arrow-left
      .video-item
        img(src="~assets/images/video-1.png")
        .text
          | CHOPSTICKS
        .bg
        .play

      .video-item
        img(src="~assets/images/video-2.png")
        .text
          | WELCOME TO WONDERLAND
        .bg
        .play

      .video-item
        img(src="~assets/images/video-3.png")
        .text
          | WORDS, SAY WORDS
        .bg
        .play

      .video-item
        img(src="~assets/images/video-4.png")
        .text
          | WORDS, SAY WORDS
        .bg
        .play
      .arrow-right
</template>

<script>
  export default {
    name: "VideoComponent"
  }
</script>

<style lang="sss" scoped rel="stylesheet/sass">
  .video
    background: #25182A
    padding: 30px
    
    &-full
      position: relative
      img
        width: 100%
      
      .play
        background: url("~assets/images/play-big.svg") no-repeat center center / contain
        width: 147px
        height: 147px
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        z-index: 50
        cursor: pointer
    
    &-list
      margin-top: 15px
      display: flex
      flex-flow: row nowrap
      justify-content: space-between
      align-items: center
    
    .arrow-left
      background: url("~assets/images/arrow-left.svg") no-repeat center center / contain
      width: 31px
      height: 38px
      margin-right: 24px
    
    .arrow-right
      background: url("~assets/images/arrow-right.svg") no-repeat center center / contain
      width: 31px
      height: 38px
      margin-left: 24px
    
    &-item
      position: relative
      cursor: pointer
      
      &:hover
        .play
          opacity: 1
        
        .text
          opacity: 0
      
      img
        width: 100%
      
      .text
        font-weight: bold
        font-size: 23.19px
        color: #FFFFFF
        letter-spacing: 1.29px
        line-height: 24px
        opacity: 1
        transition: opacity 0.3s ease
        will-change: opacity
        position: absolute
        left: 50%
        top: 50%
        transform: translate(-50%, -50%)
        text-align: center
      
      .play
        background: url("~assets/images/play-middle.svg") no-repeat center center / contain
        width: 83px
        height: 83px
        opacity: 0
        transition: opacity 0.3s ease
        will-change: opacity
        position: absolute
        left: 50%
        top: 50%
        transform: translate(-50%, -50%)
</style>

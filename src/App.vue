<template lang="pug">
  .app
    header-component
  
    .quote.rob
      .bg
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
  
        a.twitter(href="twitter.com")
          .icon
          | via Twitter
  
        .arrows
          .arrow-left
          .arrow-right
    .quote.alona
      .bg
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
  
        a.twitter(href="twitter.com")
          .icon
          | via Twitter
  
        .arrows
          .arrow-left
          .arrow-right
    .quote.topher
      .bg
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
  
        a.twitter(href="twitter.com")
          .icon
          | via Twitter
  
        .arrows
          .arrow-left
          .arrow-right
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
  
    a.watch-it-now(href="/")
      .title
        | Watch It Now
      .subtitle
        | starting at $2.99 on Amazon Demand
  
    .footer
      .logos
        .dark-factory
        .itaca
        .little-luca
        .globecom
  
      .nav
        .nav-list
          .nav-item
            | TERMS & CONDITIONS
          .separate
            | |
          .nav-item
            | PRIVACY POLICY
  
        .nav-copy
          | ©2016 BENITO FILMS, LLC ALL RIGHTS RESERVED.
</template>

<script>
import HeaderComponent from 'components/Header';

export default {
  components: {
    HeaderComponent
  }
}
</script>

<style lang="sss" rel="stylesheet/sass">
  .container
    display: flex
    flex-flow: column nowrap
    align-items: center
    
    max-width: 1200px
    padding: 0 30px
    margin: 0 auto
  
  *
    box-sizing: border-box
  
  html
    background: #fff
  
  body
    -webkit-font-smoothing: antialiased
    font-family: 'Open Sans Hebrew Condensed', sans-serif
  
  textarea
    line-height: 1.6
    resize: vertical
  
  a
    outline: none
    text-decoration: none
  
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button
    -webkit-appearance: none
    margin: 0
  
  input[type=checkbox],
  input[type=radio]
    opacity: 0
    position: absolute
    z-index: 12
    width: 18px
    height: 18px
    cursor: pointer
  
  input[type=checkbox]:checked,
  input[type=radio]:checked,
  input[type=checkbox]:focus,
  input[type=radio]:focus
    outline: none !important
</style>

<style lang="sss" scoped rel="stylesheet/sass">
  .quote
    height: 720px
    position: relative
    
    .shade
      position: absolute
      left: 0
      top: 0
      height: 80px
      width: 100%
      z-index: 5
    
    .bg
      width: 100%
      height: 100%
      position: absolute
      left: 0
      top: 0
      z-index: 10
    
    .arrows
      position: absolute
      bottom: 10%
      display: flex
      flex-flow: row nowrap
      justify-content: center
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
    
    .content
      position: relative
      display: flex
      flex-flow: column nowrap
      justify-content: center
      height: 100%
      margin-left: 12%
      z-index: 55
      
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
          background: url("~assets/images/twitter.svg") no-repeat center center / contain
          width: 32px
          height: 26px
    
    &.rob
      background-image: linear-gradient(-174deg, #6f26d9 0%, #4125b8 100%)
      
      .shade
        background: rgba(27, 2, 30, 0.12)
      
      .bg
        background: url("~assets/images/rob.png") no-repeat right bottom / contain
      
      .quote-left, .quote-right
        color: #6E3AF0
      
      .title
        width: 55%
    
    &.alona
      background-image: linear-gradient(-174deg, #ffe038 0%, #fea345 100%)
      
      .shade
        background: rgba(246, 186, 64, 0.4)
      
      .bg
        background: url("~assets/images/alona.png") no-repeat right bottom / contain
      
      .quote-left, .quote-right
        color: #FFE57A
      
      .quote-left
        left: -25%
      
      .quote-right
        right: 0%
        top: initial
        bottom: -40%
      
      .title
        width: 57%
    
    &.topher
      background-image: linear-gradient(2deg, #fa228d 0%, #fd20d4 98%)
      
      .shade
        background: #F413C2
      
      .bg
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
  
  .watch-it-now
    background-image: linear-gradient(-182deg, #f45232 0%, #e52816 100%)
    padding: 22px 0
    display: flex
    flex-flow: column nowrap
    align-items: center
    
    .title
      font-weight: bold
      font-size: 20.79px
      color: #FFFFFF
      letter-spacing: 1.68px
    
    .subtitle
      margin-top: 1px
      font-weight: 300
      font-size: 16px
      color: #FFFFFF
      letter-spacing: 1.29px
  
  .footer
    background: #1B252A
    
    .logos
      padding: 52px 0 62px
      display: flex
      flex-flow: row nowrap
      align-items: center
      justify-content: center
      
      .dark-factory
        background: url("~assets/images/dark-factory.png") no-repeat center center / contain
        width: 354px
        height: 87px
        margin-right: 98px
      
      .itaca
        background: url("~assets/images/itaca.png") no-repeat center center / contain
        width: 91px
        height: 87px
        margin-right: 56px
      
      .little-luca
        background: url("~assets/images/little-luca.png") no-repeat center center / contain
        width: 249px
        height: 61px
        margin-right: 79px
      
      .globecom
        background: url("~assets/images/globecom.png") no-repeat center center / contain
        width: 91px
        height: 87px
    
    .nav
      display: flex
      flex-flow: row nowrap
      justify-content: space-between
      align-items: center
      padding: 19px 42px
    
    .nav-list
      font-family: 'Open Sans', sans-serif
      font-size: 16px
      color: #7E8791
      letter-spacing: 1.3px
      display: flex
      flex-flow: row nowrap
      align-items: center
      cursor: pointer
      
      .separate
        margin: 0 10px
    
    .nav-copy
      font-family: 'Open Sans', sans-serif
      font-size: 10px
      color: #5B6D82
      letter-spacing: 0.81px


</style>

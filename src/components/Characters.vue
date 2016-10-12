<template lang="pug">
  .characters
    .spacer
    .char-box(
      v-for="(char, index) of chars"
      v-bind:class="[char.name]"
      v-bind:key="char.name"
      )
      .char-inner
        .char-bg
        .char-player
          .char-video
            iframe(:src="char.videos[currentVideo].url" frameborder="0" allowfullscreen)
          .char-socials
            | SHARE
            a.facebook(href="#")
            a.twitter(href="#")
            a.instagram(href="#")

        .char-list
          .char-video(v-for="n in 4" @click="onClickPreview(n - 1)")
            .char-videoInner(:style="{ backgroundImage: 'url(' + char.videos[n - 1].preview + ')' }")

</template>

<script>
  const charactersData = [
    {
      name: 'rob',
      videos: [
        {
          url: "https://www.youtube.com/embed/jh-hzbG5FzI?rel=0",
          preview: "assets/images/video-1.png"
        },
        {
          url: "//giphy.com/embed/l41YktuUJjzzOshri?hideSocial=true",
          preview: "assets/images/video-2.png"
        },
        {
          url: "https://www.youtube.com/embed/I3W3mRs4ULQ?rel=0",
          preview: "assets/images/video-3.png"
        },
        {
          url: "https://www.youtube.com/embed/XVwqSlTFQq0?rel=0",
          preview: "assets/images/video-4.png"
        }
      ]
    },
    {
      name: 'anne',
      videos: [
        {
          url: "https://www.youtube.com/embed/jh-hzbG5FzI?rel=0",
          preview: "assets/images/video-1.png"
        },
        {
          url: "//giphy.com/embed/l41YktuUJjzzOshri?hideSocial=true",
          preview: "assets/images/video-2.png"
        },
        {
          url: "https://www.youtube.com/embed/I3W3mRs4ULQ?rel=0",
          preview: "assets/images/video-3.png"
        },
        {
          url: "https://www.youtube.com/embed/XVwqSlTFQq0?rel=0",
          preview: "assets/images/video-4.png"
        }
      ]
    },
    {
      name: 'topher',
      videos: [
        {
          url: "https://www.youtube.com/embed/jh-hzbG5FzI?rel=0",
          preview: "assets/images/video-1.png"
        },
        {
          url: "//giphy.com/embed/l41YktuUJjzzOshri?hideSocial=true",
          preview: "assets/images/video-2.png"
        },
        {
          url: "https://www.youtube.com/embed/I3W3mRs4ULQ?rel=0",
          preview: "assets/images/video-3.png"
        },
        {
          url: "https://www.youtube.com/embed/XVwqSlTFQq0?rel=0",
          preview: "assets/images/video-4.png"
        }
      ]
    },
    {
      name: 'alona',
      videos: [
        {
          url: "https://www.youtube.com/embed/jh-hzbG5FzI?rel=0",
          preview: "assets/images/video-1.png"
        },
        {
          url: "//giphy.com/embed/l41YktuUJjzzOshri?hideSocial=true",
          preview: "assets/images/video-2.png"
        },
        {
          url: "https://www.youtube.com/embed/I3W3mRs4ULQ?rel=0",
          preview: "assets/images/video-3.png"
        },
        {
          url: "https://www.youtube.com/embed/XVwqSlTFQq0?rel=0",
          preview: "assets/images/video-4.png"
        }
      ]
    },
    {
      name: 'jc',
      videos: [
        {
          url: "https://www.youtube.com/embed/jh-hzbG5FzI?rel=0",
          preview: "assets/images/video-1.png"
        },
        {
          url: "//giphy.com/embed/l41YktuUJjzzOshri?hideSocial=true",
          preview: "assets/images/video-2.png"
        },
        {
          url: "https://www.youtube.com/embed/I3W3mRs4ULQ?rel=0",
          preview: "assets/images/video-3.png"
        },
        {
          url: "https://www.youtube.com/embed/XVwqSlTFQq0?rel=0",
          preview: "assets/images/video-4.png"
        }
      ]
    },
    {
      name: 'taye',
      videos: [
        {
          url: "https://www.youtube.com/embed/jh-hzbG5FzI?rel=0",
          preview: "assets/images/video-1.png"
        },
        {
          url: "//giphy.com/embed/l41YktuUJjzzOshri?hideSocial=true",
          preview: "assets/images/video-2.png"
        },
        {
          url: "https://www.youtube.com/embed/I3W3mRs4ULQ?rel=0",
          preview: "assets/images/video-3.png"
        },
        {
          url: "https://www.youtube.com/embed/XVwqSlTFQq0?rel=0",
          preview: "assets/images/video-4.png"
        }
      ]
    },
    {
      name: 'paul',
      videos: [
        {
          url: "https://www.youtube.com/embed/jh-hzbG5FzI?rel=0",
          preview: "assets/images/video-1.png"
        },
        {
          url: "//giphy.com/embed/l41YktuUJjzzOshri?hideSocial=true",
          preview: "assets/images/video-2.png"
        },
        {
          url: "https://www.youtube.com/embed/I3W3mRs4ULQ?rel=0",
          preview: "assets/images/video-3.png"
        },
        {
          url: "https://www.youtube.com/embed/XVwqSlTFQq0?rel=0",
          preview: "assets/images/video-4.png"
        }
      ]
    },
    {
      name: 'lesli',
      videos: [
        {
          url: "https://www.youtube.com/embed/jh-hzbG5FzI?rel=0",
          preview: "assets/images/video-1.png"
        },
        {
          url: "//giphy.com/embed/l41YktuUJjzzOshri?hideSocial=true",
          preview: "assets/images/video-2.png"
        },
        {
          url: "https://www.youtube.com/embed/I3W3mRs4ULQ?rel=0",
          preview: "assets/images/video-3.png"
        },
        {
          url: "https://www.youtube.com/embed/XVwqSlTFQq0?rel=0",
          preview: "assets/images/video-4.png"
        }
      ]
    }
  ];
  
  export default {
    name: "CharactersComponent",
    
    data: function () {
      return {
        chars: charactersData,
        currentVideo: 0
      }
    },
    
    methods: {
      onClickPreview: function (num) {
        this.currentVideo = num;
      }
    }
  }
</script>

<style lang="sass" scoped rel="stylesheet/sass">
  .characters

    .char-bg
      position: absolute
      left: 15.5vw
      bottom: 0
      width: 32.6vw
      height: 100%
      transform: skew(-18.5deg)
      background: #000
      z-index: 4
      opacity: 1
      transition: opacity 0.3s ease 0.4s
      will-change: opacity, transform

    .char-player
      position: absolute
      left: 20vw
      overflow: hidden

      display: flex
      flex-flow: row nowrap
      align-items: flex-start

      .char-video
        height: 10.2vw
        width: 23.5vw
        margin-top: 1vw
        position: relative
        
        iframe
          position: absolute
          top: 0
          left: 0
          width: 100%
          height: 100%
          
      .char-socials
        margin-top: 1vw
        margin-left: 1vw
        display: flex
        flex-flow: column nowrap
        justify-content: center
        align-items: center

        font-family: 'Open Sans Condensed'
        font-weight: 300
        font-size: 1vw
        color: #FFFFFF
        letter-spacing: 0.15vw

        .facebook,
        .twitter,
        .instagram
          display: block
          height: 2vw
          width: 2vw
          margin-top: 0.5vw
          border-radius: 100px
          background: #000 no-repeat center center / contain

        .facebook
          background-image: url('~assets/images/facebook.svg')
          margin-top: 0.3vw

        .twitter
          background-image: url('~assets/images/twitter.svg')

        .instagram
          background-image: url('~assets/images/instagram.svg')

    .char-list
      position: absolute
      left: 13.3vw
      bottom: 0.8vw
      width: 32.7vw
      height: 5vw
      transform: skew(-18.5deg)
      padding-left: 0.9vw

      .char-video
        display: inline-block
        width: 7vw
        height: 5vw
        margin-right: 1vw
        overflow: hidden
        outline: 2px transparent solid
        position: relative

        &:last-child
          margin-right: 0

        .char-videoInner
          position: absolute
          left: -15%
          height: 100%
          width: 130%
          background: #FFF no-repeat left center / cover

          transform: skew(18.5deg)

        &:hover
          outline: 2px #fff solid


  .characters
    position: absolute
    bottom: 0px
    left: 0
    background: #21041D
    width: 100%
    height: 18.25vw

    &:hover
      .rob
        transform: skew(-18.5deg) translate3D(-5vw,0,0)
      .anne
        transform: skew(-18.5deg) translate3D(-10vw,0,0)
      .topher
        transform: skew(-18.5deg) translate3D(-15vw,0,0)
      .alona
        transform: skew(-18.5deg) translate3D(-20vw,0,0)
      .jc
        transform: skew(-18.5deg) translate3D(-25vw,0,0)
      .taye
        transform: skew(-18.5deg) translate3D(-30vw,0,0)
      .paul
        transform: skew(-18.5deg) translate3D(-35vw,0,0)
      .lesli
        transform: skew(-18.5deg) translate3D(-40vw,0,0)
    .spacer
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      z-index: 9
      &:hover ~ *
        transform: skew(-18.5deg) !important
        
    .char-box
      position: absolute
      bottom: 0
      transform: skew(-18.5deg) translate3D(0,0,0)
      transform-origin: 0% 100%
      height: 18.5vw
      width: 45vw
      max-width: 12.3vw
      overflow: hidden
      cursor: pointer
      z-index: 10
      transition: max-width .3s ease-in-out, transform .3s ease-in-out .3s, z-index 0s ease-in-out .3s
      &:hover
        max-width: 50vw
        z-index: 100
        transition: max-width .3s ease-in-out .3s, transform .3s ease-in-out .3s, z-index 0s ease-in-out 0s

        box-shadow: 0px 2px 13px 0px rgba(0,0,0,0.80), inset 0px 51px 52px 0px #000000

        .char-bg
          opacity: 0
          transform: translateX(-100%)
          transition: opacity 0.3s ease 0.4s, transform 0s ease 0.7s

      .char-inner
        position: absolute
        left: 0
        bottom: 0
        height: 18.5vw
        width: 55vw
        transform: skew(18.5deg)
        transform-origin: 0% 100%
        background: #111111 no-repeat left center / auto 100%

      &.rob
        left: -2vw
        .char-inner
          background-image: url("~assets/images/chars/rob.png")
        &:hover
          transform: skew(-18.5deg) scale(1.1) translate3D(0,0,0)
          &~.anne
            transform: skew(-18.5deg) translate3D(37vw,0,0)
          &~.topher
            transform: skew(-18.5deg) translate3D(32vw,0,0)
          &~.alona
            transform: skew(-18.5deg) translate3D(27vw,0,0)
          &~.jc
            transform: skew(-18.5deg) translate3D(22vw,0,0)
          &~.taye
            transform: skew(-18.5deg) translate3D(17vw,0,0)
          &~.paul
            transform: skew(-18.5deg) translate3D(12vw,0,0)
          &~.lesli
            transform: skew(-18.5deg) translate3D(7vw,0,0)

      &.anne
        left: 10.3vw
        .char-inner
          background-image: url("~assets/images/chars/anne.png")
        &:hover
          transform: skew(-18.5deg) scale(1.1) translate3D(-4.7vw,0,0)
          &~.topher
            transform: skew(-18.5deg) translate3D(32vw,0,0)
          &~.alona
            transform: skew(-18.5deg) translate3D(27vw,0,0)
          &~.jc
            transform: skew(-18.5deg) translate3D(22vw,0,0)
          &~.taye
            transform: skew(-18.5deg) translate3D(17vw,0,0)
          &~.paul
            transform: skew(-18.5deg) translate3D(12vw,0,0)
          &~.lesli
            transform: skew(-18.5deg) translate3D(7vw,0,0)

      &.topher
        left: 22.6vw
        .char-inner
          background-image: url("~assets/images/chars/topher.png")
        &:hover
          transform: skew(-18.5deg) scale(1.1) translate3D(-11vw,0,0)
          &~.alona
            transform: skew(-18.5deg) translate3D(25vw,0,0)
          &~.jc
            transform: skew(-18.5deg) translate3D(20vw,0,0)
          &~.taye
            transform: skew(-18.5deg) translate3D(15vw,0,0)
          &~.paul
            transform: skew(-18.5deg) translate3D(10vw,0,0)
          &~.lesli
            transform: skew(-18.5deg) translate3D(5vw,0,0)


      &.alona
        left: 34.9vw
        .char-inner
          background-image: url("~assets/images/chars/alona.png")
        &:hover
          transform: skew(-18.5deg) scale(1.1) translate3D(-18vw,0,0)
          &~.jc
            transform: skew(-18.5deg) translate3D(17vw,0,0)
          &~.taye
            transform: skew(-18.5deg) translate3D(12vw,0,0)
          &~.paul
            transform: skew(-18.5deg) translate3D(7vw,0,0)
          &~.lesli
            transform: skew(-18.5deg) translate3D(2vw,0,0)

      &.jc
        left: 47.2vw
        .char-inner
          background-image: url("~assets/images/chars/jc.png")
        &:hover
          transform: skew(-18.5deg) scale(1.1) translate3D(-23vw,0,0)
          &~.taye
            transform: skew(-18.5deg) translate3D(11vw,0,0)
          &~.paul
            transform: skew(-18.5deg) translate3D(7vw,0,0)
          &~.lesli
            transform: skew(-18.5deg) translate3D(3vw,0,0)


      &.taye
        left: 59.5vw
        .char-inner
          background-image: url("~assets/images/chars/taye.png")
        &:hover
          transform: skew(-18.5deg) scale(1.1) translate3D(-28vw,0,0)
          &~.paul
            transform: skew(-18.5deg) translate3D(6vw,0,0)
          &~.lesli
            transform: skew(-18.5deg) translate3D(2vw,0,0)

      &.paul
        left: 71.8vw
        .char-inner
          background-image: url("~assets/images/chars/paul.png")
        &:hover
          transform: skew(-18.5deg) scale(1.1) translate3D(-32vw,0,0)
          &~.lesli
            transform: skew(-18.5deg) translate3D(1vw,0,0)

      &.lesli
        left: 84.1vw
        .char-inner
          background-image: url("~assets/images/chars/lesli.png")
        &:hover
          transform: skew(-18.5deg) scale(1.1) translate3D(-35vw,0,0)

</style>

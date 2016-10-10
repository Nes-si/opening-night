<template lang="pug">
  .characters
    .spacer
    .char-box.rob
      .char-inner
        .char-player
          .char-video
          .char-socials

        .char-list
          .char-video
            .char-videoInner
          .char-video
            .char-videoInner
          .char-video
            .char-videoInner
          .char-video
            .char-videoInner

    .char-box.anne
      .char-inner
        .char-player
          .char-video
          .char-socials

        .char-list
          .char-video
            .char-videoInner
          .char-video
            .char-videoInner
          .char-video
            .char-videoInner
          .char-video
            .char-videoInner

    .char-box.topher
      .char-inner
        .char-player
          .char-video
          .char-socials

        .char-list
          .char-video
            .char-videoInner
          .char-video
            .char-videoInner
          .char-video
            .char-videoInner
          .char-video
            .char-videoInner

    .char-box.alona
      .char-inner
        .char-player
          .char-video
          .char-socials

        .char-list
          .char-video
            .char-videoInner
          .char-video
            .char-videoInner
          .char-video
            .char-videoInner
          .char-video
            .char-videoInner

    .char-box.jc
      .char-inner
        .char-player
          .char-video
          .char-socials

        .char-list
          .char-video
            .char-videoInner
          .char-video
            .char-videoInner
          .char-video
            .char-videoInner
          .char-video
            .char-videoInner

    .char-box.taye
      .char-inner
        .char-player
          .char-video
          .char-socials

        .char-list
          .char-video
            .char-videoInner
          .char-video
            .char-videoInner
          .char-video
            .char-videoInner
          .char-video
            .char-videoInner

    .char-box.paul
      .char-inner
        .char-player
          .char-video
          .char-socials

        .char-list
          .char-video
            .char-videoInner
          .char-video
            .char-videoInner
          .char-video
            .char-videoInner
          .char-video
            .char-videoInner

    .char-box.lesli
      .char-inner
        .char-player
          .char-video
          .char-socials

        .char-list
          .char-video
            .char-videoInner
          .char-video
            .char-videoInner
          .char-video
            .char-videoInner
          .char-video
            .char-videoInner



</template>

<script>
  export default {
    name: "CharactersComponent"
  }
</script>

<style lang="sass" scoped rel="stylesheet/sass">
  .characters

    .char-player
      position: absolute;
      left: 20vw
      overflow: hidden;

      .char-video
        height: 15vw
        width: 23.5vw
        background: url("~assets/images/large-video.png")

    .char-list
      position: absolute
      left: 13.4vw
      bottom: 0.8vw;
      width: 32.6vw;
      height: 5vw
      transform: skew(-18.5deg)
      padding-left: 0.9vw;

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

        &:nth-child(1) .char-videoInner
          background-image: url("~assets/images/shot-1.png")
        &:nth-child(2) .char-videoInner
          background-image: url("~assets/images/shot-2.png")
        &:nth-child(3) .char-videoInner
          background-image: url("~assets/images/shot-3.png")
        &:nth-child(4) .char-videoInner
          background-image: url("~assets/images/shot-4.png")

        .char-videoInner
          position: absolute;
          left: -15%;
          height: 100%;
          width: 130%;
          background: #FFF no-repeat left center / cover

          transform: skew(18.5deg);

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
      cursor: pointer;
      z-index: 10
      transition: max-width .3s ease-in-out, transform .3s ease-in-out .3s, z-index 0s ease-in-out .3s
      &:hover
        max-width: 50vw
        z-index: 100
        transition: max-width .3s ease-in-out .3s, transform .3s ease-in-out .3s, z-index 0s ease-in-out 0s

        box-shadow: 0px 2px 13px 0px rgba(0,0,0,0.80), inset 0px 51px 52px 0px #000000;


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

<template lang="pug">
  .characters(@mouseleave="onLeave")
    .spacer
    .char-box(
      v-for="(char, index) of chars"
      v-bind:class="[char.id]"
      v-bind:key="char.id"
      @mouseenter="onEnterChar(index)"
      )
      .char-inner(@touchend="onClickChar(char)")
        .char-bg
        .char-player
          .char-video(v-bind:id="'video-char-' + index")
            .video-player(v-bind:id="'video-player-char-' + index")
            video.giphy(autoplay loop)
          .char-socials
            | SHARE
            a.facebook(href="#")
            a.twitter(href="#")
            a.instagram(href="#")

        .char-list
          .char-video(
            v-for="n in 4" @click="onClickPreview(n - 1)"
            v-bind:class="{'char-video-selected': n - 1 == currentVideo}"
            )
            .char-videoInner(v-bind:style="{ backgroundImage: 'url(' + char.videos[n - 1].preview + ')' }")

</template>

<script>
  import YouTubePlayer from 'youtube-player';


  const TYPE_YOUTUBE = "TYPE_YOUTUBE";
  const TYPE_GIPHY = "TYPE_GIPHY";

  const chars = [
    {
      id: 'rob',
      name: 'Rob Riggle',
      videos: [
        {
          type: TYPE_YOUTUBE,
          id: "ADPk5PpkjMg",
          preview: "assets/images/video-1.png"
        },
        {
          type: TYPE_GIPHY,
          id: "feqkVgjJpYtjy",
          preview: "assets/images/video-2.png"
        },
        {
          type: TYPE_YOUTUBE,
          id: "I3W3mRs4ULQ",
          preview: "assets/images/video-3.png"
        },
        {
          type: TYPE_YOUTUBE,
          id: "XVwqSlTFQq0",
          preview: "assets/images/video-4.png"
        }
      ]
    },
    {
      id: 'anne',
      name: 'Anne Heche',
      videos: [
        {
          type: TYPE_YOUTUBE,
          id: "ADPk5PpkjMg",
          preview: "assets/images/video-1.png"
        },
        {
          type: TYPE_GIPHY,
          id: "3oz8xYi5tmDZYPIrza",
          preview: "assets/images/video-2.png"
        },
        {
          type: TYPE_YOUTUBE,
          id: "I3W3mRs4ULQ",
          preview: "assets/images/video-3.png"
        },
        {
          type: TYPE_YOUTUBE,
          id: "XVwqSlTFQq0",
          preview: "assets/images/video-4.png"
        }
      ]
    },
    {
      id: 'topher',
      name: 'Topher Grace',
      videos: [
        {
          type: TYPE_YOUTUBE,
          id: "ADPk5PpkjMg",
          preview: "assets/images/video-1.png"
        },
        {
          type: TYPE_GIPHY,
          id: "feqkVgjJpYtjy",
          preview: "assets/images/video-2.png"
        },
        {
          type: TYPE_YOUTUBE,
          id: "I3W3mRs4ULQ",
          preview: "assets/images/video-3.png"
        },
        {
          type: TYPE_YOUTUBE,
          id: "XVwqSlTFQq0",
          preview: "assets/images/video-4.png"
        }
      ]
    },
    {
      id: 'alona',
      name: 'Alona Tal',
      videos: [
        {
          type: TYPE_YOUTUBE,
          id: "ADPk5PpkjMg",
          preview: "assets/images/video-1.png"
        },
        {
          type: TYPE_GIPHY,
          id: "feqkVgjJpYtjy",
          preview: "assets/images/video-2.png"
        },
        {
          type: TYPE_YOUTUBE,
          id: "I3W3mRs4ULQ",
          preview: "assets/images/video-3.png"
        },
        {
          type: TYPE_YOUTUBE,
          id: "XVwqSlTFQq0",
          preview: "assets/images/video-4.png"
        }
      ]
    },
    {
      id: 'jc',
      name: 'J. C. Chasez',
      videos: [
        {
          type: TYPE_YOUTUBE,
          id: "ADPk5PpkjMg",
          preview: "assets/images/video-1.png"
        },
        {
          type: TYPE_GIPHY,
          id: "feqkVgjJpYtjy",
          preview: "assets/images/video-2.png"
        },
        {
          type: TYPE_YOUTUBE,
          id: "I3W3mRs4ULQ",
          preview: "assets/images/video-3.png"
        },
        {
          type: TYPE_YOUTUBE,
          id: "XVwqSlTFQq0",
          preview: "assets/images/video-4.png"
        }
      ]
    },
    {
      id: 'taye',
      name: 'Taye Diggs',
      videos: [
        {
          type: TYPE_YOUTUBE,
          id: "ADPk5PpkjMg",
          preview: "assets/images/video-1.png"
        },
        {
          type: TYPE_GIPHY,
          id: "feqkVgjJpYtjy",
          preview: "assets/images/video-2.png"
        },
        {
          type: TYPE_YOUTUBE,
          id: "I3W3mRs4ULQ",
          preview: "assets/images/video-3.png"
        },
        {
          type: TYPE_YOUTUBE,
          id: "XVwqSlTFQq0",
          preview: "assets/images/video-4.png"
        }
      ]
    },
    {
      id: 'paul',
      name: 'Paul Scheer',
      videos: [
        {
          type: TYPE_YOUTUBE,
          id: "ADPk5PpkjMg",
          preview: "assets/images/video-1.png"
        },
        {
          type: TYPE_GIPHY,
          id: "feqkVgjJpYtjy",
          preview: "assets/images/video-2.png"
        },
        {
          type: TYPE_YOUTUBE,
          id: "I3W3mRs4ULQ",
          preview: "assets/images/video-3.png"
        },
        {
          type: TYPE_YOUTUBE,
          id: "XVwqSlTFQq0",
          preview: "assets/images/video-4.png"
        }
      ]
    },
    {
      id: 'lesli',
      name: 'Lesli Margherita',
      videos: [
        {
          type: TYPE_YOUTUBE,
          id: "ADPk5PpkjMg",
          preview: "assets/images/video-1.png"
        },
        {
          type: TYPE_GIPHY,
          id: "feqkVgjJpYtjy",
          preview: "assets/images/video-2.png"
        },
        {
          type: TYPE_YOUTUBE,
          id: "I3W3mRs4ULQ",
          preview: "assets/images/video-3.png"
        },
        {
          type: TYPE_YOUTUBE,
          id: "XVwqSlTFQq0",
          preview: "assets/images/video-4.png"
        }
      ]
    }
  ];

  export default {
    name: "CharactersComponent",

    data: function () {
      return {
        chars,
        "TYPE_YOUTUBE": TYPE_YOUTUBE,
        "TYPE_GIPHY": TYPE_GIPHY,

        currentChar: -1,
        currentVideo: 0,
        player: null,
        players: [],

        playerActive: false,
        timeout: 0,
        
        isMobile: false
      }
    },

    mounted: function () {
      this.isMobile = window.innerWidth < 700;
    },

    methods: {
      setVideo: function () {
        let playerId = `video-player-char-${this.currentChar}`;
        let playerElm = document.getElementById(playerId);

        let giphyElm = document.querySelector(`#video-char-${this.currentChar} .giphy`);

        let h = Math.round(window.innerWidth / 100 * 10.2);
        let w = Math.round(h * 16 / 9);

        let videoData = this.chars[this.currentChar].videos[this.currentVideo];

        if (videoData.type == TYPE_YOUTUBE) {
          if (this.player && this.playerActive) {
            this.player.loadVideoById(videoData.id);
          } else {
            if (this.timeout)
              clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
              this.player = new YouTubePlayer(playerId, {
                playerVars: { 'autoplay': 1, 'controls': 0, 'showinfo': 0, 'rel': 0, 'modestbranding': 1, 'disablekb': 1},
                height: h.toString(),
                width: w.toString(),
                videoId: videoData.id
              });
              this.playerActive = true;
            }, 400);
          }

          giphyElm.style.visibility = 'hidden';
          playerElm.style.visibility = 'visible';

        } else if (videoData.type == TYPE_GIPHY) {
          if (this.playerActive)
            this.player.destroy();
          this.playerActive = false;

          giphyElm.width = w;
          giphyElm.height = h;
          giphyElm.src = (document.location.protocol == "https:" ? "https://" : "http://") +
            `//media.giphy.com/media/${videoData.id}/giphy.mp4`;

          giphyElm.style.visibility = 'visible';
          playerElm.style.visibility = 'hidden';
        }
      },

      onClickPreview: function (num) {
        if (this.currentVideo != num) {
          this.currentVideo = num;
          this.setVideo();
        }
      },

      onEnterChar: function (i) {
        if (this.isMobile)
          return;
        
        if (i != this.currentChar) {
          this.currentChar = i;
          this.currentVideo = 0;

          if (this.playerActive)
            this.player.destroy();
          this.playerActive = false;
          this.setVideo();
        }
      },

      onLeave: function () {
        if (this.timeout)
          clearTimeout(this.timeout);
        if (this.playerActive)
          this.player.destroy();
        this.playerActive = false;
        this.currentChar = -1;
        this.currentVideo = 0;
      },
      
      onClickChar: function (char) {
        if (!this.isMobile)
          return;
        
        this.$emit('showCharMobile', char);
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

        .video-player, .giphy
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

        &:hover, &-selected
          outline: 2px #fff solid


  .characters
    position: absolute
    bottom: 0px
    left: 0
    background: #21041D
    width: 100%
    height: 18.25vw
    box-sizing: content-box
    padding-top: 0.2vw

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
<style lang="scss" scoped rel="stylesheet/scss">
  @media (max-width: 510px) {
    .characters {
      height: 73vw;

      &:hover {
        .rob {
          transform: skew(-18.5deg);
        }
        .anne {
          transform: skew(-18.5deg);
        }
        .topher {
          transform: skew(-18.5deg);
        }
        .alona {
          transform: skew(-18.5deg);
        }
        .jc {
          transform: skew(-18.5deg);
        }
        .taye {
          transform: skew(-18.5deg);
        }
        .paul {
          transform: skew(-18.5deg);
        }
        .lesli {
          transform: skew(-18.5deg);
        }
      }

      .char-box {
        height: 36.5vw;
        max-width: 24.6vw;


        &:hover,
        &:hover ~ * {
          transform: skew(-18.5deg) !important;
          z-index: 0;
        }

        .char-bg,
        .char-list,
        .char-player {
          display: none;
        }

        .char-inner {
          height: 36.5vw;
        }

        &.rob {
          top: 0;
          left: -2vw;
        }

        &.anne {
          left: 0;
        }

        &.topher {
          top: 0;
          left: 20.6vw;
        }

        &.alona {
          left: 20.6vw;
        }

        &.jc {
          top: 0;
          left: 44.8vw;
        }

        &.taye {
          left: 44.8vw;
        }

        &.paul {
          top: 0;
          left: 69.2vw;
        }

        &.lesli {
          left: 69.2vw;
        }
      }
    }
  }
</style>

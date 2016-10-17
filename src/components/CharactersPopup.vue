<template lang="pug">
  .characters-popup
    .head
      .name
        | {{charData.name}}
      .cross(@click="onClose")

    .video
      .video-player(id="popup-video")
      video.giphy(id="popup-giphy" autoplay loop)

    .footer
      .socials
        | SHARE
        a.facebook(href="#")
        a.twitter(href="#")
        a.instagram(href="#")

      .list-videos
        .list-video(
          v-for="n in 4" @click="onClickPreview(n - 1)"
          v-bind:class="{'char-video-selected': n - 1 == currentVideo}"
          )
          .img(v-bind:style="{ backgroundImage: 'url(' + charData.videos[n - 1].preview + ')' }")
</template>

<script>
  import YouTubePlayer from 'youtube-player';
  
  
  const TYPE_YOUTUBE = "TYPE_YOUTUBE";
  const TYPE_GIPHY = "TYPE_GIPHY";
  
  export default {
    name: "CharactersPopupComponent",
  
    props: ['charData'],
    
    data: function() {
      return {
        "TYPE_YOUTUBE": TYPE_YOUTUBE,
        "TYPE_GIPHY": TYPE_GIPHY,
        
        currentVideo: 0,
        player: null,
        playerActive: false
      }
    },
    
    methods: {
      onClose: function () {
        this.$emit('close');
      },
  
      setVideo: function () {
        let playerId = "popup-video";
        let playerElm = document.getElementById(playerId);
        let giphyElm = document.getElementById("popup-giphy");
    
        let w = Math.round(window.innerWidth);
        let h = Math.round(w / 16 * 9);
    
        let videoData = this.charData.videos[this.currentVideo];
    
        if (videoData.type == TYPE_YOUTUBE) {
          if (this.player && this.playerActive) {
            this.player.loadVideoById(videoData.id);
          } else {
            this.player = new YouTubePlayer(playerId, {
              playerVars: {'autoplay': 1, 'controls': 0, 'showinfo': 0, 'rel': 0, 'modestbranding': 1, 'disablekb': 1},
              height: h.toString(),
              width: w.toString(),
              videoId: videoData.id
            });
            this.playerActive = true;
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
      }
    },
    
    mounted: function() {
      this.setVideo();
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  .characters-popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #191919;
    z-index: 125;

    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;

    .head {
      background: #000000;
      position: relative;

      display: flex;
      flex-flow: row nowrap;
      align-items: center;

      padding: 0 25px;

      .name {
        opacity: 0.65;
        font-family: 'Open Sans', sans-serif;
        font-weight: bold;
        font-size: 14px;
        color: #FFFFFF;
        letter-spacing: 1.13px;
        line-height: 45px;
        text-transform: uppercase;
      }

      .cross {
        background: url('~assets/images/cancel.svg') no-repeat center center / contain;
        height: 15px;
        width: 16px;

        position: absolute;
        right: 23px;
        top: 16px;
      }
    }

    .video {
      img {
        width: 100%;
      }
    }

    .footer {
      .socials {
        margin-top: 1vw;
        margin-left: 1vw;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;

        font-family: 'Open Sans Condensed';
        font-size: 10px;
        color: #FFFFFF;
        letter-spacing: 0.81px;

        .facebook,
        .twitter,
        .instagram {
          display: block;
          height: 30px;
          width: 30px;
          margin-top: 0.5vw;
          border-radius: 100px;
          background: #000 no-repeat center center / contain;
          margin-right: 10px;
        }

        .facebook {
          background-image: url('~assets/images/facebook.svg');
          margin-left: 15px;
        }

        .twitter {
          background-image: url('~assets/images/twitter.svg');
        }

        .instagram {
          background-image: url('~assets/images/instagram.svg');
          margin-right: 0;
        }
      }
    }

    .list-videos {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;

      margin-top: 22px;
      margin-bottom: 40px;

      .list-video {
        width: 25%;

        border: 2px transparent solid;

        &:hover {
          z-index: 10;
          border: 2px #fff solid;
        }

        .img {
          width: 100%;
          height: 100px;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;
        }
      }
    }
  }
</style>

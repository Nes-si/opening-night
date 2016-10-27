<template lang="pug">
  .characters-popup
    .head
      .name
        | {{charData.name}}
      .cross(@click="onClose")

    .video
      .video-player(id="popup-video" v-show="currentType == TYPE_YOUTUBE")
      video.giphy(id="popup-giphy" autoplay loop v-show="currentType == TYPE_GIPHY")

    .footer
      .socials
        | SHARE
        .facebook(@click="openFBVideoPost")
        .twitter(@click="openTWVideoPost")
      .list-videos
        .list-video(
          v-for="n in 4" @click="onClickPreview(n - 1)"
          v-bind:class="{'char-video-selected': n - 1 == currentVideo}"
          )
          .img(v-bind:style="{ backgroundImage: 'url(' + charData.videos[n - 1].preview + ')' }")
</template>

<script>
  import YouTubePlayer from 'youtube-player';
  import store from 'store/Store';
  
  
  export default {
    name: "CharactersPopupComponent",
    
    props: ['charData'],
    
    data: function() {
      return {
        "TYPE_YOUTUBE": store().TYPE_YOUTUBE,
        "TYPE_GIPHY": store().TYPE_GIPHY,
        currentVideo: 0,
        player: null,
        playerActive: false,
        currentType: store().TYPE_YOUTUBE
      }
    },

    methods: {
      openFBVideoPost: function () {
        let url = store().getFBVideoPost(this.charData.videos[this.currentVideo]);
        store().openSocialPopup(url, 'Facebook share');
      },
      
      openTWVideoPost: function () {
        let url = store().getTWVideoPost(this.charData.videos[this.currentVideo], this.charData.twName);
        store().openSocialPopup(url, 'Twitter share');
      },

      onClose: function () {
        this.$emit('close');
      },
      
      setVideo: function () {
        let giphyElm = document.getElementById("popup-giphy");
        let w = Math.round(window.innerWidth);
        let h = Math.round(w / 16 * 9);
        let videoData = this.charData.videos[this.currentVideo];
        
        if (videoData.type == this.TYPE_YOUTUBE) {
          if (this.player && this.playerActive) {
            this.player.loadVideoById(videoData.id);
          } else {
            this.player = new YouTubePlayer("popup-video", {
              playerVars: {'autoplay': 0, 'controls': 0, 'showinfo': 0, 'rel': 0, 'modestbranding': 1, 'disablekb': 1},
              height: h.toString(),
              width: w.toString(),
              videoId: videoData.id
            });
            this.playerActive = true;
            if (!store().isGadget)
              this.player.playVideo();
          }
          
        } else if (videoData.type == this.TYPE_GIPHY) {
          if (this.playerActive)
            this.player.destroy();
          this.playerActive = false;
          
          giphyElm.width = w;
          giphyElm.height = h;
          giphyElm.src = (document.location.protocol == "https:" ? "https://" : "http://") +
            `//media.giphy.com/media/${videoData.id}/giphy.mp4`;
        }
        
        this.currentType = videoData.type;
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
    z-index: 99999;

    overflow-y: scroll;

    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;

    .head {
      background: #000000;
      position: relative;

      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      min-height: 45px;
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
      width: 100%;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      position: relative;
      overflow: hidden;
      height: 55vw;

      & > * {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
      }

      .giphy {
        pointer-events: none;
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
          cursor: pointer;
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
        height: 18vw;
        overflow: hidden;
        position: relative;
        border: 2px transparent solid;

        &:hover {
          z-index: 10;
          border: 2px #fff solid;
        }

        .img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          width: 100%;
          height: 100px;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;
        }
      }
    }
  }


  @media (max-height: 375px) {
    .characters-popup {
      flex-flow: row nowrap;
      overflow: hidden;

      .head {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 123;
      }

      .video {
        height: 67%;
        margin-top: 70px;
        width: 74%;
      }

      .footer {
        width: 24.5%;

        .socials {
          position: absolute;
          bottom: 8px;
          left: 37%;
          transform: translateX(-50%);


          .facebook,
          .twitter {
            height: 20px;
            width: 20px;
            margin-top: 0;
          }
        }
      }


      .list-videos {
        flex-flow: column nowrap;
        justify-content: space-between;
        padding-top: 50px;
        margin-top: 0;
        height: 100%;
        padding-right: 8px;
        padding-bottom: 6px;

        .list-video {
          width: 100%;
          height: 20vh;
        }
      }
    }
  }
</style>

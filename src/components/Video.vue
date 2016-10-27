<template lang="pug">
  .video#video-anchor
    .video-desktop
      .video-container
        .video-player#main-video(v-show="currentType == TYPE_YOUTUBE")
        video.giphy(autoplay loop v-show="currentType == TYPE_GIPHY")

      .video-list
        .arrow.arrow-hover.arrow-left(@click="onClickArrow(true)")

        .group-container
          .group.is-set
            .item(
              v-for="(item, index) of items"
              v-bind:key="item.url"
              v-bind:class="{ isRef: index == items.length - 1 }"
              @click="onClickItem(item)"
              )
              .img(:style="{ backgroundImage: 'url(' + item.preview + ')' }")
              .text
                | {{item.text}}
              .bg
              .play

        .arrow.arrow-hover.arrow-right(@click="onClickArrow(false)")

    .video-mobile
      .group-container
        transition-group.group(name="mobile" tag="div")
          .item(
            v-for="(item, index) of itemsMobile"
            v-bind:key="item.id"
            @click="onClickItemMobile(index)"
            )
            .item-inner
              .img(:style="{ backgroundImage: 'url(' + item.preview + ')' }" v-show="currentItem != item")
              .text
                | {{item.text}}
              .bg
              .video-player(v-show="currentItem == item")
                .youtube(v-bind:id="'mobile-video-' + index" v-show="item.type == TYPE_YOUTUBE")
                video.giphy(autoplay loop v-bind:id="'mobile-giphy-' + index" v-show="item.type == TYPE_GIPHY")

    .more-clips(@click="onClickMore" v-if="moreBtnVisible")
      | MORE CLIPS
</template>

<script>
  import {TweenLite} from 'gsap';
  import 'gsap/src/uncompressed/plugins/ScrollToPlugin';
  import YouTubePlayer from 'youtube-player';
  import debounce from 'throttle-debounce/debounce';
  
  import store from 'store/Store';


  const MOBILE_ON_PAGE = 3;

  export default {
    name: "VideoComponent",

    data: function () {
      return {
        "TYPE_YOUTUBE": store().TYPE_YOUTUBE,
        "TYPE_GIPHY": store().TYPE_GIPHY,
        items: store().mainVideos,
        
        currentItem: null,
        
        itemsMobile: store().mainVideos.slice(0, MOBILE_ON_PAGE),
        moreBtnVisible: true,

        itemGroup: null,
        itemElms: null,

        player: null,
        giphyElm: null,
  
        currentType: store().TYPE_YOUTUBE,
        
        isMobileView: false
      }
    },
    
    mounted: function () {
      window.addEventListener('resize', this.onResize);
      this.onResize();
    },

    methods: {
      onResize: function () {
        if (this.player && this.isMobileView != window.innerWidth <= 700) {
          this.player.destroy();
          this.player = null;
        }
        debounce(300, () => {
          if (window.innerWidth <= 700) {
            this.isMobileView = true;
            this.currentItem = null;
          } else {
            this.isMobileView = false;
            this.currentItem = this.items[0];
        
            this.itemGroup = document.querySelector('.video .video-list .group');
            this.itemElms = document.querySelectorAll('.video .video-list .item');
        
            this.giphyElm = document.querySelector(`.video .video-desktop .giphy`);
        
            this.setVideo();
        
            let dimH = Math.round(window.innerHeight / 9 * .8);
            let dimW = Math.round(window.innerWidth / 16 * .8);
            let dim = Math.min(dimH, dimW);
        
            if (this.player)
              this.player.setSize(dim * 16, dim * 9);
        
            let container = document.querySelector('.video .video-desktop .video-container');
            this.giphyElm.height = dim * 9;
            this.giphyElm.width = dim * 16;
          }
        })();
      },
      
      getPlaylist: function (isFirst) {
        let ind = this.items.indexOf(this.currentItem);
        let res = [];
        for (let i = isFirst ? ind : ind + 1; i < this.items.length; i++) {
          res.push(this.items[i].id);
        }
        for (let i = 0; i < ind; i++) {
          res.push(this.items[i].id);
        }
        return res.join(',');
      },
      
      setVideo: function () {
        this.currentType = this.currentItem.type;
        if (this.currentItem.type == this.TYPE_YOUTUBE) {
          if (this.player) {
            this.player.loadPlaylist(this.getPlaylist(true));
          } else {
            this.player = new YouTubePlayer('main-video', {
              playerVars: {autoplay: 0, controls: 1, showinfo: 0, rel: 0, modestbranding: 1, disablekb: 0, playlist: this.getPlaylist()},
              videoId: this.currentItem.id
            });
          }

        } else if (this.currentItem.type == this.TYPE_GIPHY) {
          this.giphyElm.src = (document.location.protocol == "https:" ? "https://" : "http://") +
            `//media.giphy.com/media/${this.currentItem.id}/giphy.mp4`;
        }
  
        if (this.player)
          this.player.stopVideo();
      },
  
      onClickItem: function (item) {
        if (this.currentItem == item)
          return;
        this.currentItem = item;
        
        TweenLite.to(window, .5, {scrollTo: "#video-anchor"});
        this.setVideo();
        if (this.player && this.currentType == this.TYPE_YOUTUBE)
          this.player.playVideo();
      },

      next: function (num) {
        if (num < this.items.length - 1)
          return num + 1;
        else
          return 0;
      },

      prev: function (num) {
        if (num > 0)
          return num - 1;
        else
          return this.items.length - 1;
      },

      search: function (elm) {
        for (let i = 0; i < this.itemElms.length; i++) {
          let tempElm = this.itemElms[i];
          if (tempElm == elm)
            return i;
        }
        return -1;
      },

      onClickArrow: function (isPrev) {
        let elm =  document.querySelector('.video .video-list .item.isRef');
        elm.classList.remove('isRef');

        let num;
        if (isPrev) {
          num = this.prev(this.search(elm));
          this.itemGroup.classList.add('is-reversing');
        } else {
          num = this.next(this.search(elm));
          this.itemGroup.classList.remove('is-reversing');
        }

        let newItem = this.itemElms[num];
        newItem.classList.add('isRef');
        newItem.style.order = 1;
        for (let i = 2; i <= this.itemElms.length; i++) {
          num = this.next(num);
          let elm = this.itemElms[num];
          elm.style.order = i;
        }

        this.itemGroup.classList.remove('is-set');
        setTimeout(() => this.itemGroup.classList.add('is-set'), 50);
      },
      
      onClickMore: function () {
        this.itemsMobile = this.items;
        this.moreBtnVisible = false;
      },
  
      onClickItemMobile: function (index) {
        if (this.currentItem == this.itemsMobile[index])
          return;
        this.currentItem = this.itemsMobile[index];
  
        if (this.player) {
          this.player.destroy();
          this.player = null;
        }
  
        let h = Math.round(window.innerHeight / 3);
        let w = Math.round(window.innerWidth);
        
        if (this.currentItem.type == this.TYPE_YOUTUBE) {
          this.player = new YouTubePlayer(`mobile-video-${index}`, {
            playerVars: { 'autoplay': 0, 'controls': 0, 'showinfo': 0, 'rel': 0, 'modestbranding': 1, 'disablekb': 0},
            videoId: this.currentItem.id,
            height: h.toString(),
            width: w.toString()
          });
          setTimeout(() => this.player.playVideo(), 500);
          
        } else if (this.currentItem.type == this.TYPE_GIPHY) {
          let giphyElm = document.getElementById(`mobile-giphy-${index}`);
          giphyElm.src = (document.location.protocol == "https:" ? "https://" : "http://") +
            `//media.giphy.com/media/${this.currentItem.id}/giphy.mp4`;
          giphyElm.width = w;
          giphyElm.height = h;
        }
      }
    }
  }
</script>

<style lang="sss" scoped rel="stylesheet/sass">
  .video
    background: #25182A

    .more-clips
      display: none

    .video-desktop
      padding-top: 30px
      padding-bottom: 30px
      @media (max-width: 700px)
        display: none

      .video-container
        text-align: center

      .video-player, .giphy
        position: absolute
        left: 0
        
      .giphy
        left: 50%
        transform: translateX(-50%)

    .video-list
      margin-top: 15px
      display: flex
      justify-content: space-between
      align-items: center

      .arrow
        min-width: 31px
        height: 38px
        cursor: pointer

      .arrow-hover:hover
        filter: drop-shadow(0px 0px 2px #ffffff)

      .arrow-left
        background: url("~assets/images/arrow-left.svg") no-repeat center center / contain
        margin-right: 24px

      .arrow-right
        background: url("~assets/images/arrow-right.svg") no-repeat center center / contain
        margin-left: 24px

      .group-container
        flex-grow: 1
        height: 183px
        overflow: hidden

        .group
          display: flex
          flex-flow: row nowrap
          justify-content: space-between
          align-items: center

          height: 100%
          position: relative
          left: -25%
          transform: translateX(25%)

          @media (max-width: 1200px)
            left: -33.33333%
            transform: translateX(33.33333%)

        .group.is-reversing
          transform: translateX(-25%)

          @media (max-width: 1200px)
            transform: translateX(-33.33333%)

        .group.is-set
          transform: none !important
          transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)

        .item
          flex-grow: 1
          flex-shrink: 0
          flex-basis: 24.5%
          order: 2
          height: 100%
          margin-right: 0.5%

          @media (max-width: 1200px)
            flex-basis: 32.83333%

        .isRef
          order: 1

    .item
      cursor: pointer
      position: relative
      
      .img
        width: 100%
        height: 100%
        background-repeat: no-repeat
        background-position: center center
        background-size: cover

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
        pointer-events: none
        width: 70%

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
        pointer-events: none
        
      .video-player
        width: 100%
        height: 100%
        top: 0
        left: 0
        position: absolute
        

      &:hover
        .play
          @media (min-width: 769px)
            opacity: 1

        .text
          @media (min-width: 769px)
            opacity: 0
      
    .item-inner
      position: relative
      height: 100%
      width: 100%
  
  
    .video-mobile
      padding: 0
      position: relative

      @media (min-width: 701px)
        display: none

      .item
        height: 33.33333vh
        
  
  .mobile-enter-active, .mobile-leave-active
    transition: opacity 1s
  
  .mobile-enter, .mobile-leave-active
    opacity: 0


</style>

<style lang="scss" scoped>
  @media (max-width: 699px) {
    .video .more-clips {
      background: #FEBE3F;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 20.79px;
      color: #FFFFFF;
      letter-spacing: 1.68px;
      height: 60px;
    }
  }
</style>

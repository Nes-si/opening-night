<template lang="pug">
  .video#video-anchor
    .video-desktop
      .video-container
        .video-player#main-video
        video.giphy(autoplay loop)

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
            )
            .item-inner
              .img(:style="{ backgroundImage: 'url(' + item.preview + ')' }")
              .text
                | {{item.text}}
              .bg
              .play

    .more-clips(@click="onClickMore")
      | MORE CLIPS
</template>

<script>
  import {TweenLite} from 'gsap';
  import 'gsap/src/uncompressed/plugins/ScrollToPlugin';
  import YouTubePlayer from 'youtube-player';
  import debounce from 'throttle-debounce/debounce';


  const TYPE_YOUTUBE = "TYPE_YOUTUBE";
  const TYPE_GIPHY = "TYPE_GIPHY";
  
  const MOBILE_ON_PAGE = 3;

  const items = [
    {
      type: TYPE_YOUTUBE,
      id: "jh-hzbG5FzI",
      preview: "assets/images/video-1.png",
      text: "CHOPSTICKS"
    },
    {
      type: TYPE_GIPHY,
      id: "l41YktuUJjzzOshri",
      preview: "assets/images/video-2.png",
      text: "WELCOME TO WONDERLAND"
    },
    {
      type: TYPE_YOUTUBE,
      id: "d9TpRfDdyU0",
      preview: "assets/images/video-3.png",
      text: "WORDS, SAY WORDS"
    },
    {
      type: TYPE_YOUTUBE,
      id: "XVwqSlTFQq0",
      preview: "assets/images/video-4.png",
      text: "CHOPSTICKS"
    },
    {
      type: TYPE_YOUTUBE,
      id: "I3W3mRs4ULQ",
      preview: "assets/images/video-3.png",
      text: "WELCOME TO WONDERLAND"
    },
    {
      type: TYPE_YOUTUBE,
      id: "ElvLZMsYXlo",
      preview: "assets/images/video-4.png",
      text: "WORDS, SAY WORDS"
    }
  ];

  export default {
    name: "VideoComponent",

    data: function () {
      return {
        currentItem: items[0],
        items: items,
        
        itemsMobile: items.slice(0, MOBILE_ON_PAGE),
        mobilePages: Math.ceil(items.length / MOBILE_ON_PAGE),
        mobilePage: 0,

        itemGroup: null,
        itemElms: null,

        player: null,
        giphyElm: null
      }
    },

    mounted: function () {
      window.addEventListener('resize', this.onResize);

      this.itemGroup = document.querySelector('.video .video-list .group');
      this.itemElms = document.querySelectorAll('.video .video-list .item');

      this.giphyElm = document.querySelector(`.video .video-desktop .giphy`);

      this.setVideo();
      this.onResize();
    },

    methods: {
      setVideo: function () {
        let playerElm = document.getElementById('main-video');

        if (this.currentItem.type == TYPE_YOUTUBE) {
          if (this.player) {
            this.player.loadVideoById(this.currentItem.id);
          } else {
            this.player = new YouTubePlayer('main-video', {
              playerVars: { 'autoplay': 0, 'controls': 1, 'showinfo': 1, 'rel': 0, 'modestbranding': 1, 'disablekb': 0},
              videoId: this.currentItem.id
            });
          }

          this.giphyElm.style.visibility = 'hidden';
          playerElm.style.visibility = 'visible';

        } else if (this.currentItem.type == TYPE_GIPHY) {
          this.giphyElm.src = (document.location.protocol == "https:" ? "https://" : "http://") +
            `//media.giphy.com/media/${this.currentItem.id}/giphy.mp4`;
  
          if (this.player)
            this.player.stopVideo();
          this.giphyElm.style.visibility = 'visible';
          playerElm.style.visibility = 'hidden';
        }
      },

      onResize: function () {
        debounce(300, () => {
          let dimH = Math.round(window.innerHeight / 9 * .8);
          let dimW = Math.round(window.innerWidth / 16 * .8);
          let dim = Math.min(dimH, dimW);

          if (this.player)
            this.player.setSize(dim * 16, dim * 9);

          let container = document.querySelector('.video .video-desktop .video-container');
          this.giphyElm.height = dim * 9;
          this.giphyElm.width = dim * 16;
        })();
      },

      onClickItem: function (item) {
        this.currentItem = item;
        TweenLite.to(window, .5, {scrollTo: "#video-anchor"});
        this.setVideo();
      },

      next: function (num) {
        if (num < items.length - 1)
          return num + 1;
        else
          return 0;
      },

      prev: function (num) {
        if (num > 0)
          return num - 1;
        else
          return items.length - 1;
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
        if (this.mobilePage >= this.mobilePages - 1)
          this.mobilePage = 0;
        else
          this.mobilePage++;
        
        this.itemsMobile.splice(0, this.itemsMobile.length);
        for (let i = 0; i < MOBILE_ON_PAGE; i++) {
          let ind = MOBILE_ON_PAGE * this.mobilePage + i;
          if (ind < this.items.length)
            this.itemsMobile.push(this.items[ind]);
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

      &:hover
        .play
          opacity: 1

        .text
          opacity: 0
      
    .item-inner
      position: relative
      height: 100%
      width: 100%
  
  
    .video-mobile
      padding: 0
      position: relative
      height: 100vh

      @media (min-width: 700px)
        display: none

      .item
        position: absolute
        top: 0
        height: 33.33333vh
        width: 100%
        
      .item:nth-child(3n+2)
        top: 33.33333vh
      
      .item:nth-child(3n)
        top: 66.66666vh
        
  
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

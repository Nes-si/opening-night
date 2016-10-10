<template lang="pug">
  .video
    .video-full#video-anchor
      iframe(:src="currentItem.url" frameborder="0" allowfullscreen)

    .video-list
      .arrow.arrow-hover.arrow-left(@click="onClickArrow(true)")

      .group-container
        .group.is-set
          .item(
            v-for="(item, index) of currentItems"
            v-bind:key="item.url"
            v-bind:class="{ isRef: index == currentItems.length - 1 }"
            @click="onClickItem(item)"
            )
            .img(:style="{ backgroundImage: 'url(' + item.preview + ')' }")
            .text
              | {{item.text}}
            .bg
            .play

      .arrow.arrow-hover.arrow-right(@click="onClickArrow(false)")
</template>

<script>
  import {TweenLite} from 'gsap';
  import ScrollToPlugin from 'gsap/src/uncompressed/plugins/ScrollToPlugin';

  const items = [
    {
      url: "https://www.youtube.com/embed/jh-hzbG5FzI?rel=0",
      preview: "assets/images/video-1.png",
      text: "1"
    },
    {
      url: "//giphy.com/embed/l41YktuUJjzzOshri?hideSocial=true",
      preview: "assets/images/video-2.png",
      text: "2"
    },
    {
      url: "https://www.youtube.com/embed/d9TpRfDdyU0?rel=0",
      preview: "assets/images/video-3.png",
      text: "3"
    },
    {
      url: "https://www.youtube.com/embed/XVwqSlTFQq0?rel=0",
      preview: "assets/images/video-4.png",
      text: "4"
    },
    {
      url: "https://www.youtube.com/embed/I3W3mRs4ULQ?rel=0",
      preview: "assets/images/video-3.png",
      text: "5"
    },
    {
      url: "https://www.youtube.com/embed/XVwqSlTFQq0?rel=0",
      preview: "assets/images/video-4.png",
      text: "6"
    }
  ];

  export default {
    name: "VideoComponent",

    data: function () {
      return {
        currentItem: items[0],
        currentItems: items,

        itemGroup: null,
        itemElms: null,
      }
    },

    mounted: function () {
      this.itemGroup = document.querySelector('.video .video-list .group');
      this.itemElms = document.querySelectorAll('.video .video-list .item');
    },

    methods: {
      onClickItem: function (item) {
        this.currentItem = item;
        TweenLite.to(window, .5, {scrollTo: "#video-anchor"});
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
      }
    }
  }
</script>

<style lang="sss" scoped rel="stylesheet/sass">
  .video
    background: #25182A
    padding: 30px

    &-full
      position: relative
      padding-bottom: 50%
      padding-top: 25px
      height: 0

      iframe
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%

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

      .group.is-reversing
        transform: translateX(-25%)

      .group.is-set
        transform: none
        transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)

      .item
        position: relative
        cursor: pointer
        flex-grow: 1
        flex-shrink: 0
        flex-basis: 24.5%
        order: 2
        height: 100%
        margin-right: 0.5%

        &:hover
          .play
            opacity: 1

          .text
            opacity: 0

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

      .isRef
        order: 1



</style>

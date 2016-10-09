<template lang="pug">
  .video
    .video-full
      iframe(:src="currentItem.url" frameborder="0" allowfullscreen)

    .video-list
      .arrow.arrow-left(@click="onClickLeft")
  
      transition-group.group(tag="div")
        .video-item(v-for="(item, index) of currentItems" key="index")
          .img(:style="{ backgroundImage: 'url(' + item.preview + ')' }")
          .text
            | {{item.text}}
          .bg
          .play(@click="onClickItem(item)")
  
      .arrow.arrow-hover.arrow-right(@click="onClickRight")
</template>

<script>
  const YOUTUBE = "youtube";
  const GIPHY = "giphy";
  const ITEMS_ON_PAGE = 4;
  
  const items = [
    {
      type: YOUTUBE,
      url: "https://www.youtube.com/embed/jh-hzbG5FzI?rel=0",
      preview: "assets/images/video-1.png",
      text: "CHOPSTICKS"
    },
    {
      type: YOUTUBE,
      url: "https://www.youtube.com/embed/-_MSyT1SqLY?rel=0",
      preview: "assets/images/video-2.png",
      text: "WELCOME TO WONDERLAND"
    },
    {
      type: YOUTUBE,
      url: "https://www.youtube.com/embed/d9TpRfDdyU0?rel=0",
      preview: "assets/images/video-3.png",
      text: "WORDS, SAY WORDS"
    },
    {
      type: YOUTUBE,
      url: "https://www.youtube.com/embed/XVwqSlTFQq0?rel=0",
      preview: "assets/images/video-4.png",
      text: "ПЫЩЬ ПЫЩЬ"
    },
    {
      type: YOUTUBE,
      url: "https://www.youtube.com/embed/I3W3mRs4ULQ?rel=0",
      preview: "assets/images/video-3.png",
      text: "ПЫЩЬ"
    }
  ];
  
  export default {
    name: "VideoComponent",
    
    data: function () {
      return {
        pos: 0,
        currentItem: items[0],
        currentItems: [],
        
        leftArrow: null,
        rightArrow: null,
        
        maxPos: items.length - ITEMS_ON_PAGE
      }
    },
    
    created: function () {
      for (let i = 0; i < Math.min(ITEMS_ON_PAGE, items.length); i++) {
        this.currentItems.push(items[i]);
      }
    },
    
    mounted: function () {
      this.leftArrow = document.querySelector('.video .video-list .arrow-left');
      this.rightArrow = document.querySelector('.video .video-list .arrow-right');
    },
    
    methods: {
      onClickItem: function (item) {
        this.currentItem = item;
      },
      onClickLeft: function () {
        if (this.pos > 0) {
          this.pos--;
          this.currentItems.pop();
          this.currentItems.unshift(items[this.pos]);
          
          if (this.pos == 0)
            this.leftArrow.classList.remove('arrow-hover');
          if (this.pos < this.maxPos)
            this.rightArrow.classList.add('arrow-hover');
        }
      },
      onClickRight: function () {
        if (this.pos < this.maxPos) {
          this.pos++;
          this.currentItems.shift();
          this.currentItems.push(items[this.pos + ITEMS_ON_PAGE - 1]);
    
          if (this.pos == this.maxPos)
            this.rightArrow.classList.remove('arrow-hover');
          if (this.pos > 0)
            this.leftArrow.classList.add('arrow-hover');
        }
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
      padding-bottom: 56.25%
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
      width: 31px
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
      
    .group
      display: flex
      flex-flow: row nowrap
      justify-content: space-between
      align-items: center
      flex-grow: 1
      height: 183px
      
    &-item
      position: relative
      cursor: pointer
      flex-grow: 1
      height: 100%
      
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
  
</style>

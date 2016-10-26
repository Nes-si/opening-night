<template lang="pug">
  #app(class="loading")
    preloader-component

    characters-popup-component(v-on:close="setCharMobile(false)" v-if="charMobileOpened" v-bind:charData="charMobileData")

    purchase-component(v-on:close="setWatch(false)" v-if="watchOpened")

    .trailer-video(v-bind:class="{ 'trailer-video-active': this.trailerActive }")
      .video-player#trailer-video

    menu-component(v-on:watchOpen="setWatch(true)" v-on:nav="onScroll" v-bind:currentSection="currentSection")

    header-component(v-on:watchOpen="setWatch(true)" v-on:watchTrailer="trailerWatch" v-on:showCharMobile="setCharMobile($event)")

    slider-component

    .watch-it-now.watch-it-now-mobile(@click="setWatch(true)" v-if="false")
      .bg-1
      .bg-2
      .title
        | Watch It Now
      .subtitle
        | starting at $2.99 on Amazon Demand

    video-component

    download-component

    ul.juicer-feed(data-feed-id="blah-blah-blah")

    .watch-it-now(@click="setWatch(true)" v-bind:class="{ 'watch-it-now-show': this.showWatchIt }")
      .bg-1
      .bg-2
      .title
        | Watch It Now
      .subtitle
        | starting at $2.99 on Amazon Demand

    .footer(v-bind:class="{ 'footer-watch-it': this.showWatchIt }")
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
import YouTubePlayer from 'youtube-player';
import debounce from 'throttle-debounce/debounce';

import HeaderComponent from 'components/Header';
import SliderComponent from 'components/Slider';
import VideoComponent from 'components/Video';
import MenuComponent from 'components/Menu';
import PreloaderComponent from 'components/Preloader';
import PurchaseComponent from 'components/Purchase';
import DownloadComponent from 'components/Download';
import CharactersPopupComponent from 'components/CharactersPopup';
import store from 'store/Store';


const trailerVideo = "BJwKK08_cPg";

export default {
  components: {
    HeaderComponent,
    SliderComponent,
    VideoComponent,
    MenuComponent,
    PreloaderComponent,
    PurchaseComponent,
    DownloadComponent,
    CharactersPopupComponent
  },

  data: function() {
    return {
      watchOpened: false,
      charMobileOpened: false,
      charMobileData: null,

      currentSection: null,
      load: false,
      player: null,
      playerElm: null,
      trailerActive: false,

      showWatchItByScroll: false,
      showWatchItByOpening: true
    }
  },

  computed: {
    showWatchIt: function () {
      return this.showWatchItByScroll && this.showWatchItByOpening;
    }
  },

  mounted: function () {
    if (document.readyState != 'loading')
      this.handleLoad();
    else
      document.addEventListener('DOMContentLoaded', this.handleLoad);

    window.addEventListener('scroll', this.onScroll);
    /*
    document.addEventListener('fullscreenchange', this.onFSChange);
    document.addEventListener('webkitfullscreenchange', this.onFSChange);
    document.addEventListener('mozfullscreenchange', this.onFSChange);
    document.addEventListener('MSFullscreenChange', this.onFSChange);
    */

    store().onReady();
    this.currentSection = store().SECTION_CAST;
  },

  methods: {
    handleLoad: function () {
      document.querySelector('#app').className = '';
    },

    onScroll: function () {
      debounce(100, () => {
        if (this.watchOpened || this.charMobileOpened)
          return;

        if (this.trailerActive)
          this.trailerRemove();

        if (window.pageYOffset > store().sectionContest.offsetTop - window.innerHeight / 2)
          this.currentSection = store().SECTION_CONTEST;
        else if (window.pageYOffset > store().sectionClips.offsetTop - window.innerHeight / 2)
          this.currentSection = store().SECTION_CLIPS;
        else if (window.pageYOffset > store().sectionReviews.offsetTop - window.innerHeight / 2)
          this.currentSection = store().SECTION_REVIEWS;
        else
          this.currentSection = store().SECTION_CAST;

        this.showWatchItByScroll = window.scrollY > window.innerHeight;
      })();
    },

    setWatch: function (open) {
      this.showWatchItByOpening = false;
      this.watchOpened = open;
    },

    setCharMobile: function (data) {
      this.charMobileOpened = !!data;
      this.charMobileData = data;
    },

    trailerWatch: function () {
      this.player = new YouTubePlayer('trailer-video', {
        playerVars: {'autoplay': 0, 'controls': 1, 'showinfo': 1, 'rel': 0, 'modestbranding': 1, 'disablekb': 0}
      });

      this.player.loadVideoById(trailerVideo)
        .then(() => {
          this.playerElm = document.getElementById('trailer-video');
          this.playerElm.width = document.documentElement.clientWidth;
          this.playerElm.height = window.innerHeight;
        });

      this.player.playVideo()
        .then(() => {
          window.scrollTo(0, 0);
          this.trailerActive = true;

          if (store().isIPhone)
            setTimeout(() => this.trailerActive = false, 100);
        });
    },

    trailerRemove: function () {
      this.player.destroy();
      this.trailerActive = false;
    }
  }
}
</script>

<style>
  @import 'normalize.css';
</style>

<style lang="scss" rel="stylesheet/scss">
  @font-face {
  	font-family: 'Open Sans Hebrew Condensed';
  	src: url('assets/fonts/OpenSansHebrewCondensed-Regular.eot');
  	src: url('assets/fonts/OpenSansHebrewCondensed-Regular.eot?#iefix') format('embedded-opentype'),
  		url('assets/fonts/OpenSansHebrewCondensed-Regular.woff') format('woff'),
  		url('assets/fonts/OpenSansHebrewCondensed-Regular.ttf') format('truetype');
  	font-weight: normal;
  	font-style: normal;
  }

  @font-face {
  	font-family: 'Open Sans Condensed';
  	src: url('assets/fonts/OpenSans-CondensedBold.eot');
  	src: url('assets/fonts/OpenSans-CondensedBold.eot?#iefix') format('embedded-opentype'),
  		url('assets/fonts/OpenSans-CondensedBold.woff') format('woff'),
  		url('assets/fonts/OpenSans-CondensedBold.ttf') format('truetype');
  	font-weight: bold;
  	font-style: normal;
  }

  @font-face {
  	font-family: 'Open Sans Hebrew Condensed';
  	src: url('assets/fonts/OpenSansHebrewCondensed-Bold.eot');
  	src: url('assets/fonts/OpenSansHebrewCondensed-Bold.eot?#iefix') format('embedded-opentype'),
  		url('assets/fonts/OpenSansHebrewCondensed-Bold.woff') format('woff'),
  		url('assets/fonts/OpenSansHebrewCondensed-Bold.ttf') format('truetype');
  	font-weight: bold;
  	font-style: normal;
  }

  @font-face {
  	font-family: 'Open Sans Condensed';
  	src: url('assets/fonts/OpenSans-CondensedLight.eot');
  	src: url('assets/fonts/OpenSans-CondensedLight.eot?#iefix') format('embedded-opentype'),
  		url('assets/fonts/OpenSans-CondensedLight.woff') format('woff'),
  		url('assets/fonts/OpenSans-CondensedLight.ttf') format('truetype');
  	font-weight: 300;
  	font-style: normal;
  }

  @font-face {
  	font-family: 'Open Sans Hebrew Condensed';
  	src: url('assets/fonts/OpenSansHebrewCondensed-Light.eot');
  	src: url('assets/fonts/OpenSansHebrewCondensed-Light.eot?#iefix') format('embedded-opentype'),
  		url('assets/fonts/OpenSansHebrewCondensed-Light.woff') format('woff'),
  		url('assets/fonts/OpenSansHebrewCondensed-Light.ttf') format('truetype');
  	font-weight: 300;
  	font-style: normal;
  }
</style>

<style lang="sss" rel="stylesheet/sass">

  #app.loading > *
    opacity: 0


  #app.loading > .preloader
    opacity: 1


  .juicer-feed
    background: #25182A

    h1.referral
      display: none !important

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

  .watch-it-now
    padding: 22px 0
    display: flex
    flex-flow: column nowrap
    align-items: center
    cursor: pointer

    position: fixed
    bottom: 0
    width: 100%
    overflow: hidden

    z-index: 999

    transform: translateY(120%)
    transition: transform 0.3s ease
    will-change: transform

    &.watch-it-now-show
      transform: translateY(0)

    &-mobile
      display: none

    .bg-1,
    .bg-2
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      background: linear-gradient(-182deg, #f45232 0%, #e52816 100%)

    .bg-2
      background: linear-gradient(-182deg, #FF7340 0%, #F9412F 100%)
      opacity: 0.01
      transition: opacity 0.1s ease
      will-change: opacity

    &:hover .bg-2
      opacity: 0.99

    .title
      font-weight: bold
      font-size: 20.79px
      color: #FFFFFF
      letter-spacing: 1.68px
      position: relative
      z-index: 4

    .subtitle
      margin-top: 1px
      font-weight: 300
      font-size: 16px
      color: #FFFFFF
      letter-spacing: 1.29px
      position: relative
      z-index: 4

  .footer
    background: #1B252A

    .logos
      padding: 52px 42px 62px
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

      display: none

      .separate
        margin: 0 10px

    .nav-copy
      font-family: 'Open Sans', sans-serif
      font-size: 10px
      color: #5B6D82
      letter-spacing: 0.81px

  .footer-watch-it
    padding-bottom: 100px

  .trailer-video
    position: absolute
    width: 100%
    height: 100%
    z-index: 20000
    opacity: .01
    pointer-events: none

  .trailer-video-active
    opacity: 1
    pointer-events: auto
</style>


<style scoped lang="scss" rel="stylesheet/scss">
  @media (max-width: 699px) {
    .watch-it-now-mobile {
      display: flex;
    }
  }

  @media (max-width: 768px) {
    .watch-it-now {
      padding: 12px 0;

      .title {
        font-size: 20.79px;
        color: #FFFFFF;
        letter-spacing: 1.68px;
      }

      .subtitle {
        font-size: 12px;
        color: #FFFFFF;
        letter-spacing: 0.97px;
      }
    }

    .footer {

      .logos {
        padding: 46px 30px 29px;

        .dark-factory,
        .itaca,
        .little-luca {
          margin-right: 5%;
        }
      }

      .nav {
        flex-flow: column nowrap;
        padding-top: 0;
        padding-bottom: 70px;

        &-list {
          font-size: 12px;
          color: #7E8791;
          letter-spacing: 0.97px;
        }

        &-copy {
          margin-top: 10px;
          font-size: 10px;
          letter-spacing: 0.81px;
        }
      }
    }
  }

  @media (max-width: 340px) {
    .footer {
      .nav {
        padding-left: 20px;
        padding-right: 20px;
      }
      .separate {
        margin: 0 5px;
      }
    }
  }

</style>

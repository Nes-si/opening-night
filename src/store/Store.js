let storeInstance;

export default function getStore () {
  if (!storeInstance)
    storeInstance = new Store();

  return storeInstance;
}

class Store {
  //=============sections' elements=================
  
  SECTION_CAST = 0;
  SECTION_REVIEWS = 1;
  SECTION_CLIPS = 2;
  SECTION_CONTEST = 3;

  sectionReviews;
  sectionClips;
  sectionContest;

  onReady() {
    this.sectionReviews = document.querySelector('.slider');
    this.sectionClips = document.querySelector('.video');
    this.sectionContest = document.querySelector('.download');
  }
  
  
  //========sizes===========
  
  get isMobile() {return window.innerWidth <= 510;}
  get isTablet() {return window.innerWidth <= 768 && !this.isMobile;}
  get isIPad() {return navigator.userAgent.match(/iPad/i) != null;}
  get isIPhone() {return navigator.platform.match(/i(Phone|Pod)/i);}
  
  
  
  //========videos===========
  
  TYPE_YOUTUBE = "TYPE_YOUTUBE";
  TYPE_GIPHY = "TYPE_GIPHY";
  
  mainVideos = [
    {
      type: this.TYPE_YOUTUBE,
      id: "jjKZt5_dVTA",
      preview: "assets/images/video-1.png",
      text: "BUST A MOVE"
    },
    {
      type: this.TYPE_YOUTUBE,
      id: "gPEv9s3ZiPE",
      preview: "assets/images/video-2.png",
      text: "RUFIED A STAR!"
    },
    {
      type: this.TYPE_YOUTUBE,
      id: "MkWN1u4t_ys",
      preview: "assets/images/video-3.png",
      text: "CALM THE F*$K DOWN"
    },
    {
      type: this.TYPE_YOUTUBE,
      id: "HN3xlrJlT1Y",
      preview: "assets/images/video-4.png",
      text: "ZIP CODE RATINGS"
    },
    {
      type: this.TYPE_YOUTUBE,
      id: "RKh0gELr3ok",
      preview: "assets/images/video-3.png",
      text: "NO DRUGS NEEDED"
    },
    {
      type: this.TYPE_YOUTUBE,
      id: "yDAn6EcKMwM",
      preview: "assets/images/video-4.png",
      text: "THE BATTLE IS ON"
    },
    {
      type: this.TYPE_YOUTUBE,
      id: "BtWAz-tROHg",
      preview: "assets/images/video-3.png",
      text: "MAMBO #5"
    },
    {
      type: this.TYPE_YOUTUBE,
      id: "Tlm3Zeylt4c",
      preview: "assets/images/video-4.png",
      text: "DANCE OFF"
    }
  ];
  
  charVideos = [
    {
      id: 'rob',
      name: 'Rob Riggle',
      videos: [
        {
          type: this.TYPE_YOUTUBE,
          id: "ADPk5PpkjMg",
          preview: "assets/images/video-1.png"
        },
        {
          type: this.TYPE_GIPHY,
          id: "feqkVgjJpYtjy",
          preview: "assets/images/video-2.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "I3W3mRs4ULQ",
          preview: "assets/images/video-3.png"
        },
        {
          type: this.TYPE_YOUTUBE,
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
          type: this.TYPE_YOUTUBE,
          id: "ADPk5PpkjMg",
          preview: "assets/images/video-1.png"
        },
        {
          type: this.TYPE_GIPHY,
          id: "3oz8xYi5tmDZYPIrza",
          preview: "assets/images/video-2.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "I3W3mRs4ULQ",
          preview: "assets/images/video-3.png"
        },
        {
          type: this.TYPE_YOUTUBE,
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
          type: this.TYPE_YOUTUBE,
          id: "ADPk5PpkjMg",
          preview: "assets/images/video-1.png"
        },
        {
          type: this.TYPE_GIPHY,
          id: "feqkVgjJpYtjy",
          preview: "assets/images/video-2.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "I3W3mRs4ULQ",
          preview: "assets/images/video-3.png"
        },
        {
          type: this.TYPE_YOUTUBE,
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
          type: this.TYPE_YOUTUBE,
          id: "ADPk5PpkjMg",
          preview: "assets/images/video-1.png"
        },
        {
          type: this.TYPE_GIPHY,
          id: "feqkVgjJpYtjy",
          preview: "assets/images/video-2.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "I3W3mRs4ULQ",
          preview: "assets/images/video-3.png"
        },
        {
          type: this.TYPE_YOUTUBE,
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
          type: this.TYPE_YOUTUBE,
          id: "ADPk5PpkjMg",
          preview: "assets/images/video-1.png"
        },
        {
          type: this.TYPE_GIPHY,
          id: "feqkVgjJpYtjy",
          preview: "assets/images/video-2.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "I3W3mRs4ULQ",
          preview: "assets/images/video-3.png"
        },
        {
          type: this.TYPE_YOUTUBE,
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
          type: this.TYPE_YOUTUBE,
          id: "ADPk5PpkjMg",
          preview: "assets/images/video-1.png"
        },
        {
          type: this.TYPE_GIPHY,
          id: "feqkVgjJpYtjy",
          preview: "assets/images/video-2.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "I3W3mRs4ULQ",
          preview: "assets/images/video-3.png"
        },
        {
          type: this.TYPE_YOUTUBE,
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
          type: this.TYPE_YOUTUBE,
          id: "ADPk5PpkjMg",
          preview: "assets/images/video-1.png"
        },
        {
          type: this.TYPE_GIPHY,
          id: "feqkVgjJpYtjy",
          preview: "assets/images/video-2.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "I3W3mRs4ULQ",
          preview: "assets/images/video-3.png"
        },
        {
          type: this.TYPE_YOUTUBE,
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
          type: this.TYPE_YOUTUBE,
          id: "ADPk5PpkjMg",
          preview: "assets/images/video-1.png"
        },
        {
          type: this.TYPE_GIPHY,
          id: "feqkVgjJpYtjy",
          preview: "assets/images/video-2.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "I3W3mRs4ULQ",
          preview: "assets/images/video-3.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "XVwqSlTFQq0",
          preview: "assets/images/video-4.png"
        }
      ]
    }
  ];
  
  getVideoURL(video) {
    switch (video.type) {
      case this.TYPE_YOUTUBE:  return `https://www.youtube.com/watch?v=${video.id}`;
      case this.TYPE_GIPHY:    return `https://giphy.com/gifs/${video.id}`;
    }
  }
  
  getFBVideoPost(video) {
    let videoURL = this.getVideoURL(video);
    return `https://www.facebook.com/sharer/sharer.php?u=${videoURL}`;
  }
  
  getTWVideoPost(video) {
    let videoURL = this.getVideoURL(video);
    return `https://twitter.com/intent/tweet?text=Check%20this%20out!&amp;hashtags=OpeningNight&amp;url=${videoURL}`;
  }
  
  openSocialPopup(url, title = 'Social Share') {
    let intWidth = '560';
    let intHeight = '430';
  
    let strParam = `width=${intWidth},height=${intHeight},resizable=yes`;
    window.open(url, title, strParam).focus();
  }
}

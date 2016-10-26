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
      id: "Tlm3Zeylt4c",
      preview: "assets/images/Dance_Off.png",
      text: "DANCE OFF"
    },
    {
      type: this.TYPE_YOUTUBE,
      id: "BtWAz-tROHg",
      preview: "assets/images/Mambo_5.png",
      text: "MAMBO #5"
    },
    {
      type: this.TYPE_YOUTUBE,
      id: "yDAn6EcKMwM",
      preview: "assets/images/The_Battle_is_On.png",
      text: "THE BATTLE IS ON"
    },
    {
      type: this.TYPE_YOUTUBE,
      id: "HN3xlrJlT1Y",
      preview: "assets/images/Zip_Code_Ratings.png",
      text: "ZIP CODE RATINGS"
    },
    {
      type: this.TYPE_YOUTUBE,
      id: "gPEv9s3ZiPE",
      preview: "assets/images/Rufied_a_Star.png",
      text: "RUFIED A STAR!"
    },
    {
      type: this.TYPE_YOUTUBE,
      id: "MkWN1u4t_ys",
      preview: "assets/images/Calm_Down.png",
      text: "CALM THE F*$K DOWN"
    }
  ];

  charVideos = [
    {
      id: 'rob',
      name: 'Rob Riggle',
      fbName: '@RobRiggle',
      twName: '@RobRiggle',
      videos: [
        {
          type: this.TYPE_GIPHY,
          id: "MKkP23Dnbo1fa",
          preview: "assets/images/Rob_1.png"
        },
        {
          type: this.TYPE_GIPHY,
          id: "yMZ142siF9tDi",
          preview: "assets/images/Rob_2.png"
        },
        {
          type: this.TYPE_GIPHY,
          id: "qwpaw2s7cxTq0",
          preview: "assets/images/Rob_3.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "dGP40z5sB4w",
          preview: "assets/images/Rob_4.png"
        }
      ]
    },
    {
      id: 'anne',
      name: 'Anne Heche',
      fbName: 'Anne Heche',
      twName: '@AnneHeche',
      videos: [
        {
          type: this.TYPE_GIPHY,
          id: "OSXrxGfHH0FSU",
          preview: "assets/images/Anne_2.png"
        },
        {
          type: this.TYPE_GIPHY,
          id: "OQzy9a55nFG6s",
          preview: "assets/images/Anne_1.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "3dskJKNRrm8",
          preview: "assets/images/Anne_3.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "shhvCknE-ZQ",
          preview: "assets/images/Anne_4.png"
        }
      ]
    },
    {
      id: 'topher',
      name: 'Topher Grace',
      fbName: '@TopherGrace',
      twName: '@TopherGrace',
      videos: [
        {
          type: this.TYPE_YOUTUBE,
          id: "QN8vYpZwkMo",
          preview: "assets/images/Topher_1.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "gPEv9s3ZiPE",
          preview: "assets/images/Topher_2.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "IrDAGYR5qg8",
          preview: "assets/images/Topher_3.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "M-XZxVPgapc",
          preview: "assets/images/Topher_4.png"
        }
      ]
    },
    {
      id: 'alona',
      name: 'Alona Tal',
      fbName: 'Alona Tal',
      twName: '@talalona',
      videos: [
        {
          type: this.TYPE_YOUTUBE,
          id: "P6lbttuKFEQ",
          preview: "assets/images/Alona_1.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "8rSoWa9ZDMM",
          preview: "assets/images/Alona_2.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "RGIu7LwleMc",
          preview: "assets/images/Alona_3.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "MafxR_fldAc",
          preview: "assets/images/Alona_4.png"
        }
      ]
    },
    {
      id: 'jc',
      name: 'JC Chasez',
      fbName: '@jcchasezofficial',
      twName: '@JCChasez',
      videos: [
        {
          type: this.TYPE_YOUTUBE,
          id: "gx1lZ_FJT7U",
          preview: "assets/images/JC_1.png"
        },
        {
          type: this.TYPE_GIPHY,
          id: "iF7tJ22IuCGUo",
          preview: "assets/images/JC_2.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "SQeCOm6rR54",
          preview: "assets/images/JC_3.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "ubucDktGmao",
          preview: "assets/images/JC_4.png"
        }
      ]
    },
    {
      id: 'taye',
      name: 'Taye Diggs',
      fbName: '@TayeDiggs',
      twName: '@TayeDiggs',
      videos: [
        {
          type: this.TYPE_YOUTUBE,
          id: "JMvG2k_In4Q",
          preview: "assets/images/Taye_1.png"
        },
        {
          type: this.TYPE_GIPHY,
          id: "11sU92GtTeaMCs",
          preview: "assets/images/Taye_2.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "jjKZt5_dVTA",
          preview: "assets/images/Taye_3.png"
        },
        {
          type: this.TYPE_GIPHY,
          id: "MHgE0D8tHgmQ",
          preview: "assets/images/Taye_4.png"
        }
      ]
    },
    {
      id: 'paul',
      name: 'Paul Scheer',
      fbName: '@thepaulsheer',
      twName: '@paulsheer',
      videos: [
        {
          type: this.TYPE_YOUTUBE,
          id: "CAcLwDoZJvs",
          preview: "assets/images/Paul_1.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "u50htgqvR1w",
          preview: "assets/images/Paul_2.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "RKh0gELr3ok",
          preview: "assets/images/Paul_3.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "ScocTftN8QU",
          preview: "assets/images/Paul_4.png"
        }
      ]
    },
    {
      id: 'lesli',
      name: 'Lesli Margherita',
      fbName: 'Lesli Margherita',
      twName: '@QueenLesli',
      videos: [
        {
          type: this.TYPE_YOUTUBE,
          id: "aqSjQQDwXw8",
          preview: "assets/images/Lesli_1.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "5tWEQBwhGr0",
          preview: "assets/images/Lesli_2.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "6q8Qzj66XD0",
          preview: "assets/images/Lesli_3.png"
        },
        {
          type: this.TYPE_YOUTUBE,
          id: "Ya5W3okQxa0",
          preview: "assets/images/Lesli_4.png"
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

  getTWVideoPost(video, twName) {
    let videoURL = this.getVideoURL(video);
    twName = encodeURIComponent(twName);
    return `https://twitter.com/intent/tweet?` +
      `text=Check%20out%20this%20hilarious%20clip%20with%20${twName}%20from%20the%20new%20movie%20Opening%20Night%20www.openingnightthemovie.com` +
      `&amp;hashtags=1HitWonder` +
      `&amp;url=${videoURL}`;
  }

  openSocialPopup(url, title = 'Social Share') {
    let intWidth = '560';
    let intHeight = '430';

    let strParam = `width=${intWidth},height=${intHeight},resizable=yes`;
    window.open(url, title, strParam).focus();
  }
}

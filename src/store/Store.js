let storeInstance;

export default function getStore () {
  if (!storeInstance)
    storeInstance = new Store();

  return storeInstance;
}

class Store {
  SECTION_CAST = 0;
  SECTION_REVIEWS = 1;
  SECTION_CLIPS = 2;
  SECTION_CONTEST = 3;

  sectionReviews;
  sectionClips;
  sectionContest;


  constructor () {}

  onReady() {
    this.sectionReviews = document.querySelector('.slider');
    this.sectionClips = document.querySelector('.video');
    this.sectionContest = document.querySelector('.download');
  }
  
  get isMobile() {return window.innerWidth <= 510;}
  get isTablet() {return window.innerWidth <= 768;}
}

import { ROUTES_LINKS, ROUTES_NAME } from '../components/pages/Main/Routes/Enums';

const SIDEBAR = {
  PAGES: [{
    id: ROUTES_NAME.HOME,
    displayName: 'Main',
    icon: 'HOME',
    link: ROUTES_LINKS[ROUTES_NAME.HOME],
  }, {
    id: ROUTES_NAME.VIDEOS,
    displayName: 'Videos',
    icon: 'VIDEO',
    link: ROUTES_LINKS[ROUTES_NAME.VIDEOS],
  }, {
    id: ROUTES_NAME.MUSIC,
    displayName: 'Music',
    icon: 'MUSIC',
    link: ROUTES_LINKS[ROUTES_NAME.MUSIC],
  }, {
    id: ROUTES_NAME.MOVIES,
    displayName: 'Movies',
    icon: 'MOVIES',
    link: ROUTES_LINKS[ROUTES_NAME.MOVIES],
  }, {
    id: ROUTES_NAME.WEB_SERIES,
    displayName: 'Web Series',
    icon: 'MOVIES',
    link: ROUTES_LINKS[ROUTES_NAME.WEB_SERIES],
  }, {
    id: ROUTES_NAME.NEWS,
    displayName: 'News',
    icon: 'NEWS',
    link: ROUTES_LINKS[ROUTES_NAME.NEWS],
  }, {
    id: ROUTES_NAME.BLOGS,
    displayName: 'Blogs',
    icon: 'ARTICLES',
    link: ROUTES_LINKS[ROUTES_NAME.BLOGS],
  }, {
    id: ROUTES_NAME.TWITTER,
    displayName: 'Twitter',
    icon: 'ARTICLES',
    link: ROUTES_LINKS[ROUTES_NAME.TWITTER],
  }, {
    id: ROUTES_NAME.POLL,
    displayName: 'Poll',
    icon: 'ARTICLES',
    link: ROUTES_LINKS[ROUTES_NAME.POLL],
  }],
};

const API_MOCK = {
  PROFILE: 'https://run.mocky.io/v3/c8146733-ed18-4da3-9f82-32fbdb866626',
};

const MOCK = () => new Promise(resolve => resolve({
  profileId: '0',
  description: {
    cover: 'https://i.ibb.co/MkB3Q0D/MILAN-ITALY-OCTOBER-12-Actress-Ester-Exposito-attends-Fest-at-Santeria-Social-Club-on-October-12-201.jpg',
    name: 'Ester Expósito',
    age: 24,
    dob: 'January, 20th 2000. Madrid, Spain',
    nationality: 'Spanish',
    height: '1.66m',
    occupation: 'Actress and model',
    info: '@luciadelrionmanagement"of those who made life this sensitive corner, fighter, soft skin and tender warrior heart"♀',
    subscribers: 23700000,
    posts: '69',
    isSubscribed: true,
    isVerified: true,
  },
  wall: {
    profilePicture: 'https://i.ibb.co/FHtgMkw/71186279-402001207154349-6369827492315791360-n.jpg',
    activeLocation: 'London, UK',
    posts: [{
      header: 'Hidden talent ❤️🧡💛💚💙💜',
      type: 'image',
      likes: 43738,
      uploadTime: '4ms ago',
      postUrl: 'https://i.ibb.co/Ny4P8gk/70350821-139129100733206-4841923958481725658-n.jpg',
      title: 'Hidden talent; it may take a little bit longer but I actually love doing my own gel manicures ❤️🧡💛💚💙💜',
      id: '739jd',
    }, {
      header: 'Who says all work and no play... 📷',
      type: 'image',
      likes: 424532,
      uploadTime: '4ms ago',
      postUrl: 'https://i.ibb.co/120cn63/84303160-500441080868909-3284115346707269605-n.jpg',
      title: 'Who says all work and no play... I say no way! More shenanigans in my stories 🤪 📷:',
      id: '67483jf',
    }],
  },
  posts: [{
    id: '7376fq',
    type: 'image',
    url: 'https://i.ibb.co/NjHdP4D/57811454-298893717700170-8380888366741301881-n.jpg',
    likes: 53575,
    comments: 136,
    isLiked: false,
  }, {
    id: '7335jg',
    type: 'image',
    url: 'https://i.ibb.co/ygk4c7D/69097619-466598803930036-504147358140503395-n.jpg',
    likes: 375643,
    comments: 786,
    isLiked: false,
  }, {
    id: '6765td',
    type: 'image',
    url: 'https://i.ibb.co/BTpRR2Z/70066462-481222505763996-6067339973032647335-n.jpg',
    likes: 9764,
    comments: 69,
    isLiked: false,
  }, {
    id: '734fd',
    type: 'image',
    url: 'https://i.ibb.co/BTpRR2Z/70066462-481222505763996-6067339973032647335-n.jpg',
    likes: 23343,
    comments: 543,
    isLiked: false,
  }, {
    id: '7376fy',
    type: 'image',
    url: 'https://i.ibb.co/TKYRb2H/41528930-159858624902082-6341944161701159373-n.jpg',
    likes: 123423,
    comments: 140,
    isLiked: false,
  }, {
    id: '918ud',
    type: 'image',
    url: 'https://i.ibb.co/Ny4P8gk/70350821-139129100733206-4841923958481725658-n.jpg',
    likes: 76367,
    comments: 978,
    isLiked: false,
  }, {
    id: '423asf',
    type: 'image',
    url: 'https://i.ibb.co/dpft2k3/72118573-989228701433050-5832960095170824680-n.jpg',
    likes: 83746,
    comments: 876,
    isLiked: true,
  }, {
    id: '12354drd',
    type: 'image',
    url: 'https://i.ibb.co/xX4T8MV/72134430-435451374024551-2671623075451729499-n.jpg',
    likes: 4841,
    comments: 95,
    isLiked: true,
  }, {
    id: '654ASDF',
    type: 'image',
    url: 'https://i.ibb.co/M6DGp2w/72893685-187851299012329-2206163569459628139-n.jpg',
    likes: 123423,
    comments: 140,
    isLiked: false,
  }, {
    id: '7376fy',
    type: 'image',
    url: 'https://i.ibb.co/TKYRb2H/41528930-159858624902082-6341944161701159373-n.jpg',
    likes: 9874165,
    comments: 65,
    isLiked: false,
  }, {
    id: '132SF',
    type: 'image',
    url: 'https://i.ibb.co/9hxYYZ0/79319120-456612248562627-1676549083281875803-n.jpg',
    likes: 123423,
    comments: 140,
    isLiked: true,
  }, {
    id: 'd2rwedf',
    type: 'image',
    url: 'https://i.ibb.co/yffQDR8/82244850-485952792102550-8645892241591027144-n.jpg',
    likes: 1236523,
    comments: 654,
    isLiked: false,
  }, {
    id: '123d3',
    type: 'image',
    url: 'https://i.ibb.co/120cn63/84303160-500441080868909-3284115346707269605-n.jpg',
    likes: 212333,
    comments: 431,
    isLiked: false,
  }, {
    id: 'gsddf54',
    type: 'image',
    url: 'https://i.ibb.co/6gWcvpY/90068474-122635915994994-7971647434267840263-n.jpg',
    likes: 65486,
    comments: 43,
    isLiked: true,
  }, {
    id: '575rfv',
    type: 'image',
    url: 'https://i.ibb.co/nRFnvqr/91454344-604252336833221-1744593095519246934-n.jpg',
    likes: 123423,
    comments: 56,
    isLiked: true,
  }, {
    id: '545gr',
    type: 'image',
    url: 'https://i.ibb.co/NnbNgnV/93122113-535959964018817-174722081742889573-n.jpg',
    likes: 75709,
    comments: 89,
    isLiked: true,
  }, {
    id: '644juh',
    type: 'image',
    url: 'https://i.ibb.co/C5D9M8V/101003636-585178848778190-7953502079835941981-n.jpg',
    likes: 757075,
    comments: 854,
    isLiked: false,
  }, {
    id: '5345fsa',
    type: 'image',
    url: 'https://i.ibb.co/18YD12v/104149507-2612687882383879-4206289356952148166-n.jpg',
    likes: 9748563,
    comments: 987,
  }, {
    id: '1234cs',
    type: 'image',
    url: 'https://i.ibb.co/MkB3Q0D/MILAN-ITALY-OCTOBER-12-Actress-Ester-Exposito-attends-Fest-at-Santeria-Social-Club-on-October-12-201.jpg',
    likes: 986789,
    comments: 98,
    isLiked: true,
  }, {
    id: '9846fsa',
    type: 'image',
    url: 'https://i.ibb.co/tcv3J3q/MADRID-SPAIN-NOVEMBER-06-Actress-Ester-Exposito-attends-YSL-Beaute-THE-SLIM-Rouge-Pur-Couture-party.jpg',
    likes: 567823,
    comments: 435,
    isLiked: false,
  }, {
    id: '684h3e3',
    type: 'image',
    url: 'https://i.ibb.co/C1BByJR/MADRID-SPAIN-NOVEMBER-08-Ester-Exposito-attends-Los40-music-awards-2019-photocall-at-Wizink-Center-o.jpg',
    likes: 634345,
    comments: 974,
    isLiked: true,
  }, {
    id: '5839jfd',
    type: 'image',
    url: 'https://i.ibb.co/jHN4LN5/MADRID-SPAIN-NOVEMBER-14-Spanish-actress-Ester-Exposito-attends-Madre-Madrid-Premiere-on-November-14.jpg',
    likes: 98709,
    comments: 7594,
    isLiked: false,
  }],
}));

const TOP_STORIES = [{
  id: '1',
  thumbnail: 'https://i.guim.co.uk/img/media/f91cd24f75659013c05090a9c2ec7862f2df10e7/0_375_4316_2590/master/4316.jpg?width=300&quality=85&auto=format&fit=max&s=36ce999626536ba396683c389b3d8d28',
  category: 'Music',
  header: 'Lover Studio album by Taylor Swift',
  description: 'Lover is the seventh studio album by American singer-songwriter Taylor Swift, released on August 23, 2019, through Republic Records. As the executive producer, Swift enlisted producers Jack Antonoff, Louis Bell, Frank Dukes and Joel Little for the album.',
  cta: {
    text: 'Read more',
    action: '',
  },
}, {
  id: '2',
  thumbnail: 'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/geforce-rtx-turing/overview/shop-2080-ti-300@2x.jpg',
  category: 'Technology',
  header: 'NVIDIA GEFORCE RTX™ 2080 TI',
  description: 'The new card can achieve playable frame rates at 4K, and it eats up everything at 1440p (for 1080p gaming, however, this card is almost definitely overkill—barring only the most extreme high-FPS addicts',
  cta: {
    text: 'Read more',
    action: '',
  },
}, {
  id: '1',
  thumbnail: 'https://i.guim.co.uk/img/media/0bdd9ad7da26445ed1d50146fc236a4a3f90cccf/0_0_1917_1150/master/1917.jpg?width=300&quality=85&auto=format&fit=max&s=3267daa6c5fde4fcd6fe0262d624a94c',
  category: 'Sports"',
  header: 'Won Hungarian grand prix',
  description: 'Lewis Hamilton shows Mercedes\' utter dominance in 70th Anniversary practice at Silverstone',
  cta: {
    text: 'Read more',
    action: '',
  },
}, {
  id: '2',
  thumbnail: 'https://i.pinimg.com/originals/b9/e3/5a/b9e35a1974d9263ae84b5c317170bcbd.png',
  category: 'Entertainment',
  header: 'Its Butters!',
  description: 'New ‘South Park’ movies could be on the way from Trey Parker and Matt Stone',
  cta: {
    text: 'Read more',
    action: '',
  },
}, {
  id: '1',
  thumbnail: 'https://www.hamilton-medical.com/.imaging/stk/hamilton-theme/text-backgroundimage-tablet/dam/Images/A-Pictures/Home/covid-19-header-2000x769.jpg/jcr:content/covid-19-header-2000x769.jpg.2020-03-20-09-55-30.jpg',
  category: 'News',
  header: 'Cure for COVID-19',
  description: 'Covid-19: Serum Institute caps proposed vaccine price at Rs 225/dose',
  cta: {
    text: 'Read more',
    action: '',
  },
}];


export {
  SIDEBAR,
  API_MOCK,
  MOCK,
  TOP_STORIES,
};


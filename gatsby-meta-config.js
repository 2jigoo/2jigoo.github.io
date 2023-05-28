module.exports = {
  title: `지구의 개발일기`,
  description: `지구의 개발일기`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://2jigoo.github.io`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `지구`,
    bio: {
      role: `개발자`,
      description: ['배우는 걸 좋아하는', ],
      thumbnail: 'profile-bori.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/2jigoo`,
      linkedIn: ``,
      email: `2jigoo@naver.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
    ],
    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
    ],
  },
};

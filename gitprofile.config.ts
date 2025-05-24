// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'srinivasI', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/srinivasi/srinivasi.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/srinivasi/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['srinivasi/my-project1', 'srinivasi/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['srinivasI/gitprofile', 'srinivasi/kritunga'], // List of repository names to display. example: ['srinivasi/my-project1', 'srinivasi/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Watchlist Manager (WLM)(CITI Bank)',
          description:
            'Screen customers: persons, organizations, and jurisdictions can be identified by watch lists. Reduce regulatory risk by using fuzzy matching algorithms, intelligent scoring, and alert consolidation.All these list validations can be done by using maker, checker, manager approve process.',
          link: 'https://online.citi.com/US/ag/investing',
        },
        {
          title: 'SaxonGlobal',
          description:
            'This is an IT support based consultancy cum software development company. Implemented total application with new look and Features',
          link: 'https://saxonglobal.com',
        },
         {
          title: 'GLOBAL TRANSACTION(CITI Bank)',
          description:
            'Handling multiple region (NAM, EMEA, APAC) client payment requests processing and management and review accept process management. Here clients can also raise bulk orders at a time and process. ',
          link: 'https://www.citidirect.com/portalservices/PaymentAdvisor/#',
        },
        {
          title: 'TransportHandicap(TH)',
          description:
            'Using this Application drivers can login and inscribe them self in morning session or evening session and they can get their leaves list and driver can see all other section area drivers details with photo and another module was created using the same link if admin login, admin able to see how much server space was utilized able to see in mobile version also and able to download all Database backups hourly, daily, monthly basis.',
          link: 'https://www.transporthandicap.ch/www/1-accueil',
        },
      ],
    },
  },
  
  seo: {
    title: 'Portfolio of Srinivasa Rao Ippili',
    description: 'Ui Developer',
    imageURL: '',
  },
  social: {
    linkedin: 'srinivasaraoi',
    youtube: '', // example: 'pewdiepie'
    medium: 'srinivasi',
    dev: 'srinivasi',
    website: 'https://www.srinivasi.com',
    phone: '+91 8886272515',
    email: 'ippilisrinivasarao1@gmail.com',
  },
  resume: {
    fileUrl:
      'https://docs.google.com/document/d/1LydXzQcafg2LiC30P5w9AsiRPRo_YLI8/edit?usp=drive_link&ouid=107249320214239067051&rtpof=true&sd=true', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Angular',
    'React.js',
    'Typescript',
    'JavaScript',    
    'Node.js',
    'Nest.js',
    'MySQL',
    'Git',
    'Docker',
    'AWS',
    'PHP',
    'CSS',
    'SCSS',
  ],
  experiences: [
    {
      company: 'Virtusa',
      position: 'Senior Lead Consultant',
      from: 'January 2018',
      to: 'Present',
      companyLink: 'https://www.virtusa.com',
    },
    {
      company: 'Adaequare',
      position: 'Senior Software Engineer',
      from: 'June 2016',
      to: 'January 2018',
      companyLink: 'https://www.adaequare.com',
    },
    {
      company: 'Saxon Global',
      position: 'Senior Software Engineer',
      from: 'December 2015',
      to: 'June 2016',
      companyLink: 'https://saxonglobal.com',
    },
    {
      company: 'Tigeen Solutions',
      position: 'Software Engineer',
      from: 'January 2012',
      to: 'December 2015',
      companyLink: 'https://tigeensolutions.com',
    },
  ],
  certifications: [
    {
      name: 'AWS Associate Developer',
      year: 'June 2024',
      link: 'https://drive.google.com/file/d/1shikP2-fW8rViUeZCgbMAvchwtoyKkj1/view?usp=drive_link',
    },
  ],
  educations: [
    {
      institution: 'AGCET(JNTUK)',
      degree: 'MCA',
      from: '2008',
      to: '2011',
    },
    {
      institution: 'Srirama Degree College(AU)',
      degree: 'BSC(MPC)',
      from: '2005',
      to: '2008',
    },
  ],
 
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'srinivasi', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },



  enablePWA: true,
};

export default CONFIG;

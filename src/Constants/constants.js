
import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

import {
  faReact,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  htmlIcon,
  cssIcon,
  csharpIcon,
  cplusIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  Yummie,
  calculator,
  TTL,
  avatar,
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "I am",   

		"I am a junior studying computer engineering at HKU. I have a strong passion for computer graphics and UX / UI design.",
    "Outside of my regular activities, I'm into drawing whenever I have some free time. I'm also an anime lover and enjoy playing games for fun.",

    "I am delighted to collaborate with people and groups who enthusiastically embrace my passion for creating unique experiences.",
  ],
};

const contact = {
  text: [

    "Thank you for taking the time to go through my portfolio. ",
              
    "If you would like to get in touch. please feel free to email me at: udayvs@connect.hku.hk"
             
  ]
}

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const projects = [
  {
    name: "The Last Light",
    description: 'A 2D action-adventure platformer game with an artistic theme implemented using Unity. Test your skills and enjoy beautiful landscapes as you play this engaging game.',
    image: TTL,
    source_code_link: 'https://github.com/Udaria2004/TheLastLight',
    demo_link: 'https://youtu.be/THoo8PgohL4',
  },
  {
    name: 'Yummie',
    description: 'Explore a food delivery app prototype/mockup. Made using Swift, SwiftUI on Xcode. ',
    image: Yummie,
    source_code_link: 'https://github.com/Udaria2004/Yummie',
    demo_link: 'https://youtu.be/s5Mual31XpY',
  },
  {
    name: 'Solitaire Card Game',
    description: 'A Java socket-based multiplayer card game based on the popular game - "Solitaire"',
    image: calculator,
    source_code_link: 'https://github.com/Udaria2004/BigTwoCardGame',
    demo_link: 'https://github.com/Udaria2004/BigTwoCardGame',
  },
  
];

const avatarpfp = {
  image: [avatar],
};

const skills = [
  {
    id: 'html',
    title: 'HTML',
    icon: htmlIcon,
    description:
      'I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.',
  },
  {
    id: 'css',
    title: 'CSS',
    icon: cssIcon,
    description:
    'I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.',
  },
  {
    id: 'C#',
    title: 'C#',
    icon: csharpIcon,
    description:'I have experience in C# when I was developing 2D and 3D games for Unity.',
      
  },
  {
    id: 'C++',
    title: 'C++',
    icon: csharpIcon,
    description:'I gained C++ expertise through a comprehensive course, mastering syntax, data types, and OOP concepts. For my final project, I developed captivating games, applying classes, inheritance, and polymorphism.',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: jsIcon,
    description:
    'I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.',
  },
  {
    id: 'react',
    title: 'React',
    icon: reactIcon,
    description:
      'I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.',
  },
  {
    id: 'java',
    title: 'Java',
    icon: javaIcon,
    description:
      'I have extensive experience utilizing Java for object-oriented programming (OOP) and implementing data structures.',
  },
  {
    id: 'figma',
    title: 'Figma',
    icon: figmaIcon,
    description:
    'In my Figma skills, I unleash creativity, designing captivating user interfaces and collaborating seamlessly with designers and developers.',
  },
  {
    id: 'git',
    title: 'Git',
    icon: gitIcon,
    description:
    'I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.',
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: githubIcon,
    description:
      'I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.',
  },
  {
    id: 'py',
    title: 'Python',
    icon: pyIcon,
    description:
      'With 3 years of Python experience, I am adept at coding functions.',
  },
  {
    id: 'raspi',
    title: 'Raspberry Pi',
    icon: raspIcon,
    description:
      'I have hands-on experience with Raspberry Pi, where I utilized a virtual Linux machine to execute programs written in C. This allowed me to explore low-level computing and develop efficient code for the Raspberry Pi platform.',
  },


];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  projects,
  avatarpfp,
  skills,
  markerSvg,
  icons,
  contact
};

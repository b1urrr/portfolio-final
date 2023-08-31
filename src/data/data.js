import { nanoid } from "nanoid";

import {
  css3,
  flask,
  git,
  github,
  html5,
  illustrator,
  js,
  nodejs,
  photoshop,
  python,
  react,
  selenium,
  mongodb,
  express,
  sass,
  firebase,
  styled,
  morina,
  restaurantempire,
  portfolio,
  realclouds,
  twitterbot,
  passwordmanager,
} from "./icons";

// Projects

export const projects_data = [
  {
    name: "Restaurant Empire",
    techstack: [react, express, nodejs, mongodb],
    description:
      "Restaurant website template with user dashboard to update the menu as needed. Type /editmenu after the url to access the add/update/remove features.",
    demo: "https://restaurant-empire-demo.vercel.app/",
    github: "https://github.com/b1urrr/re_client",
    image: restaurantempire,
    id: nanoid(),
  },
  {
    name: "Morina eCommerce",
    techstack: [react, express, nodejs, mongodb],
    description:
      "An e-commerce web application that I'm currently working on. Most of the front-end is fully functioning. The back-end currently uses a dummy set of products for the purpose of development.",
    demo: "https://morina-shop.web.app/",
    github: "https://github.com/b1urrr/morina-client",
    image: morina,
    work_in_progress: true,
    id: nanoid(),
  },
  {
    name: "My Portfolio",
    techstack: [react],
    description:
      "This minimalistic portfolio showcasing my work. I've tried to keep it as simple and to the point as possible.",
    demo: "https://gogov.online/",
    github: "https://github.com/b1urrr/portfolio-final",
    image: portfolio,
    id: nanoid(),
  },
  {
    name: "realClouds",
    techstack: [react],
    description:
      "Simple weather app for practice. Implemented current date/time, weather now, later in the day, later in the week, search city function etc. Making use of the Open Weather Map APIs.",
    demo: "https://weather.gogov.online/",
    github: "https://github.com/b1urrr/weather-app",
    image: realclouds,
    id: nanoid(),
  },
  {
    name: "Twitter Bot",
    techstack: [python, selenium],
    description:
      "A bot checking the internet speed via speedtest.net and reporting outcomes to Twitter.",
    demo: "",
    github: "https://github.com/b1urrr/twitter-bot",
    image: twitterbot,
    id: nanoid(),
  },
  {
    name: "Password Manager",
    techstack: [python],
    description:
      "Simple password manager with GUI. Generates passwords, then stores them in a searchable JSON file. Encryption is not implemented, so if you do decide to use it, store it with caution ;)",
    demo: "",
    github: "https://github.com/b1urrr/password-manager",
    image: passwordmanager,
    id: nanoid(),
  },
];

// Skills

export const skills = [
  {
    name: "React.js",
    icon: react,
    category: "front-end",
  },
  {
    name: "JavaScript",
    icon: js,
    category: "front-end",
  },
  {
    name: "CSS",
    icon: css3,
    category: "front-end",
  },
  {
    name: "HTML",
    icon: html5,
    category: "front-end",
  },
  {
    name: "Styled Components",
    icon: styled,
    category: "front-end",
  },
  {
    name: "SASS",
    icon: sass,
    category: "front-end",
  },
  {
    name: "JavaScript",
    icon: js,
    category: "back-end",
  },
  {
    name: "Node.js",
    icon: nodejs,
    category: "back-end",
  },
  {
    name: "Express.js",
    icon: express,
    category: "back-end",
  },
  {
    name: "Python",
    icon: python,
    category: "back-end",
  },
  {
    name: "Flask",
    icon: flask,
    category: "back-end",
  },
  {
    name: "Mongo DB",
    icon: mongodb,
    category: "back-end",
  },
  {
    name: "Git",
    icon: git,
    category: "other tools",
  },
  {
    name: "GitHub",
    icon: github,
    category: "other tools",
  },
  {
    name: "Firebase",
    icon: firebase,
    category: "other tools",
  },
  {
    name: "Selenium Web Driver",
    icon: selenium,
    category: "other tools",
  },
  {
    name: "Adobe Illustrator",
    icon: illustrator,
    category: "other tools",
  },
  {
    name: "Adobe Photoshop",
    icon: photoshop,
    category: "other tools",
  },
];

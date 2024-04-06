import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  day1, day2, day3, day4,
  MUN, TALK, ROBOSOCCER,


} from "../assets";

export const navLinks = [
  {
    id: "events",
    title: "Events",
    href:"/events"
  },
  {
    id: "about",
    title: "About",
    href:"/#about"
  },

  {
    id: "team",
    title: "Team",
    href:"/team"
  },

  {
    id: "Login",
    title: "Login",
    href:"/login",
    highlight:true
  },
  // {
  //   id: "Login",
  //   title: "Login",
  // },

];

const services = [
  {
    title: "Shristi Talks",
    icon: TALK,
  },
  {
    title: "ROBOSOCCER",
    icon: ROBOSOCCER,
  },
  {
    title: "MUN",
    icon: MUN,
  },
  // {
  //   title: "View More",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Day 1",
    company_name: "10th April 2024",
    icon: day1,
    iconBg: "#383E56",
    date: "Shristi 2024",
    points: [
      "Inauguration",
      "GIS: 2PM-3:30PM",
      "Business Tycoon:  3PM-5PM",
      "Battle of Brains: 3PM-5PM",
      "Blind Coding: 3PM-5PM",
      "Sci-fi Utopia: 2PM-5PM",
      "Circuiteer: 3PM-5PM",
      "Skyward Sling: 4PM-5PM",
      "Mechano Mind Master: 5PM-5:30PM",
      "Debate Competition: 3PM-5PM",
      " Civil Quest: 3PM-4PM",
    ],
  },
  {
    title: "Day 2",
    company_name: "11th April 2024",
    icon: day2,
    iconBg: "#E6DEDD",
    date: "Shristi 2024",
    points: [
      "CAD Craftmanship: 9AM-11AM",
      "Eco-Craft Clique: 11AM-1PM",
      "Eureka: 11AM-1PM",
      "Feel the Buzz: 11PM-1PM",
      "Algo Craft Challenge: 11PM-12PM",
      "Scavenger Hunt: 9AM-7PM",
      "Electrobout: 11AM-1PM",
    ],
  },
  {
    title: "Day 3",
    company_name: "12th April 2024",
    icon: day3,
    iconBg: "#383E56",
    date: "Shristi 2024",
    points: [
      "Know Your Earth: 9AM-12PM",
      "Waste to Best: 3PM-5PM",
      "Know your Plants: 11AM-1PM",
      "Intelligent Investor: 3PM-5PM",
      "Screw you: 10AM-11AM",
      "Line Follower: 12PM Onwards",
      "Hackathon: 9AM-9PM",
      "Cookie Making: 2PM Onwards",
      "Tame the Track: 10AM-1PM",
      "Haze: 2PM-7PM",
      "Techologic: 10AM-12PM",
      " Techemend: 3PM-5PM",
      "Design Draft Duel: 9AM-10:30AM",
      "Aqua Thrust Showdown: 11AM-12PM",
      "Thermo Thrill Regatta: 3PM-5PM",
    ],
  },
  {
    title: "Day 4",
    company_name: "13th April 2024",
    icon: day4,
    iconBg: "#E6DEDD",
    date: "Shristi 2024",
    points: [
      "Hackathon Presentation: 10AM-5PM",
      "Civic Vision: 9AM-1PM",
      "Model Maze: 8AM-10PM",
      "Hijack: 11AM-1PM",
      "The Summit: 9AM-11AM",
      "Robo Soccer League: 9AM Onwards",
      "Supervise the Tongue: 10AM-1PM",
      "Blind Chess: 9AM-12PM",
      "Amped-Duo: 10AM-1PM",
      "Drone Warzone: 11AM-1PM",
      "Robo Rampage Rally: 9AM-10AM",
    ],
  },

];

const testimonials = [
  {
    testimonial: 
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, nobis.",
    name: "To Be Updated",
    designation: "To Be Updated",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: 
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, nobis.",
    name: "To Be Updated",
    designation: "To Be Updated",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial: 
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, nobis.",
    name: "To Be Updated",
    designation: "To Be Updated",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

{/* using ECE - 0 , CSE - 1 , ME -2 , CE -3 , AE-4, CMS -5 , FR - 6 , EE - 7 ,DEFAULT - 8,  */ }
const AllEvents = [
  {
    name: 'Nightwish',
    Department: 2,
    Day: 1,
    image: 'https://images.pexels.com/photos/20240213/pexels-photo-20240213/free-photo-of-portrait-of-woman-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    Discription: 'As a web developer for matrixesports, my tasks include customizing the WordPress site for esports, managing content, implementing security measures, optimizing performance, and integrating AWS services for reliable hosting. I ensure the website provides an engaging user experience while maintaining security and scalability in the AWS environment.',
    Registration: 'https://github.com/itsxtemper/Java_EMail_Check',
  },
  {
    name: 'Metallica',
    Department: 0,
    Day: 2,
    image: 'https://images.pexels.com/photos/18031828/pexels-photo-18031828/free-photo-of-composition-of-jewelry-dried-flowers-and-books.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    Discription: 'A Java Email Checker is a tool or component developed in the Java programming language that quickly validates email addresses. It checks for correct syntax, verifies the existence of the email domain through DNS records and MX record lookup, and establishes an SMTP connection to ensure potential deliverability. This helps in filtering out invalid or non-functional email addresses.',
    Registration: 'https://github.com/itsxtemper/Java_EMail_Check',
  },
  {
    name: 'Nirvana',
    Department: 0,
    Day: 3,
    image: 'https://images.pexels.com/photos/19906220/pexels-photo-19906220/free-photo-of-a-tunnel-with-a-white-wall-and-a-door.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    Discription: 'Just Some Leetcode DSA Questions',
    Registration: 'https://github.com/itsxtemper/Java_EMail_Check',
  },


]


const SelectOption = [
  {
    id: "branch",
    title: "Sort: Branch",
  },
  {
    id: "day",
    title: "Sort: Day",
  },
];

export { SelectOption, services, technologies, experiences, testimonials, projects, AllEvents };

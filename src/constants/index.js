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
} from "../assets";

export const navLinks = [
  {
    id:"events",
    title:"Events",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  
  {
    id: "team",
    title: "Team",
  },
 
  {
    id: "Login",
    title: "Login",
  },

];

const services = [
  {
    title: "Shristi Talks",
    icon: web,
  },
  {
    title: "Robot War",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "View More",
    icon: creator,
  },
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
    company_name: "Shristi 2k24",
    icon: starbucks,
    iconBg: "#383E56",
    date: "10th April 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Day 2",
    company_name: "Shristi 2k24",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "11th April 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Day 3",
    company_name: "Shristi 2k24",
    icon: shopify,
    iconBg: "#383E56",
    date: "12th April 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
 
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
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

{/* using ECE - 0 , CSE - 1 , ME -2 , CE -3 , AE-4, CMS -5 , FR - 6 , EE - 7 ,DEFAULT - 8,  */}
const AllEvents = [
  {
    name: 'Nightwish',
    Department: 2,
    Day: 1,
    image: 'https://images.pexels.com/photos/20240213/pexels-photo-20240213/free-photo-of-portrait-of-woman-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    Discription:'As a web developer for matrixesports, my tasks include customizing the WordPress site for esports, managing content, implementing security measures, optimizing performance, and integrating AWS services for reliable hosting. I ensure the website provides an engaging user experience while maintaining security and scalability in the AWS environment.',
    Registration:'https://github.com/itsxtemper/Java_EMail_Check',
  },
  {
    name: 'Metallica',
    Department: 0,
    Day: 2,
    image: 'https://images.pexels.com/photos/18031828/pexels-photo-18031828/free-photo-of-composition-of-jewelry-dried-flowers-and-books.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    Discription:'A Java Email Checker is a tool or component developed in the Java programming language that quickly validates email addresses. It checks for correct syntax, verifies the existence of the email domain through DNS records and MX record lookup, and establishes an SMTP connection to ensure potential deliverability. This helps in filtering out invalid or non-functional email addresses.',
    Registration:'https://github.com/itsxtemper/Java_EMail_Check',
  },
  {
    name: 'Nirvana',
    Department: 0,
    Day: 3,
    image: 'https://images.pexels.com/photos/19906220/pexels-photo-19906220/free-photo-of-a-tunnel-with-a-white-wall-and-a-door.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    Discription:'Just Some Leetcode DSA Questions',
    Registration:'https://github.com/itsxtemper/Java_EMail_Check',
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

export { SelectOption,services, technologies, experiences, testimonials, projects,AllEvents};

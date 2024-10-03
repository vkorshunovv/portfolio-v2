import starland from "../assets/star_land.png";
import trailguardians from "../assets/trail_guardians.png";
import guauleriaV2 from "../assets/guauleria_v2.png";
import portfolio from "../assets/portfolio_v1.png";
import guauleriaV1 from "../assets/guauleria_v1.png";
import carepulse from "../assets/care_pulse.png";
import littlelemon from "../assets/little_lemon.png";

export const projectsData = [
  {
    id: 1,
    slug: "starland",
    img: starland,
    title: "Star Land",
    subtitle: "Personal E-commerce Website",
    year: "2024",
    github: "https://github.com/vkorshunovv/photo-store-aws",
    tools:
      "Next.js 14, TypeScript, Tailwind, Amplify Gen 2, AWS DynamoDB, AWS Cognito, Stripe",
    url: "https://aliceinstarland.com",
    overview: {
      first:
        "In response to the client's primary goal of maximizing the website's visibility in search engine results, I focused extensively on optimizing for SEO. To achieve minimal latency during page load, I adopted a two-part development strategy: implementing Static Site Generation (SSG) to enhance discoverability and Server-Side Rendering (SSR) for secure data collection on the server side.",
      second:
        "For Continuous Integration and Continuous Deployment (CI/CD), I leveraged the capabilities of AWS Amplify Gen 2, which provides a modern framework for streamlined deployments. User authentication and identity management were efficiently handled using AWS Cognito, ensuring robust security measures. Finally, I integrated a product cart with Stripe to facilitate seamless payment processing, enhancing the overall user experience and ensuring efficient transaction handling.",
    },
  },
  {
    id: 2,
    slug: "trailguardians",
    img: trailguardians,
    title: "TrailGuardians",
    subtitle: "Hiking Community Platform",
    year: "2024",
    github: "https://github.com/vkorshunovv/trail-guardians-frontend",
    tools: "React, TypeScript, CSS, Node/Express, RestAPI, PostgreSQL",
    url: "http://trail-guardians-bucket.s3-website.eu-north-1.amazonaws.com",
    overview: {
      first:
        "This web application is designed to help users post announcements for finding like-minded individuals or organizing clean-up efforts on mountain hiking trails. Alternatively, users can simply mark points on a map where specific maintenance tasks are required, making it easy for others to see what needs attention.",
      second:
        "I implemented robust form validation using Formik and Yup, ensuring data integrity and a smooth user experience. For user authentication, I used JWT, allowing users to register, log in, and manage their accounts securely. All data is stored on the server and retrieved dynamically as needed, ensuring efficient and scalable data handling.",
    },
  },
  {
    id: 3,
    slug: "guauleria-v2",
    img: guauleriaV2,
    title: "Guauleria (v2)",
    subtitle: "Marketplace for Pets",
    year: "2023-2024",
    github: "https://github.com/vkorshunovv/guauleria_search_v2.git",
    tools: "React, CSS, Figma",
    url: "https://guauleria.netlify.app",
    overview: {
      first:
        "In a startup environment, I led the frontend development using React, CSS, and Figma. Working closely with UX/UI designers, I transformed Figma designs into fully responsive, production-ready code. One of my key contributions was building a search and filter system from scratch, enhancing the user experience and navigation.",
      second:
        "The project has since been paused, but my work on the frontend and core functionalities laid a solid foundation for future development. It was an invaluable experience in turning design concepts into functional code and collaborating within a fast-paced startup environment.",
    },
  },
  {
    id: 4,
    slug: "portfolio-v1",
    img: portfolio,
    title: "Portfolio",
    subtitle: "Frontend Developer Portfolio",
    year: "2024",
    github: "https://github.com/vkorshunovv/my-portfolio",
    tools: "React, CSS, Tailwind",
    url: "https://viktorkorshunov.netlify.app",
    overview: {
      first:
        "I developed the first version of my personal portfolio website using React and Tailwind CSS. The goal was to create a clean, visually appealing, and fully responsive site to showcase my projects and skills. Throughout the process, I significantly improved my skills in React hooks and state management, implementing smooth navigation and interactive elements.",
      second:
        "Tailwind CSS allowed for rapid styling with utility-first classes, ensuring consistency across the design. I also optimized performance with lazy loading, making the site both efficient and user-friendly. This project effectively showcases my technical expertise and personal branding.",
    },
  },
  {
    id: 5,
    slug: "guauleria-v1",
    img: guauleriaV1,
    title: "Guauleria (v1)",
    subtitle: "Marketplace for Pets",
    year: "2023-2024",
    github: "https://github.com/vkorshunovv/guauleria.git",
    tools: "React, CSS, Figma",
    url: "https://guauleria1.netlify.app",
    overview: {
      first:
        "In a startup environment, I led the frontend development using React, CSS, and Figma. Working closely with UX/UI designers, I transformed Figma designs into fully responsive, production-ready code. One of my key contributions was building a search and filter system from scratch, enhancing the user experience and navigation.",
      second:
        "The project has since been paused, but my work on the frontend and core functionalities laid a solid foundation for future development. It was an invaluable experience in turning design concepts into functional code and collaborating within a fast-paced startup environment.",
    },
  },
  {
    id: 6,
    slug: "carepulse",
    img: carepulse,
    title: "CarePulse",
    subtitle: "Healthcare App",
    year: "2024",
    github: "https://github.com/vkorshunovv/health_management_app",
    tools: "Next.js 13, TypeScript, Tailwind, Shadcn/ui, Appwrite",
    url: "https://carepulseapp.vercel.app/",
    overview: {
      first:
        "I developed a modern hospital management solution designed to simplify appointment scheduling for both patients and administrators. My focus was on creating a smooth and efficient user experience, using the latest web technologies. For patients, I built features that allow them to easily create, view, and manage their appointments with doctors. On the admin side, I implemented tools for managing appointments, giving administrators the ability to accept, reschedule, or cancel them as needed.",
      second:
        "To ensure the app is both responsive and visually appealing, I used Shad CN and Tailwind CSS for the UI. For the backend and database management, I integrated Appwrite, which handles all the data storage and backend functionality seamlessly.",
    },
  },
  {
    id: 7,
    slug: "littlelemon",
    img: littlelemon,
    title: "Little Lemon",
    subtitle: "Italian Restaurant",
    year: "2023",
    github: "https://github.com/vkorshunovv/capstone-little-lemon.git",
    tools: "React, React Router, CSS, Formik",
    url: "https://vkorshunovv.github.io/capstone-little-lemon",
    overview: {
      first:
        "I developed a restaurant website as part of the Meta Coursera Capstone Project. The primary objective was to design and style a responsive user interface that delivers an exceptional experience across all devices. In this project, I implemented React Router for seamless navigation, allowing users to easily switch between different views, such as the menu, reservation, and contact pages. This enhanced the user experience by providing a smooth and intuitive interface.",
      second:
        "To manage forms effectively, I utilized Formik in conjunction with Yup for form validation. This combination enabled me to handle user inputs with ease, ensuring that all data collected through forms was validated and error-free before submission. The use of Formik significantly simplified state management across different components, allowing me to maintain a consistent and efficient workflow.",
    },
  },
];

import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    threejs,
    proyectoFinalReact,
    threadsApp,
    computacion
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Javascript Developer",
      icon: backend,
    },
    {
      title: "Node js Developer",
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
      name: "React JS",
      icon: reactjs,
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
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      icon: reactjs,
      iconBg: "#383E56",
      points: [
        "Studying and working with projects in React has been an enriching and exciting experience in my career as a developer. This library has allowed me to build dynamic, responsive and high-performance web applications, giving users an exceptional experience.",
        "The knowledge gained from studying React and developing apps with it has given me a solid foundation for tackling more complex web development challenges." ,
        "I'm excited to continue learning and exploring new possibilities with React and its ever-evolving ecosystems.",
      ],
    },
   
    {
      title: "Web Developer",
      icon: web,
      iconBg: "#383E56",
      points: [
        "During my learning process, I have focused on gaining a solid understanding of the key technologies used in modern web development.",
        "One of the most exciting and challenging aspects of web development is creating attractive and highly interactive user interfaces. I have worked with technologies such as HTML, CSS and JavaScript to build intuitive and responsive interfaces, giving users a pleasant and immersive experience.",
      ],
    },
    {
      title: "Javascript Developer",
      icon: javascript,
      iconBg: "#E6DEDD",
      points: [
        "JavaScript proficiency has been a turning point in my career as a web developer. This versatile and powerful language has powered the magic of web development, allowing me to create compelling and functional user experiences.",
      ],
    },
    {
      title: "Node.js Developer",
      icon: nodejs,
      iconBg: "#E6DEDD",
      points: [
        "In my constant search for growth and excellence in the web development field, I have acquired solid knowledge as a backend developer. I am pleased to share my interest and progress in mastering Node.js and related technologies such as Express and MongoDB to drive the development of efficient and scalable applications.",
      ]
    }
  ];
  
  const projects = [
    {
      name: "Threads App",
      description:
        "Clone of threads",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Next.js",
          color: "pink-text-gradient",
        },
      ],
      image: threadsApp,
      source_code_link: "https://github.com/marielboher/threads_app.git",
      source_website_link: "https://threads-app-marielboher.vercel.app/"
    },
    {
      name: "Dakota Home",
      description:
        "Ecommerce created with react and firebase.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: proyectoFinalReact,
      source_code_link: "https://github.com/marielboher/proyectoFinalReact",
      source_website_link: "https://dakota-home.vercel.app/"
    },
    
    {
      name: "Informative Blog ",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "figma desing",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: computacion,
      source_code_link: "https://github.com/marinapamparas/3D-Computacion.git",
      source_website_link: "https://3dcomputacion.vercel.app/"
    },
  ];
  
  export { services, technologies, experiences, projects };
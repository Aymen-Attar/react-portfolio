import project0 from "../assets/projects/project0.png";
import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";

export const HERO_CONTENT = `I am a passionate frontend developer with a strong foundation in crafting visually stunning and user-friendly web interfaces. Combining creativity with technical expertise, I specialize in modern frameworks like React to build responsive, accessible, and performant applications. With an eye for design and a commitment to clean, efficient code, I thrive on turning ideas into engaging digital experiences. As a lifelong learner, I continuously explore emerging technologies to enhance my skills and deliver innovative solutions that meet user and business needs.`;

export const ABOUT_TEXT = `I am a passionate and dedicated frontend developer with a keen eye for design and a solid foundation in creating responsive, user-friendly web applications. Specializing in modern web technologies like React, I focus on delivering clean, efficient code that enhances the user experience. My approach combines creativity with technical expertise, ensuring that each project not only looks great but also performs smoothly. As a lifelong learner, I stay updated with the latest industry trends and continually seek opportunities to improve my skills. I am excited to bring innovative solutions to the digital world and collaborate on impactful projects.`;

export const EXPERIENCES = [

  {
    year: "March 2023 - September 2023",
    role: "Final Year Project Internship",
    company: "Municipality of Msaken",
    description: `Participated in the design and development of a website for the municipality. My responsibilities included gathering functional requirements, creating the site structure, and implementing features to enhance communication with citizens. I utilized React for building dynamic user interfaces and Firebase for backend services, including real-time data management and authentication. I also worked with web technologies such as HTML, CSS, and JavaScript, as well as content management systems, to ensure a user-friendly interface and efficient management of municipal information. This project allowed me to refine my web development skills and contribute to a project with significant social impact.`,
    technologies: ["React", "Firebase", "HTML", "CSS", "JavaScript"],
  },
  {
    year: "June 2022 - July 2022",
    role: "Summer Internship",
    company: "Axia Solutions",
    description: `Utilized tools like Figma and Adobe XD to design intuitive and visually appealing user interfaces. My responsibilities included creating wireframes, interactive prototypes, and high-fidelity mockups for a variety of digital projects. I worked closely with development teams to ensure that the designs not only met the needs of the users but also aligned with the company's objectives. Through collaboration and feedback, I was able to refine and iterate on designs to improve the overall user experience, contributing to the success of the projects.`,
    technologies: ["Figma", "Adobe XD"],
  },
];

export const PROJECTS = [



  {
    title:"Municipality of Msaken",
    image: project0,
    description:
    "A user-friendly municipality website developed using modern web technologies. The platform allows citizens to explore local news, access essential services, and stay informed about community events. Users can submit forms, check the status of building permits, view competition announcements, and file complaints directly through the site.",
    technologies: ["React", "HTML", "CSS", "JavaScript", "Firebase" ]
  },
  {
    title: "Fish Game",
    image: project1,
    description:
      "A simple interactive game developed using web technologies. The player controls a fish that moves through the water, avoiding obstacles and collecting food to gain points. The game features smooth animations, responsive controls, and a scoring system to track progress. It was built with HTML, CSS, and JavaScript, and incorporates game mechanics like collision detection and dynamic updates to the game state.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Doggy Game",
    image: project2,
    description:
      "A basic 2D platformer game where the player can move left, right, and jump. The game features a scrolling background, randomly appearing enemies, and smooth animations. The player controls the character using the arrow keys, and the game updates continuously with gravity and collision detection.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Pizza Delivery Website",
    image: project3,
    description:
      "A website that lets users browse a variety of pizzas, create an account, and easily place orders for delivery or pickup.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    title: "Color Detection",
    image: project4,
    description:
      "Designed to detect and identify colors based on their RGB (Red, Green, Blue) values. By receiving RGB input, the program matches the color to its closest predefined name or categorizes it based on its intensity. The code can be used for various applications, such as image processing, color-based sorting, or design tools, providing accurate color recognition",
    technologies: ["Python"],
  },
];


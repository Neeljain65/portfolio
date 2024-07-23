import { url } from "inspector";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#work" },
  
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Continous Learning",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Mocky-interview",
    des: "Get judge by AI...",
    img: "/ss2.png",
    
    link: "https://mocky-interview.vercel.app/",
  },
  {
    id: 2,
    title: "Notsy-App",
    des: "Share Notes with friends... {on Cloud}",
    img: "/ss3.png",

    link: "https://nosty-app.vercel.app/",
  },
  {
    id: 3,
    title: "Delicious-Sprinkle",
    des: "Not just a bakery website...",
    img: "/ss4.png",

    link: "https://delicious-sprinkle.vercel.app/",
  },
  
];



export const workExperience = [
  {
    id: 1,
    title: "Full stack developer Intern",
    desc: "Intern at kifayti health as a full stack developer",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },

];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/Neeljain65/",
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://x.com/neeliya_"
  },
  {
    id: 3,
    img: "/link.svg",
    url:"https://www.linkedin.com/in/neel-jain-202029260/"
  },
];

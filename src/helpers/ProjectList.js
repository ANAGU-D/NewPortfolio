import Proj1 from "../assets/Proj1.PNG";
import Proj2 from "../assets/proj2.PNG";
import Proj3 from "../assets/proj3.PNG";
import GitHubIcon from "@material-ui/icons/GitHub";
import { RemoveRedEyeRounded } from "@material-ui/icons";

export const ProjectList = [
  {
    name: "Zuvatar",
    description:'Zuvatar is a web app that allows users to create custom avatars for their online profiles. The app offers a variety of styles and features to choose from, enabling users to create a unique and personalized avatar that represents them online.',
    image: Proj1,
    skills: "React JS, Python, CSS",
    link: <a href="https://github.com/workshopapps/avatarai.web" title="Github Repo"target='_blank'> <GitHubIcon /></a>,
    link2: <a href="https://zuvatar.art/"target='_blank' title="Live"><RemoveRedEyeRounded/> </a>
    
  },
  {
    name: "MetaBnB",
    image: Proj2,
    description:'MetaBnB is a frontend site that aims to provide you access to luxury and affordable houses in the metaverse, and help you get a chance to turn your imagination to reality at your comfort zone',
    skills: "React JS",
    link: <a href="https://github.com/ANAGU-D/MetaBNB" title="Github Repo"target='_blank'> <GitHubIcon /></a>,
    link2: <a href="https://metabnbb.netlify.app/"target='_blank' title="Live"><RemoveRedEyeRounded/> </a>
  },
  {
    name: "TestApp",
    description:'TestApp is a web application that allows users create Will within 10 mins',
    image: Proj3,
    skills: "React JS",
    link: <a href="https://github.com/ANAGU-D/TestApp" title="Github Repo"target='_blank'> <GitHubIcon /></a>,
    link2: <a href="https://testapp5.netlify.app/"target='_blank' title="Live"><RemoveRedEyeRounded/> </a>
  }
];

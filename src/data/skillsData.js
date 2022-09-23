import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faB,
  faCodeBranch,
  faFire,
  faVials,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3,
  faSass,
  faJs,
  faReact,
  faNodeJs,
  faFigma,
  faGithub,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

export const skillsArr = [
  {
    name: "HTML5",
    icon: <FontAwesomeIcon icon={faHtml5} />,
  },
  {
    name: "CSS3",
    icon: <FontAwesomeIcon icon={faCss3} />,
  },
  {
    name: "SCSS",
    icon: <FontAwesomeIcon icon={faSass} />,
  },
  {
    name: "JavaScript",
    icon: <FontAwesomeIcon icon={faJs} />,
  },
  {
    name: "React",
    icon: <FontAwesomeIcon icon={faReact} />,
  },
  {
    name: "Git",
    icon: <FontAwesomeIcon icon={faCodeBranch} />,
  },
  {
    name: "GitHub",
    icon: <FontAwesomeIcon icon={faGithubSquare} />,
  },
  {
    name: "Node.js",
    icon: <FontAwesomeIcon icon={faNodeJs} />,
  },
  {
    name: "Jest / Enzyme / React Testing Library",
    icon: <FontAwesomeIcon icon={faVials} />,
  },
  {
    name: "BEM",
    icon: <FontAwesomeIcon icon={faB} />,
  },
  {
    name: "Firebase",
    icon: <FontAwesomeIcon icon={faFire} />,
  },
];

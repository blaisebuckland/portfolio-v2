import pairsImg from "./assets/projectImages/pairs.jpg";
import brewdogImg from "./assets/projectImages/brewdog.jpg";

export const projectData = [
  {
    name: "Pairs",
    description:
      "This is a memory game in which the player must find all the matching pairs to win. There are three difficulty levels, each with its own theme. In the higher levels there are more cards to match and it becomes more difficult to differentiate between the images.",
    image: pairsImg,
    github: "https://github.com/blaisebuckland/pairs-game",
    url: "https://blaisebuckland.github.io/pairs-game/",
    technologies: [1, 2, 3],
  },
  {
    name: "Brewdog API",
    description:
      "This is a React app which pulls data from the Punk API. Beers are displayed on cards and can be filtered using a search box or by selecting a filter. The aim of the project was to develop my skills in React, working with APIs and unit testing.",
    image: brewdogImg,
    github: "https://github.com/blaisebuckland/brewdog",
    url: "https://blaisebuckland.github.io/brewdog/",
    technologies: [1, 2, 3],
  },
];

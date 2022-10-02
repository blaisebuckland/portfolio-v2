import brewdogImg from "../assets/projectImages/brewdog.png";
import pairsImg from "../assets/projectImages/pairs.png";
import morseImg from "../assets/projectImages/morse-translator.png";
import hostileAliensImg from "../assets/projectImages/hostile-aliens.png";
import calculatorImg from "../assets/projectImages/calculator.png";

export const projectData = [
  {
    name: "Pairs",
    description:
      "This is a memory game in which the player must find all the matching pairs to win. There are three difficulty levels, each with its own theme. In the higher levels there are more cards to match and it becomes more difficult to differentiate between the images.",
    image: pairsImg,
    github: "https://github.com/blaisebuckland/pairs-game",
    url: "https://blaisebuckland.github.io/pairs-game/",
    technologies: ["JavaScript", "SCSS", "BEM"],
  },
  {
    name: "Brewdog API",
    description:
      "This is a React app which pulls data from the Punk API. Beers are displayed on cards and can be filtered using a search box or by selecting a filter. The aim of the project was to develop my skills in React, working with APIs and unit testing.",
    image: brewdogImg,
    github: "https://github.com/blaisebuckland/brewdog",
    url: "https://blaisebuckland.github.io/brewdog/",
    technologies: ["React", "API Integration", "Enzyme", "SCSS"],
  },
  {
    name: "Morse Code Translator",
    description:
      "This translator can translate words, numbers and simple punctuation from English to Morse code and vice versa. It is my first project using JavaScript classes and unit testing.",
    image: morseImg,
    github: "https://github.com/blaisebuckland/morse-code-translator",
    url: "blaisebuckland.github.io/morse-code-translator",
    technologies: ["JavaScript", "Jest"],
  },
  {
    name: "Hostile Aliens",
    description:
      "This is a battleship-like game in which the player presses a button to hit a random ship in the enemy fleet. There is a mothership, five defence ships and eight attack ships. The game ends when the player has either destroyed the mothership or has destroyed all ships. It was built using an OOP appraoch and was unit tested using Jest.",
    image: hostileAliensImg,
    github: "https://github.com/blaisebuckland/hostile-aliens",
    url: "blaisebuckland.github.io/hostile-aliens/",
    technologies: ["JavaScript", "Jest", "OOP"],
  },
  {
    name: "Calculator",
    description:
      "This calculator is built in vanilla JS. The user can can perform basic mathematical operations (+,-,x,÷). The calculator can also calculate percentages and handle decimals.",
    image: calculatorImg,
    github: "https://github.com/blaisebuckland/calculator",
    url: "blaisebuckland.github.io/calculator/",
    technologies: ["JavaScript", "SCSS", "BEM"],
  },
];

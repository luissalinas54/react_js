import reactImage from "../../assets/react-logo-xs.png";
import "./Header.css";

const reactTitles = [
  "React Fundamentos",
  "React Principios",
  "React Conceptos",
];

function getRandomIntInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//el default es para exportar una sola funcion por archivo
export default function Header() {
  const titleReact =
    reactTitles[getRandomIntInRange(0, reactTitles.length - 1)];
  return (
    <header>
      <img src={reactImage} alt="React logo" />
      <h1>{titleReact}</h1>
      <p>
        ¡Conceptos fundamentales de React que necesitas conocer para desarrollar
        cualquier app con esta famosa librería!
      </p>
    </header>
  );
}

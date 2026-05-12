const reactTitles = [
  "React Fundamentos",
  "React Principios",
  "React Conceptos",
];

function getRandomIntInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Header() {
  const titleReact =
    reactTitles[getRandomIntInRange(0, reactTitles.length - 1)];
  return (
    <header>
      <img src="src/assets/react-logo-xs.png" alt="React logo" />
      <h1>{titleReact}</h1>
      <p>
        ¡Conceptos fundamentales de React que necesitas conocer para desarrollar
        cualquier app con esta famosa librería!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>¡Comenzamos Picando Código en React!</h2>
      </main>
    </div>
  );
}

export default App;

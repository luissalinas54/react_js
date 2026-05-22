import ComponentImage from "../assets/blocks-logo.png";
import jsxImage from "../assets/mix-logo.webp";
import propsImage from "../assets/settings-icon.png";
import stateImage from "../assets/state-logo.png";

export const Core_Concepts = [
  {
    imagePath: ComponentImage,
    title: "Componentes",
    description:
      "React está basado en componentes, lo que permite crear interfaces de usuario reutilizables y encapsuladas.",
  },
  {
    imagePath: jsxImage,
    title: "JSX",
    description:
      "React permite describir cómo debería verse la interfaz de usuario en lugar de manipular directamente el DOM.",
  },
  {
    imagePath: propsImage,
    title: "Props",
    description:
      "Los componentes de React reciben datos a través de props, lo que permite una comunicación efectiva entre ellos.",
  },
  {
    imagePath: stateImage,
    title: "Estado",
    description:
      "React permite manejar el estado de los componentes, lo que facilita la creación de interfaces de usuario interactivas.",
  },
];

export const EXAMPLES = {
  components: {
    title: "Componentes",
    description:
      "Los componentes son los bloques de construcción de las aplicaciones React. Un componente es un módulo autocontenido (HTML + CSS opcional + JS) que renderiza alguna salida.",
    code: `
  function Welcome() {
    return <h1>¡Hola, Mundo!</h1>;
  }`,
  },
  jsx: {
    title: "JSX",
    description:
      "JSX es una extensión sintáctica de JavaScript. Es similar a un lenguaje de plantillas, pero tiene toda la potencia de JavaScript (por ejemplo, puede emitir contenido dinámico).",
    code: `
  <div>
    <h1>Bienvenido {userName}</h1>
    <p>¡Es hora de aprender React!</p>
  </div>`,
  },
  props: {
    title: "Props",
    description:
      "Los componentes aceptan entradas arbitrarias llamadas props. Son como argumentos de función.",
    code: `
  function Welcome(props) {
    return <h1>Hola, {props.name}</h1>;
  }`,
  },
  state: {
    title: "Estado",
    description:
      "El estado permite a los componentes de React cambiar su salida a lo largo del tiempo en respuesta a las acciones del usuario, las respuestas de la red y cualquier otra cosa.",
    code: `
  function Counter() {
    const [isVisible, setIsVisible] = useState(false);
  
    function handleClick() {
      setIsVisible(true);
    }
  
    return (
      <div>
        <button onClick={handleClick}>Muestra los detalles</button>
        {isVisible && <p>¡Estos detalles son alucinantes!</p>}
      </div>
    );
  }`,
  },
};

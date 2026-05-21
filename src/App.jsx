import { Core_Concepts } from "./assets/data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";

//UTILIZAMOS EL PARAMETREO SPREED (...Core_Concepts[i]) PARA PASAR LOS PROPS DE CADA OBJETO DEL ARRAY DE CONCEPTOS FUNDAMENTALES,
//YA QUE TODAS LAS PROPIEDADES DE CADA OBJETO DEL ARRAY COINCIDEN CON LOS NOMBRES DE LOS PROPS QUE ESPERA EL COMPONENTE CoreConcepts,
//ASÍ EVITAMOS TENER QUE PASAR CADA PROPIEDAD DE MANERA INDIVIDUAL
//EN EL COMPONENTE TabButton SE UTILIZA EL PROP onClick PARA ASOCIAR UN EVENTO DE CLIC AL BOTÓN, no es el evento onClick
//Para usar los template iterals usamos las comillas invertidas (``)
//y dentro de ellas colocamos la expresión que queremos evaluar entre ${}
//hacemos uso del arrow function () => para pasar la declaracion de la funcion, no su ejecicion
//de esta manera la funcion de handle click no se ejecuta inmediatamente al renderizar el componente, sino que se ejecuta solo cuando se hace click en el boton

function App() {
  //VARIBLE PARA CONTROLAR EL CONTENIDO DINAMICO
  let tabContent =
    "Por favor, haz click en un botón para mostrar el contenido correspondiente.";
  //CREAMOS LA FUNCION DEL HANDLECLICK
  function handleClickMenu(SelectedButton) {
    tabContent = SelectedButton; //Aquí se asigna el nombre del botón clickeado a la variable tabContent para mostrar el contenido correspondiente
    console.log(`Has hecho click en el botón: ${SelectedButton}`); //Aquí se muestra el nombre del botón que se ha clickeado
  }
  return (
    <div>
      <Header />

      <section id="coreConcepts">
        <h2>Conceptos Fundamentales</h2>
        <div>
          <CoreConcepts {...Core_Concepts[0]} />
          <CoreConcepts {...Core_Concepts[1]} />
          <CoreConcepts {...Core_Concepts[2]} />
          <CoreConcepts {...Core_Concepts[3]} />
        </div>
      </section>
      <section id="reactExamples">
        <h2>Ejemplos de React</h2>
        <menu>
          <TabButton onClick={() => handleClickMenu("Componente")}>
            Componente
          </TabButton>
          <TabButton onClick={() => handleClickMenu("JSX")}>JSX</TabButton>
          <TabButton onClick={() => handleClickMenu("Props")}>Props</TabButton>
          <TabButton onClick={() => handleClickMenu("Estados")}>
            Estados
          </TabButton>
        </menu>
        {tabContent}
        Contenido dinamico
      </section>

      <main>
        <h2>¡Comenzamos Picando Código en React!</h2>
      </main>
    </div>
  );
}

export default App;

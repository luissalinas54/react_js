import { Core_Concepts } from "./assets/data.js";
import { EXAMPLES } from "./assets/data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import { useState } from "react";
import { use } from "react";

//UTILIZAMOS EL PARAMETREO SPREED (...Core_Concepts[i]) PARA PASAR LOS PROPS DE CADA OBJETO DEL ARRAY DE CONCEPTOS FUNDAMENTALES,
//YA QUE TODAS LAS PROPIEDADES DE CADA OBJETO DEL ARRAY COINCIDEN CON LOS NOMBRES DE LOS PROPS QUE ESPERA EL COMPONENTE CoreConcepts,
//ASÍ EVITAMOS TENER QUE PASAR CADA PROPIEDAD DE MANERA INDIVIDUAL
//EN EL COMPONENTE TabButton SE UTILIZA EL PROP onClick PARA ASOCIAR UN EVENTO DE CLIC AL BOTÓN, no es el evento onClick
//Para usar los template iterals usamos las comillas invertidas (``)|
//y dentro de ellas colocamos la expresión que queremos evaluar entre ${}
//hacemos uso del arrow function () => para pasar la declaracion de la funcion, no su ejecicion
//de esta manera la funcion de handle click no se ejecuta inmediatamente al renderizar el componente, sino que se ejecuta solo cuando se hace click en el boton
//SE TIENE QUE USAR EL HOOK EN LA FUNCION DE COMPONENTE (APP EN ESTE CASO) Y NO EN OTRA PORQUE SOLO SE PUEDE USAR LOS HOOKS DENTRO DE COMPONENTES FUNCIONALES,
// NO SE PUEDEN USAR EN FUNCIONES NORMALES O EN CLASESB CREADAS POR NOSOTROS
//LAS FUNCIONES HOOK DEBE SER LO PRIMERO EN DECLARARSE DENTRO DEL COMPONENTE, ANTES DE CUALQUIER OTRA LÓGICA O DECLARACIÓN DE VARIABLES,
//PARA ASEGURAR QUE SE EJECUTEN EN EL ORDEN CORRECTO Y NO CAUSEN ERRORES EN LA RENDERIZACIÓN DEL COMPONENTE
//HAY QUE TENER EN CUENTA QUE AL ACTUALIZAR LA PAGINA CON EL ESTADO SE VUELVE A RENDERIZAR EL COMPONENTE,
//EN CONSOLA VA A MOSTRAR EL VALOR ANTERIOR DEL ESTADO, PORQUE LA ACTUALIZACIÓN DEL ESTADO ES ASÍNCRONA,
//POR LO QUE EL VALOR DE selectedTopic NO SE ACTUALIZA INMEDIATAMENTE DESPUÉS DE LLAMAR A setSelectedTopic,
//con el operadro {!selectedTopic} se evalúa si selectedTopic es null o undefined, lo que indica que no se ha seleccionado ningún tema aún
function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  //usamos la desestructuración de arrays para obtener el valor actual del estado (selectedTopic) y la función para actualizarlo (setselectedTopic)
  //con la primera obtenemos el valor seleccionado y con la segunda lo establecemos/actualizamos
  //setSeelected topic siempre es al funcion que actualiza el estado
  //CREAMOS LA FUNCION DEL HANDLECLICK
  function handleClickMenu(SelectedButton) {
    setSelectedTopic(SelectedButton); //Aquí se actualiza el estado selectedTopic con el nombre del botón clickeado
    console.log(`Has hecho click en el botón: ${selectedTopic}`); //Aquí se muestra el nombre del botón que se ha clickeado
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
          <TabButton onClick={() => handleClickMenu("components")}>
            Componente
          </TabButton>
          <TabButton onClick={() => handleClickMenu("jsx")}>JSX</TabButton>
          <TabButton onClick={() => handleClickMenu("props")}>Props</TabButton>
          <TabButton onClick={() => handleClickMenu("state")}>
            Estados
          </TabButton>
        </menu>
        {!selectedTopic ? (
          <p>
            Aqui se vana describir las fucniones de react, elige una de ellas
          </p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )}
      </section>

      <main>
        <h2>¡Comenzamos Picando Código en React!</h2>
      </main>
    </div>
  );
}

export default App;

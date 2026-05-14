import { Core_Concepts } from "./assets/data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";

//UTILIZAMOS EL PARAMETREO SPREED (...Core_Concepts[i]) PARA PASAR LOS PROPS DE CADA OBJETO DEL ARRAY DE CONCEPTOS FUNDAMENTALES,
//YA QUE TODAS LAS PROPIEDADES DE CADA OBJETO DEL ARRAY COINCIDEN CON LOS NOMBRES DE LOS PROPS QUE ESPERA EL COMPONENTE CoreConcepts,
//ASÍ EVITAMOS TENER QUE PASAR CADA PROPIEDAD DE MANERA INDIVIDUAL
function App() {
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

      <main>
        <h2>¡Comenzamos Picando Código en React!</h2>
      </main>
    </div>
  );
}

export default App;

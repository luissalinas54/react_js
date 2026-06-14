import Header from "./components/Header/Header.jsx";
import CoreConceptsSection from "./components/CoreConceptsSection/CoreConceptsSection.jsx";
import { useState, Fragment } from "react";
import ExampleSection from "./components/ExamplesSection/ExampleSection.jsx";
//import { use } from "react";

//UTILIZAMOS EL PARAMETREO SPREED (...Core_Concepts[i]) PARA PASAR LOS PROPS DE CADA OBJETO DEL ARRAY DE CONCEPTOS FUNDAMENTALES,
//YA QUE TODAS LAS PROPIEDADES DE CADA OBJETO DEL ARRAY COINCIDEN CON LOS NOMBRES DE LOS PROPS QUE ESPERA EL COMPONENTE CoreConcepts,
//ASÍ EVITAMOS TENER QUE PASAR CADA PROPIEDAD DE MANERA INDIVIDUAL
//EN EL COMPONENTE TabButton SE UTILIZA EL PROP onClick PARA ASOCIAR UN EVENTO DE CLIC AL BOTÓN, no es el evento onClick
//Para usar los template iterals usamos las comillas invertidas (``)|
//y dentro de ellas colocamos la expresión que queremos evaluar entre ${}
//hacemos uso del arrow function, o funcion anonima de tipo flecha () => para pasar la declaracion de la funcion, no su ejecicion
//de esta manera la funcion de handle click no se ejecuta inmediatamente al renderizar el componente, sino que se ejecuta solo cuando se hace click en el boton
//SE TIENE QUE USAR EL HOOK EN LA FUNCION DE COMPONENTE (APP EN ESTE CASO) Y NO EN OTRA PORQUE SOLO SE PUEDE USAR LOS HOOKS DENTRO DE COMPONENTES FUNCIONALES,
// NO SE PUEDEN USAR EN FUNCIONES NORMALES O EN CLASESB CREADAS POR NOSOTROS
//LAS FUNCIONES HOOK DEBE SER LO PRIMERO EN DECLARARSE DENTRO DEL COMPONENTE, ANTES DE CUALQUIER OTRA LÓGICA O DECLARACIÓN DE VARIABLES,
//PARA ASEGURAR QUE SE EJECUTEN EN EL ORDEN CORRECTO Y NO CAUSEN ERRORES EN LA RENDERIZACIÓN DEL COMPONENTE
//HAY QUE TENER EN CUENTA QUE AL ACTUALIZAR LA PAGINA CON EL ESTADO SE VUELVE A RENDERIZAR EL COMPONENTE,
//EN CONSOLA VA A MOSTRAR EL VALOR ANTERIOR DEL ESTADO, PORQUE LA ACTUALIZACIÓN DEL ESTADO ES ASÍNCRONA,
//POR LO QUE EL VALOR DE selectedTopic NO SE ACTUALIZA INMEDIATAMENTE DESPUÉS DE LLAMAR A setSelectedTopic,
//con el operadro {!selectedTopic} se evalúa si selectedTopic es null o undefined, lo que indica que no se ha seleccionado ningún tema aún
//el metodo map produce un nuevo array basado en el array original,
//aplicando una función a cada elemento del array original y devolviendo el resultado en un nuevo array
//en map siempre hay que colocar una key unica para cada elemento del array
//El componente <Fragment> se usa como componente padre para contener a los demas
//tambien se mueden usar etiquetas vacias <> </> para lo mismo que el Fragment, es una sintaxis mas corta y limpia
function App() {
  return (
    <>
      <Header />
      <CoreConceptsSection />
      <ExampleSection />
      <main>
        <h2>¡Comenzamos Picando Código en React!</h2>
      </main>
    </>
  );
}

export default App;

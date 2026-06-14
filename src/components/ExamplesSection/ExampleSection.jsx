import TabButton from "../../components/TabButton/TabButton.jsx";
import Section from "../../components/Section/Section.jsx";
import TabsMenu from "../../components/TabsMenu/TabsMenu.jsx";
import { EXAMPLES } from "../../assets/data.js";
import { useState } from "react";
import "./ExampleSection.css";

export default function ExampleSection() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  //usamos la desestructuración de arrays para obtener el valor actual del estado (selectedTopic) y la función para actualizarlo (setselectedTopic)
  //con la primera obtenemos el valor seleccionado y con la segunda lo establecemos/actualizamos
  //setSeelected topic siempre es al funcion que actualiza el estado
  //CREAMOS LA FUNCION DEL HANDLECLICK
  function handleClickMenu(SelectedButton) {
    setSelectedTopic(SelectedButton); //Aquí se actualiza el estado selectedTopic con el nombre del botón clickeado
    console.log(`Has hecho click en el botón: ${selectedTopic}`); //Aquí se muestra el nombre del botón que se ha clickeado
  }
  //AQUI COLOCAMOS EL CONTENIDO QUE SE VA A MOSTAR EN EL TAB DEPENDIENDO DEL BOTON QUE SE HAYA CLICKEADO,
  //SI NO SE HA CLICKEADO NINGUN BOTON SE MUESTRA UN MENSAJE POR DEFECTO
  let tabContent = (
    <p>Aqui se vana describir las fucniones de react, elige una de ellas</p>
  );

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  //AQUI SOLO PUEDE IR CONTENIDO DE JSX
  return (
    <Section title="Ejemplos de React" id="reactExamples" className="miClase">
      <TabsMenu
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleClickMenu("components")}
            >
              Componente
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleClickMenu("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleClickMenu("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleClickMenu("state")}
            >
              Estados
            </TabButton>
          </>
        }
      >
        {tabContent}
      </TabsMenu>
    </Section>
  );
}

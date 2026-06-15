import Section from "../Section/Section";

//COMPONENTE PLANTILLA PARA PODER COLOCAR LOS BOTONES DE LAS SECCIONES Y EL CONTENIDO QUE SE VA A MOSTRAR EN CADA UNA DE ELLAS
//COLOCAMOS LA PRIMERA LETRA DE LA PROP EN MAYUSCULA PARA PODER USARLA COMO COMPONENTE DE JSX
//DENTRO DEL RETURN SE RETORNA CCODIGO JSX
//DENTRO DEL ({}) DE LA DECLARACION DE LA FUNCION SE RESCRIBE CODIGO JS
//COLOCAMOS ButtonsContainer = Section, PARA DARLE UN VALOR POR DEFECTO, PUEDE SER = "div" u otro componetnte de html

export default function TabsMenu({
  buttons = (
    <li>
      <button>Default Content</button>
    </li>
  ),
  children = <p>Default Content</p>,
  ButtonsContainer = Section,
}) {
  //CREAMOS UN COMPONENTE PERSOALIZADO A TAVEZ DE UNA CONSTANTE
  //ESTA CONSTANTE VA ALMACENAR AL COMPONENTE
  // const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}

//COMPONENTE PLANTILLA PARA PODER COLOCAR LOS BOTONES DE LAS SECCIONES Y EL CONTENIDO QUE SE VA A MOSTRAR EN CADA UNA DE ELLAS
//COLOCAMOS LA PRIMERA LETRA DE LA PROP EN MAYUSCULA PARA PODER USARLA COMO COMPONENTE DE JSX
export default function TabsMenu({ buttons, children, ButtonsContainer }) {
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

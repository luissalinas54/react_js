import "./TabButton.css";
//la clase children sirve para pasar contenido a un componente sin necesidad de definir un prop específico para ello
//estas van a ahcer referencia a todo tipo de contendio insertado en medio de las aperturas y cierres de un componente,
//ya sea texto, elementos HTML o incluso otros componentes
//se utiliza este metodo en vez de la desestructuración de props (como se uso en el CoreConcepts)
// para evitar tener que definir un prop específico para cada tipo de contenido que queramos pasar al componente,
//Creamos un evento en el boton con al prop onClick
//SI SE CREA UNA FUNCION DENTRO DE UN COMPONENTE SOLO SE PUEDE LLAMAR ESA FUNCION DENTRO DE ESE COMPONENTE.
//utilizamos handleClic en vez de handleClic() porque con la segunda opcion la funcion se ejecutaria inmediatamente al renderizar el componente,
//en cambio con la primera opcion se ejecuta solo cuando se hace click en el boton

export default function TabButton({ children, onClick }) {
  //CREAMOS LA FUNCION PARA EL BOTON

  return (
    <li>
      <button onClick={onClick}>{children}</button>
    </li>
  );
}

import "./CoreConcepts.css";
//EN VEZ DE COLOCAR LA PALABRA PROPS, LA DESESTRUCTURAMOS EN LOS PROPS QUE ESPERA EL COMPONENTE, EN ESTE CASO imagePath, title Y description,
//PARA PODER UTILIZARLOS DIRECTAMENTE DENTRO DEL COMPONENTE

export default function CoreConcepts({ imagePath, title, description }) {
  return (
    <div>
      <img src={imagePath} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

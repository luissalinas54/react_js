//con ...props se pueden pasar todas las propiedades que se quieran a este componente, como id, className, etc
//estas son propiedades mas generales que se pueden usar en cualquier componente,
//title y children son propiedades específicas de este componente,
export default function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

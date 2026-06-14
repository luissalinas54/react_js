import CoreConcepts from "../../components/CoreConcepts/CoreConcepts.jsx";
import { Core_Concepts } from "../../assets/data.js";
import "./CoreConceptsSection.css";

export default function CoreConceptsSection() {
  return (
    <section id="coreConcepts">
      <h2>Conceptos Fundamentales</h2>
      <div>
        {Core_Concepts.map((conceptItem) => (
          <CoreConcepts key={conceptItem.title} {...conceptItem} />
        ))}
      </div>
    </section>
  );
}

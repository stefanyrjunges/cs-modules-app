import "./Modules.css";
import ReadMoreButton from "../Button/ReadMoreButton.jsx";
import { ReadMoreTab } from "../ReadMore/ReadMoreTab.jsx";
import { useState } from "react";

export default function Modules({ image, title, description, id }) {
  const [selectedModuleId, setSelectedModuleId] = useState(null);

  function handleSelect(id) {
    setSelectedModuleId((prevId) => (prevId === id ? null : id));
  }

  return (
    <div id="modules-container">
      <li>
        <img src={image} alt={title} />
        <h1>{title}</h1>
        <p>{description}</p>

        <ReadMoreButton
          isSelected={selectedModuleId === id}
          onSelect={() => handleSelect(id)}
        />
      </li>

      {selectedModuleId && <ReadMoreTab selectedModuleId={selectedModuleId} />}
    </div>
  );
}

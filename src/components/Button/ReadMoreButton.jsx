import "./ReadMoreButton.css";

export default function ReadMoreButton({ isSelected, onSelect }) {
  return (
    <li>
      <button id="read-more" onClick={onSelect}>
        {isSelected ? "show less" : "read more"}
      </button>
    </li>
  );
}

import "./Header.css";

const alternativeNames = [
  "CS Modules at NCI",
  "Computer Science Modules at NCI",
  "CompSci Modules at NCI",
  "NCI Computing Modules",
];

function generateRandomIndex(max) {
  return Math.floor(Math.random() * max + 1);
}

export default function Header() {
  const headerName =
    alternativeNames[generateRandomIndex(alternativeNames.length - 1)];

  return (
    <header>
      <h1>{headerName}</h1>
      <p>
        Let's dive into the 3rd Year CS modules at National College of Ireland
      </p>
    </header>
  );
}

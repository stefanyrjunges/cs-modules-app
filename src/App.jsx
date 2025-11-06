import Header from "./components/Header/Header.jsx";
import { CS_MODULES } from "./data.js";
import Module from "./components/Modules/Modules.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <section id="cs-modules">
          <ul id="modules-list">
            {CS_MODULES.map((module) => (
              <Module key={module.title} {...module} />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;

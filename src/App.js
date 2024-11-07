import "./index.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container-sm ">
        <Weather defaultCity="tokyo" />
        <footer>
          The project was code {""}
          <a href="https://github.com/Ayokunnumi247">Ayokunnumi Andu</a>
          {""} and is {""}
          <a href="https://github.com/Ayokunnumi247/project-weather">
            open-sourced on GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;

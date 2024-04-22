import watermelon from "./assets/watermelon.png";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={watermelon} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Watermelon</h1>

      <p className="read-the-docs">Welcome to watermelon</p>
    </>
  );
}

export default App;

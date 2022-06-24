import logo from "./logo.svg";
import "./App.css";
import Basic from "./formBasix";
import DATA from "./data";

function App() {
  const happen = false;
  const navigate = () => {
    if (happen) {
      <DATA />;
    }
  };
  return (
    <div className="App">
      <Basic />
      <button className="btn" onClick={navigate}></button>
    </div>
  );
}

export default App;

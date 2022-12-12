import "./App.css";
import Form from "./Form";
import background from "./yoga.jpg";

function App() {
  return (
    <div
      style={{ backgroundImage: `url(${background})`, height: "100vh" }}
      className="App"
    >
      <Form />
    </div>
  );
}

export default App;

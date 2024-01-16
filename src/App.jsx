import Heading from "./components/Appheader";
import MainBtns from "./components/AddingBtns";
import Content1 from "./components/TodoContent1";
import Content2 from "./components/TodoContent2";
import "./App.css";
function App() {
  return (
    <center className="todoContainer">
      <Heading />
      <MainBtns />
      <br />
      <div className="itemsContainer">
        <Content1 />
        <br />
        <Content2 />
        <br />
      </div>
    </center>
  );
}

export default App;

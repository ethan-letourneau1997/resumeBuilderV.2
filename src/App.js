import "./App.css";
import Tabs from "./components/Tabs";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="grid grid-cols-12 App">
      <div className="col-span-4 ">
        <Tabs />
      </div>
      <div className="col-span-8 ">
        <Resume />
      </div>
    </div>
  );
}

export default App;

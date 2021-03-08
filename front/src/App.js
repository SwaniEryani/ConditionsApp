import "./App.css";
import useApplicationData from "./hooks/useApplicationData.js";

import Conditions from "./components/Conditions";

function App() {
  const { state } = useApplicationData();

  console.log(state.condition);
  return (
    <div className="App">
      <Conditions state= {state}/>
    </div>
  );
}

export default App;

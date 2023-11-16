import React from "react";
import students from "./MOCK_DATA";
import College from "./components/college"
function App() {
  return (
    <div className="App bg-dark">
      <header className="App-header">
        <College data={students} />
      </header>
    </div>
  );
}

export default App;

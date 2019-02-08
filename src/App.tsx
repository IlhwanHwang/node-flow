import React from "react";
import NodeEditor from "./components/NodeEditor"
import NodePanel from "./components/NodePanel"

class App extends React.Component {
  render() {
    return (
      <div style={{ overflow: "hidden" }}>
        <div style={{ width: "100vw", height: "50vh" }}>
          <NodePanel/>
        </div>
        <div style={{ width: "100vw", height: "50vh" }}>
          <NodeEditor/>
        </div>
      </div>
    );
  }
}

export default App;

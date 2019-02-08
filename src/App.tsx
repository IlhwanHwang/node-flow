import React from "react";
import NodeEditor, {NodeEditorState} from "./components/NodeEditor"
import NodePanel from "./components/NodePanel"
import {RootComponent} from "./components/ExtendedComponent"

interface BaseState {
  nodeEditor: NodeEditorState
}

class App extends RootComponent<{}, BaseState> {
  render() {
    return (
      <div style={{ overflow: "hidden" }}>
        <div style={{ width: "100vw", height: "50vh" }}>
          <NodePanel/>
        </div>
        <div style={{ width: "100vw", height: "50vh" }}>
          <NodeEditor {...this.state.nodeEditor} backprop={this.makeBackprop("nodeEditor")}/>
        </div>
      </div>
    );
  }
}

export default App;

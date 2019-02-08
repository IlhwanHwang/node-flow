import React from "react";
import NodeEditor, {NodeEditorState} from "./components/NodeEditor"
import NodePanel, {NodePanelState} from "./components/NodePanel"
import {RootComponent} from "./components/ExtendedComponent"
import {DrumRollRowState} from "./components/DrumRollRow"
import {NodeState} from "./components/Node"

interface BaseState {
  nodeEditor: NodeEditorState,
  nodePanel: NodePanelState
}

class App extends RootComponent<{}, BaseState> {

  state = {
    nodeEditor: {
      target: {
        rows: Array<DrumRollRowState>()
      }
    },
    nodePanel: {
      nodes: Array<NodeState>()
    }
  }

  render() {
    return (
      <div style={{ overflow: "hidden" }}>
        <div style={{ width: "100vw", height: "50vh" }}>
          <NodePanel {...this.state.nodePanel} backprop={this.makeBackprop("nodePanel")}/>
        </div>
        <div style={{ width: "100vw", height: "50vh" }}>
          <NodeEditor {...this.state.nodeEditor} backprop={this.makeBackprop("nodeEditor")}/>
        </div>
      </div>
    );
  }
}

export default App;

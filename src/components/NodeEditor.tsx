import React from 'react';
import DrumRoll, {DrumRollState} from "./DrumRoll"
import {ChildComponent} from "./ExtendedComponent"

export interface NodeEditorState {
  target: DrumRollState
}

interface Props extends NodeEditorState {
  backprop: (d: any) => void
}

class NodeEditor extends ChildComponent<Props> {
  render() {
    return (
      <div style={{
        border: "solid 1px black", 
        boxSizing: "border-box", 
        width: "100%", 
        height: "100%",
        overflow: "scroll"
      }}>
        <DrumRoll {...this.props.target} backprop={this.makeBackprop("target")}></DrumRoll>
      </div>
    );
  }
}

export default NodeEditor
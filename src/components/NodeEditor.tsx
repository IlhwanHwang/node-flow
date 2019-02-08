import React from 'react';
import DrumRoll from "./DrumRoll"

class NodeEditor extends React.Component {
  render() {
    return (
      <div style={{
        border: "solid 1px black", 
        boxSizing: "border-box", 
        width: "100%", 
        height: "100%",
        overflow: "scroll"
      }}>
        <DrumRoll></DrumRoll>
      </div>
    );
  }
}

export default NodeEditor
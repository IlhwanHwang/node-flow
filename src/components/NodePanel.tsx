import React from 'react';
import Node from "./Node";

interface Props {
  nodes: Array<any>
};

class NodePanel extends React.Component {
  id: number = 0

  render() {
    return (
      <div style={{
        border: "solid 1px black", 
        boxSizing: "border-box", 
        width: "100%", 
        height: "100%",
        overflow: "hidden"
      }}>
        <Node id={1} initx={100}></Node>
        <Node id={2} initx={300}></Node>
      </div>
    );
  }
}

export default NodePanel
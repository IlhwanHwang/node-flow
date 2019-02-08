import React from 'react';
import Node, {NodeState} from "./Node";
import {ChildComponent} from "./ExtendedComponent"

export interface NodePanelState {
  nodes: Array<NodeState>
};

interface Props extends NodePanelState {
  backprop: (d: any) => void
}

class NodePanel extends ChildComponent<Props> {
  id: number = 0

  render() {
    const nodes = this.props.nodes.map((n, ind) => {
      return (
        <Node
          {...n}
          backprop={this.makeBackprop("nodes", ind)}
        >
        </Node>
      )
    })
    return (
      <div style={{
        border: "solid 1px black", 
        boxSizing: "border-box",
        width: "100%", 
        height: "100%",
        overflow: "hidden"
      }}>
        <button onClick={
          (e: React.MouseEvent<HTMLButtonElement>) => {
            this.props.backprop({ nodes: this.props.nodes.concat({
              id: this.id++,
              name: "New Node"
            })})
          }
        }>
          New Node
        </button>
        {nodes}
      </div>
    );
  }
}

export default NodePanel
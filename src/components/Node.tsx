import React, { ChangeEventHandler } from "react";
import Draggable from 'react-draggable';
import {ChildComponent} from "./ExtendedComponent"

export interface NodeState {
  id: number;
  name: string;
}

interface Props extends NodeState {
  backprop: (d: any) => void
}

class Node extends ChildComponent<Props> {
  state = {
    nameEditing: false
  }

  onChangeHandler = (e: React.ChangeEvent): void => {
    const { name, value } = (e.target as HTMLInputElement);
    if (name === "name") {
      this.props.backprop({
        [name]: value
      });
    }
  }

  onClickHandler = (): void => {
    this.setState({nameEditing: !this.state.nameEditing})
  }

  render() {
    return (
      <Draggable handle=".handler" >
        <div 
          id={"node-" + this.props.id.toString()}
          style={{
            left: 100,
            top: 100,
            position: "absolute",
            width: "100px",
            height: "80px",
            border: "solid 1px orange"
          }}
        >
          <div
            className="handler"
            style={{
              width: "100%",
              height: "25px",
              backgroundColor: "cyan",
            }}
          >
          </div>
          {
            this.state.nameEditing
              ? (<input 
                  onChange={this.onChangeHandler} 
                  value={this.props.name}
                  name="name"
                  style={{
                    width: "90%"
                  }}
                ></input>)
              : (<div>{this.props.name}</div>)
            }
          <button onClick={this.onClickHandler}>
            Edit
          </button>
        </div>
      </Draggable>
    );
  }
}

export default Node
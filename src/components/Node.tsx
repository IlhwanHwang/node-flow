import React, { ChangeEventHandler } from "react";
import Draggable from 'react-draggable';

interface Props {
  id: number;
  initx: number;
}

interface State {
  name: string;
  editing: boolean;
}


class Node extends React.Component<Props, State> {
  static defaultProps = {
    id: -1
  }

  state: State = {
    name: "hi",
    editing: false
  }

  // constructor() {
  //   super(Node.defaultProps, {})
  // }

  onChangeHandler = (e: React.ChangeEvent): void => {
    const { name, value } = (e.target as HTMLInputElement);
    if (name === "name") {
      this.setState({
        [name]: value
      });
    }
  }

  onClickHandler = (): void => {
    this.setState({editing: !this.state.editing})
  }

  render() {
    return (
      <Draggable handle=".handler" >
        <div 
          id={"node-" + this.props.id.toString()}
          style={{
            left: this.props.initx,
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
            this.state.editing
              ? (<input 
                  onChange={this.onChangeHandler} 
                  value={this.state.name}
                  name="name"
                  style={{
                    width: "90%"
                  }}
                ></input>)
              : (<div>{this.state.name}</div>)
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
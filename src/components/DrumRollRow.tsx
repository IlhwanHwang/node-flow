import React from "react"
import DrumRollElem, {DrumRollElemState} from "./DrumRollElem"
import _ from "lodash"

interface Props extends DrumRollRowState {
  backprop: (d: any) => void
}

export interface DrumRollRowState {
  id: number,
  name: string,
  beats: number,
  elems: Array<DrumRollElemState>
}

class DrumRollRow extends React.Component<Props> {
  state = {
    nameEditing: false,
  }
  
  handlerEditButtonClick = (e: React.MouseEvent) => {
    this.setState({ nameEditing: !this.state.nameEditing })
  }

  render() {
    const elems = this.props.elems.map((e, ind) => {
      return (
        <div 
          key={ind}
          style={{
            margin: "5px"
          }}
        >
          <DrumRollElem backprop={
            (d: any) => {
              this.props.backprop({elems: this.props.elems.map((f, jnd) => {
                return ind === jnd
                  ? {...f, ...d}
                  : f
              })})
            }
          } on={e.on} velocity={0}/>
        </div>
      );
    })

    return (
      <div style={{
        backgroundColor: "gray",
        border: "solid 1px black",
      }}>
        <div>
          {
            this.state.nameEditing
              ? (
                <div>
                  <input value={this.props.name} onChange={(e) => {
                    this.props.backprop({ name: e.target.name })
                  }}></input>
                  <button onClick={this.handlerEditButtonClick}>
                    Edit Name
                  </button>
                </div>
              )
              : (
                <div>
                  {this.props.name}
                  <button onClick={this.handlerEditButtonClick}>
                    Edit Name
                  </button>
                </div>
              )
          }
          
        </div>
        <div style={{
          display: "flex"
        }}>
          {elems}
        </div>
      </div>
    );
  }
}

export default DrumRollRow;
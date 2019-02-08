import React, { ButtonHTMLAttributes } from "react"
import DrumRollRow, {DrumRollRowState} from "./DrumRollRow"
import {ChildComponent} from "./ExtendedComponent"

export interface DrumRollState {
  rows: Array<DrumRollRowState>
}

interface Props extends DrumRollState {
  backprop: (d: any) => void
}

class DrumRoll extends ChildComponent<Props> {
  id = 0

  handlerAddButtonClick = (e: React.MouseEvent) => {
    this.props.backprop({ rows: this.props.rows.concat({
      id: this.id++,
      name: "New Drum Roll",
      beats: 16,
      elems: Array(16).fill(0).map((_, ind) => { 
          return {
            on: false,
            velocity: 0
          }
        })
      })
    })
  }

  handlerDeleteButtonClick = (e: React.MouseEvent) => {
    const target = parseInt((e.target as HTMLButtonElement).value)
    this.props.backprop({ rows: this.props.rows.filter((row) => { return row.id !== target })})
  }

  render() {
    const rows = this.props.rows.map((row, ind) => {
      return (
        <div>
          <button value={row.id} onClick={this.handlerDeleteButtonClick}>Delete</button>
          <DrumRollRow {...row} backprop={this.makeBackprop("rows", ind)}/>
        </div>
      )
    })
    return (
      <div>
        {rows}
        <button onClick={this.handlerAddButtonClick}>
          New Drum Roll Row
        </button>
      </div>
    );
  }
}

export default DrumRoll;
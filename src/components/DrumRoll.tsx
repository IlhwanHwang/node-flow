import React, { ButtonHTMLAttributes } from "react"
import DrumRollRow, {DrumRollRowState} from "./DrumRollRow"


interface DrumRollState {
  rows: Array<DrumRollRowState>
}


class DrumRoll extends React.Component {
  id = 0

  state = {
    rows: Array<DrumRollRowState>()
  }

  handlerAddButtonClick = (e: React.MouseEvent) => {
    this.setState({ rows: this.state.rows.concat({
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
    this.setState({ rows: this.state.rows.filter((row) => { return row.id !== target })})
  }

  render() {
    // return (
    //   <DrumRollRow id={0} name="New Drum Roll Row" setName={() => {}}></DrumRollRow>
    // )
    const rows = this.state.rows.map((row, ind) => {
      return (
        <div>
          <button value={row.id} onClick={this.handlerDeleteButtonClick}>Delete</button>
          <DrumRollRow {...row} backprop={
            (d) => {
              this.setState({rows: this.state.rows.map((sow, jnd) => {
                return ind === jnd
                  ? {...sow, ...d}
                  : sow
              })})
            }
          }/>
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
import React from "react"


export interface DrumRollElemState {
  on: boolean,
  velocity: number
}


interface Props extends DrumRollElemState {
  backprop: (d: any) => void
}


class DrumRollElem extends React.Component<Props> {

  handlerOnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    this.props.backprop({ on: !this.props.on })
  }

  render() {
    return (
      <button
        style={{
          width: "20px",
          height: "30px",
          backgroundColor: this.props.on ? "white" : "black",
          border: "solid 1px black",
        }}
        onClick={this.handlerOnClick}
      />
    );
  }
}

export default DrumRollElem
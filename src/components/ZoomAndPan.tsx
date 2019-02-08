import React from "react"
import Draggable from "react-draggable"

class ZoomAndPan extends Draggable {
  render() {
    return (
      <div>
        {super.render()}
      </div>
    );
  }
}

export default ZoomAndPan
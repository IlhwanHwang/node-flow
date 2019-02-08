import React from "react"

export class ChildComponent extends React.Component {
  makeBackprop = (name, targetInd) => {
    return (d) => {
      const prop = this.props[name]
      if (prop instanceof Array && targetInd !== undefined) {
        const propResult = prop.map((e, ind) => {
          return targetInd === ind ? {...e, ...d} : e
        })
        this.props.backprop({[name]: propResult})
      }
      else {
        this.props.backprop({[name]: d})
      }
    }
  }
}

export class RootComponent extends React.Component {
  makeBackprop = (name, targetInd) => {
    return (d) => {
      if (name in this.state) {
        const s = this.state[name]
        if (s instanceof Array && targetInd !== undefined) {
          const sResult = s.map((e, ind) => {
            return targetInd === ind ? {...e, ...d} : e
          })
          this.setState({[name]: sResult})
        }
        else {
          if (typeof(this.state[name]) === typeof(d)) {
            this.setState({[name]: d})
          }
        }
      }
    }
  }
}
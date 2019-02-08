import React from "react"

export class ChildComponent<P={}, S={}, SS=any> extends React.Component<P, S, SS> {
  makeBackprop(name: string, targetInd?: number): ((d: any) => void)
}

export class RootComponent<P={}, S={}, SS=any> extends React.Component<P, S, SS> {
  makeBackprop(name: string, targetInd?: number): ((d: any) => void)
}

export interface Props {
  backprop: (d: any) => void
}
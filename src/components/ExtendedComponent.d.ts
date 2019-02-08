import React from "react"

export class ChildComponent<P={}, S={}, SS=any> extends React.Component<P, S, SS> {
  makeBackprop(name: keyof P, targetInd?: number): ((d: any) => void)
}

export class RootComponent<P={}, S={}, SS=any> extends React.Component<P, S, SS> {
  makeBackprop(name: keyof S, targetInd?: number): ((d: any) => void)
}

export interface Props {
  backprop: (d: any) => void
}
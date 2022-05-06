import React, {Component} from 'react'


export default class Counter extends Component {
  render (){
    return (<>
      <button>-</button>
      <span>0</span>
      <button>+</button>
    </>)
  }
}
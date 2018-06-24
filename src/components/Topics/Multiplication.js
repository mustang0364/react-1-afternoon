import React, { Component } from 'react';

export default class Multiplication extends Component {

  constructor() {
    super();

    this.state = {
      number3: 0,
      number4: 0,
      multiply: null
    }
  }

  updateNumber1(val) {
    this.setState(
        { number3: parseInt(val, 10) });
  }

  updateNumber4(val) {
    this.setState(
        { number4: parseInt(val, 10) });
  }

  multiply(num3, num4) {
    this.setState(
        { multiply: num3 * num4 });
  }

  render() {
    return (
      <div className="puzzleBox multiplicationPB">
        <h4> Multiplication </h4>
        <input className="inputLine" type="number" onChange={ (e) => this.updateNumber3(e.target.value) }></input>
        <input className="inputLine" type="number" onChange={ (e) => this.updateNumber4(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.multiply(this.state.number3, this.state.number4) }> Multiply </button>
        <span className="resultsBox"> Multiplication: {this.state.multiply} </span>
      </div>
    )
  }
}
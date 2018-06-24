import React, { Component } from 'react';
import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterObject from '../Topics/FilterObject'
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum'
import Multiplication from '../Topics/Multiplication'


export default class TopicBrowser extends Component {
  render() {
    return (
      <div> 
        <EvenAndOdd/>
        <FilterObject/>
        <FilterString/>
        <Palindrome/>
        <Sum/>
        <Multiplication/>
      </div>
    )
  }
}

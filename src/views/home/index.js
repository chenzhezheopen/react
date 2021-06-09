import React, { Component } from 'react'

export default class home extends Component {
  constructor() {
    super()
    this.num = 12123131
  }
  render() {
    return (
      // eslint-disable-next-line
      <a>{this.num}</a>
    );
  }
}
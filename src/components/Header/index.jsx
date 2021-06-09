import React, { Component, createRef } from 'react'
import './Header.scss'




export default class Header extends Component {
  constructor(props) {
    super(props);
    this.myRef = createRef();
  }
  navigate() {
    console.log('我要跳转到home');
  }
  render() {
    console.log(this.myRef);
    return (
      <div>
        <div ref={this.myRef} class="serviceTop">
          <div class="serviceTop-title">
            <img click={this.navigate} src="@/assets/img/title.png" alt="" />
          </div>
        </div>
        <div class='seatHeader'></div>
        <div>123456</div>
      </div>)
  }
}
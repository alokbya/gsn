import React, { Component } from 'react';



class SideNav extends Component {
  constructor () {
    super()
    this.state = {
      navItem : ['My Students', 'Visualize', 'Analyze Data', 'Manage Data'],
    }
  }
  render() {
    return (
      <div className={'sideNav'}>
        <a href="#">{this.state.navItem[0]}</a>
        <a href="#">{this.state.navItem[1]}</a>
        <a href="#">{this.state.navItem[2]}</a>
        <a href="#">{this.state.navItem[3]}</a>
      </div>
    );
  }
}

export default SideNav;

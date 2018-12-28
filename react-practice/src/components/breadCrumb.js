import React, { Component } from 'react';



class BreadCrumb extends Component {
  constructor () {
    super()
    this.state = {
      crumbs: ['Home','My Students'],
    }
  }
  render() {
    return (
      <div className={'breadCrumb'}>
        <a href="#">{ this.state.crumbs[0]}</a>
        <p> > </p>
        <a href="#">{ this.state.crumbs[1]}</a>
      </div>
    );
  }
}

export default BreadCrumb;

import React, { Component } from 'react';



class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Patrick Collins',
    }
  }
  render() {
    return (
        <div className={'header'}>
          <h1> { this.state.name } </h1>
        </div>
    );
  }
}

export default Header;

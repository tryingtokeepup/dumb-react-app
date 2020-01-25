import React from 'react';
import './Counter.css';
import Button from './Button';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'My first component in a while, jee wiz!',
      count: 0,
      coolBool: true,
      buttonMessage: 'Props are weird!'
    };
  }
  handleClick = () => {
    this.setState(({ coolBool }) => ({
      coolBool: !coolBool
    }));
  };
  generatesDivBasedOnCount() {
    let divList = [];
    console.log(this.state.count);
    for (let i = 0; i < this.state.count; i++) {
      divList.push(<div key={i}>Hi!</div>);
    }
    return divList;
  }
  // LEARN HOW PROPS REALLY WORKS
  // DECONSTRUCTION!!!!
  iterateCounter = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  };
  render() {
    // the "this" keyword is necessary for
    return (
      <React.Fragment>
        <div className="state-text">{this.state.message}</div>
        {/*  Okay, next steps, I need to make a button component that, when clicked, changes the
        state of the count. */}
        {this.state.coolBool ? 'We are cool' : 'we are not cool. :('}
        <button onClick={this.handleClick}>Click me to change coolness.</button>

        <Button message={this.state.buttonMessage}></Button>
        {/* Now, the next goal is to generate divs on the fly, DETERMINED BY THE COUNT IN the state!*/}

        <button onClick={this.iterateCounter}>{this.state.count}</button>
        {this.generatesDivBasedOnCount()}
      </React.Fragment>
    );
  }
}

export default Counter;

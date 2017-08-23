import React, { Component } from 'react';
import './Stripes.css';

/*function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}*/

class Stripes extends Component {

  constructor(props) {
    super(props);
    this.renderStripes = this.renderStripes.bind(this);
    this.plusStripe = this.plusStripe.bind(this);
    this.minusStripe = this.minusStripe.bind(this);
    this.state = { amount: 700 };
    this.el = null;
  }

  componentDidMount() {
    window.addEventListener('resize', this.plusStripe);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.plusStripe);
  }

  renderStripes() {
    return Array.apply(null, new Array(this.state.amount))
      .map((v,i) => (<div key={i} className="stripe"/>));
  }

  plusStripe() {
    this.setState({
      amount: Math.min(this.state.amount + 1, this.el.clientWidth),
    });
  }

  minusStripe() {
    this.setState({
      amount: Math.max(1, this.state.amount - 1),
    });
  }

  render() {
    return (
      <div>
        <div className="stripes" ref={el => { this.el = el}}>
          {this.renderStripes()}
        </div>
        <div>
          <button onClick={this.plusStripe}>+</button>
          <button onClick={this.minusStripe}>-</button>
        </div>
      </div>
    );
  }

}

export default Stripes;

import React, { Component, PropTypes } from 'react';
import { RBG_RED, RBG_WHITE, getRandomNotRedRgbColor } from '../../colors-utils'
import './StripesPreview.css';

const randomOddBeforeGivenValue = (value) => {
 return Math.floor((Math.random() * ((value - 1) / 2))) * 2 + 1;
};

class StripesPreview extends Component {

  constructor(props) {
    super(props);
    this.renderStripes = this.renderStripes.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.onResize = this.onResize.bind(this);
    this.el = null;
    this.state = {
      amount: props.amount,
      stripes: this.generateStripes(props.amount, true),
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize() {
    this.setState({
      amount: Math.min(this.props.amount, this.el.clientWidth),
    });
  }

  generateStripes(amount, withRed = false) {
    const empty = Array.apply(null, new Array(amount));
    const randomI = randomOddBeforeGivenValue(amount);
    return empty.map((v, i) => {
      const stripe = { clicked: false };
      return i % 2 ?
        { ...stripe, color: (randomI === i && withRed) ? RBG_RED : getRandomNotRedRgbColor() } :
        { ...stripe, color: RBG_WHITE }
    });
  }

  changeColor(index) {
    const { stripes } = this.state;
    this.setState({
      stripes: [
        ...stripes.slice(0, index),
        { color: getRandomNotRedRgbColor(), clicked: true},
        ...stripes.slice(index + 1)
      ]
    })
  }

  renderStripes() {
    const { stripes } = this.state;
    return stripes.map(({ color, clicked }, i) => {
      return (
        <div
          key={i}
          className={"stripe-preview " + (clicked ? 'clicked' : '')}
          onClick={i % 2 && !clicked ? () => {this.changeColor(i)} : null}
          style={{ background: color }}
        />
      );
    });
  }

  componentWillReceiveProps({ amount }) {
    const { stripes } = this.state;
    let updatedStripes = null;
    if (amount < stripes.length) {
      updatedStripes = stripes.slice(0, amount);
    } else if (amount > stripes.length) {
      const newStripes = this.generateStripes(amount);
      updatedStripes = stripes.concat(newStripes.slice(stripes.length))
    }
    this.setState({
      amount,
      stripes: updatedStripes,
    });
  }

  render() {
    return (
      <div className="stripes-preview" ref={el => { this.el = el}}>
        { this.renderStripes() }
      </div>
    );
  }
}

StripesPreview.propTypes = {
  amount: PropTypes.number,
};

StripesPreview.defaultProps = {
  amount: 8,
};

export default StripesPreview;

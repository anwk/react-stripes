import React, { Component, PropTypes } from 'react';
import Button from '../Button';
import './StripesManage.css';

class StripesManage extends Component {

  constructor(props) {
    super(props);
    this.renderStripes = this.renderStripes.bind(this);
    this.plusStripe = this.plusStripe.bind(this);
    this.minusStripe = this.minusStripe.bind(this);
    this.onResize = this.onResize.bind(this);
    this.el = null;
    this.state = { amount: this.props.amount };
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

  plusStripe() {
    this.props.onChange(
      Math.min(this.props.amount + 1, this.el.clientWidth)
    );
  }

  minusStripe() {
    this.props.onChange(
      Math.max(this.props.amount - 1, 1)
    );
  }

  componentWillReceiveProps({ amount }) {
    this.setState({ amount });
  }

  renderStripes() {
    const { amount } = this.state;
    const stripes = Array.apply(null, new Array(amount));
    return stripes.map((v, i) => (<div key={i} className="stripe"/>));
  }

  render() {
    return (
      <div className="stripes-wrap">
        <div className="stripes" ref={el => { this.el = el}}>
          {this.renderStripes()}
        </div>
        <div className="stripes-buttons">
          <div>
            <Button text="+" onCLick={this.plusStripe}/>
            <Button text="-" onCLick={this.minusStripe}/>
          </div>
        </div>
      </div>
    );
  }
}

StripesManage.propTypes = {
  amount: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

StripesManage.defaultProps = {
  amount: 8,
};

export default StripesManage;

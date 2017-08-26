import React, { Component } from 'react';
import './App.css';
import StripesManage, { StripesPreview } from './components/Stripes';

class App extends Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = { amount: 8 };
  }

  onChange(amount) {
    this.setState({ amount });
  }

  render() {
    const { amount } = this.state;
    return (
      <div className="content">
        <StripesManage
          amount={amount}
          onChange={this.onChange}
        />
        <div>
          <h3>Total lines: {amount}</h3>
          <div className="stripes-row">
            <StripesPreview amount={amount}/>
            <StripesPreview amount={amount}/>
          </div>
          <div className="stripes-row">
            <StripesPreview amount={amount}/>
            <StripesPreview amount={amount}/>
          </div>
        </div>
      </div>
    );
  }
}


export default App;

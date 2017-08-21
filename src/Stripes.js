import React, { Component } from 'react';
import './Stripes.css';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

class Stripes extends Component {
  render() {
    return (
      <div className="stripes">
        <div className="stripe" style={{ background: getRandomColor() }}/>
        <div className="stripe" style={{ background: getRandomColor() }}/>
        <div className="stripe" style={{ background: getRandomColor() }}/>
        <div className="stripe" style={{ background: getRandomColor() }}/>
        <div className="stripe" style={{ background: getRandomColor() }}/>
        <div className="stripe" style={{ background: getRandomColor() }}/>
        <div className="stripe" style={{ background: getRandomColor() }}/>
        <div className="stripe" style={{ background: getRandomColor() }}/>
        <div className="stripe" style={{ background: getRandomColor() }}/>
      </div>
    );
  }
}

export default Stripes;

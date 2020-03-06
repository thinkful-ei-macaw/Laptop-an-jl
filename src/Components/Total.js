import React, { Component } from 'react';

class Total extends Component {
  getTotal = () => {
    return Object.keys(this.props.selected).reduce(
      (acc, curr) => acc + this.props.selected[curr].cost,
      0,
    );
  };

  USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  render() {
    return (
      <div className="summary__total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {this.USCurrencyFormat.format(this.getTotal())}
        </div>
      </div>
    );
  }
}
export default Total;

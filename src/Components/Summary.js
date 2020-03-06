import React, { Component } from 'react';

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected,
    };
  }

  USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  getSummary = () => {
    return Object.keys(this.state.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.state.selected[feature];

      return (
        <div className="summary__option" key={featureHash}>
          <div className="summary__option__label">{feature} </div>
          <div className="summary__option__value">{selectedOption.name}</div>
          <div className="summary__option__cost">
            {this.USCurrencyFormat.format(selectedOption.cost)}
          </div>
        </div>
      );
    });
  };

  render() {
    return <>{this.getSummary()}</>;
  }
}
export default Summary;

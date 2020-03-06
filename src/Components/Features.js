import React, { Component } from 'react';
import slugify from 'slugify';

class Features extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected,
      features: this.props.features,
    };
  }

  USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  features = Object.keys(this.props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const options = this.props.features[feature].map(item => {
      const itemHash = slugify(JSON.stringify(item));
      return (
        <div key={itemHash} className="feature__item">
          <input
            type="radio"
            id={itemHash}
            className="feature__option"
            name={slugify(feature)}
            checked={item.name === this.props.selected[feature].name}
            onChange={e => this.props.onUpdateFeature(item)}
          />
          <label htmlFor={itemHash} className="feature__label">
            {item.name} ({this.USCurrencyFormat.format(item.cost)})
          </label>
        </div>
      );
    });

    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  });

  render() {
    return (
      <fieldset className="feature" key={this.featureHash}>
        <legend className="feature__name">
          <h3>{this.features}</h3>
        </legend>
        {this.options}
      </fieldset>
    );
  }
}
export default Features;

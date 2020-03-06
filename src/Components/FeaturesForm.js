import React, { Component } from 'react';
import Features from './Features';

class FeaturesForm extends Component {
  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <Features
          features={this.props.features}
          selected={this.props.selected}
          onUpdateFeature={this.props.onUpdateFeature}
        />
      </form>
    );
  }
}
export default FeaturesForm;

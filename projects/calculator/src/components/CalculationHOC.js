import React, { Component } from 'react';

const CalculationHOC = (WrappedComponent) => {

  const INTIAL_CALCULATION_STATE = '';
  const INTIAL_RESULT_STATE = '';

  return class extends Component {

    constructor(props) {
      super(props);
      this.state = {
        calculation: INTIAL_CALCULATION_STATE,
        result: INTIAL_RESULT_STATE,
      }
    }

    appendCalculation = (e, value) => {
      this.setState({
        calculation: this.state.calculation + value,
      });
      this.evaluate();
    }

    clearCalculation = _ => {
      this.setState({
        calculation: INTIAL_CALCULATION_STATE,
        result: INTIAL_RESULT_STATE,
      });
    }

    evaluate = _ => {
      this.setState({
        result: eval(this.state.calculation),
      });
    }

    render() {
      return (
        <WrappedComponent
          appendCalculation={this.appendCalculation}
          clearCalculation={this.clearCalculation}
          calculation={this.state.calculation}
          result={this.state.result}
          {...this.props}
        />
      )
    }

  }

}

export default CalculationHOC;
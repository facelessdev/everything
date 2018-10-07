import React, { Component } from 'react';

const CalculationContainer = (WrappedComponent) => {

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

    appendCalculation = (value) => {
      const newCalculation = this.state.calculation + value;
      debugger;
      this.setState({
        calculation: newCalculation,
        result: eval(newCalculation)
      });
    }

    clearCalculation = _ => {
      this.setState({
        calculation: INTIAL_CALCULATION_STATE,
        result: INTIAL_RESULT_STATE,
      });
    }

    render() {
      return (
        <WrappedComponent
          append={this.appendCalculation}
          clear={this.clearCalculation}
          calculation={this.state.calculation}
          result={this.state.result}
          {...this.props}
        />
      )
    }

  }

}

export default CalculationContainer;
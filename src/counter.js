import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { incrementCounter, decrementCounter } from './actions';

const mapStateToProps = state => ({ counter: state.count });
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(incrementCounter()),
  decrement: () => dispatch(decrementCounter())
});

class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <Typography variant="h2">
          Counter: <span>{this.props.counter}</span>
        </Typography>
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={this.props.decrement}
          >
            -
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.props.increment}
          >
            +
          </Button>
        </div>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

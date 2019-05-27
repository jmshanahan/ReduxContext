import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Consumer as CounterConsumer } from './context';
import Typography from '@material-ui/core/Typography';

// import { incrementCounter, decrementCounter } from './actions';

// const mapStateToProps = state => ({ counter: state.count });
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(incrementCounter()),
//   decrement: () => dispatch(decrementCounter())
// });

export default class Counter extends Component {
  render() {
    return (
      <CounterConsumer>
        {({ count, increment, decrement }) => (
          <div className="counter">
            <Typography variant="h2">
              Counter: <span>{count}</span>
            </Typography>
            <div>
              <Button variant="contained" color="primary" onClick={decrement}>
                -
              </Button>
              <Button variant="contained" color="secondary" onClick={increment}>
                +
              </Button>
            </div>
          </div>
        )}
      </CounterConsumer>
    );
  }
}
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Counter);

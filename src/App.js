import React, { Component } from 'react';
// import { Provider } from 'react-redux';
import { Provider as CounterProvider } from './context';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Counter from './counter';
import './App.css';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20
  }
});

class App extends Component {
  state = {
    count: 0,
    increment: () => {
      this.setState({ count: this.state.count + 1 });
    },
    decrement: () => {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CounterProvider value={this.state}>
          <CssBaseline />
          <Typography variant="h1" gutterBottom>
            Redux Example
          </Typography>
          <Counter />
        </CounterProvider>
      </div>
    );
  }
}

export default withStyles(styles)(App);

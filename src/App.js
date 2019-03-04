import React, { Component } from 'react';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import store from './store';
import Counter from './counter';
import './App.css';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Provider store={store}>
          <CssBaseline />
          <Typography variant="h1" gutterBottom>
            Redux Example
          </Typography>
          <Counter />
        </Provider>
      </div>
    );
  }
}

export default withStyles(styles)(App);

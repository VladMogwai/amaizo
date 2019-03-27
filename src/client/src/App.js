import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import Header from '../components/appbar';
import Card from '../components/card';

const theme = createMuiTheme({
  overrides: {
    // Name of the component ⚛️ / style sheet
    palette: {
      primary: {
        main: '#0b5994'
      },
      secondary: {
        main: '#1d83c6'
      }
    },
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
      }
    }
  },
  typography: { useNextVariants: true }
});

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch('/api/getUsername')
      .then((res) => res.json())
      .then((user) => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    console.log('username', username);
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <Header username={username} />
          <div>
            <Card />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

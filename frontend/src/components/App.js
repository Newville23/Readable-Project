import React, { Component } from 'react';
import {
  Link,
  Router,
  Route,
  Switch
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as ReadableAPI from '../utils/api'
import './App.css'
import Home from '../pages/Home';
import Category from '../pages/CategoryView';
import AppBar from 'material-ui/AppBar';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
            <AppBar 
              title={ <Link to="/"> Readable </Link>}
              showMenuIconButton={false} 
            />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/:category" component={Category}/>
              </Switch>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

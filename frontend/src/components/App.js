import React, { Component } from 'react';
import {
  Link,
  Router,
  Route,
  Switch
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as ReadableAPI from '../utils/api'
import Home from '../containers/Home';
import Category from '../containers/Category';
import Navbar from './Navbar';
import CategoriesList from './CategoriesList';
import AppBar from 'material-ui/AppBar';

class App extends Component {
  componentDidMount() {
    
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
            <AppBar 
              title={ <Link to="/"> Readable </Link>}
              showMenuIconButton={false} 
            />
            <div className="container">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/:category" component={Category}/>
              </Switch>
            </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

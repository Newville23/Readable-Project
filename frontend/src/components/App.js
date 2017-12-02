import React, { Component } from 'react';
import {
  Link,
  Router,
  Route
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
              <Route exact path="/" component={Home}/>
              <Route exact path="/:category" component={Home}/>
            </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

const Cat = ({ match }) => (
  <div>
    <CategoriesList/>
    <h2>Category: {match.params.category}</h2>
  </div>
)

export default App;

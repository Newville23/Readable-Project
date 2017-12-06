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
import AppBar from 'material-ui/AppBar';
import Home from '../pages/Home';
import Category from '../pages/CategoryView';
import PostShow from '../pages/PostShow';

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
              <Route exact path="/:category" component={Category}/>
              <Route path="/:category/:postId" component={PostShow}/>
            </Switch>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

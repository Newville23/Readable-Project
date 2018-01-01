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
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import AppBar from 'material-ui/AppBar';
import Home from '../pages/Home';
import Category from '../pages/CategoryView';
import PostShow from '../pages/PostShow';
import PostCreate from '../pages/PostCreate';
import PostEdit from '../pages/PostEdit';
import NoMatch from '../pages/NoMatch';
import CommentEdit from '../pages/CommentEdit';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
            <AppBar 
              title={ <Link to="/" className="app-title"> Readable </Link>}
              showMenuIconButton={false} 
            />
            <Switch>
          
              <Route exact path="/" component={Home}/>
              <Route exact path="/new-post" component={PostCreate}/>
              <Route path="/comments/:commentId" component={CommentEdit}/>
              <Route exact path="/:category/:postId/edit" component={PostEdit} />
              <Route exact path="/:category/:postId" component={PostShow}/>
              <Route exact path="/:category" component={Category}/>
              <Route component={NoMatch}/>

            </Switch>
            <Link to="/new-post">
              <FloatingActionButton className="create-post-btn">
                      <ContentAdd />
                </FloatingActionButton>  
            </Link> 
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;

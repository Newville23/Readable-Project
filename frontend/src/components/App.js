import React, { Component } from 'react';
import {
  Router,
  Route
} from 'react-router-dom';
import * as ReadableAPI from '../utils/api'
import Home from '../containers/Home';
import Category from '../containers/Category';
import Navbar from './Navbar';
import CategoriesList from './CategoriesList'

class App extends Component {
  
  componentDidMount() {
    ReadableAPI.fetchAllPosts().then((posts) => {
      console.log('posts:', posts)
    })

  }

  render() {
    return (
      <div className="App">
          <Navbar/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/:category" component={Home}/>
      </div>
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

import React, { Component } from 'react';
import {
  Router,
  Route
} from 'react-router-dom';
import * as ReadableAPI from './utils/ReadableAPI'
import Home from './containers/Home';
import Category from './containers/Category';
import Navbar from './components/Navbar';
import CategoriesList from './components/CategoriesList'

class App extends Component {
  
  componentDidMount() {
    ReadableAPI.getAllPosts().then((posts) => {
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
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
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

import React, { Component } from 'react';
import PostList from '../containers/PostListContainer';
import CategoriesList from '../components/CategoriesList'
const Home = () => (
    <div className="container">
        <CategoriesList/>
        <PostList/>
    </div>
)

export default Home;

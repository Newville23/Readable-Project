import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';

const CategoriesList = () => (
    <div>
        <ul className="categories-list">
            <li>
                <Link to="/blog">
                    Blog
                </Link>
            </li>
            <li>
                <Link to="news">
                    News
                </Link>
            </li>
            <li>    
                <Link to="/resources">
                    Resources
                </Link>
            </li>
        </ul>
    </div>
)


export default CategoriesList;
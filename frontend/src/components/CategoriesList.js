import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';

const CategoriesList = () => (
    <div>
        <ul className="categories-list">
            <li>
                <Link to="/react">
                    React
                </Link>
            </li>
            <li>
                <Link to="redux">
                    Redux
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
import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';

class CategoriesList extends Component {
    render () {
        const { getPostsCategory, match } = this.props;
        return (
            <div>
            <ul className="categories-list">
                <li>
                    <Link to="/react" onClick={() => getPostsCategory(match.params.category)}>
                        React
                    </Link>
                </li>
                <li>
                    <Link to="redux" onClick={() => getPostsCategory(match.params.category)}>
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
    }
}

export default CategoriesList;
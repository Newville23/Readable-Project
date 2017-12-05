import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Categories extends Component {
    render () {
        const { categories, getPostsCategory, match } = this.props;
        return (
            <div>
            <ul className="categories-list">
                {categories.all.map((category) => (
                    <li key={category.name}>
                        <Link to={`/${category.path}`} onClick={() => getPostsCategory(category.path)}>
                            {category.path}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        )
    }
}

export default Categories;
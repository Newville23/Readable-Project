import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Chip from 'material-ui/Chip';

const styles = {
    chip: {
      margin:'0 30px 0 0',
      cursor: 'pointer',
    },
  };

class Categories extends Component {
    render () {
        const { categories, getPostsCategory, match } = this.props;
        return (
            <div>
            <ul className="categories-list">
                {categories.all.map((category) => (
                    <li key={category.name} className="categories-item"> 
                        <Link to={`/${category.path}`} onClick={() => getPostsCategory(category.path)}>
                            <Chip
                                style={styles.chip}
                            >    
                                {category.path}
                            </Chip>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        )
    }
}

export default Categories;
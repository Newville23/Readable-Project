import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Chip from 'material-ui/Chip';

const styles = {
    chip: {
      margin:'0 30px 0 0',
      cursor: 'pointer',
    },
  };

  const Categories  = (props) => {
    const { categories, getPostsCategory, match } = props;
    return (
        <div>
        <ul className="categories-list">
            {categories.all.map((category) => {
                const { path } = category;
                const { chip } = styles;
                return (
                    <li key={category.name} className="categories-item"> 
                        <Link to={`/${path}`} onClick={() => getPostsCategory(path)}>
                            <Chip
                                style={chip}
                            >    
                                {path}
                            </Chip>
                        </Link>
                    </li>
                )
            })}
        </ul>
    </div>
    )
}

export default Categories;
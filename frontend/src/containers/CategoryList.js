import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories} from '../actions/category';
import { getPostsCategory } from '../actions/posts';
import Categories from '../components/Categories';

class CategoryList extends Component {
    
    componentDidMount() {
        const {getCategories} = this.props
        getCategories()
    }
    render () {
        return(
                <Categories {...this.props}/> 
        )
    }
}

const mapStateToProps = ({categories}, ownProps) => {
    return {
        categories,
    };
}
export default connect(mapStateToProps,{ getPostsCategory, getCategories, })(CategoryList);
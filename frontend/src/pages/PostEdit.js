import React, {Component} from 'react';
import PostEditContainer from '../containers/PostEditContainer'
class PostEdit extends Component{
    render() {
        return(
            <div className="container">
                <h1 className="page-title" > <span className="page-sub"> Edit Post</span></h1> 
               <PostEditContainer id={this.props.match.params.postId}  goBack={this.props.history.goBack}/>
            </div>
        )
    }
}

export default PostEdit;
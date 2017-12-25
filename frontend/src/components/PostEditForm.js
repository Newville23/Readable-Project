import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { editPost } from '../actions/posts';

class PostEditForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: 'posts.allIds[id].body',
        }
      }

      componentDidMount() {
          const {id} = this.props;
          const { allIds, byId } = this.props.posts;
          if (allIds.length > 0){
            console.log('coronaste')
            const currentPost = allIds.map((post) => byId[post]);
            this.setState({
                title: currentPost[0].title,
                body: currentPost[0].body,
            })
          }

      }
    
    handleOnChange = name => event => {
        const target = event.target;
        const value = target.value;
        this.setState({
            [name]: value,
        })
    }

    handleUpdate = () => {
        const {editPost, id} = this.props;
        editPost(this.state, id );
    }

    render() {
        const { allIds, byId } = this.props.posts;
        return(
            <div>
            {allIds.map((post) =>( <h2>{byId[post].title}</h2> ) )}
                <form>
                        <TextField
                            floatingLabelText="Title"
                            onChange={this.handleOnChange('title')}
                            value={this.state.title}
                            name="title"
                        />
                    <br/>
                        <TextField
                            floatingLabelText="Body"
                            onChange={this.handleOnChange('body')}
                            value={this.state.body}
                            name="body"
                        />
                    <br/>
                    <Link to="/" onClick={() => this.handleUpdate()}>
                        <RaisedButton label="Update" primary={true} />
                    </Link>   
                         <RaisedButton label="Cancel" primary={true} />
                </form>
            </div>
        )
    }
}
export default PostEditForm;
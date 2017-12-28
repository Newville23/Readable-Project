import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { editComment } from '../actions/comments';

class CommentEditForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            body: '',
        }
      }

      componentDidMount() {
          const {id} = this.props;
          const { allIds, byId } = this.props.comments;
          if (allIds.length > 0){
            const currentComment = allIds.map((comment) => byId[comment]);
            this.setState({
                body: currentComment[0].body,
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
        const {editComment, id} = this.props;
        editComment(this.state, id );
    }

    render() {
        return(
            <div>
                <form>
                    <br/>
                        <TextField
                            className="update-input"
                            floatingLabelText="Body"
                            onChange={this.handleOnChange('body')}
                            value={this.state.body}
                            name="body"
                        />
                    <br/>
                    <Link to="/" onClick={() => this.handleUpdate()}>
                        <RaisedButton className="updateBtn" label="Update" primary={true} />
                    </Link>   
                         <RaisedButton label="Cancel" primary={true} />
                </form>
            </div>
        )
    }
}
export default CommentEditForm;
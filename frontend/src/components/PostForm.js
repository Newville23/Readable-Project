import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

const categories = [
    {
      name: 'react',
      path: 'react'
    },
    {
      name: 'redux',
      path: 'redux'
    },
    {
      name: 'udacity',
      path: 'udacity'
    }
]; 

class PostForm extends Component {

    state = {
            title: '',
            author: '',
            category: 'react',
            body: '',
    };

    handleOnChange = name => event => {
        const target = event.target;
        if(name === 'category') {
            var value = target.innerHTML;
        }else{
            var value = target.value;
        }
        this.setState({
            [name]: value,
        });
    }
    handleSubmit = () => {
         const {createPost} = this.props;
         createPost(this.state);
    }
    render () {
        return(
            <div>
                <form>
                    <TextField
                        floatingLabelText="Title"
                        onChange={this.handleOnChange('title')}
                        value={this.state.title}
                        name="title"
                    />
                    <br />
                    <TextField
                        floatingLabelText="Author"
                        onChange={this.handleOnChange('author')}
                        value={this.state.author}
                        name="author"
                    />
                    <br />
                    <DropDownMenu value={this.state.category} onChange={this.handleOnChange('category')}>
                        {categories.map(option => (
                            <MenuItem key={option.name} value={option.path} primaryText={option.path}/>
                        ))}
                    </DropDownMenu>
                  <br/>
                   <TextField
                        floatingLabelText="Body"
                        multiLine={true}
                        rows={2}
                        onChange={this.handleOnChange('body')}
                        value={this.state.body}
                        name="body"
                    />

                    <Link to="/" onClick={() => this.handleSubmit()}>
                        <RaisedButton label="Add" primary={true} />
                    </Link>  
                    <RaisedButton label="Cancel" primary={true} onClick={() => this.props.goBack()}/>
                </form>
                
            </div>
        )
    }
}

export default PostForm;
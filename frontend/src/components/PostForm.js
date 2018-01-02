import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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
        formValid: false,
        titleValid: false,
        authorValid: false,
        bodyValid: false,
        titleError: '',
        authorError: '',
        bodyError: '',
    };
    //Validate the state of all fields in the form  
    formValid = () => {
        if(this.state.bodyValid && this.state.authorValid && this.state.titleValid){
            this.setState({formValid: true,})
        }
    } 
    // Validate each Field in the form 
    validateField = (name, value) => {
        if (value.length >= 2 && name !== 'category') {
            this.setState({[`${name}Valid`]: true, [`${name}Error`]: ''}, () => {this.formValid()});
        }
    }

    handleOnChange = name => event => {
        const target = event.target;
        const value = (() => {
            if (name === 'category') {
                return target.innerHTML;
            } else {
                return target.value;
            }
        })();
        this.setState({
            [name]: value,
        }, () => {this.validateField(name, value)});
    }

    handleSubmit = () => {
        const { createPost, push } = this.props;
        const {authorValid, bodyValid, titleValid, formValid } = this.state;
        if(formValid){
            createPost(this.state);
            push('/');
        }else{
            if(!authorValid){
                this.setState({
                    authorError: 'This Field is required',
                   })
            }if (!bodyValid) {
                this.setState({
                    bodyError: 'This Field is required',
                   })  
            }
            if(!titleValid){
                this.setState({
                    titleError: 'This Field is required',
                   })
            }
        }

    
    }
    render() {
        return (
            <div>
                <form>
                    <TextField
                        floatingLabelText="Title"
                        onChange={this.handleOnChange('title')}
                        value={this.state.title}
                        name="title"
                        errorText={this.state.titleError}
                    />
                    <br />
                    <TextField
                        floatingLabelText="Author"
                        onChange={this.handleOnChange('author')}
                        value={this.state.author}
                        name="author"
                        errorText={this.state.authorError}
                    />
                    <br />
                    <span>Add a category </span>  
                    <DropDownMenu value={this.state.category} onChange={this.handleOnChange('category')}>
                        {categories.map(option => (
                            <MenuItem key={option.name} value={option.path} primaryText={option.path} />
                        ))}
                    </DropDownMenu>
                    <br />
                    <TextField
                        floatingLabelText="Body"
                        multiLine={true}
                        rows={2}
                        onChange={this.handleOnChange('body')}
                        value={this.state.body}
                        name="body"
                        errorText={this.state.bodyError}
                    />
                    <br/>
                    <div>
                        <RaisedButton className="btn-add-post" label="Add" primary={true} onClick={() => this.handleSubmit()}/>
                        <RaisedButton className="btn-add-post"  label="Cancel" primary={true} onClick={() => this.props.goBack()} />
                    </div>

                </form>

            </div>
        )
    }
}

export default PostForm;
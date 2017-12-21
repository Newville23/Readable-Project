import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

class PostForm extends Component {
    render () {
        return(
            <div>
                    <TextField
                    hintText="Password Field"
                    floatingLabelText="Password"
                    type="password"
                /><br />
                <TextField
                    hintText="MultiLine with rows: 2 and rowsMax: 4"
                    multiLine={true}
                    rows={2}
                    rowsMax={4}
                /><br />
                <TextField
                    hintText="Message Field"
                    floatingLabelText="MultiLine and FloatingLabel"
                    multiLine={true}
                    rows={2}
                />
            </div>
        )
    }
}

export default PostForm;
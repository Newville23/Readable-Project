import React from 'react';
import { withRouter } from 'react-router-dom'

const NoMatch = (props) => {
    return(
        <div className="container">
            <h1> No results, please go back to home page </h1>
        </div>
    )
}

export default withRouter(NoMatch);
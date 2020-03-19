import React, { Component } from 'react';

import FacebookIcon from '@material-ui/icons/Facebook';
import { IconButton } from '@material-ui/core';

import { Alert } from '@material-ui/lab';

class Authentication extends Component {
    render() {
        return (
            <React.Fragment>
                <Alert severity="warning">
                    <span class="noselect">Поради спем, мора да се најавите преку Facebook</span>
                </Alert>
                <div id="login-buttons">
                    <div class="center-vh">
                        <IconButton> <FacebookIcon id="facebook-signin"/> </IconButton>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Authentication;
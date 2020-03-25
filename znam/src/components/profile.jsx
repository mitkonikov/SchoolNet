import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Card, CardContent, ButtonBase } from '@material-ui/core';

import './../styles/profile.css';

class Profile extends Component {
    componentDidMount() {
        if (typeof this.props.onMount == "function") this.props.onMount();
    }

    render() {
        return(
            <div>
                <div id="profile-header">
                    <Card variant="outlined">
                        <ButtonBase>
                            <CardContent>
                                <div id="profile-img-container">
                                <div
                                    id="profile-img"
                                />
                                </div>
                                <div id="profile-content">
                                    <div id="profile-greeting">Здраво!</div>
                                    <div id="profile-statistics"></div>
                                </div>
                            </CardContent>
                        </ButtonBase>
                    </Card>
                </div>
                <div id="about-info">

                </div>
                <div id="logout-container">
                    <Link to="/logout" id="logout">
                        Одјави се
                    </Link>
                </div>
            </div>
        )
    }
}

export default Profile;
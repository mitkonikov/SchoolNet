import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Card, CardContent, ButtonBase } from '@material-ui/core';
import { Button } from '@material-ui/core';

import './../styles/profile.css';
import { queryFetch } from './../js/common';

class Profile extends Component {
    state = {
        profileName: undefined
    }

    componentDidMount() {
        if (typeof this.props.onMount == "function") this.props.onMount();
        
        queryFetch({ command: 'profile-info'})
            .then(data => this.setState(data));
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
                                    <div id="profile-greeting">{(() => {
                                        if (this.state.profileName === undefined) return "Здраво!";
                                        return "Здраво, " + this.state.profileName + "!";
                                    })()}</div>
                                    <div id="profile-statistics"></div>
                                </div>
                            </CardContent>
                        </ButtonBase>
                    </Card>
                </div>
                <div id="about-info">

                </div>
                
                <div id="logout-container">
                    <div id="feedback-container">
                        <div id="feedback">
                            <Button variant="contained" color="primary" disableElevation>
                                REQUEST A FEATURE
                            </Button>
                        </div>
                        <div id="request-feature">
                            <Button variant="contained" color="primary" disableElevation>
                                SETTINGS
                            </Button>
                        </div>
                    </div>
                    <div id="logout" onClick={() => {
                                let loc = window.location.href;
                                let atMK = loc.indexOf(".mk");
                                let domain = loc.substring(0, atMK + 4);
                                window.location.href = domain + "client/logout";
                            }}>
                        Одјави се
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;
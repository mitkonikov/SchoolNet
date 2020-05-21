import React, { Component } from "react";
import "./App.css";
import "./common.css";
import { CenterMobile } from "./common.js";

import io from "socket.io-client";

const socket = io('http://localhost:3000');
socket.nsp = "/game";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            ping: 0,
            serverID: -1
        }
    }
    
    componentDidMount() {
        socket.on("pong", data => {
            let diff = ((new Date().getTime()) - data.time);

            if (!isNaN(diff)) {
                this.setState({
                    ping: parseInt(diff),
                    serverID: data.id
                });
            }
        });

        setInterval(() => {
            socket.emit("pinging");
        }, 100);
    }

    renderUsers() {
        if (this.state.users.length == 0) return null;

        let users = this.state.users;
        let usersDOM = [];
        for (let i = 0; i < users.length; ++i) {
            usersDOM.push(<div>
                {users[i]}
            </div>);
        }

        return usersDOM;
    }

    render() {
        return (
            <CenterMobile>
                <div>
                    Welcome!
                </div>

                <div class="users-container">
                    {this.renderUsers()}
                </div>

                <div class="ping-container">
                    Ping: {this.state.ping} ms <br></br>
                    {(this.state.serverID !== -1) && (
                        <span>Server ID: {this.state.serverID}</span>
                    )}
                </div>
            </CenterMobile>
        );
    }
}

export default App;

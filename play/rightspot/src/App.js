import React, { Component } from "react";
import "./App.css";
import "./common.css";
import { CenterMobile, domain } from "./common.js";

import io from "socket.io-client";

const socket = io(domain());
socket.nsp = "/game";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            ping: 0,
            serverID: "",
            prevTime: 0
        }
    }
    
    componentDidMount() {
        socket.on("pong", data => {
            if (this.state.prevTime == 0) return;
            
            let diff = (data.time - this.state.prevTime);

            if (!isNaN(diff)) {
                this.setState({
                    ping: diff
                });
            }
        });

        socket.on("server info", data => {
            this.setState({
                serverID: data.id
            });
        })

        setInterval(() => {
            let currentTime = new Date().getTime();
            socket.emit("pinging", { time: currentTime });
            this.setState({ prevTime: currentTime });
        }, 500);
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
                    {(this.state.serverID !== "") && (
                        <span>Server ID: {this.state.serverID}</span>
                    )}
                </div>
            </CenterMobile>
        );
    }
}

export default App;

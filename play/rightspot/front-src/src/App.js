import React, { Component } from "react";
import "./App.css";
import "./common.css";
import { CenterMobile, domain } from "./common.js";

import io from "socket.io-client";

let prevTime = 0;

const socket = io(domain());
socket.nsp = "/game/rightspot";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            serverID: "",
        };
    }

    componentDidMount() {
        socket.on("pong", (data) => {
            if (typeof data.time == "undefined") return;
            if (prevTime == 0) return;

            let diff = new Date().getTime() - prevTime;

            if (!isNaN(diff)) {
                document.getElementById("ping").innerHTML = diff;
            }
        });

        socket.on("server info", (data) => {
            this.setState({
                serverID: data.id,
            });
        });

        setInterval(() => {
            let currentTime = new Date().getTime();
            socket.emit("pinging", { time: currentTime });
            prevTime = currentTime;
        }, 200);
    }

    renderUsers() {
        if (this.state.users.length == 0) return null;

        let users = this.state.users;
        let usersDOM = [];
        for (let i = 0; i < users.length; ++i) {
            usersDOM.push(<div>{users[i]}</div>);
        }

        return usersDOM;
    }

    render() {
        return (
            <CenterMobile>
                <div>Welcome!</div>

                <div class="users-container">{this.renderUsers()}</div>

                {this.state.serverID !== "" && (
                    <div class="ping-container">
                        Ping: <span id="ping"></span> ms <br></br>
                        <span>Server ID: {this.state.serverID}</span>
                    </div>
                )}
            </CenterMobile>
        );
    }
}

export default App;

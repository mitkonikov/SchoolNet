import React, { Component } from "react";
import "./App.css";
import "./common.css";
import { CenterMobile } from "./common.js";

class App extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <CenterMobile>
                <div>
                    Welcome!
                </div>
            </CenterMobile>
        );
    }
}

export default App;

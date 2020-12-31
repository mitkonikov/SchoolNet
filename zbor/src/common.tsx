import React from "react";

function Loading() {
    return (
        <div id="loading-container">
            <div id="logo"></div>
        </div>
    );
}

function PlatformTitle(props: {
    title: string,
    isBeta: boolean
}) {
    return (
        <div id="platform-title" className="noselect">
            {props.title}
            {props.isBeta && <span className="beta">BETA</span>}
        </div>
    );
}

function CenterMobile(props) {
    return (
        <div className="form-center-container">
            <div className="form-center">
                <div className="form-center-v">{props.children}</div>
            </div>
        </div>
    );
}

export { Loading, PlatformTitle, CenterMobile };

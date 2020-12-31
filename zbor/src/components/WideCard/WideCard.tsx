import React from "react";

import { Card } from "@material-ui/core";
import { IconButton } from "@material-ui/core";

import "./WideCard.css";

export default function WideCard({ content, icon, callback }) {
    return (
        <Card elevation={0}>
            <div className="card-padding noselect">
                <div className="wide-card-text">{content}</div>
                <div className="icon-container">
                    <IconButton onClick={() => callback()}>{icon}</IconButton>
                </div>
            </div>
        </Card>
    );
}

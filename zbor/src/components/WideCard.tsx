import React from "react";

import { Card } from "@material-ui/core";
import { IconButton } from "@material-ui/core";

export default function WideCard({
    content, icon, callback
}) {
    return (
        <Card elevation={0}>
            <div className="card-padding">
                <div className="wide-card-text">
                    {content}
                </div>
                <div className="icon-container">
                    <div className="wide-card-icon">
                        <IconButton
                            onClick={() => callback()}
                        >
                            {icon}
                        </IconButton>
                    </div>
                </div>
            </div>
        </Card>
    );
}

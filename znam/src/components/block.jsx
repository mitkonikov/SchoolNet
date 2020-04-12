import React from "react";

import "../styles/block.css";

function Block(props) {
    return (
        <div class="block-stats">
            <div class="block-title">{props.title}</div>
            <div class="block-number">{props.number}</div>
        </div>
    );
}

export default Block;

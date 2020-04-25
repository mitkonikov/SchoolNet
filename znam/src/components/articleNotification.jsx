import React, { Component } from "react";

import { Card, ButtonBase, IconButton } from "@material-ui/core";
import Collapse from '@material-ui/core/Collapse';
import DoneIcon from "@material-ui/icons/Done";

import "./../styles/article.css";

class ArticleNotification extends Component {
    state = {
        show: true
    }

    render() {
        return (
            <Collapse in={this.state.show} {...(this.state.show ? { timeout: 1000 } : {})}>
                <div class="notify-container">
                    <Card elevation={0}>
                        <ButtonBase component='div'>
                            <div class="notify-padding" style={{
                                backgroundColor: this.props.data.color
                            }}>
                                <div class="notify-title">
                                    {this.props.data.title}
                                </div>
                                <div class="notify-content">
                                    {this.props.data.content}
                                </div>
                            </div>
                            <div class="seen-icon">
                                <IconButton
                                    onClick={() => {
                                        this.setState({ show: false });
                                    }}
                                >
                                    <DoneIcon />
                                </IconButton>
                            </div>
                        </ButtonBase>
                    </Card>
                </div>
            </Collapse>
        );
    }
}

export default ArticleNotification;

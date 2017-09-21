/**
 * Created by sb0103 on 19/9/17.
 */

import React, { Component, PropTypes } from 'react'
import {PanelGroup,Panel,Col,Form,FormGroup,FormControl,ControlLabel,Button} from 'react-bootstrap'

class CommentsComponent extends React.Component {
    ADD_COMMET(){
        console.log("add comment here");
    }

    render() {
        return (
            <div>
                {123123}
                {this.props.commentData}
                <Button type="button" className="pull-right" bsStyle="default" onClick={ () => this.ADD_COMMET() }>
                    Add Comment
                </Button>
            </div>
        );
    }
}

export default CommentsComponent;
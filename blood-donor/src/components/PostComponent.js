/**
 * Created by sb0103 on 19/9/17.
 */
import React, { Component, PropTypes } from 'react'
import {PanelGroup,Panel,Col,Form,FormGroup,FormControl,ControlLabel,Button,Row,Well} from 'react-bootstrap'
import CommentsComponent from './CommentComponent';
import {reduxForm} from "redux-form";
import { UPDATE_POST_REQUEST } from '../actions/actions'
import {reset} from 'redux-form';

export const fields=[ 'comment'];
var current_logged_in;
var allPosts;

class PostComponent extends Component {
    ADD_COMMENT(){
        console.log("____current_logged_in___");
        console.log(current_logged_in);

        this.props.data.comments.push({user:current_logged_in.username,comment:this.props.values.comment});
        this.props.values.comment={};
        this.props.resetForm();  // requires form name
    }

    render() {

        var allComments = this.props.data.comments.map(function(comment){
            return (
                <div>
                    <Row className="show-grid">
                        <Col sm={1} ><img width={30} height={30}  src="../../src/assets/person.png"/>{comment.user}</Col>
                        <Col sm={10} md={11}><Well bsSize="small" bsStyle="primary">{comment.comment}</Well></Col>
                    </Row>
                </div>
            );
        });

        const { fields: { comment, totalPosts}} = this.props;


        return (
            <PanelGroup defaultActiveKey="1" accordion>
                <Panel header={this.props.data.firstName}>
                    <Form horizontal >
                        <FormGroup >
                            <Col componentClass={ControlLabel} sm={2}>First Name</Col>
                            <Col componentClass={ControlLabel} sm={2}>{this.props.data.firstName}</Col>
                            <Col sm={2}></Col>
                            <Col componentClass={ControlLabel} sm={2}>Last Name</Col>
                            <Col componentClass={ControlLabel} sm={2}>{this.props.data.lastName}</Col>
                        </FormGroup>

                        <FormGroup >
                            <Col componentClass={ControlLabel} sm={2}>Email Id</Col>
                            <Col componentClass={ControlLabel} sm={2}>{this.props.data.email}</Col>
                            <Col sm={2}></Col>
                            <Col componentClass={ControlLabel} sm={2}>Blood Group</Col>
                            <Col componentClass={ControlLabel} sm={2}>{this.props.data.bloodGroup}</Col>
                        </FormGroup>

                        <FormGroup >
                            <Col componentClass={ControlLabel} sm={2}>City</Col>
                            <Col componentClass={ControlLabel} sm={2}>{this.props.data.city}</Col>
                            <Col sm={2}></Col>
                            <Col componentClass={ControlLabel} sm={2}>comments..</Col>

                            <Col sm={2}>
                                {allComments}
                                <FormControl type="text" placeholder="Add Comment" {...comment}/>
                            </Col>
                        </FormGroup>

                        <Button type="button" className="pull-right" bsStyle="default" bsSize="small"  onClick={ () => this.ADD_COMMENT() }>
                            Add Comment
                        </Button>
                    </Form>
                </Panel>
            </PanelGroup>
        );
    }
}

function selectProps (state) {
    allPosts=state.allReducers.request_poster_data;
    current_logged_in=state.allReducers.login_user;
    return {
        totalPosts:state.allReducers.request_poster_data
    }
}

export default reduxForm({
        form : 'PostComponent',
        fields
    },
    selectProps
)(PostComponent)



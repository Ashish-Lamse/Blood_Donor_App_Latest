/**
 * Created by sb0103 on 19/9/17.
 */

import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form';
import { DateTimePicker, Calendar } from 'react-widgets'
import { Grid, Row, Col ,Panel ,Form ,FormGroup,ControlLabel,Button,FormControl,Radio,Checkbox } from 'react-bootstrap'
import {Nav,Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import { NEW_DONAR_REGISTERED_DATA, SEARCH_DATA, NEW_REQUEST } from '../actions/actions'

import {Jumbotron,PageHeader ,Well} from "react-bootstrap";
import PostComponent from './PostComponent';

export const fields=[ 'firstName', 'lastName','email','phone','bloodGroup','city'];

var request_poster_data;
var count=0;

@autobind
class PostRequest extends Component {

    NEW_REQUEST_POSTER(){
        count=request_poster_data.length;
        let { dispatch } =this.props;

        this.props.values.id=new Date()+count++;
        this.props.values.comments=[];

        localStorage.setItem('allRequestPoster',JSON.stringify(this.props.values));
        let d = JSON.parse(localStorage.getItem('allRequestPoster'));
        dispatch(NEW_REQUEST(this.props.values));
    }

    render() {
        const   style={
            marginTop: 79
        };
        const { fields: { firstName, lastName,email, phone,bloodGroup,city,totalPosts},
            submitting,
            pristine
            } = this.props;
        return (
            <div>
                <Panel header="Post Request" style={style} bsStyle="default">
                    <Form horizontal >
                        <FormGroup >
                            <Col componentClass={ControlLabel} sm={2}>First Name</Col>
                            <Col sm={4}>
                                <FormControl type="text" placeholder="First Name" {...firstName}/>
                            </Col>
                            <Col componentClass={ControlLabel} sm={2}>Last Name</Col>
                            <Col sm={4}>
                                <FormControl type="text" placeholder="Last Name" {...lastName}/>
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={2}>Blood Group</Col>
                            <Col sm={4}>
                                <FormControl type="text" placeholder="Blood Group" {...bloodGroup}/>
                            </Col>
                            <Col componentClass={ControlLabel} sm={2}>City</Col>
                            <Col sm={4}>
                                <FormControl type="text" placeholder="City" {...city}/>
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="email">
                            <Col componentClass={ControlLabel} sm={2}>Email</Col>
                            <Col sm={4}>
                                <FormControl type="email" placeholder="Enter the Email-Id" {...email}/>
                            </Col>

                            <Col componentClass={ControlLabel} sm={2}>Mobile Number</Col>
                            <Col sm={4}>
                                <FormControl type="number" placeholder="Mobile Number" {...phone}/>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col smOffset={2} sm={10}>
                                <Button type="button" className="pull-right" bsStyle="default" bsSize="large"  disabled={pristine || submitting} onClick={ () => this.NEW_REQUEST_POSTER() }>
                                    Post Request
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Panel>

                <Panel header="Post's" bsStyle="default">
                    {request_poster_data.map((post, i) => <PostComponent key = {i}
                                                                  data = {post} />)}
                </Panel>
            </div>
        )
    }
}

function selectProps (state) {
    request_poster_data= state.allReducers.request_poster_data;
    return {
       totalPosts:state.allReducers.request_poster_data
    }
}


export default reduxForm({
        form: 'RegistrationForm',
        fields
    },
    selectProps
)(PostRequest)



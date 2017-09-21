/**
 * Created by SB0103 on 19/7/17.
 */
import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form';
import autobind from 'autobind-decorator'
import { push } from 'react-router-redux'
import { Grid, Row, Col ,Panel ,Form ,FormGroup,ControlLabel,Button,FormControl,Radio,Checkbox } from 'react-bootstrap'
import {Nav,Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import { CURRENT_LOGGEDIN_USER } from '../actions/actions'

export const fields=[ 'username','password'];

var allPosts,current_logged_in;
const applicationPassword="Password123";

@autobind
class LoginForm extends Component {
    Login(){
        var username=this.props.values.username;
        var password=this.props.values.password;
        var BreakException = {};

        try{
            allPosts.forEach((eachPost,index)=>{
                if(eachPost.email==username && password==applicationPassword){
                    let { dispatch } =this.props;
                    dispatch(CURRENT_LOGGEDIN_USER({username:eachPost.firstName,password:password}));
                    this.props.dispatch(push('/search'));
                    throw BreakException
                }
                else if((eachPost.email!=username || password!=applicationPassword) && index==allPosts.length-1){
                    console.log("why it is coming here");
                    this.props.dispatch(push('/login'));
                }
            });
        }catch (e){
            if (e !== BreakException) throw e;
        }

    }
    render() {
        const   style={
            marginTop: 79
        };

        const { fields: { username, password },
            submitting,
            pristine
            } = this.props;

        return (
            <div style={style}>
                <Panel header="Login Form" bsStyle="default">
                    <Form horizontal >
                        <FormGroup >
                            <Col componentClass={ControlLabel} sm={4}>User Name</Col>
                            <Col sm={6}>
                                <FormControl type="text" placeholder="username" {...username}/>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} sm={4}>Password</Col>
                            <Col sm={6}>
                                <FormControl type="password" placeholder="password" {...password}/>
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col sm={4}>
                                <Button type="button" className="pull-right" bsStyle="info" bsSize="small"  onClick={ () => this.Login() }>
                                    Login
                                </Button>
                            </Col>
                            <Col sm={6}>
                            </Col>
                        </FormGroup>
                    </Form>

                </Panel>
            </div>

        )
    }
}

function selectProps (state) {
    allPosts=state.allReducers.request_poster_data;
    current_logged_in=state.allReducers.request_poster_data;
    return {
        totalPosts:state.allReducers.request_poster_data
    }
}

export default reduxForm({
        form: 'LoginForm',
        fields: fields,
    },
    selectProps
)(LoginForm)



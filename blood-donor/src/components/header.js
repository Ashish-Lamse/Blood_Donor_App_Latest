import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form';
import { LinkContainer } from 'react-router-bootstrap'
import { connect } from 'react-redux'
import autobind from 'autobind-decorator'
import {Nav, Navbar, NavItem,Button, NavDropdown, MenuItem, Grid, Row, Col} from 'react-bootstrap'
import { POPUP_CHECK_BOOLEANVALUE } from '../actions/actions'
import {
    NEW_DONAR_REGISTERED_DATA,
    SEARCH_DATA,
    RECENT_DONAR,
    NEW_REQUEST } from '../actions/actions'

import moment from 'moment'

@autobind
class Header extends Component {
    constructor(props){
        super(props)
    }
    componentWillMount () {
        let donar1=  {
            'Id':"2017-08-03T16:49:45+05:30",
            'firstName':'Rama',
            'lastName': 'Raman',
            'occupation':'occupation',
            'martial_status':'UnMarried',
            'dob':'02-03-1994',
            'p_email':'Rama@gmail.com',
            'p_phone':'1111111111',
            'e_email':'Rama@gmail.com',
            'e_phone':'1111111111',
            'bloodGroup':'A+',
            'city':'Hyderabad',
            'recent_donar':'NO',
            'current_date': null,
            'end_date': null
        }
        let donar2=  {
            'Id':"2017-08-03T16:49:45+05:30",
            'firstName':'Shyama',
            'lastName': 'Raman',
            'occupation':'occupation',
            'martial_status':'UnMarried',
            'dob':'02-03-1994',
            'p_email':'Shyama@gmail.com',
            'p_phone':'2222222222',
            'e_email':'Shyama@gmail.com',
            'e_phone':'2222222222',
            'bloodGroup':'AB+',
            'city':'Hyderabad',
            'recent_donar':'NO',
            'current_date': null,
            'end_date': null
        }
        let donar3=  {
            'Id':"2017-08-03T16:49:45+05:30",
            'firstName':'Pravya',
            'lastName': 'Raman',
            'occupation':'occupation',
            'martial_status':'UnMarried',
            'dob':'02-03-1994',
            'p_email':'Pravya@gmail.com',
            'p_phone':'3333333333',
            'e_email':'Pravya@gmail.com',
            'e_phone':'3333333333',
            'bloodGroup':'B+',
            'city':'Hyderabad',
            'recent_donar':'NO',
            'current_date': null,
            'end_date': null
        }
        let donar4=  {
            'Id':"2017-08-03T16:49:45+05:30",
            'firstName':'Sumya',
            'lastName': 'Raman',
            'occupation':'occupation',
            'martial_status':'UnMarried',
            'dob':'02-03-1994',
            'p_email':'Sumya@gmail.com',
            'p_phone':'4444444444',
            'e_email':'Rama@gmail.com',
            'e_phone':'4444444444',
            'bloodGroup':'O+',
            'city':'Hyderabad',
            'recent_donar':'NO',
            'current_date': null,
            'end_date': null
        }
        let donar5=  {
            'Id':"2017-08-03T16:49:45+05:30",
            'firstName':'Deva',
            'lastName': 'Raman',
            'occupation':'occupation',
            'martial_status':'UnMarried',
            'dob':'02-03-1994',
            'p_email':'Rama@gmail.com',
            'p_phone':'5555555555',
            'e_email':'Deva@gmail.com',
            'e_phone':'5555555555',
            'bloodGroup':'AB-',
            'city':'Hyderabad',
            'recent_donar':'NO',
            'current_date': null,
            'end_date': null
        }
        let donar6=  {
            'Id':"2017-08-03T16:49:45+05:30",
            'firstName':'Munna',
            'lastName': 'Raman',
            'occupation':'occupation',
            'martial_status':'UnMarried',
            'dob':'02-03-1994',
            'p_email':'Munna@gmail.com',
            'p_phone':'6666666666',
            'e_email':'Munna@gmail.com',
            'e_phone':'6666666666',
            'bloodGroup':'AB+',
            'city':'Puna',
            'recent_donar':'NO',
            'current_date': null,
            'end_date': null
        };
        let donar7=  {
            'Id':"2017-08-03T16:49:45+05:30",
            'firstName':'Sumit',
            'lastName': 'Raman',
            'occupation':'occupation',
            'martial_status':'UnMarried',
            'dob':'02-03-1994',
            'p_email':'Sumit@gmail.com',
            'p_phone':'1111111111',
            'e_email':'Sumit@gmail.com',
            'e_phone':'7777777777',
            'bloodGroup':'AB-',
            'city':'Hyderabad',
            'recent_donar':'NO',
            'current_date': null,
            'end_date': null
        };

        let { dispatch } =this.props;
        dispatch(NEW_DONAR_REGISTERED_DATA(donar1));
        dispatch(SEARCH_DATA(donar1));
        dispatch(NEW_DONAR_REGISTERED_DATA(donar2));
        dispatch(SEARCH_DATA(donar2));
        dispatch(NEW_DONAR_REGISTERED_DATA(donar3));
        dispatch(SEARCH_DATA(donar3));
        dispatch(NEW_DONAR_REGISTERED_DATA(donar4));
        dispatch(SEARCH_DATA(donar4));
        dispatch(NEW_DONAR_REGISTERED_DATA(donar5));
        dispatch(SEARCH_DATA(donar5));
        dispatch(NEW_DONAR_REGISTERED_DATA(donar6));
        dispatch(SEARCH_DATA(donar6));


        let post1={
            "id":new Date()+1,
            'firstName':'Sumit',
            'lastName': 'Raman',
            'email':'Sumit@gmail.com',
            'phone':'1111111111',
            'bloodGroup':'AB-',
            'city':'Hyderabad',
            'comments':[]
        };let post2={
            "id":new Date()+2,
            'firstName':'Amit',
            'lastName': 'Raman',
            'email':'Amitt@gmail.com',
            'phone':'1111111111',
            'bloodGroup':'A-',
            'city':'Hyderabad',
            'comments':[]
        };let post3={
            "id":new Date()+3,
            'firstName':'Siresh',
            'lastName': 'Raman',
            'email':'Suresh@gmail.com',
            'phone':'1111111111',
            'bloodGroup':'AB+',
            'city':'Hyderabad',
            'comments':[]
        };let post4={
            "id":new Date()+4,
            'firstName':'Naresh',
            'lastName': 'Raman',
            'email':'Naresh@gmail.com',
            'phone':'1111111111',
            'bloodGroup':'O-',
            'city':'Hyderabad',
            'comments':[]
        };let post5={
            "id":new Date()+5,
            'firstName':'Ramesh',
            'lastName': 'Raman',
            'email':'Ramesh@gmail.com',
            'phone':'1111111111',
            'bloodGroup':'O+',
            'city':'Hyderabad',
            'comments':[]
        };let post6={
            "id":new Date()+6,
            'firstName':'Ganesh',
            'lastName': 'Raman',
            'email':'Ganesh@gmail.com',
            'phone':'1111111111',
            'bloodGroup':'AB+',
            'city':'Hyderabad',
            'comments':[]
        };let post7={
            "id":new Date()+7,
            'firstName':'Praveen',
            'lastName': 'Raman',
            'email':'Praveen@gmail.com',
            'phone':'1111111111',
            'bloodGroup':'AB-',
            'city':'Hyderabad',
            'comments':[]
        };

        dispatch(NEW_REQUEST(post1));
        dispatch(NEW_REQUEST(post2));
        dispatch(NEW_REQUEST(post3));
        dispatch(NEW_REQUEST(post4));
        dispatch(NEW_REQUEST(post5));
        dispatch(NEW_REQUEST(post6));
        dispatch(NEW_REQUEST(post7));
    }


    render() {
        var currentPath = window.location.pathname;
        console.log("------current path--------");
        console.log(currentPath);

        const style = {
            margin: 0,
            top: 60,
            right: 100,
            bottom:50,
            left: 'auto',
            position: 'fixed'
        };

        const navPos={
            position: 'fixed',
            zIndex:1,
            marginBottom:50
        };

        let { dispatch } =this.props;
        let boolval = false;
        let temp = false;
        dispatch(POPUP_CHECK_BOOLEANVALUE(boolval));
        dispatch(RECENT_DONAR(temp));

        return (
            <div >
                <Navbar inverse collapseOnSelect style={navPos}>
                    <Navbar.Collapse>
                        <Nav>
                            <LinkContainer to='/login'>
                                <NavItem eventKey={2} href="#">Login</NavItem>
                            </LinkContainer>

                            {!currentPath.includes('login')
                                ? <LinkContainer to='/search'>
                                <NavItem eventKey={1} href="#">Search</NavItem>
                            </LinkContainer>
                                : null }

                            {!currentPath.includes('login')
                                ? <LinkContainer to='/postRequest'>
                                <NavItem eventKey={3} href="#">Post Request</NavItem>
                            </LinkContainer>
                                : null }

                            {!currentPath.includes('login')
                                ? <LinkContainer to='/registerDonor'>
                                <NavItem eventKey={2} href="#">Register Donor</NavItem>
                            </LinkContainer>
                                : null }

                            {!currentPath.includes('login')
                                ?   <LinkContainer to='/login'>
                                <NavItem style={style} eventKey={3} href="#">
                                    <img width={20} height={20}  src="../../src/assets/logout.png"/>
                                </NavItem>
                            </LinkContainer>
                                : null }


                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Grid>
                    <Row className="show-grid">
                        <Col md={10} mdPush={1}>
                            {this.props.children}
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }

}

Header.propTypes = {
    dispatch: PropTypes.func,
    children: PropTypes.object
};

Header.defaultProps={
    dispatch :  () => null
};

function selectProps (state) {
    return {
    }
}

export default connect(selectProps) (Header)

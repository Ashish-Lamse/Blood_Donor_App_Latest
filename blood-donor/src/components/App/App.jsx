import React, {Component, PropTypes} from "react";
import {Router} from "react-router";
import routes from "../../components/routes";
import autobind from "autobind-decorator";

import {Jumbotron,PageHeader ,Well} from "react-bootstrap";
import moment from "moment";
import momentLocalizer from "react-widgets/lib/localizers/moment";
import {Button,Row, Col, ControlLabel, Form, Checkbox,FormControl, FormGroup, Modal, Nav, NavItem, Panel} from "react-bootstrap";

momentLocalizer(moment);

@autobind
export default class App extends Component {
  /*
   * Component render()
   * see: https://facebook.github.io/react/docs/reusable-components.html#es6-classes
   */

  componentWillReceiveProps(nextProps) {
    this.setState({ prevPath: this.props.location })
  }

  render() {
    return (
        <div>
          <h2>BLOOD BANK</h2>
          <Router history={this.props.history}>
            {routes}
          </Router>
        </div>
    );
  }
}
App.propTypes = {
  history: PropTypes.object.isRequired
};

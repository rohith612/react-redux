import React, { Component } from 'react';
import { Form } from "react-bootstrap";
import { connect } from 'react-redux';
import { userAction } from '../_action/user.actions';
import { profileAction } from '../_action/profile.actions'
import { Link } from 'react-router-dom';


class LogoutForm extends Component {

    // constructor(props) {
    //     super(props);
    // }


    logout = (e) => {
        e.preventDefault();
        this.props.logout();
        window.location.href = '/login';
    }

    componentDidMount() {
        this.props.getUserName();
    }


    render() {
        return (
            <div>
                <Form inline>
                    <Link to='/profile' className="mr-sm-2">{this.props.infoUserName ? this.props.infoUserName : 'Guest' }</Link>
                    <a href="#logout" onClick={this.logout}>logout</a>
                </Form>
            </div>
        );
    }


}

const mapStateToProps = (state) => {
    return {
        infoUserRequest : state.profile.userRequest,
        infoUserName: state.profile.userData,
        infoError: state.profile.userError,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(userAction.logout()),
        getUserName: () => dispatch(profileAction.profileInfo())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutForm);
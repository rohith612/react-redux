import React, { Component } from 'react';
import { Form, Button, Col, Row } from "react-bootstrap";
import { profileAction } from '../_action/profile.actions'
import { connect } from 'react-redux';


class ProfileForm extends Component {

    componentDidMount() {
        this.props.getUserProfile()
    }

    render() {
        var informations = this.props.infoUserInfo;
        // console.log(JSON.stringify(informations));
        informations.map((post) =>
            console.log(post)
      )
        // informations.map( function (info , i)  {
        //     console.log(info);
        // })
        // let { name , email } = this.props.infoUserInfo;

        // console.log(this.props.infoUserInfo[0]);
        return (
            <Form>

                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Display Name
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext defaultValue="" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Email
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control plaintext readOnly defaultValue="email@example.com" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Password
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
            </Form>
        );
    }
}

const mapStateToProps = state => {
    return {
        infoUserRequest: state.profile.userRequest,
        infoUserInfo: state.profile.userInfo,
        infoError: state.profile.userError,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUserProfile: () => dispatch(profileAction.profileData())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
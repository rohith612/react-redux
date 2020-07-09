import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userAction } from '../_action/user.actions';
import { Form, Button, Card } from "react-bootstrap";

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.loginLocation = this.props.type;
        this.state = {
            username: "",
            password: "",
            errors: {}
        }
    }

    inputChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    login = e => {
        e.preventDefault();
        let { username, password } = this.state;
        this.props.login(username, password)
    }

    render() {
        let { isLoginPending, isLoginSuccess, loginError } = this.props;
        if (isLoginSuccess) window.location.href = '/dashboard';

        if (this.loginLocation === 'home_login') {

            if (loginError) {
                window.location.href = '/login?login_attempt=1';
            }

            return (
                <Form inline>
                    <Form.Text className="text-muted mr-sm-2">
                        {/* {isLoginPending && <div>Please wait... </div>} */}
                        {/* {isLoginSuccess && <div>Login Success </div>} */}
                        {loginError && <div className="text-danger">{loginError.message}</div>}
                    </Form.Text>
                    <Form.Control type="email" name="username" onChange={this.inputChangeHandler} placeholder="Enter email" className="mr-sm-2" />

                    <Form.Control type="password" name="password" onChange={this.inputChangeHandler} placeholder="Password" className="mr-sm-2" />

                    <Button variant="outline-info" type="submit" onClick={this.login} {...isLoginPending && 'disable'} >
                        Submit
                    </Button>
                </Form>
            )
        }

        return (

            <Card>
                <Card.Body>
                    <Form.Text className="text-muted mr-sm-2">
                        {/* {isLoginPending && <div>Please wait... </div>} */}
                        {/* {isLoginSuccess && <div>Login Success </div>} */}
                        {loginError && <div className="text-danger">{loginError.message}</div>}
                    </Form.Text>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" name="username" onChange={this.inputChangeHandler} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" name="password" onChange={this.inputChangeHandler} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={this.login}  {...isLoginPending && 'disable'}>
                            Login
                        </Button>
                    </Form>
                </Card.Body>
            </Card>

        );
    }
}


const mapStateToProps = (state) => {
    return {
        isLoginPending: state.user.isLoginPending,
        isLoginSuccess: state.user.isLoginSuccess,
        loginError: state.user.loginError,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (username, password) => dispatch(userAction.login(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
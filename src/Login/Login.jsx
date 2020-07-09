import React from 'react';
import LoginForm from './LoginForm';

function Login(props) {
    return (
        <div className="container">
            <div className="row mt-6">
                <div className="col-lg-3 mb-6"></div>
                <div className="col-lg-6 mb-6 grid-margin">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}

export default Login;
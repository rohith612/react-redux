import React, { Component } from 'react';
import { Navbar, Form } from "react-bootstrap";
import LoginForm from '../Login/LoginForm';
import LogoutForm from '../Login/LogoutForm';

class Header extends Component {
    constructor(props) {
        super(props);
        this.atLocation = window.location.pathname;
        this.userLoggedIn = localStorage.getItem('user') ? true : false;
    }

    logout = (e) => {
        e.preventDefault();
        alert('logout')
    }

    render() {

        return (
            <header>
                <Navbar expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">My Site</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            {
                                this.atLocation === '/' &&  !this.userLoggedIn && 
                                <LoginForm type="home_login" />
                            }
                            
                            {
                                this.userLoggedIn && <LogoutForm />
                            }
                            
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        );
    }
}

export default Header;
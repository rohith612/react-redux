import React from 'react';
import ProfileForm from './ProfileForm';
import { Form, Button, Card , Col , Row } from "react-bootstrap";

function Profile(props) {
    return (

        <div className="container">
            <div className="row mt-6">
                <div className="col-lg-2 mb-6"></div>
                <div className="col-lg-8 mb-6 grid-margin">
                    <Card>
                        <Card.Body>
                            <ProfileForm />
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>

    );
}

export default Profile;
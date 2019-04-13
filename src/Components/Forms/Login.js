import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import Axios from 'axios';
export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            email: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    render() {
        return (
            <Container className="shadow p-3 mb-5 bg-white rounded">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>Email address</Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                onChange={this.handleChange}
                                value={this.state.email}
                                name="email" />
                            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>Password</Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                onChange={this.handleChange}
                                value={this.password}
                                name="password" />
                        </Col>
                    </Form.Group>

                    <Button className="mx-2" variant="primary" type="submit">Login</Button>
                    <Button className="mx-2" variant="secondary">Cancle</Button>
                </Form>
            </Container>
        );
    }
}
import React, { Component } from 'react';
import { Container, Col, Row, Form, Button, InputGroup } from 'react-bootstrap';
import Axios from 'axios';
export default class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            gender: "N/A",
            country: "egypt",
            age: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        // e.stopPropagation();
        const { username, email, password, gender, country, age } = this.state;
        Axios.post(`http://localhost:3000/api/users/create`, {
            username,
            password,
            gender,
            email,
            country,
            age: Number(age)
        })
            .then(response => {
                console.log(response.data);
                debugger;
                // props.history.push(`/users/${response.data._id}/details`);
            })
            .catch(function (error) {
                debugger;
                console.log(error);
            });
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
                    <Form.Group as={Row} md="4">
                        <Form.Label column sm={2}>Username</Form.Label>
                        <Col sm={10}>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>@</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    placeholder="Username"
                                    required
                                />
                                {/* <Form.Control.Feedback type="invalid">Please choose a username.</Form.Control.Feedback> */}
                            </InputGroup>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>Email</Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange} />
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
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>Age</Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="number"
                                placeholder="Age"
                                name="age"
                                value={this.state.age}
                                onChange={this.handleChange} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} >
                        <Form.Label column sm={2}>Gender</Form.Label>
                        <Col sm={10}>
                            <Form.Control as="select" value={this.state.gender} onChange={this.handleChange} name="gender">
                                <option value='male'>Male</option>
                                <option value='female'>Female</option>
                                <option value='n/a'>I'd rather not to tell</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} >
                        <Form.Label column sm={2}>Country</Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                className="text-capitalize"
                                as="select"
                                value={this.state.country}
                                onChange={this.handleChange}
                                name="country">
                                <option value='egypt'>egypt</option>
                                <option value='span'>span</option>
                                <option value='italy'>italy</option>
                                <option value='germany'>germany</option>
                                <option value='france'>france</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>

                    <Button className="mx-2" variant="primary" type="submit">Sign Up</Button>
                    <Button className="mx-2" variant="secondary" >Cancle</Button>
                </Form>
            </Container>
        );
    }
}
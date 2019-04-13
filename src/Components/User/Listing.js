import React, { Component } from 'react';
import axios from 'axios';
import { Container, CardDeck } from 'react-bootstrap';
import UserCard from './Card';

const usersContext = React.createContext();
const loader = require('../../Assets/loader.gif');

export default class UserListing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
        }
    }
    componentDidMount() {
        axios.get('https://localhost:3000/api/messages/', (err, res) => {

        })
    }
    render() {
        const userListingValue = {
            users: this.state.users,
        }
        return (
            this.state.users.length ?
                <Container fluid={true} className="d-flex">
                    <img src={loader} alt="loading" />
                </Container>
                :
                <Container fluid={true}>
                    <CardDeck>
                        {this.state.users.map(u => <UserCard key={u._id} {...u} />)}
                    </CardDeck>
                </Container>

        );
    }
}
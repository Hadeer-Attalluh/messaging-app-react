import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

export default function UserCard(props) {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top"
                src={require('../../Assets/Images/default.png')}
                alt="User Photo" />
            <Card.Body>
                <Card.Title>{props.userName}</Card.Title>
                <Link to={`/${props._id}/details`} variant="primary">View Details</Link>
            </Card.Body>
        </Card>
    );
}
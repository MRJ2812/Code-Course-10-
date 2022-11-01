import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Premium = () => {
    const detail = useLoaderData();

    return (
        <div className='text-center'>
            <h1 style={{ color: 'gold' }}>Premium Content</h1>
            <Card className='mb-4' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={detail.image} />
                <Card.Body>
                    <Card.Title>{detail.CourseTitle}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Premium;
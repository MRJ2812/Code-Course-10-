import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import SideNav from './SideNav/SideNav';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Courses = () => {

    const CourseDetails = useLoaderData();

    return (
        <div>
            <h2>All courses</h2>
            <Row>
                <Col lg="2">
                    <SideNav></SideNav>
                </Col>
                <Col lg="10">

                    <div className='row g-2'>
                        {
                            CourseDetails.map(CourseDetails =>
                                <div key={CourseDetails.id} className='my-4  col-lg-4 col-12 col-md-6'>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={CourseDetails.image} />
                                        <Card.Body>
                                            <Card.Title>{CourseDetails.CourseTitle}</Card.Title>
                                            <Card.Text>

                                            </Card.Text>
                                            <Button variant="primary">Details</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        }
                    </div>


                </Col>
            </Row>
        </div>
    );
};

export default Courses;
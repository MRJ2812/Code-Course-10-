import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import SideNav from './SideNav/SideNav';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Courses = () => {

    // const [courseinfo, setCourseinfo] = useState([]);

    // console.log("info", courseinfo)

    // useEffect(() => {
    //     fetch('https://code-course-server.vercel.app/courseinfo')
    //         .then(res => res.json())
    //         .then(data => setCourseinfo(data));
    // }, [])

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
                            CourseDetails.map(CourseDetail =>
                                <div key={CourseDetail.id} className='my-4  col-lg-4 col-12 col-md-6'>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={CourseDetail.image} />
                                        <Card.Body>
                                            <Card.Title>{CourseDetail.CourseTitle}</Card.Title>
                                            <Button variant="primary"><Link className='text-white' to={`/courses_details/${CourseDetail.id}`}>Details</Link></Button>
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
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banare1 from '../../Assets/imaiges/banare111.png';
import banare2 from '../../Assets/imaiges/banare22.png';
import banare3 from '../../Assets/imaiges/banare333.png';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Home = () => {

    const [index, setIndex] = useState(0);

    const CourseDetails = useLoaderData();

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <div className='mb-5'>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-20"
                            src={banare1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-20"
                            src={banare2}
                            alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 h-20"
                            src={banare3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            {/* <div className='row g-2'>
                {
                    CourseDetails.map(CourseDetails =>
                        <div key={CourseDetails.id} className='my-4  col-lg-3 col-12 col-md-6'>
                            <Card style={{ width: '15rem', height: '23rem' }}>
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
            </div> */}

        </div>
    );
};

export default Home;
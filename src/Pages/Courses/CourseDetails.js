import React, { useRef } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { useReactToPrint } from "react-to-print";

const CourseDetails = () => {


    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const course = useLoaderData();
    console.log(course.id)

    return (
        <div className='m-4 p-4 container text-center'>
            <Card>
                <div>
                    <button onClick={handlePrint} className="print__button">  Print </button>
                    <div ref={componentRef} className="card">
                        <div className="float__start">
                            <h3 className="card-title mb-0">Information</h3>
                        </div>
                        <hr />
                        <div className="float__infoss">
                            <ul>
                                <li> Name : <span> Dr Andrew C S Koh </span> </li>
                                <li> Email : <span> Andrew@gmail.com </span> </li>
                                <li> Gender : <span> Male </span> </li>
                                <li> Date of Birth : <span> 07-24-1982</span> </li>
                                <li> Phone No: <span> </span> 9856231456 </li>
                                <li> Address : <span> 26 Wyle Cop, Shrewsbury, Shropshire, SY1 1XD </span> </li>
                                <li> Website : <span> www.Andrew.com </span> </li>
                                <li> Country : <span> United states </span> </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <h2>{course.CourseTitle}</h2>
                    <img className='w-25' src={course.image} alt="" />
                    <h5>{course.courseBody}</h5>
                </div>

                <div>
                    <Link to={`/premium/${course.id}`}><button type="button" className="mt-3 mb-3 btn btn-warning btn-lg">Get Premium Access</button></Link>
                </div>

            </Card>
        </div>
    );
};

export default CourseDetails;
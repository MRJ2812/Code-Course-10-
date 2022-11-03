import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SideNav = () => {
    const [courseinfo, setCourseinfo] = useState([]);

    useEffect(() => {
        fetch('https://code-course-server.vercel.app/courseinfo')
            .then(res => res.json())
            .then(data => setCourseinfo(data));
    }, [])

    return (
        <div>
            <div>
                {
                    courseinfo.map(courses => <p key={courses.id}>
                        <Link to={`/courses_details/${courses.id}`}>{courses.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default SideNav;
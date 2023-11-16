import React from 'react';
import Student from './studentDisplay';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function StudentList({studentsList}){
    return (
        <div className="d-flex flex-wrap justify-content-evenly w-75 mx-auto mt-3">
            {studentsList.map(x => (
                <div className='mb-3 h-100'>
                    <Student student={x}/>
                </div>
            ))}
        </div>
    )
}

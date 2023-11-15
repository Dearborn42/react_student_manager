import React from 'react';
import Student from './studentDisplay';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function StudentList({studentsList}){
    return (
        <div className="d-flex flex-wrap justify-content-evenly">
            {studentsList.map(x => (<Student student={x}/>))}
        </div>
    )
}

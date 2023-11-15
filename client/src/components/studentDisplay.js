import React from 'react';
export default function Student({student}){
    return (
        <>
            <div>{student.name}</div>
            <br />
            <div>{student.age}</div>
            <br />
            <div>{student.course}</div>
        </>
    )
}
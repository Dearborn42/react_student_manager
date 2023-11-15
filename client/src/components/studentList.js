import React from 'react';
import Student from './studentDisplay';
export default function StudentList({studentsList}){
    return (
        studentsList.map(x => (<Student student={x}/>))
    )
}

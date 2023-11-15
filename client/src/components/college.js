import React from "react";
import StudentList from "./studentList";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
export default function College({data}){
    const [list, updateStudentList] = useState(data);
    const [form, setForm] = useState({name: "", age: "", course: ""});
    const [type, updateType] = useState(true);
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }
    function updateStudents(e){
        e.preventDefault();
        const studentForm = {...form}
        if(type)
            updateStudentList((prevList) => [studentForm, ...prevList]);
        else
            updateStudentList((prevList) =>
                prevList.filter((student) => student.name !== studentForm.name && student.age !== studentForm.age && student.course !== studentForm.course)
            );
        updateForm({name: "",age: "",course: "",})
    }
    function addDelStudent(){
        updateType(!type)
    }
    return(
        <>
        <div className="mx-auto w-25 h-50 d-flex flex-column">
            <Button variant="primary" onClick={addDelStudent}  className="mt-1">Change form function</Button>
            <form onSubmit={updateStudents}>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={form.name}
                    onChange={(e) => updateForm({ name: e.target.value })}
                />
                <br />
                <input
                    type="text"
                    className="form-control"
                    id="age"
                    value={form.age}
                    onChange={(e) => updateForm({ age: e.target.value })}
                />
                <br />
                <input
                    type="text"
                    className="form-control"
                    id="course"
                    value={form.course}
                    onChange={(e) => updateForm({ course: e.target.value })}
                />
                <div className="d-flex justify-content-center w-100">
                    <Button 
                        variant="primary"
                        type="submit">
                            {type === true ? ("Add") : ("Remove")} student
                    </Button>
                </div>
                
            </form>
        </div>
        <StudentList studentsList={list} />
        </>
    );
}
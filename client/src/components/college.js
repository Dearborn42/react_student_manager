import React from "react";
import StudentList from "./studentList";
import { useState } from "react";
export default function College({data}){
    const [list, updateStudentList] = useState(data);
    const [form, setForm] = useState({
        name: "",
        age: "",
        course: "",
    });
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }
    function updateStudents(e){
        e.preventDefault();
        const studentForm = {...form}
        updateStudentList((prevList) => [...prevList, studentForm]);
        updateForm({name: "",age: "",course: "",})
    }
    return(
        <>
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
            <button type="submit">Add student</button>
        </form>
        <StudentList studentsList={list} />
        </>
    );
}
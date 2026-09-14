import { useState } from "react";

export default function AddStudent() {
    const [student, setStudent] = useState({
        name: "",
        studentNumber: "",
        course: "",
        section: "",
        age: "",
        birthday: ""
    });

    function handleSubmit(e) {
        e.preventDefault();
        
        setStudent({
            name: e.target.name.value,
            studentNumber: e.target.studentNumber.value,
            course: e.target.course.value,
            section: e.target.section.value,
            age: e.target.age.value,
            birthday: e.target.birthday.value
        });
    }

    return (
        <div className="m-21 flex flex-col justify-center items-center gap-1 text-lg">
            <h1>Add Student</h1>
            <form className="flex flex-col gap-4 w-1/3" onSubmit={handleSubmit}>
                <input name="name" placeholder="Name" />
                <input name="studentNumber" placeholder="Student Number" />
                <input name="course" placeholder="Course" />
                <input name="section" placeholder="Section" />
                <input name="age" placeholder="Age" />
                <input name="birthday" placeholder="Birthday" />
                <button type="submit" className="bg-sky-900 text-amber-50 p-2 rounded">Add Student</button>
            </form>
            <p className="mt-4">{student.name}</p>
        </div>
    );
}

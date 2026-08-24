function StudentCard({name, age, birthday, studentNumber, course, section}) {
    return (
        <div>  
            <h1>Student Information</h1>
            <p>Name:            {name}</p>
            <p>Age:             {age}</p>
            <p>Birthday:        {birthday}</p>
            <p>Student Number:  {studentNumber}</p>
            <p>Course:          {course}</p>
            <p>Section:         {section}</p>
        </div>
    )
}

export default StudentCard;
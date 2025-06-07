import { useState } from "react";

function StudentInfo() {
  const [student, setStudent] = useState({
    name: "",
    age: "",
    course: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setStudent(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Student Info:\nName: ${student.name}\nAge: ${student.age}\nCourse: ${student.course}`);
  }

  return (
    <div className="container">
        <h1>Student Information Form</h1>
        <form onSubmit={handleSubmit}>
        <input className="input"
            type="text"
            name="name"
            placeholder="Enter name"
            value={student.name}
            onChange={handleChange}
        />
        <input className="input"
            type="number"
            name="age"
            placeholder="Enter age"
            value={student.age}
            onChange={handleChange}
        />
        <input className="input"
            type="text"
            name="course"
            placeholder="Enter course"
            value={student.course}
            onChange={handleChange}
        />
        <button className="btn"type="submit">Submit</button>
        </form>
    </div>
  );
}

export default StudentInfo
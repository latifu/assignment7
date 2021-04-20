import React, { useState, useEffect } from "react";
import "./AddStudent.css";

const userInitialState = {
  firstName: "",
  lastName: "",
  age: "",
  gender: "",
};

const fetchQuery = async ({ uri, method = "GET", body = null }) => {
  const res = await fetch(uri, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body !== null ? JSON.stringify(body) : null,
  });

  const data = await res.json();
  return data;
};

const AddStudent = () => {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState(userInitialState);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchQuery({ uri: "http://localhost:4000/students" });
      setStudents(data.students);
      // console.log(data);
    };
    fetchData();
  }, [students]);

  const submitHandler = async (e) => {
    e.preventDefault();

    //same we do in postman
    const data = await fetchQuery({
      uri: "http://localhost:4000/students",
      method: "POST",
      body: student,
    });
    setStudents([...students, data.student]);
    setStudent(userInitialState);
  };

  return (
    <div className="container">
      <h1>Student Add List</h1>
      <br />
      <form onSubmit={submitHandler}>
        <label htmlFor="First Name"></label>
        <input
          type="text"
          value={student.firstName}
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="Last Name"></label>
        <input
          type="text"
          value={student.lastName}
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="Age"></label>
        <input
          type="number"
          value={student.age}
          name="age"
          placeholder="Age"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="gender">Gender:</label>
        <select name="gender" id="gender" onChange={handleChange}>
          <option value="Select">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddStudent;

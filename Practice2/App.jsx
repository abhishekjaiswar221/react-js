import React, { useState } from "react";
import Country from "./Country.json";

document.body.style.backgroundColor = "#2b2b2b";
document.body.style.color = "#ffffff";

const App = () => {
  let [state, setState] = useState({
    username: "",
    password: "",
    email: "",
    gender: "",
    course: "",
    country: "",
  });

  let [courses, setCourses] = useState([
    "Javascript",
    "React",
    "Node Js",
    "Express Js",
    "Typescript",
    "Next Js",
    "Angular",
    "Bun Js",
    "Vue Js",
  ]);

  let [countries, setCountries] = useState(Country);

  let handleChange = (e) => {
    console.log(e.target);
    // console.log(e);
    let { name, value } = e.target;
    console.log(value);
    setState({ ...state, [name]: value });
  };

  let handleSubmit = (e) => {
    try {
      e.preventDefault();
      console.log(username, password, email, gender, course, country);
    } catch (error) {
      console.log(error);
    }
    setState({
      username: "",
      password: "",
      email: "",
      gender: "",
      courses: "",
      country: "",
    });
  };

  let { username, password, email, gender, course, country } = state;
  return (
    <section>
      <article>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={handleChange}
            placeholder="Enter Username"
          />
          <br />
          <br />
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleChange}
            placeholder="Enter Password"
          />
          <br />
          <br />
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter Email"
          />
          <br />
          <br />
          <div onChange={handleChange}>
            <p>Select Gender</p>
            <input type="radio" name="gender" id="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="others" />
            <label htmlFor="others">Others</label>
          </div>
          <br />
          <br />
          <select name="courses" id="courses" onChange={handleChange}>
            <option value="" disabled={true} selected={true}>
              Select Courses
            </option>
            {courses.map((value, index) => {
              console.log(value);
              return (
                <React.Fragment key={index + 1}>
                  <option value={value}>{value}</option>
                </React.Fragment>
              );
            })}
          </select>
          <br />
          <br />
          <select name="country" id="country" onChange={handleChange}>
            <option selected disabled>
              Select Country
            </option>
            {countries.map((value, index) => {
              let { name } = value;
              return (
                <React.Fragment key={index + 1}>
                  <option value={name}>{name}</option>
                </React.Fragment>
              );
            })}
          </select>
          <br />
          <br />
          <button type="submit" id="btn">
            Submit
          </button>
        </form>
      </article>
    </section>
  );
};

export default App;

// E-Mail and Course not visible

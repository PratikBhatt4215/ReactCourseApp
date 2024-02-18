import userEvent from "@testing-library/user-event";
import Course from "./Course";
import base_url from "../api/bootapi";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AllCourses = () => {
  useEffect(() => {
    document.title = "All Course";
  }, []);

  //get all courses from server

  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/courses`).then(
      
      (response) => {
        
        console.log(response);
        toast.success("Coursed has been loaded",{
          position:"bottom-center"
        })
        SetCourses(response.data);
      },
      (error) => {
        toast.success("Something went wrong",{
          position:"bottom-center"
        })
        console.log(error);
      }
    );
  };

  //loading course function

  useEffect(() => {
    getAllCoursesFromServer();
  }, []);

  const [courses, SetCourses] = useState([]);
const updateCourseAfterDelete =(id)=>{
  SetCourses(courses.filter((e)=> e.id !=id));
}
  return (
    <div>
      <h1>All Courses</h1>
      <p>List Of Coursed are as follows :</p>

      {courses.length > 0
        ? courses.map((item) => <Course key={item.id} courses={item} update={updateCourseAfterDelete} />)
        : "no courses "}
    </div>
  );
};

export default AllCourses;

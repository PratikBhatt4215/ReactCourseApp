import axios from "axios";
import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
} from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
function Course({ courses ,update}) {
    
  const deleteCourse = (id) => {
    axios.delete(`${base_url}/courses/${id}`).then(
      (response) => {
        toast.success("Deleted Succesfully");
        update(id);
      },
      (error) => {
        toast.success("Not Deleted, Something went wrong");
      }
    );
  };

  return (
    <div>
      <Card className="text-center mt-3">
        <CardBody>
          <CardTitle tag="h5">{courses.title}</CardTitle>
          <CardText>{courses.description}</CardText>
          <Container className="text-center">
            <Button color="primary">Update</Button>

            <Button
              style={{ marginLeft: "8px" }}
              color="danger"
              onClick={() => {
                deleteCourse(courses.id);
              }}
            >
              Delete
            </Button>
          </Container>
        </CardBody>
      </Card>
    </div>
  );
}
export default Course;

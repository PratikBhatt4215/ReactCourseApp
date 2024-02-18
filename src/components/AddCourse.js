import { useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
const AddCourse = () => {

    useEffect(()=>{
        document.title="Add Course";
      },[])

      const [course,SetCourse] = useState({});

      //form handler
      const handleForm=(e)=>{

        console.log(course);
        postDataToServer(course);
        e.preventDefault();
      }

      //creating fun to post data on server
      const postDataToServer =(data)=>{

        axios.post(`${base_url}/courses`,data).then(
            (response)=>{

                console.log(response)
                console.log("success")
                toast.success("Course has been added",{
                    position:"bottom-center"
                })
                
            },(error)=>{

                console.log(error)
                console.log("error")
                toast.success("Course has NOT been added",{
                    position:"bottom-center"
                })
            }
        )
      }
  return (
    <div>

        <h1 className="text-center my-3">Fill Course Details </h1>
      <Form onSubmit={handleForm}>
        <FormGroup>

            <Label for="userId">Course Id</Label>
            <Input type="text" placeholder="Enter here" name="userId" id="userId" onChange={(e)=>{
                SetCourse({...course,id:e.target.value});
            }}></Input>
        </FormGroup>
        <FormGroup>

            <Label for="title">Course Title</Label>
            <Input type="text" placeholder="Enter Title here"  id="title" onChange={(e)=>{
                SetCourse({...course,title:e.target.value});
            }}></Input>
        </FormGroup>
        <FormGroup>

            <Label for="description">Course Description</Label>
            <Input type="textarea" placeholder="Enter Description here"  id="description" style={{height:100}}
            onChange={(e)=>{
                SetCourse({...course,description:e.target.value});
            }}
            
            ></Input>
        </FormGroup>

        <Container className="text-center">

            <Button type="submit" color="success">Add Course</Button>
            <Button type="reset" color="warning" style={{marginLeft:10}}>Clear</Button>
        </Container>
      </Form>
    </div>
  );
};

export default AddCourse;
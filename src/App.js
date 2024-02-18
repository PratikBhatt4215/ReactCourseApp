import "./App.css";
import { Button, Col, Collapse, Container, Row } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import Home from "./components/Home";
import Course from "./components/Course";
import AllCourses from "./components/AllCourses";
import AddCourse from "./components/AddCourse";
import Header from "./components/Header";
import Menus from "./components/Menu";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";
function App() {
  
  const btnHandle = () => {
    toast.success("this si my message", {
      position: "top-center",
    });
  };
  return (
    <div>
      <BrowserRouter>
        <ToastContainer />

        <Container>
          <Header />

          <Row>
            <Col md={4}>
              <Menus />
            </Col>

            <Col md={8}>
              <Routes>
                <Route path="/" Component={Home} exact></Route>
                <Route path="add-course" Component={AddCourse} exact></Route>
                <Route path="/view-course" Component={AllCourses} exact></Route>
              </Routes>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;

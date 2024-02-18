import React, { useEffect } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container
} from "reactstrap";
function Home() {

    useEffect(()=>{
        document.title="Home Page";
      },[])
  return (
    <div>
      <Card
        style={{
          width: "21rem",
          marginLeft:"10rem"
        }}
        className="text-center"
      >
        <img alt="Sample" src="https://picsum.photos/300/200" />
        <CardBody>
          <CardTitle tag="h5">Hii There ! How are you </CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Learn Code with Pratik Bhatt
          </CardSubtitle>
          <CardText>
            Hi I am pratik , working in Techouts
          </CardText>
          <Container>

          <Button color="primary">Button</Button>

          </Container>
        </CardBody>
      </Card>
    </div>
  );
}
export default Home;

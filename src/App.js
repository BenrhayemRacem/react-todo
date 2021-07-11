import "bootstrap/dist/css/bootstrap.min.css";

import { Col, Container, Row } from "react-bootstrap";

import AlertComponent from "./AlertCompnent";
import ChangeColor from "./ChangeColor";
import FormComponent from "./FormComponent";
import ToDoList from "./ToDoList";

function App() {
  return (
    <Container>
      <AlertComponent />
      <Row>
        <Col>
          <FormComponent />
        </Col>
        <Col>
          <ChangeColor />
        </Col>
      </Row>
      <Row>
        <ToDoList />
      </Row>
    </Container>
  );
}

export default App;

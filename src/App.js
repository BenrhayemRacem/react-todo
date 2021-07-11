import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row} from "react-bootstrap";
import ToDoList from "./ToDoList";
import ChangeColor from "./ChangeColor";
import AlertComponent from "./AlertCompnent";
import FormComponent from "./FormComponent";




function App() {
    return (
        <Container>
                <AlertComponent/>
        <Row>
            <Col>
                <FormComponent/>
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

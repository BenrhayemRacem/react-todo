import {Button, Card, Col} from "react-bootstrap";
import {FaEdit, TiDeleteOutline} from "react-icons/all";


const ToDoElement = (props) => {
    const element = props.element;
    const handleDeleteElement = props.handleDeleteElement ;
    const handleEditingElement=props.handleEditingElement ;
    const color = props.color;
    const textColor = (color==="warning"||color==="light") ? "black" : "white" ;
    const elementIndex= props.elementIndex;

    return (

        <Col xs={6} md={4}>
            <Card  bg={color} style={{color:textColor}}>
                <Card.Header >{elementIndex+1}</Card.Header>
                <Card.Body>
                    <Card.Title>{element.title}</Card.Title>

                </Card.Body>
                <Button variant={color}
                        onClick={()=>handleEditingElement(element.id)}>
                    <FaEdit></FaEdit>
                </Button>
                <Button variant={color}
                        onClick={()=>handleDeleteElement(element.id)}>
                    <TiDeleteOutline></TiDeleteOutline>
                </Button>
            </Card>
        </Col>

    )
};

export default ToDoElement ;
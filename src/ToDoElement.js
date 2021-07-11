import {Button, Card, Col} from "react-bootstrap";
import {FaEdit, TiDeleteOutline} from "react-icons/all";
import {useGlobalContext} from "./GlobalContext";

const ToDoElement = (props) => {
   const {color , handleEditingElement ,handleDeleteElement} = useGlobalContext()
    const textColor = (color==="warning"||color==="light") ? "black" : "white" ;
    const elementIndex= props.elementIndex;
    const element = props.element;

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
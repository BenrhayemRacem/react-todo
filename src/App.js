import 'bootstrap/dist/css/bootstrap.min.css';
import {Alert, Button, Col, Container, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import ToDoList from "./ToDoList";
import getLocalStorage from "./LocalStorage";
import ChangeColor from "./ChangeColor";



function App() {
    const [toDo , setToDo] = useState('');
    const [toDoList ,setToDoList] = useState(getLocalStorage("list"));
    const [isEditing, setIsEditing] = useState(false);
    const [alert ,setAlert] = useState( {variant:"" , message:""}) ;
    const [editId ,setEditId] = useState('');
    const [color , setColor] =useState(getLocalStorage("color"))
    const handleAlerts= (variant , message)=> {
        setAlert({variant,message});
    }
    const handleDeleteElement  =(id) => {
        const filteredList = toDoList.filter((item)=> item.id !== id);
        setToDoList(filteredList);
        setToDo('');
        handleAlerts("danger" , "element deleted");
    }
    const handleEditingElement =(id) => {
        const element = toDoList.find((item)=> item.id===id);
        setIsEditing(true) ;
        setToDo(element.title);
        setEditId(element.id);
    }
    const handleSubmit =(e)=> {
        e.preventDefault();

         if (!toDo) {
             handleAlerts("danger" , "cannot add empty string")

         }
         else if (toDo && isEditing) {
             setToDoList(toDoList.map((item)=> {
                 if (item.id ===editId) {
                     return {...item , title:toDo}
                 }
                 return item ;
             }))
             handleAlerts("success" , "updated successfully") ;
             setIsEditing(false);
             setEditId('');
             setToDo('');

         }
         else  {
             const newElement = [{id:new Date().toLocaleTimeString() , title: toDo}] ;
             setToDoList(toDoList.concat(newElement)) ;
             setToDo('');

         }
    }
    const handleColorChange = (color) => {
        setColor(color);
    }

    useEffect(()=> {
        let timeout = setTimeout(()=> handleAlerts("","") , 3000) ;
        return ()=> clearTimeout(timeout);
    } , [alert]) ;
    useEffect(()=> {
        localStorage.setItem('list' , JSON.stringify(toDoList)) ;
    }, [toDoList]) ;
    useEffect(()=> {
        localStorage.setItem('color' , JSON.stringify(color)) ;
    }, [color])

    return (
        <Container>

                <Alert variant={alert.variant} >
                    <Alert.Heading>
                        {alert.message}
                    </Alert.Heading>
                </Alert>
        <Row>
            <Col>
                <form  onSubmit={handleSubmit}>
                    <label > what is your plan ? </label>
                    <input type="text" value={toDo}
                           onChange={(e)=>setToDo(e.target.value)}
                           placeholder="e.g// Sunday : fishing"
                    />
                    <Button type="submit" variant={color}> {isEditing? "edit" : "add element"}</Button>
                </form>
            </Col>
            <Col>
                <ChangeColor handleColorChange={handleColorChange}/>
            </Col>

        </Row>
            <Row>
                <ToDoList list={toDoList}
                          handleDeleteElement={handleDeleteElement}
                          handleEditingElement={handleEditingElement}
                           color={color} />
            </Row>
        </Container>
  );
}

export default App;

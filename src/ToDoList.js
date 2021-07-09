
import ToDoElement from "./ToDoElement";

const ToDoList = (props)=> {
    const list = props.list ;
    const handleDeleteElement = props.handleDeleteElement ;
    const handleEditingElement = props.handleEditingElement;
    const color = props.color;


    return (
        list.map((element,elementIndex )=> {
            return <ToDoElement element={element}
                                key={element.id}
                                elementIndex={elementIndex}
                                handleDeleteElement={handleDeleteElement}
                                handleEditingElement={handleEditingElement}
                                color={color}/>
        })
    )

}

export default ToDoList ;
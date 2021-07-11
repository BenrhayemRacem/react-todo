
import ToDoElement from "./ToDoElement";
import {useGlobalContext} from "./GlobalContext";

const ToDoList = ()=> {

const {toDoList } = useGlobalContext();

    return (
        toDoList.map((element,elementIndex )=> {
            return <ToDoElement element={element}
                                key={element.id}
                                elementIndex={elementIndex}
                               />
        })
    )

}

export default ToDoList ;

import {useGlobalContext} from "./GlobalContext";
import ToDoElement from "./ToDoElement";

const ToDoList = () => {

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
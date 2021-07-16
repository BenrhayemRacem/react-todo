import React, { useContext, useEffect, useReducer } from "react";
import getLocalStorage from "./LocalStorage";

import reducer from "./ToDoReducer";
import { TODO_ACTIONS } from "./ToDoReducer";

const AppContext = React.createContext(null);

const initialToDoState = {
  toDo: "",
  toDoList: getLocalStorage("list"),
  isEditing: false,
  alert: { variant: "", message: "" },
  editId: "",
  color: getLocalStorage("color"),
};

const AppProvider = ({ children }) => {
  /*
    const [toDo , setToDo] = useState('');
    const [toDoList ,setToDoList] = useState(getLocalStorage("list"));
    const [isEditing, setIsEditing] = useState(false);
    const [alert ,setAlert] = useState( {variant:"" , message:""}) ;
    const [editId ,setEditId] = useState('');
    const [color , setColor] =useState(getLocalStorage("color")) ;
     */

  const [state, dispatch] = useReducer(reducer, initialToDoState);
  const handleAddToDoElement = (title) => {
    dispatch({ type: TODO_ACTIONS.ADD_TO_DO, payload: { title } });
  };
  const handleDeleteToDoElement = (id) => {
    dispatch({ type: TODO_ACTIONS.DELETE_TO_DO, payload: { id } });
  };
  const handleEditingToDoElement = (title, id) => {
    dispatch({
      type: TODO_ACTIONS.EDIT_TO_DO,
      payload: {
        title,
        id,
      },
    });
  };

  const handleSubmit = (event) => {
    dispatch({ type: TODO_ACTIONS.SUBMIT_TO_DO, payload: { event } });
  };
  const handleColorChange = (color) => {
    dispatch({ type: TODO_ACTIONS.CHANGE_COLOR, payload: { color } });
  };

  useEffect(() => {
    dispatch({ type: TODO_ACTIONS.SAVE_LIST });
  }, [state.toDoList]);
  useEffect(() => {
    localStorage.setItem("color", JSON.stringify(state.color));
  }, [state.color]);
  useEffect(()=> {
    let timeout = setTimeout(()=>dispatch({type:TODO_ACTIONS.INIT_ALERT}) , 3000) ;
    return ()=> clearTimeout(timeout)
  }, [state.alert])

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleAddToDoElement,
        handleDeleteToDoElement,
        handleSubmit,
        handleEditingToDoElement,
        handleColorChange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

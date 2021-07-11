
import React, {useState, useContext, useEffect} from 'react';
import getLocalStorage from "./LocalStorage";

const AppContext = React.createContext(null);

const AppProvider = ({children})=> {
    const [toDo , setToDo] = useState('');
    const [toDoList ,setToDoList] = useState(getLocalStorage("list"));
    const [isEditing, setIsEditing] = useState(false);
    const [alert ,setAlert] = useState( {variant:"" , message:""}) ;
    const [editId ,setEditId] = useState('');
    const [color , setColor] =useState(getLocalStorage("color")) ;

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
    const handleInput =(chr) => {
        setToDo(chr);
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
        <AppContext.Provider value={{handleAlerts
            ,handleSubmit,
            handleColorChange,
            handleDeleteElement,
            handleEditingElement,
            handleInput,
            toDoList,
            toDo,
            alert,
            isEditing,
            editId,
            color}}>
            {children}

        </AppContext.Provider>
    )

}

export const useGlobalContext =()=> {
    return useContext(AppContext);
}

export {AppContext,AppProvider};


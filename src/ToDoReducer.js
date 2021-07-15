export const TODO_ACTIONS = {
  ADD_TO_DO : "add-to-do",
  EDIT_TO_DO : "edit-to-do",
  DELETE_TO_DO : "delete-to-do",
  SUBMIT_TO_DO : "submit-to-do",
  CHANGE_COLOR : "change-color",
  SAVE_LIST : "save-list",
  SAVE_COLOR : "save-color",
};

const reducer = (state, action) => {
  switch (action.type) {
  case TODO_ACTIONS.ADD_TO_DO:
    return {...state, toDo : action.payload.title};

  case TODO_ACTIONS.DELETE_TO_DO:
    const filteredList =
        state.toDoList.filter((item) => item.id !== action.payload.id);
    return {...state, toDoList : filteredList, toDo : ""};

  case TODO_ACTIONS.EDIT_TO_DO:
    return {
      ...state,
      isEditing : true,
      toDo : action.payload.title,
      editId : action.payload.id,
    };

  case TODO_ACTIONS.SUBMIT_TO_DO:
    action.payload.event.preventDefault();
    if (!state.toDo) {
      // display alert
      return {...state};
    } else if (state.toDo && state.isEditing) {
      const newToDoList = state.toDoList.map((toDoElement) => {
        if (toDoElement.id === state.editId) {
          return {...toDoElement, title : state.toDo};
        }
        return {...toDoElement};
      });
      return {...state, toDoList : newToDoList};
    }

    const newElement = [
      {id : new Date().toLocaleTimeString(), title : state.toDo},
    ];
    return {
      ...state,
      toDoList : state.toDoList.concat(newElement),
      toDo : "",
    };

  case TODO_ACTIONS.CHANGE_COLOR:
    return {...state, color : action.payload.color};
  case TODO_ACTIONS.SAVE_LIST:
    localStorage.setItem("list", JSON.stringify(state.toDoList));
    return {...state};

  default:
    return {...state};
  }
};

export default reducer;

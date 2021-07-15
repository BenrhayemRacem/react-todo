import { Button } from "react-bootstrap";
import { useGlobalContext } from "./GlobalContext";

const FormComponent = () => {
  const { handleAddToDoElement, toDo, color, isEditing, handleSubmit } =
    useGlobalContext();

  return (
    <form onSubmit={handleSubmit}>
      <label>what is your plan ? </label>
      <input
        type="text"
        value={toDo}
        onChange={(e) => handleAddToDoElement(e.target.value)}
        placeholder="e.g/ /
                    Sunday
          : fishing "
      />{" "}
      <Button type="submit" variant={color}>
        {isEditing ? "edit" : "add element"}
      </Button>
    </form>
  );
};

export default FormComponent;

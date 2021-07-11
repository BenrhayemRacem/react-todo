import { Button } from "react-bootstrap";
import { useGlobalContext } from "./GlobalContext";

const FormComponent = () => {
  const { handleInput, toDo, color, isEditing, handleSubmit } =
    useGlobalContext();
  return (
    <form onSubmit={handleSubmit}>
      <label>what is your plan ? </label>
      <input
        type="text"
        value={toDo}
        onChange={(e) => handleInput(e.target.value)}
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

import { Button, ButtonGroup } from "react-bootstrap";

import colorList from "./ButtonColorData";
import { useGlobalContext } from "./GlobalContext";

const ChangeColor = () => {
  const { handleColorChange } = useGlobalContext();

  return (
    <ButtonGroup aria-label="coloring" size="lg" className="mb-2">
      {colorList.map((color, index) => (
        <Button
          variant={color}
          key={index}
          onClick={() => handleColorChange(color)}
        >
          ....
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default ChangeColor;

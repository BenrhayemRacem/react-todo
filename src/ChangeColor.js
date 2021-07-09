import colorList from "./ButtonColorData";
import {Button, ButtonGroup} from "react-bootstrap";

const ChangeColor = (props)=> {

const handleColorChange = props.handleColorChange ;

   return ( <ButtonGroup aria-label="coloring" size="lg" className="mb-2" >
           {
               colorList.map((color,index)=> <Button variant={color}
                                                     key={index}
               onClick={()=>handleColorChange(color)}>....</Button> )

           }

    </ButtonGroup>
   )

}

export default ChangeColor;
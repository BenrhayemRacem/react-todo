import { Alert } from "react-bootstrap";
import { useGlobalContext } from "./GlobalContext";

const AlertComponent = () => {
  const { alert } = useGlobalContext();

  return (
    <Alert variant={alert.variant}>
      <Alert.Heading>{alert.message}</Alert.Heading>
    </Alert>
  );
};

export default AlertComponent;

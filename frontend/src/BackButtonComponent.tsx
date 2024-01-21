import { ArrowBackIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const BackButtonComponent: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Button
      aria-label="Back"
      colorScheme="green"
      size={"xs"}
      onClick={() => navigate("..")}
      leftIcon={<ArrowBackIcon />}
      style={{ marginLeft: "24px" }}
    >
      Back
    </Button>
  );
};

export default BackButtonComponent;

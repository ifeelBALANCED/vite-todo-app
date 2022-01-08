import { Alert, AlertIcon } from "@chakra-ui/react";
import { FC } from "react";

const ErrorMessage: FC = () => {
  return (
    <Alert status="error">
      <AlertIcon />
      There was an error processing your request
    </Alert>
  );
};

export default ErrorMessage;

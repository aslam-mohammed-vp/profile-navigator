import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { paymentMethodSelectorById } from "./profileSelector";
import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Th,
  Tr,
} from "@chakra-ui/react";
import BackButtonComponent from "./BackButtonComponent";

const PaymentComponent: React.FC = () => {
  type Params = {
    profileId: string;
    paymentMethodId: string;
  };
  const { profileId, paymentMethodId } = useParams<keyof Params>() as Params;

  const paymentMethod = useSelector(
    paymentMethodSelectorById(profileId, paymentMethodId)
  );
  return (
    <TableContainer>
      <BackButtonComponent />
      <Table variant="simple">
        <TableCaption placement="top">Profile</TableCaption>

        {paymentMethod && (
          <Tbody>
            <Tr>
              <Th width={"100%"}>Name:</Th>
              <Th>{paymentMethod.name}</Th>
            </Tr>
            <Tr>
              <Th width={"100%"}>IBAN:</Th>
              <Th>{paymentMethod.iban}</Th>
            </Tr>
            <Tr>
              <Th width={"100%"}>BIC:</Th>
              <Th>{paymentMethod.bic}</Th>
            </Tr>
            <Tr>
              <Th width={"100%"}>Is Primary Method of Payment:</Th>
              <Th>{paymentMethod.isPrimary ? "Yes" : "No"}</Th>
            </Tr>
          </Tbody>
        )}
      </Table>
    </TableContainer>
  );
};

export default PaymentComponent;

import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Th,
  Tr,
} from "@chakra-ui/react";
import { addressSelectorById } from "./profileSelector";
import BackButtonComponent from "./BackButtonComponent";

const AddressComponent: React.FC = () => {
  type Params = {
    profileId: string;
    addressId: string;
  };
  const { profileId, addressId } = useParams<keyof Params>() as Params;

  const address = useSelector(addressSelectorById(profileId, addressId));

  return (
    <TableContainer>
      <BackButtonComponent />
      <Table variant="simple">
        <TableCaption placement="top">Address</TableCaption>

        {address && (
          <Tbody>
            <Tr>
              <Th width={"100%"}>Name:</Th>
              <Th>{address.name}</Th>
            </Tr>
            <Tr>
              <Th width={"100%"}>Street:</Th>
              <Th>{address.street}</Th>
            </Tr>
            <Tr>
              <Th width={"100%"}>City:</Th>
              <Th>{address.city}</Th>
            </Tr>
            <Tr>
              <Th width={"100%"}>Postal Code:</Th>
              <Th>{address.postalCode}</Th>
            </Tr>
          </Tbody>
        )}
      </Table>
    </TableContainer>
  );
};

export default AddressComponent;

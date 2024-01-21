import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  TableContainer,
  Table,
  TableCaption,
  Tbody,
  Tr,
  Th,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { personSelectorById } from "./profileSelector";
import { ArrowBackIcon } from "@chakra-ui/icons";
import BackButtonComponent from "./BackButtonComponent";

const PersonComponent: React.FC = () => {
  type Params = {
    profileId: string;
    personId: string;
  };
  const { profileId, personId } = useParams<keyof Params>() as Params;

  const person = useSelector(personSelectorById(profileId, personId));

  return (
    <TableContainer>
      <BackButtonComponent />
      <Table variant="simple">
        <TableCaption placement="top">Profile</TableCaption>

        {person && (
          <Tbody>
            <Tr>
              <Th width={"100%"}>Name</Th>
              <Th>
                {person.salutation} {person.firstName} {person.lastName}
              </Th>
            </Tr>
            <Tr>
              <Th width={"100%"}>DOB:</Th>
              <Th>{person.birthdate}</Th>
            </Tr>
            <Tr>
              <Th width={"100%"}>Marital Status</Th>
              <Th>{person.maritalStatus}</Th>
            </Tr>
            <Tr>
              <Th width={"100%"}>Occupation</Th>
              <Th>{person.occupation}</Th>
            </Tr>
          </Tbody>
        )}
      </Table>
    </TableContainer>
  );
};

export default PersonComponent;

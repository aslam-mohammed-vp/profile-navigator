import { Link, useParams } from "react-router-dom";

import { useSelector } from "react-redux";
import { profileSelectorById } from "./profileSelector";
import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Th,
  Tr,
} from "@chakra-ui/react";
import { Address, PaymentMethod, Person } from "./types";
import BackButtonComponent from "./BackButtonComponent";

const ProfileComponent: React.FC = () => {
  type Params = {
    profileId: string;
  };
  const { profileId } = useParams<keyof Params>() as Params;

  const profile = useSelector(profileSelectorById(profileId));

  return (
    <TableContainer>
      <BackButtonComponent />
      <Table variant="simple">
        <TableCaption placement="top">Profile</TableCaption>

        <Tbody>
          {profile && (
            <Tr>
              <Th width={"100%"}>Name</Th>
              <Th>{profile.name}</Th>
            </Tr>
          )}
        </Tbody>
      </Table>
      <Table variant="simple" width={"100%"}>
        <TableCaption placement="top">Persons</TableCaption>

        <Tbody>
          {profile &&
            profile.persons.map((person: Person) => (
              <Tr key={person.id}>
                <Th height="10px" key={person.id}>
                  <Link to={`person/${person.id}`}>
                    {person.firstName} {person.lastName}
                  </Link>
                </Th>
              </Tr>
            ))}
        </Tbody>
      </Table>
      <Table variant="simple" width={"100%"}>
        <TableCaption placement="top">Addresses</TableCaption>

        <Tbody>
          {profile &&
            profile.addresses.map((address: Address) => (
              <Tr key={address.id}>
                <Th height="10px" key={address.id}>
                  <Link to={`address/${address.id}`}>{address.city}</Link>
                </Th>
              </Tr>
            ))}
        </Tbody>
      </Table>
      <Table variant="simple" width={"100%"}>
        <TableCaption placement="top">Payent Methods</TableCaption>

        <Tbody>
          {profile &&
            profile.paymentMethods.map((paymentMethod: PaymentMethod) => (
              <Tr key={paymentMethod.id}>
                <Th height="10px" key={paymentMethod.id}>
                  <Link to={`payment/${paymentMethod.id}`}>
                    {paymentMethod.name}
                  </Link>
                </Th>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ProfileComponent;

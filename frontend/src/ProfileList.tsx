import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  IconButton,
  Progress,
} from "@chakra-ui/react";

import React from "react";
import { Link } from "react-router-dom";
import { Profile } from "./types";
import { DeleteIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { loadinProgressSelector } from "./profileSelector";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { deleteProfile } from "./profileSlice";

const ProfileList: React.FC<{ profiles: Profile[] }> = ({ profiles }) => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const handleDelete = async (profileId: string) => {
    dispatch(deleteProfile({ profileId: profileId }));
  };

  const isLoading = useSelector(loadinProgressSelector);

  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption placement={"top"}>Profile List</TableCaption>
        <Thead>
          <Tr>
            <Th width={"90%"}>Name</Th>
            <Th>Delete</Th>
          </Tr>
        </Thead>
        <Tbody>
          {profiles.map((profile) => (
            <Tr key={profile.id}>
              <Th>
                <Link to={`/profiles/${profile.id}`}>
                  {/* <Avatar size="sm" name={profile.name} /> */}
                  {profile.name}
                </Link>
              </Th>
              <Td>
                <IconButton
                  size={"sm"}
                  style={{ float: "right" }}
                  onClick={() => handleDelete(profile.id)}
                  colorScheme="red"
                  aria-label="Delete"
                  icon={<DeleteIcon />}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      {isLoading && <Progress size="lg" isIndeterminate />}
    </TableContainer>
  );
};

export default ProfileList;

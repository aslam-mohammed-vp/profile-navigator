import {
  ChakraProvider,
  Container,
  Heading,
  Box,
  Divider,
  AbsoluteCenter,
} from "@chakra-ui/react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { fetchProfiles } from "./profileSlice";
import { useEffect } from "react";
import { profilesSelector } from "./profileSelector";

import ProfileList from "./ProfileList";
import ProfileComponent from "./ProfileComponent";
import PaymentComponent from "./PaymentComponent";
import PersonComponent from "./PersonComponent";
import AddressComponent from "./AddressComponent";
import { ThunkDispatch } from "@reduxjs/toolkit";

export const App = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  useEffect(() => {
    dispatch(fetchProfiles());
  }, [dispatch]);

  const profiles = useSelector(profilesSelector);

  return (
    <ChakraProvider>
      <Container maxW="4xl" bg="blue.600" height={"900px"} centerContent>
        <Box
          marginTop={"4"}
          padding="4"
          bg="blue.200"
          color="black"
          width="3xl"
        >
          <Box position="relative" padding="10">
            <Divider />
            <AbsoluteCenter bg="white" px="4">
              <a href={"/profiles"}>
                <Heading size="md">Profile Navigator</Heading>
              </a>
            </AbsoluteCenter>
          </Box>

          <BrowserRouter>
            <Routes>
              <Route path="/profiles">
                <Route index element={<ProfileList profiles={profiles} />} />
                <Route path=":profileId">
                  <Route index element={<ProfileComponent />} />
                  <Route
                    path="person/:personId"
                    element={<PersonComponent />}
                  />
                  <Route
                    path="address/:addressId"
                    element={<AddressComponent />}
                  />
                  <Route
                    path="payment/:paymentMethodId"
                    element={<PaymentComponent />}
                  />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </Box>
      </Container>
    </ChakraProvider>
  );
};

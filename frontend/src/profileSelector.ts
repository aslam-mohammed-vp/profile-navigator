import { STATE } from "./profileSlice";
import { Profile, PaymentMethod, Person, Address } from "./types";

export const profilesSelector = (state: STATE) => state.profiles;

export const loadinProgressSelector = (state: STATE) => state.isLoading;

export const profileSelectorById = (id: string) => (state: STATE) => {
  const profile: Profile = state.profiles.filter(
    (profile: Profile) => profile.id === id
  )[0];
  return profile;
};

export const addressSelectorById =
  (profileId: string, addressId: string) => (state: STATE) =>
    state.addresses.filter(
      (address: Address) =>
        address.id === addressId && profileId === address.profileId
    )[0];

export const personSelectorById =
  (profileId: string, personId: string) => (state: STATE) =>
    state.persons.filter(
      (persons: Person) =>
        persons.id === personId && profileId === persons.profileId
    )[0];

export const paymentMethodSelectorById =
  (profileId: string, paymentMethodId: string) => (state: STATE) =>
    state.paymentMethods.filter(
      (paymentMethod: PaymentMethod) =>
        paymentMethod.id === paymentMethodId &&
        profileId === paymentMethod.profileId
    )[0];

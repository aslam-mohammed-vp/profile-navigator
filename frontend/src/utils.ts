import { Address, PaymentMethod, Person, Profile } from "./types";

export const processData = (data: Profile[]) => {
  let profiles: Profile[] = [];
  let persons: Person[] = [];
  let addresses: Address[] = [];
  let paymentMethods: PaymentMethod[] = [];
  data.forEach((profile: Profile) => {
    profiles.push(profile);
    persons.push(...profile.persons);
    addresses.push(...profile.addresses);
    paymentMethods.push(...profile.paymentMethods);
  });

  console.log("pm", paymentMethods);

  return { profiles, persons, addresses, paymentMethods };
};

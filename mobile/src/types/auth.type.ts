export type TSignInRequest = {
  email: string;
  password: string;
};

export type TSignInResponse = {
  email: string;
  token: string;
};

export type TSignUpRequest = {
  name: string;
  lastName: string;
  age: number;
  email: string;
  password: string;
  description: string;
  genderId: number;
  countryId: number;
  genderToMatchId: number;
};

export type TSignUpResponse = {
  id: number;
  email: string;
};

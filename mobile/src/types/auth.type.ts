export type TPayloadToken = {
  id: number;
  email: string;
  name: string;
  lastName: string;
  profileImg: string;
  description: string;
};

export type TSignInRequest = {
  email: string;
  password: string;
};

export type TSignInResponse = {
  id: number;
  email: string;
  name: string;
  lastName: string;
  profileImg: string;
  description: string;
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

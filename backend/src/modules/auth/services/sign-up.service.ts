import { JWT_VARIABLES } from '../../../config';
import prisma from '../../../config/db/setup';
import { hashHelper } from '../../shared/helpers';
import { TSignupRequest } from '../dtos/sign-up.dto';

export type TSignupService = {
  profileImg: string;
} & TSignupRequest;
export const signUpService = async (request: TSignupService) => {
  const passwordHashed = hashHelper(request.password).hash(JWT_VARIABLES.SALT);
  const userCreated = await prisma.user.create({
    data: {
      ...request,
      age: Number(request.age),
      genderId: Number(request.genderId),
      genderToMatchId: Number(request.genderToMatchId),
      countryId: Number(request.countryId),
      password: passwordHashed,
    },
  });

  return {
    id: userCreated.id,
    email: userCreated.email,
  };
};

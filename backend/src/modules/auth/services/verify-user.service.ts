import prisma from '../../../config/db/setup';
import { hashHelper } from '../../shared/helpers';

export interface IVerifyUserService {
  password: string;
  email: string;
}
export const verifyUserService = async ({
  password,
  email,
}: IVerifyUserService) => {
  const userFound = await prisma.user.findFirst({
    where: { email },
  });

  if (!userFound) {
    throw new Error('User was not found');
  }

  const isEqualPassword = hashHelper(password).comparePass(userFound.password);
  if (!isEqualPassword) {
    throw new Error('Password is invalid');
  }
  return userFound;
};

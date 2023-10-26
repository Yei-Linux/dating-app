import prisma from '../../../config/db/setup';

export interface IInteractionUserWithPeople {
  userIdTransmitter: number;
  userIdReceiver: number;
  interaction: 1 | 2;
}

/**
 * Handling user likes or not like people interaction
 * @param param0
 * @returns
 */
export const interactionUserWithPeople = async ({
  userIdTransmitter,
  userIdReceiver,
  interaction,
}: IInteractionUserWithPeople) => {
  const response = await prisma.userInteractions.create({
    data: {
      userIdTransmitter,
      userIdReceiver,
      interactionId: interaction,
    },
  });
  return { id: response.id };
};

import { AuthenticationError } from 'apollo-server-express';

export default async (_, __, { models, userId }) => {
  if (!userId) throw new AuthenticationError('Veuillez vous connecter !');
  const files = await models.File.find().sort({ datetime: -1 });
  return files;
};

import jwt from 'jsonwebtoken';

export default (req) => {
  const token = req.headers.authorization || '';
  const decodedToken = jwt.verify(token, 'SECRET');
  const { userId, userRole } = decodedToken;

  if (!userId) return { message: 'Vous devez être connecté', __typename: 'Message' };

  return { userId, userRole };
};

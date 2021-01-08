import jwt from 'jsonwebtoken';

export default (token) => {
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  const { userId, userRole } = decodedToken;

  if (!userId) return { message: 'Vous devez être connecté', __typename: 'Message' };

  return { userId, userRole };
};

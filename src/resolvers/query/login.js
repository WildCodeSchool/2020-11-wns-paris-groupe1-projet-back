import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default async (_, { email, password }, { models: { User } }) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return { message: 'Adresse email inconnue', __typename: 'Message' };
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return { message: 'Mot de passe incorrect', __typename: 'Message' };
    }
    // eslint-disable-next-line no-underscore-dangle
    const token = jwt.sign({ userId: user._id, userRole: user.role }, 'SECRET', { expiresIn: '24h' });
    // eslint-disable-next-line no-underscore-dangle
    return { ...user._doc, id: user._id, token, __typename: 'User' };
  } catch (e) {
    throw new Error(e);
  }
};

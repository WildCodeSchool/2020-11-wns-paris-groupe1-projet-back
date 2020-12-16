export default async (_, { input: { firstname, lastname, age, email, password } }, { models: { User } }) => {
  try {
    const userAlreadyExist = await User.findOne({ email });
    if (userAlreadyExist) return { message: "L'email fournie est deja utilisée", __typename: 'Message' };
    const user = new User({ firstname, lastname, age, email, password });
    await user.save();
    return user;
  } catch (e) {
    throw new Error(e);
  }
};
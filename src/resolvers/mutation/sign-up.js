import sendEmail from '../../email/index';

export default async (_, { input: { firstname, lastname, birthday, email, password } }, { models: { User } }) => {
  try {
    const userAlreadyExist = await User.findOne({ email });
    if (userAlreadyExist)
      return {
        message: "L'email fournie est deja utilisée",
        __typename: 'Message',
      };
    const user = new User({ firstname, lastname, birthday, email, password });
    console.log({
      signUp: {
        ...user._doc,
        id: user._id,
      },
    });
    await user.save();
    await sendEmail({
      email,
      subject: 'Bienvenue parmi nous',
      name: `${lastname} ${firstname}`,
      templateName: 'welcome',
    });
    await sendEmail({
      email,
      subject: 'Veuillez valider votre email',
      name: `${lastname} ${firstname}`,
      templateName: 'emailValidation',
    });

    return {
      ...user._doc,
      id: user._id,
    };
  } catch (e) {
    throw new Error(e);
  }
};

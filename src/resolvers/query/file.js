export default async (_, __, { models }) => {
  const files = await models.File.find().sort({ datetime: -1 });
  return files;
};

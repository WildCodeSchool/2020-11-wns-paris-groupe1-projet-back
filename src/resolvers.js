export default {
  Query: {
    files: async (_, __, { models }) => {
      const files = await models.File.find();
      return files;
    },
  },
  Mutation: {
    addFile: async (_, { file: { title, description, category, url } }, { models }) => {
      const datetime = new Date(Date.now());
      const newFile = new models.File({
        title,
        description,
        category,
        url,
        datetime: datetime.toISOString(datetime.setHours(datetime.getHours() + 1)),
      });
      console.log(newFile);
      await newFile.save();
      return newFile;
    },
  },
};

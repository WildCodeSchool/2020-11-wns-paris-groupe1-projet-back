export default async (_, { file: { title, description, category, url } }, { models }) => {
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
};

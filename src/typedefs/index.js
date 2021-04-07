import path from 'path';
import { mergeTypeDefs, loadFilesSync } from 'graphql-tools';

const typesMerged = mergeTypeDefs(loadFilesSync(path.join(__dirname, '../typedefs'), { extensions: ['graphql'] }));
export default typesMerged;

import path from 'path';
import { mergeTypeDefs, loadFilesSync } from 'graphql-tools';

const typesMerged = mergeTypeDefs(loadFilesSync(`${path.resolve()}/src/typedefs`), { recursive: true });
export default typesMerged;

import * as path from 'path';
import { mergeTypeDefs, loadFilesSync } from 'graphql-tools';

const typesMerged = mergeTypeDefs(loadFilesSync(path.join(process.cwd(), './'), { recursive: true }));
export default typesMerged;

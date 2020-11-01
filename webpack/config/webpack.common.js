// Constants
import { SRC_DIR, DIST_DIR } from '../utils/constants';

// Common Configuration
export default () => ({
  entry: {
    main: [SRC_DIR],
  },
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
});

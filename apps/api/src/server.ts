import mongoose from 'mongoose';
import { createApp } from './app.js';
import { env } from './config/env.js';
import { logger } from './lib/logger.js';

async function main() {
  await mongoose.connect(env.MONGODB_URI);
  logger.info('Connected to MongoDB');

  const app = createApp();
  app.listen(env.PORT, () => {
    logger.info(`API listening on port ${env.PORT}`);
  });
}

main().catch((error) => {
  logger.error(error, 'Failed to start server');
  process.exit(1);
});

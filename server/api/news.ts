import { defineEventHandler, getQuery } from 'h3';
import { microcmsClient } from '../utils/microcms';

export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
    const limit = parseInt(query.limit as string) || 100;
    const offset = parseInt(query.offset as string) || 0;

    const data = await microcmsClient.get({
      endpoint: 'news',
      queries: {
        limit: limit,
        offset: offset,
      },
    });

    return data;
  } catch (error) {
    console.error('microCMS fetch error:', error);
    return { contents: [] };
  }
});

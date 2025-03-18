import { defineEventHandler } from 'h3';
import { microcmsClient } from '../utils/microcms';

export default defineEventHandler(async (event) => {
  try {
    const data = await microcmsClient.get({
      endpoint: 'timeline', // microCMS のエンドポイント名
      queries: {
        limit: 100,
        orders: "publishedAt"
      },
    });

    return data; // 取得したデータをそのまま返す
  } catch (error) {
    console.error('microCMS fetch error:', error);
    return { contents: [] }; // エラー時は空データを返す
  }
});

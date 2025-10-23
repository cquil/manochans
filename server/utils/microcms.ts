import { createClient } from 'microcms-js-sdk';

export const microcmsClient = createClient({
  serviceDomain: 'manochans', // microCMSのサービスドメイン
  apiKey: process.env.microCMS_API_key, // APIキー（.env から読み込む）
});
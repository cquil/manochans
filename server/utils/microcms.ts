import { createClient } from 'microcms-js-sdk';

export const microcmsClient = createClient({
  serviceDomain: 'manochans', // microCMSのサービスドメイン
  apiKey: "ZcQJV7DcuwfsgLx22aVAWJbR3CNo9fdhoPDk", // APIキー（.env から読み込む）
});
// functions/api/debug.ts
export const onRequest: PagesFunction = async (context) => {
  // envに入ってるキー一覧を返す
  return new Response(
    JSON.stringify({ envKeys: Object.keys(context.env || {}) }, null, 2),
    { headers: { "content-type": "application/json" } }
  );
};

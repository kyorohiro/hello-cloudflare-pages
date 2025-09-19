export const onRequest: PagesFunction<{ BUCKET: R2Bucket }> = async (context) => {
  const url = new URL(context.request.url);
  const key = url.searchParams.get('key');
  if (!key) return new Response('Missing key', { status: 400 });

  const obj = await context.env.BUCKET.get(key);
  if (!obj) return new Response('Not found', { status: 404 });

  return new Response(obj.body, {
    headers: {
      'content-type': obj.httpMetadata?.contentType ?? 'application/octet-stream',
      'etag': obj.etag,
    },
  });
};

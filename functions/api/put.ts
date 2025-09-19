export const onRequest: PagesFunction<{ BUCKET: R2Bucket }> = async (context) => {
  const url = new URL(context.request.url);
  const key = url.searchParams.get('key');
  if (!key) return new Response('Missing key', { status: 400 });

  const contentType = context.request.headers.get('content-type') ?? 'application/octet-stream';
  const body = await context.request.arrayBuffer();

  await context.env.BUCKET.put(key, body, {
    httpMetadata: { contentType },
  });

  return new Response(`Saved: ${key}`);
};

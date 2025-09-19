export async function onRequestGet({ env }) {
  const { results } = await env.SQLDB.prepare(
    "SELECT * FROM messages"
  ).all();

  return new Response(JSON.stringify(results, null, 2), {
    headers: { "content-type": "application/json" }
  });
}

export async function onRequestPost({ env, request }) {
  const data = await request.json();
  if (!data.text) {
    return new Response("Missing text", { status: 400 });
  }

  await env.SQLDB.prepare(
    "INSERT INTO messages (text) VALUES (?)"
  ).bind(data.text).run();

  return new Response("Inserted", { status: 201 });
}


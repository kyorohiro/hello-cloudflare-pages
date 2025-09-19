export const onRequestGet = async (context) => {
  return new Response("Hello from JS Pages Function!", {
    headers: { "content-type": "text/plain" },
  });
};

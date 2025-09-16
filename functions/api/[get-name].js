export async function onRequestGet({ env }) {
    const name = await env.USER_DATA.get("saved_name");
    return Response.json({ name });
  }
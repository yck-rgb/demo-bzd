export async function onRequestPost({ request, env }) {
    const { name } = await request.json();
    await env.USER_DATA.put("saved_name", name);
    return new Response(null, { status: 204 });
  }
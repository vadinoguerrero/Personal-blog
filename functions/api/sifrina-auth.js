export async function onRequestPost(context) {
  const { password, type } = await context.request.json();

  const correctPassword =
    type === 'nsfw' ? context.env.NSFW_PASSWORD : context.env.SIFRINA_PASSWORD;

  if (password === correctPassword) {
    return new Response(JSON.stringify({ success: true }), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return new Response(JSON.stringify({ success: false }), {
    status: 401,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

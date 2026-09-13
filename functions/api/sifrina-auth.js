export async function onRequestPost(context) {
  const { password } = await context.request.json();

  if (password === context.env.SIFRINA_PASSWORD) {
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

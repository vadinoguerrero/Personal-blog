import fm from 'front-matter';

export default async function loadPosts(id) {
  const files = import.meta.glob('../posts/*.md', {
    query: '?raw',
    import: 'default',
  });

  const posts = [];
  for (const loader of Object.values(files)) {
    const markdown = await loader();

    const parsed = fm(markdown);

    if (id) {
      if (parsed.attributes.id === id) {
        return parsed;
      }
    }

    posts.push({
      id: parsed.attributes.id,
      date: parsed.attributes.date,
      content: parsed.body,
    });
  }

  return posts;
}

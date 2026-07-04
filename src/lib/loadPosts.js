import fm from 'front-matter';

export default async function loadPosts(id) {
  const files = import.meta.glob('../posts/*.md', {
    query: '?raw',
    import: 'default',
  });

  const posts = await Promise.all(
    Object.values(files).map(async (loader) => {
      const markdown = await loader();

      const parsed = fm(markdown);

      return {
        id: parsed.attributes.id,
        date: parsed.attributes.date,
        content: parsed.body,
      };
    }),
  );

  if (id) {
    return posts.find((post) => post.id === id);
  }

  return posts;
}

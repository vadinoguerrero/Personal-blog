import { nanoid } from 'nanoid';

export default function createMarkdownPost(title, text) {
  const id = nanoid(8);

  const date = new Date().toISOString().split('T')[0];

  return `---
id: ${id}
date: ${date}
title: ${title}
---

# ${title}

${text}
`;
}

import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const posts = await getCollection("posts")

  return rss({
    title: "I Don't know, Nevermind | Blog",
    description: 'Nevermind, here is the list of things I write about',
    site: context.site,
    items: posts.map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/posts/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
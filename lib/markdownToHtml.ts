import unified from 'unified'
import parse from 'remark-parse'
import remark2rehype from 'remark-rehype'
import math from 'remark-math'
import katex from 'rehype-katex'
import highlight from '@mapbox/rehype-prism'
import html from 'rehype-stringify'

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(parse)
    .use(math)
    .use(remark2rehype)
    .use(katex)
    .use(highlight)
    .use(html)
    .process(markdown)

  return result.toString()
}

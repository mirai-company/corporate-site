import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

const filePath = join(process.cwd(), 'src', 'app', 'projects', '[id]', 'ProjectDetailClient.tsx')
let content = readFileSync(filePath, 'utf8')

// Fix related.id?.current -> related.id
content = content.replace(/related\.id\?\.current/g, 'related.id')

// Fix id: { current: string } -> id: string
content = content.replace('id: { current: string };', 'id: string;')

// Fix related image - add urlFor
content = content.replace(
  `const relatedSlug = related.id?.current;
                const relatedImageSrc = related.image ? urlFor(related.image).width(800).height(450).url() : null;`,
  `const relatedImageSrc = related.image ? urlFor(related.image).width(800).height(450).url() : null;`
)

writeFileSync(filePath, content, 'utf8')
console.log('Done!')
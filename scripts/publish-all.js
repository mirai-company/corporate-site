import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'hbtavgd1',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
})

async function publishAll() {
  const drafts = await client.fetch(`*[_type == "project" && _id in path("drafts.**")]{ _id, title, order }`)
  console.log(`Found ${drafts.length} drafts`)

  for (const doc of drafts) {
    const publishedId = doc._id.replace('drafts.', '')
    await client
      .patch(publishedId)
      .set({ order: doc.order })
      .commit()
    console.log(`✓ Published: ${doc.title} (order: ${doc.order})`)
  }

  console.log('\n✅ Done!')
}

publishAll().catch(console.error)
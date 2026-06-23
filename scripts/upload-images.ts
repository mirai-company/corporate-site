import { createClient } from '@sanity/client'
import { readFileSync } from 'fs'
import { join } from 'path'

const client = createClient({
  projectId: 'hbtavgd1',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
})

const projectImages: Record<string, { image: string; previewImage?: string }> = {
  'mito-yell': { image: 'mito.jpg', previewImage: 'preview-mito.webp' },
  'kamimusubi': { image: 'kamimusubi-miyu.webp', previewImage: 'preview-myu.webp' },
  'mirai-gochiso': { image: 'miraie.jpg' },
  'container-farm': { image: 'containerfarm-img.webp', previewImage: 'containerfarm-preview.webp' },
  'fan-community-business': { image: 'fan-community.webp' },
  'japan-tea-action': { image: 'mv-jta.jpg', previewImage: 'preview-JTA.webp' },
  'mibyou-project': { image: 'mibyou-img.webp', previewImage: 'mibyou-preview.webp' },
  'designing-safety': { image: 'ds-img.webp', previewImage: 'ds-preview.webp' },
  'hisui-protection': { image: 'hisui-og.webp' },
  'act-gommishion': { image: 'oil-img.webp', previewImage: 'oil-preview.webp' },
  'plastic-to-oil': { image: 'truck_4x.png' },
  'mirai-experience': { image: 'mv_exp-1.jpg', previewImage: 'preview-mirai.webp' },
}

const publicImagesPath = 'C:\\app\\corporate-site\\public\\images'

async function uploadImage(filename: string) {
  const filepath = join(publicImagesPath, filename)
  const data = readFileSync(filepath)
  const ext = filename.split('.').pop() || 'jpg'
  const mimeTypes: Record<string, string> = {
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    webp: 'image/webp',
  }
  const asset = await client.assets.upload('image', data, {
    filename,
    contentType: mimeTypes[ext] || 'image/jpeg',
  })
  console.log(`✓ Uploaded: ${filename} → ${asset._id}`)
  return asset
}

async function main() {
  // Get all projects from Sanity
  const projects = await client.fetch(`*[_type == "project"]{ _id, id }`)
  
  for (const project of projects) {
    const slug = project.id?.current
    const imageConfig = projectImages[slug]
    if (!imageConfig) {
      console.log(`⚠ No image config for: ${slug}`)
      continue
    }

    console.log(`\nProcessing: ${slug}`)
    
    const patch: Record<string, unknown> = {}

    // Upload main image
    const mainAsset = await uploadImage(imageConfig.image)
    patch.image = { _type: 'image', asset: { _type: 'reference', _ref: mainAsset._id } }

    // Upload preview image if exists
    if (imageConfig.previewImage) {
      const previewAsset = await uploadImage(imageConfig.previewImage)
      patch.previewImage = { _type: 'image', asset: { _type: 'reference', _ref: previewAsset._id } }
    }

    await client.patch(project._id).set(patch).commit()
    console.log(`✓ Updated: ${slug}`)
  }

  console.log('\n✅ Done!')
}

main().catch(console.error)
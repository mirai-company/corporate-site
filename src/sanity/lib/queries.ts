import { defineQuery } from 'next-sanity'

export const NEWS_QUERY = defineQuery(`
  *[_type == "news"] | order(date desc) {
    _id,
    id,
    date,
    title,
    titleEn,
    category,
    excerpt,
    excerptEn,
    content,
    contentEn,
    image,
    externalLink
  }
`)

export const NEWS_ITEM_QUERY = defineQuery(`
  *[_type == "news" && id == $id][0] {
    _id,
    id,
    date,
    title,
    titleEn,
    category,
    excerpt,
    excerptEn,
    content,
    contentEn,
    image,
    externalLink
  }
`)

export const PROJECTS_QUERY = defineQuery(`
  *[_type == "project"] | order(order asc) {
    _id,
    id,
    title,
    titleEn,
    subtitle,
    subtitleEn,
    description,
    descriptionEn,
    fullDescription,
    fullDescriptionEn,
    domain,
    year,
    location,
    locationEn,
    image,
    previewImage,
    tags,
    tagsEn,
    externalUrl,
    comingSoon,
    order
  }
`)

export const PROJECT_ITEM_QUERY = defineQuery(`
  *[_type == "project" && id.current == $id][0] {
    _id,
    id,
    title,
    titleEn,
    subtitle,
    subtitleEn,
    description,
    descriptionEn,
    fullDescription,
    fullDescriptionEn,
    domain,
    year,
    location,
    locationEn,
    image,
    previewImage,
    gallery,
    tags,
    tagsEn,
    externalUrl,
    comingSoon
  }
`)
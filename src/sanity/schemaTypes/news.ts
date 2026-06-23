import { defineField, defineType } from 'sanity'

export const newsSchema = defineType({
  name: 'news',
  title: 'お知らせ',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'string',
    }),
    defineField({
      name: 'date',
      title: '日付',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'タイトル（日本語）',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'titleEn',
      title: 'タイトル（英語）',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'カテゴリ',
      type: 'string',
      options: {
        list: [
          { title: 'イベント', value: 'event' },
          { title: 'メディア掲載', value: 'media' },
          { title: 'お知らせ', value: 'announcement' },
          { title: 'プレスリリース', value: 'release' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: '概要（日本語）',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'excerptEn',
      title: '概要（英語）',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'content',
      title: '本文（日本語）',
      type: 'text',
      rows: 10,
    }),
    defineField({
      name: 'contentEn',
      title: '本文（英語）',
      type: 'text',
      rows: 10,
    }),
    defineField({
      name: 'image',
      title: '画像',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'externalLink',
      title: '外部リンク',
      type: 'url',
    }),
  ],
  orderings: [
    {
      title: '日付（新しい順）',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
})
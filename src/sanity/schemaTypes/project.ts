import { defineField, defineType } from 'sanity'

export const projectSchema = defineType({
  name: 'project',
  title: 'プロジェクト',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'ID',
      type: 'slug',
      options: { source: 'title' },
      validation: Rule => Rule.required(),
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
      name: 'subtitle',
      title: 'サブタイトル（日本語）',
      type: 'string',
    }),
    defineField({
      name: 'subtitleEn',
      title: 'サブタイトル（英語）',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: '説明（日本語）',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'descriptionEn',
      title: '説明（英語）',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'fullDescription',
      title: '詳細説明（日本語）',
      type: 'text',
      rows: 8,
    }),
    defineField({
      name: 'fullDescriptionEn',
      title: '詳細説明（英語）',
      type: 'text',
      rows: 8,
    }),
    defineField({
      name: 'domain',
      title: 'ドメイン',
      type: 'string',
      options: {
        list: [
          { title: '関係資本', value: 'relational' },
          { title: '地域資本', value: 'regional' },
          { title: '生命資本', value: 'life' },
          { title: '循環資本', value: 'circular' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: '年',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: '場所（日本語）',
      type: 'string',
    }),
    defineField({
      name: 'locationEn',
      title: '場所（英語）',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'メイン画像',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'previewImage',
      title: 'プレビュー画像（4:3推奨）',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'gallery',
      title: 'ギャラリー',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'tags',
      title: 'タグ（日本語）',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'tagsEn',
      title: 'タグ（英語）',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'externalUrl',
      title: '外部URL',
      type: 'url',
    }),
    defineField({
      name: 'comingSoon',
      title: 'Coming Soon',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: '表示順（数値が小さい順）',
      type: 'number',
      initialValue: 99,
    }),
  ],
})
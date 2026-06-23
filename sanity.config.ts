'use client'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schema } from './src/sanity/schemaTypes'

export default defineConfig({
  basePath: '/studio',
  projectId: 'hbtavgd1',
  dataset: 'production',
  schema,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('コンテンツ')
          .id('root')
          .items([
            S.listItem()
              .id('projects')
              .title('プロジェクト')
              .child(
                S.documentList()
                  .id('project-list')
                  .title('プロジェクト')
                  .filter('_type == "project"')
                  .defaultOrdering([{ field: 'order', direction: 'asc' }])
              ),
            S.listItem()
              .id('news')
              .title('お知らせ')
              .child(
                S.documentList()
                  .id('news-list')
                  .title('お知らせ')
                  .filter('_type == "news"')
                  .defaultOrdering([{ field: 'date', direction: 'desc' }])
              ),
          ]),
    }),
    visionTool({ defaultApiVersion: '2024-01-01' }),
  ],
})
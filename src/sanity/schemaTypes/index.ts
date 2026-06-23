import { type SchemaTypeDefinition } from 'sanity'
import { newsSchema } from './news'
import { projectSchema } from './project'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [newsSchema, projectSchema],
}
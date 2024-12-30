import { type SchemaTypeDefinition } from 'sanity'
import { product } from '../schemas/Product -schemas'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product],
}

import type { CodegenConfig } from '@graphql-codegen/cli'
import process from 'process'

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.HYGRAPH_URL,
  documents: 'src/queries/*.ts',
  generates: {
    'src/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
}

export default config

# @graphql-codegen/typescript-react-apollo

## 2.0.6

### Patch Changes

- 1d7c6432: Bump all packages to allow "^" in deps and fix compatibility issues
- 1d7c6432: Bump versions of @graphql-tools/ packages to fix issues with loading schemas and SDL comments
- ac067ea0: Improve output reliability by using separate import for gql tag, ensuring it will be there also for fragments when presets are used. This will bring back the separate import for gql tag (and remove the aliased one)
- Updated dependencies [1d7c6432]
- Updated dependencies [1d7c6432]
  - @graphql-codegen/visitor-plugin-common@1.17.13
  - @graphql-codegen/plugin-helpers@1.17.8

## 2.0.5

### Patch Changes

- 2c3f0728: prevent adding aliased gql tag when documentMode is set to "external"
- Updated dependencies [4266a15f]
  - @graphql-codegen/visitor-plugin-common@1.17.12

## 2.0.4

### Patch Changes

- ee2b01a3: Fixes for issues with publish command
- Updated dependencies [ee2b01a3]
  - @graphql-codegen/visitor-plugin-common@1.17.11

## 2.0.3

### Patch Changes

- 6cb9c96d: Fixes issues with previous release
- Updated dependencies [6cb9c96d]
  - @graphql-codegen/visitor-plugin-common@1.17.10

## 2.0.2

### Patch Changes

- bccfd28c: Enforce `.tsx` extension only when withComponent: true is set
- e6ad5398: apollo v3 should not use type import
- bccfd28c: Use gql as-is instead of Apollo.gql for the generated graphql-tag, to make sure it's compatible with IDEs and prettier
- Updated dependencies [bccfd28c]
  - @graphql-codegen/visitor-plugin-common@1.17.9

## 2.0.1

### Patch Changes

- ce3a5798: Publish minor version to include fixes for client-side-base-visitor, required to v2 of ts-react-apollo plugin (for unified apollo import)
- Updated dependencies [ce3a5798]
  - @graphql-codegen/visitor-plugin-common@1.17.8

## 2.0.0

### Major Changes

- 091dfeae: Support Apollo-Client v3 by default (instead of v2), and generate React Hooks be default. HOC and Components are now disabled by default.

  Apollo Client v3 has React support integrated as part of the core package now, so that means that some imports, identifiers and usage should be updated. [You can read more about migrating to Apollo-Client v3 here](https://www.apollographql.com/docs/react/migrating/apollo-client-3-migration/)

  That means that imports are now generated from `@apollo/client` package, including `gql` tag. React Hooks are generated by default, and HOC and Components are not generated.

  ## Migration Notes

  If you are still using the [deprecated](https://github.com/apollographql/react-apollo) `react-apollo` package, please set this configuration:

  ```yaml
  config:
    reactApolloVersion: 2
  ```

  If you are still using the generated React HOC, please set this additional configuration:

  ```yaml
  config:
    reactApolloVersion: 2
    withHOC: true
  ```

  If you are still using the generated React Components, please set this additional configuration:

  ```yaml
  config:
    reactApolloVersion: 2
    withComponent: true
  ```

  If you don't need the generated React Hooks (turned on by default now), please also set:

  ```yaml
  config:
    withHooks: false
  ```
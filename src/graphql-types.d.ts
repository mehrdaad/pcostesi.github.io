/* tslint:disable */
/* An object with an id, parent, and children */
export interface Node {
  id: string; /* The id of the node. */
  parent: Node | null; /* The parent of this node. */
  children: Node[] | null; /* The children of this node. */
}

export interface RootQueryType {
  allSitePage: SitePageConnection | null; /* Connection to all SitePage nodes */
  allSitePlugin: SitePluginConnection | null; /* Connection to all SitePlugin nodes */
  allFile: FileConnection | null; /* Connection to all File nodes */
  allMarkdownRemark: MarkdownRemarkConnection | null; /* Connection to all MarkdownRemark nodes */
  sitePage: SitePage | null; 
  sitePlugin: SitePlugin | null; 
  site: Site | null; 
  file: File | null; 
  markdownRemark: MarkdownRemark | null; 
}
/* A connection to a list of items. */
export interface SitePageConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges: SitePageEdge[] | null; /* A list of edges. */
  totalCount: number | null; 
  distinct: string[] | null; 
  group: sitePageGroupConnectionConnection[] | null; 
}
/* Information about pagination in a connection. */
export interface PageInfo {
  hasNextPage: boolean; /* When paginating, are there more items? */
}
/* An edge in a connection. */
export interface SitePageEdge {
  node: SitePage | null; /* The item at the end of the edge */
  next: SitePage | null; /* The next edge in the connection */
  previous: SitePage | null; /* The previous edge in the connection */
}
/* Node of type SitePage */
export interface SitePage extends Node {
  id: string; /* The id of this node. */
  parent: Node | null; /* The parent of this node. */
  children: Node[] | null; /* The children of this node. */
  component: string | null; 
  path: string | null; 
  componentChunkName: string | null; 
  layout: string | null; 
  jsonName: string | null; 
  internalComponentName: string | null; 
  updatedAt: number | null; 
  context: context | null; 
  pluginCreator: SitePlugin | null; 
  pluginCreatorId: string | null; 
  componentPath: string | null; 
  internal: internal_6 | null; 
}

export interface context {
  slug: string | null; 
}
/* Node of type SitePlugin */
export interface SitePlugin extends Node {
  id: string; /* The id of this node. */
  parent: Node | null; /* The parent of this node. */
  children: Node[] | null; /* The children of this node. */
  resolve: string | null; 
  name: string | null; 
  version: string | null; 
  pluginOptions: pluginOptions_3 | null; 
  pluginFilepath: string | null; 
  packageJson: packageJson_2 | null; 
  internal: internal_7 | null; 
}

export interface pluginOptions_3 {
  plugins: plugins_2[] | null; 
  name: string | null; 
  path: string | null; 
  maxWidth: number | null; 
  linkImagesToOriginal: boolean | null; 
}

export interface plugins_2 {
  resolve: string | null; 
  id: string | null; 
  name: string | null; 
  version: string | null; 
  pluginOptions: pluginOptions_4 | null; 
  pluginFilepath: string | null; 
}

export interface pluginOptions_4 {
  maxWidth: number | null; 
  linkImagesToOriginal: boolean | null; 
}

export interface packageJson_2 {
  name: string | null; 
  description: string | null; 
  version: string | null; 
  main: string | null; 
  keywords: string[] | null; 
  license: string | null; 
  dependencies: dependencies_2[] | null; 
  devDependencies: devDependencies_2[] | null; 
}

export interface dependencies_2 {
  name: string | null; 
  version: string | null; 
}

export interface devDependencies_2 {
  name: string | null; 
  version: string | null; 
}

export interface internal_7 {
  contentDigest: string | null; 
  type: string | null; 
  owner: string | null; 
}

export interface internal_6 {
  type: string | null; 
  contentDigest: string | null; 
  owner: string | null; 
}
/* A connection to a list of items. */
export interface sitePageGroupConnectionConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges: sitePageGroupConnectionEdge[] | null; /* A list of edges. */
  field: string | null; 
  fieldValue: string | null; 
  totalCount: number | null; 
}
/* An edge in a connection. */
export interface sitePageGroupConnectionEdge {
  node: SitePage | null; /* The item at the end of the edge */
  next: SitePage | null; /* The next edge in the connection */
  previous: SitePage | null; /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface SitePluginConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges: SitePluginEdge[] | null; /* A list of edges. */
  totalCount: number | null; 
  distinct: string[] | null; 
  group: sitePluginGroupConnectionConnection[] | null; 
}
/* An edge in a connection. */
export interface SitePluginEdge {
  node: SitePlugin | null; /* The item at the end of the edge */
  next: SitePlugin | null; /* The next edge in the connection */
  previous: SitePlugin | null; /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface sitePluginGroupConnectionConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges: sitePluginGroupConnectionEdge[] | null; /* A list of edges. */
  field: string | null; 
  fieldValue: string | null; 
  totalCount: number | null; 
}
/* An edge in a connection. */
export interface sitePluginGroupConnectionEdge {
  node: SitePlugin | null; /* The item at the end of the edge */
  next: SitePlugin | null; /* The next edge in the connection */
  previous: SitePlugin | null; /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface FileConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges: FileEdge[] | null; /* A list of edges. */
  totalCount: number | null; 
  distinct: string[] | null; 
  group: fileGroupConnectionConnection[] | null; 
}
/* An edge in a connection. */
export interface FileEdge {
  node: File | null; /* The item at the end of the edge */
  next: File | null; /* The next edge in the connection */
  previous: File | null; /* The previous edge in the connection */
}
/* Node of type File */
export interface File extends Node {
  id: string; /* The id of this node. */
  parent: Node | null; /* The parent of this node. */
  children: Node[] | null; /* The children of this node. */
  childMarkdownRemark: MarkdownRemark | null; /* The child of this node of type markdownRemark */
  internal: internal_8 | null; 
  sourceInstanceName: string | null; 
  absolutePath: string | null; 
  relativePath: string | null; 
  extension: string | null; 
  size: number | null; 
  prettySize: string | null; 
  modifiedTime: string | null; 
  accessTime: string | null; 
  changeTime: string | null; 
  birthTime: string | null; 
  root: string | null; 
  dir: string | null; 
  base: string | null; 
  ext: string | null; 
  name: string | null; 
  dev: number | null; 
  mode: number | null; 
  nlink: number | null; 
  uid: number | null; 
  gid: number | null; 
  rdev: number | null; 
  blksize: string | null; 
  ino: number | null; 
  blocks: number | null; 
  atimeMs: number | null; 
  mtimeMs: number | null; 
  ctimeMs: number | null; 
  birthtimeMs: number | null; 
  atime: string | null; 
  mtime: string | null; 
  ctime: string | null; 
  birthtime: string | null; 
}
/* Node of type MarkdownRemark */
export interface MarkdownRemark extends Node {
  id: string; /* The id of this node. */
  parent: Node | null; /* The parent of this node. */
  children: Node[] | null; /* The children of this node. */
  internal: internal_9 | null; 
  frontmatter: frontmatter_2 | null; 
  fileAbsolutePath: string | null; 
  fields: fields_2 | null; 
  html: string | null; 
  excerpt: string | null; 
  headings: MarkdownHeading[] | null; 
  timeToRead: number | null; 
  tableOfContents: string | null; 
}

export interface internal_9 {
  content: string | null; 
  contentDigest: string | null; 
  type: string | null; 
  owner: string | null; 
  fieldOwners: fieldOwners_2 | null; 
}

export interface fieldOwners_2 {
  slug: string | null; 
}

export interface frontmatter_2 {
  title: string | null; 
  date: string | null; 
  tags: string | null; 
  parent: string | null; 
}

export interface fields_2 {
  slug: string | null; 
}

export interface MarkdownHeading {
  value: string | null; 
  depth: number | null; 
}

export interface internal_8 {
  contentDigest: string | null; 
  mediaType: string | null; 
  type: string | null; 
  owner: string | null; 
}
/* A connection to a list of items. */
export interface fileGroupConnectionConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges: fileGroupConnectionEdge[] | null; /* A list of edges. */
  field: string | null; 
  fieldValue: string | null; 
  totalCount: number | null; 
}
/* An edge in a connection. */
export interface fileGroupConnectionEdge {
  node: File | null; /* The item at the end of the edge */
  next: File | null; /* The next edge in the connection */
  previous: File | null; /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface MarkdownRemarkConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges: MarkdownRemarkEdge[] | null; /* A list of edges. */
  totalCount: number | null; 
  distinct: string[] | null; 
  group: markdownRemarkGroupConnectionConnection[] | null; 
}
/* An edge in a connection. */
export interface MarkdownRemarkEdge {
  node: MarkdownRemark | null; /* The item at the end of the edge */
  next: MarkdownRemark | null; /* The next edge in the connection */
  previous: MarkdownRemark | null; /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface markdownRemarkGroupConnectionConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges: markdownRemarkGroupConnectionEdge[] | null; /* A list of edges. */
  field: string | null; 
  fieldValue: string | null; 
  totalCount: number | null; 
}
/* An edge in a connection. */
export interface markdownRemarkGroupConnectionEdge {
  node: MarkdownRemark | null; /* The item at the end of the edge */
  next: MarkdownRemark | null; /* The next edge in the connection */
  previous: MarkdownRemark | null; /* The previous edge in the connection */
}
/* Node of type Site */
export interface Site extends Node {
  id: string; /* The id of this node. */
  parent: Node | null; /* The parent of this node. */
  children: Node[] | null; /* The children of this node. */
  siteMetadata: siteMetadata_2 | null; 
  port: string | null; 
  host: string | null; 
  pathPrefix: string | null; 
  polyfill: boolean | null; 
  buildTime: string | null; 
  internal: internal_10 | null; 
}

export interface siteMetadata_2 {
  title: string | null; 
  description: string | null; 
  siteUrl: string | null; 
}

export interface internal_10 {
  contentDigest: string | null; 
  type: string | null; 
  owner: string | null; 
}

export interface sitePageConnectionSort {
  fields: SitePageConnectionSortByFieldsEnum[]; 
  order: sitePageConnectionSortOrderValues | null; 
}
/* Filter connection on its fields */
export interface filterSitePage {
  component: sitePageConnectionComponentQueryString | null; 
  path: sitePageConnectionPathQueryString_2 | null; 
  componentChunkName: sitePageConnectionComponentChunkNameQueryString | null; 
  layout: sitePageConnectionLayoutQueryString | null; 
  jsonName: sitePageConnectionJsonNameQueryString | null; 
  internalComponentName: sitePageConnectionInternalComponentNameQueryString | null; 
  updatedAt: sitePageConnectionUpdatedAtQueryInteger | null; 
  context: sitePageConnectionContextInputObject | null; 
  pluginCreatorId: sitePageConnectionPluginCreatorIdQueryString | null; 
  componentPath: sitePageConnectionComponentPathQueryString | null; 
  id: sitePageConnectionIdQueryString_2 | null; 
  internal: sitePageConnectionInternalInputObject_2 | null; 
}

export interface sitePageConnectionComponentQueryString {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePageConnectionPathQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePageConnectionComponentChunkNameQueryString {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePageConnectionLayoutQueryString {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePageConnectionJsonNameQueryString {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePageConnectionInternalComponentNameQueryString {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePageConnectionUpdatedAtQueryInteger {
  eq: number | null; 
  ne: number | null; 
}

export interface sitePageConnectionContextInputObject {
  slug: sitePageConnectionContextSlugQueryString | null; 
}

export interface sitePageConnectionContextSlugQueryString {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePageConnectionPluginCreatorIdQueryString {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePageConnectionComponentPathQueryString {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePageConnectionIdQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePageConnectionInternalInputObject_2 {
  type: sitePageConnectionInternalTypeQueryString_2 | null; 
  contentDigest: sitePageConnectionInternalContentDigestQueryString_2 | null; 
  owner: sitePageConnectionInternalOwnerQueryString_2 | null; 
}

export interface sitePageConnectionInternalTypeQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePageConnectionInternalContentDigestQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePageConnectionInternalOwnerQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginConnectionSort {
  fields: SitePluginConnectionSortByFieldsEnum[]; 
  order: sitePluginConnectionSortOrderValues | null; 
}
/* Filter connection on its fields */
export interface filterSitePlugin {
  resolve: sitePluginConnectionResolveQueryString_2 | null; 
  id: sitePluginConnectionIdQueryString_2 | null; 
  name: sitePluginConnectionNameQueryString_2 | null; 
  version: sitePluginConnectionVersionQueryString_2 | null; 
  pluginOptions: sitePluginConnectionPluginOptionsInputObject_2 | null; 
  pluginFilepath: sitePluginConnectionPluginFilepathQueryString_2 | null; 
  packageJson: sitePluginConnectionPackageJsonInputObject_2 | null; 
  internal: sitePluginConnectionInternalInputObject_2 | null; 
}

export interface sitePluginConnectionResolveQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginConnectionIdQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginConnectionNameQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginConnectionVersionQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginConnectionPluginOptionsInputObject_2 {
  plugins: sitePluginConnectionPluginOptionsPluginsQueryList_2 | null; 
  name: sitePluginConnectionPluginOptionsNameQueryString_2 | null; 
  path: sitePluginConnectionPluginOptionsPathQueryString_2 | null; 
  maxWidth: sitePluginConnectionPluginOptionsMaxWidthQueryInteger_2 | null; 
  linkImagesToOriginal: sitePluginConnectionPluginOptionsLinkImagesToOriginalQueryBoolean_2 | null; 
}

export interface sitePluginConnectionPluginOptionsPluginsQueryList_2 {
  in: sitePluginConnectionPluginOptionsPluginsInputObject_2[] | null; 
}

export interface sitePluginConnectionPluginOptionsPluginsInputObject_2 {
  resolve: sitePluginConnectionPluginOptionsPluginsResolveQueryString_2 | null; 
  id: sitePluginConnectionPluginOptionsPluginsIdQueryString_2 | null; 
  name: sitePluginConnectionPluginOptionsPluginsNameQueryString_2 | null; 
  version: sitePluginConnectionPluginOptionsPluginsVersionQueryString_2 | null; 
  pluginOptions: sitePluginConnectionPluginOptionsPluginsPluginOptionsInputObject_2 | null; 
  pluginFilepath: sitePluginConnectionPluginOptionsPluginsPluginFilepathQueryString_2 | null; 
}

export interface sitePluginConnectionPluginOptionsPluginsResolveQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginConnectionPluginOptionsPluginsIdQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginConnectionPluginOptionsPluginsNameQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginConnectionPluginOptionsPluginsVersionQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsInputObject_2 {
  maxWidth: sitePluginConnectionPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 | null; 
  linkImagesToOriginal: sitePluginConnectionPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2 | null; 
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 {
  eq: number | null; 
  ne: number | null; 
}

export interface sitePluginConnectionPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
  eq: boolean | null; 
  ne: boolean | null; 
}

export interface sitePluginConnectionPluginOptionsPluginsPluginFilepathQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginConnectionPluginOptionsNameQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginConnectionPluginOptionsPathQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginConnectionPluginOptionsMaxWidthQueryInteger_2 {
  eq: number | null; 
  ne: number | null; 
}

export interface sitePluginConnectionPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
  eq: boolean | null; 
  ne: boolean | null; 
}

export interface sitePluginConnectionPluginFilepathQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginConnectionPackageJsonInputObject_2 {
  name: sitePluginConnectionPackageJsonNameQueryString_2 | null; 
  description: sitePluginConnectionPackageJsonDescriptionQueryString_2 | null; 
  version: sitePluginConnectionPackageJsonVersionQueryString_2 | null; 
  main: sitePluginConnectionPackageJsonMainQueryString_2 | null; 
  keywords: sitePluginConnectionPackageJsonKeywordsQueryList_2 | null; 
  license: sitePluginConnectionPackageJsonLicenseQueryString_2 | null; 
  dependencies: sitePluginConnectionPackageJsonDependenciesQueryList_2 | null; 
  devDependencies: sitePluginConnectionPackageJsonDevDependenciesQueryList_2 | null; 
}

export interface sitePluginConnectionPackageJsonNameQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginConnectionPackageJsonDescriptionQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginConnectionPackageJsonVersionQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginConnectionPackageJsonMainQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginConnectionPackageJsonKeywordsQueryList_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
  in: string[] | null; 
}

export interface sitePluginConnectionPackageJsonLicenseQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginConnectionPackageJsonDependenciesQueryList_2 {
  in: sitePluginConnectionPackageJsonDependenciesInputObject_2[] | null; 
}

export interface sitePluginConnectionPackageJsonDependenciesInputObject_2 {
  name: sitePluginConnectionPackageJsonDependenciesNameQueryString_2 | null; 
  version: sitePluginConnectionPackageJsonDependenciesVersionQueryString_2 | null; 
}

export interface sitePluginConnectionPackageJsonDependenciesNameQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginConnectionPackageJsonDependenciesVersionQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginConnectionPackageJsonDevDependenciesQueryList_2 {
  in: sitePluginConnectionPackageJsonDevDependenciesInputObject_2[] | null; 
}

export interface sitePluginConnectionPackageJsonDevDependenciesInputObject_2 {
  name: sitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 | null; 
  version: sitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 | null; 
}

export interface sitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginConnectionInternalInputObject_2 {
  contentDigest: sitePluginConnectionInternalContentDigestQueryString_2 | null; 
  type: sitePluginConnectionInternalTypeQueryString_2 | null; 
  owner: sitePluginConnectionInternalOwnerQueryString_2 | null; 
}

export interface sitePluginConnectionInternalContentDigestQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginConnectionInternalTypeQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginConnectionInternalOwnerQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileConnectionSort {
  fields: FileConnectionSortByFieldsEnum[]; 
  order: fileConnectionSortOrderValues | null; 
}
/* Filter connection on its fields */
export interface filterFile {
  id: fileConnectionIdQueryString_2 | null; 
  internal: fileConnectionInternalInputObject_2 | null; 
  sourceInstanceName: fileConnectionSourceInstanceNameQueryString_2 | null; 
  absolutePath: fileConnectionAbsolutePathQueryString_2 | null; 
  relativePath: fileConnectionRelativePathQueryString_2 | null; 
  extension: fileConnectionExtensionQueryString_2 | null; 
  size: fileConnectionSizeQueryInteger_2 | null; 
  prettySize: fileConnectionPrettySizeQueryString_2 | null; 
  modifiedTime: fileConnectionModifiedTimeQueryString_2 | null; 
  accessTime: fileConnectionAccessTimeQueryString_2 | null; 
  changeTime: fileConnectionChangeTimeQueryString_2 | null; 
  birthTime: fileConnectionBirthTimeQueryString_2 | null; 
  root: fileConnectionRootQueryString_2 | null; 
  dir: fileConnectionDirQueryString_2 | null; 
  base: fileConnectionBaseQueryString_2 | null; 
  ext: fileConnectionExtQueryString_2 | null; 
  name: fileConnectionNameQueryString_2 | null; 
  dev: fileConnectionDevQueryInteger_2 | null; 
  mode: fileConnectionModeQueryInteger_2 | null; 
  nlink: fileConnectionNlinkQueryInteger_2 | null; 
  uid: fileConnectionUidQueryInteger_2 | null; 
  gid: fileConnectionGidQueryInteger_2 | null; 
  rdev: fileConnectionRdevQueryInteger_2 | null; 
  blksize: fileConnectionBlksizeQueryInteger_2 | null; 
  ino: fileConnectionInoQueryInteger_2 | null; 
  blocks: fileConnectionBlocksQueryInteger_2 | null; 
  atimeMs: fileConnectionAtimeMsQueryInteger_2 | null; 
  mtimeMs: fileConnectionMtimeMsQueryInteger_2 | null; 
  ctimeMs: fileConnectionCtimeMsQueryInteger_2 | null; 
  birthtimeMs: fileConnectionBirthtimeMsQueryInteger_2 | null; 
  atime: fileConnectionAtimeQueryString_2 | null; 
  mtime: fileConnectionMtimeQueryString_2 | null; 
  ctime: fileConnectionCtimeQueryString_2 | null; 
  birthtime: fileConnectionBirthtimeQueryString_2 | null; 
}

export interface fileConnectionIdQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileConnectionInternalInputObject_2 {
  contentDigest: fileConnectionInternalContentDigestQueryString_2 | null; 
  mediaType: fileConnectionInternalMediaTypeQueryString_2 | null; 
  type: fileConnectionInternalTypeQueryString_2 | null; 
  owner: fileConnectionInternalOwnerQueryString_2 | null; 
}

export interface fileConnectionInternalContentDigestQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileConnectionInternalMediaTypeQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileConnectionInternalTypeQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileConnectionInternalOwnerQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileConnectionSourceInstanceNameQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileConnectionAbsolutePathQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileConnectionRelativePathQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileConnectionExtensionQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileConnectionSizeQueryInteger_2 {
  eq: number | null; 
  ne: number | null; 
}

export interface fileConnectionPrettySizeQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileConnectionModifiedTimeQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileConnectionAccessTimeQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileConnectionChangeTimeQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileConnectionBirthTimeQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileConnectionRootQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileConnectionDirQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileConnectionBaseQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileConnectionExtQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileConnectionNameQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileConnectionDevQueryInteger_2 {
  eq: number | null; 
  ne: number | null; 
}

export interface fileConnectionModeQueryInteger_2 {
  eq: number | null; 
  ne: number | null; 
}

export interface fileConnectionNlinkQueryInteger_2 {
  eq: number | null; 
  ne: number | null; 
}

export interface fileConnectionUidQueryInteger_2 {
  eq: number | null; 
  ne: number | null; 
}

export interface fileConnectionGidQueryInteger_2 {
  eq: number | null; 
  ne: number | null; 
}

export interface fileConnectionRdevQueryInteger_2 {
  eq: number | null; 
  ne: number | null; 
}

export interface fileConnectionBlksizeQueryInteger_2 {
  eq: number | null; 
  ne: number | null; 
}

export interface fileConnectionInoQueryInteger_2 {
  eq: number | null; 
  ne: number | null; 
}

export interface fileConnectionBlocksQueryInteger_2 {
  eq: number | null; 
  ne: number | null; 
}

export interface fileConnectionAtimeMsQueryInteger_2 {
  eq: number | null; 
  ne: number | null; 
}

export interface fileConnectionMtimeMsQueryInteger_2 {
  eq: number | null; 
  ne: number | null; 
}

export interface fileConnectionCtimeMsQueryInteger_2 {
  eq: number | null; 
  ne: number | null; 
}

export interface fileConnectionBirthtimeMsQueryInteger_2 {
  eq: number | null; 
  ne: number | null; 
}

export interface fileConnectionAtimeQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileConnectionMtimeQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileConnectionCtimeQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileConnectionBirthtimeQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface markdownRemarkConnectionSort {
  fields: MarkdownRemarkConnectionSortByFieldsEnum[]; 
  order: markdownRemarkConnectionSortOrderValues | null; 
}
/* Filter connection on its fields */
export interface filterMarkdownRemark {
  id: markdownRemarkConnectionIdQueryString_2 | null; 
  internal: markdownRemarkConnectionInternalInputObject_2 | null; 
  frontmatter: markdownRemarkConnectionFrontmatterInputObject_2 | null; 
  fileAbsolutePath: markdownRemarkConnectionFileAbsolutePathQueryString_2 | null; 
  fields: markdownRemarkConnectionFieldsInputObject_2 | null; 
}

export interface markdownRemarkConnectionIdQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface markdownRemarkConnectionInternalInputObject_2 {
  content: markdownRemarkConnectionInternalContentQueryString_2 | null; 
  contentDigest: markdownRemarkConnectionInternalContentDigestQueryString_2 | null; 
  type: markdownRemarkConnectionInternalTypeQueryString_2 | null; 
  owner: markdownRemarkConnectionInternalOwnerQueryString_2 | null; 
  fieldOwners: markdownRemarkConnectionInternalFieldOwnersInputObject_2 | null; 
}

export interface markdownRemarkConnectionInternalContentQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface markdownRemarkConnectionInternalContentDigestQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface markdownRemarkConnectionInternalTypeQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface markdownRemarkConnectionInternalOwnerQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface markdownRemarkConnectionInternalFieldOwnersInputObject_2 {
  slug: markdownRemarkConnectionInternalFieldOwnersSlugQueryString_2 | null; 
}

export interface markdownRemarkConnectionInternalFieldOwnersSlugQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface markdownRemarkConnectionFrontmatterInputObject_2 {
  title: markdownRemarkConnectionFrontmatterTitleQueryString_2 | null; 
  tags: markdownRemarkConnectionFrontmatterTagsQueryString_2 | null; 
  parent: markdownRemarkConnectionFrontmatterParentQueryString_2 | null; 
}

export interface markdownRemarkConnectionFrontmatterTitleQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface markdownRemarkConnectionFrontmatterTagsQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface markdownRemarkConnectionFrontmatterParentQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface markdownRemarkConnectionFileAbsolutePathQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface markdownRemarkConnectionFieldsInputObject_2 {
  slug: markdownRemarkConnectionFieldsSlugQueryString_2 | null; 
}

export interface markdownRemarkConnectionFieldsSlugQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePageComponentQueryString {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePagePathQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePageComponentChunkNameQueryString {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePageLayoutQueryString {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePageJsonNameQueryString {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePageInternalComponentNameQueryString {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePageUpdatedAtQueryInteger {
  eq: number | null; 
  ne: number | null; 
}

export interface sitePageContextInputObject {
  slug: sitePageContextSlugQueryString | null; 
}

export interface sitePageContextSlugQueryString {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePagePluginCreatorIdQueryString {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePageComponentPathQueryString {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePageIdQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePageInternalInputObject_2 {
  type: sitePageInternalTypeQueryString_2 | null; 
  contentDigest: sitePageInternalContentDigestQueryString_2 | null; 
  owner: sitePageInternalOwnerQueryString_2 | null; 
}

export interface sitePageInternalTypeQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePageInternalContentDigestQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePageInternalOwnerQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginResolveQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginIdQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginNameQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginVersionQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginPluginOptionsInputObject_2 {
  plugins: sitePluginPluginOptionsPluginsQueryList_2 | null; 
  name: sitePluginPluginOptionsNameQueryString_2 | null; 
  path: sitePluginPluginOptionsPathQueryString_2 | null; 
  maxWidth: sitePluginPluginOptionsMaxWidthQueryInteger_2 | null; 
  linkImagesToOriginal: sitePluginPluginOptionsLinkImagesToOriginalQueryBoolean_2 | null; 
}

export interface sitePluginPluginOptionsPluginsQueryList_2 {
  in: sitePluginPluginOptionsPluginsInputObject_2[] | null; 
}

export interface sitePluginPluginOptionsPluginsInputObject_2 {
  resolve: sitePluginPluginOptionsPluginsResolveQueryString_2 | null; 
  id: sitePluginPluginOptionsPluginsIdQueryString_2 | null; 
  name: sitePluginPluginOptionsPluginsNameQueryString_2 | null; 
  version: sitePluginPluginOptionsPluginsVersionQueryString_2 | null; 
  pluginOptions: sitePluginPluginOptionsPluginsPluginOptionsInputObject_2 | null; 
  pluginFilepath: sitePluginPluginOptionsPluginsPluginFilepathQueryString_2 | null; 
}

export interface sitePluginPluginOptionsPluginsResolveQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginPluginOptionsPluginsIdQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginPluginOptionsPluginsNameQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginPluginOptionsPluginsVersionQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginPluginOptionsPluginsPluginOptionsInputObject_2 {
  maxWidth: sitePluginPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 | null; 
  linkImagesToOriginal: sitePluginPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2 | null; 
}

export interface sitePluginPluginOptionsPluginsPluginOptionsMaxWidthQueryInteger_2 {
  eq: number | null; 
  ne: number | null; 
}

export interface sitePluginPluginOptionsPluginsPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
  eq: boolean | null; 
  ne: boolean | null; 
}

export interface sitePluginPluginOptionsPluginsPluginFilepathQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginPluginOptionsNameQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginPluginOptionsPathQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginPluginOptionsMaxWidthQueryInteger_2 {
  eq: number | null; 
  ne: number | null; 
}

export interface sitePluginPluginOptionsLinkImagesToOriginalQueryBoolean_2 {
  eq: boolean | null; 
  ne: boolean | null; 
}

export interface sitePluginPluginFilepathQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginPackageJsonInputObject_2 {
  name: sitePluginPackageJsonNameQueryString_2 | null; 
  description: sitePluginPackageJsonDescriptionQueryString_2 | null; 
  version: sitePluginPackageJsonVersionQueryString_2 | null; 
  main: sitePluginPackageJsonMainQueryString_2 | null; 
  keywords: sitePluginPackageJsonKeywordsQueryList_2 | null; 
  license: sitePluginPackageJsonLicenseQueryString_2 | null; 
  dependencies: sitePluginPackageJsonDependenciesQueryList_2 | null; 
  devDependencies: sitePluginPackageJsonDevDependenciesQueryList_2 | null; 
}

export interface sitePluginPackageJsonNameQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginPackageJsonDescriptionQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginPackageJsonVersionQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginPackageJsonMainQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginPackageJsonKeywordsQueryList_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
  in: string[] | null; 
}

export interface sitePluginPackageJsonLicenseQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginPackageJsonDependenciesQueryList_2 {
  in: sitePluginPackageJsonDependenciesInputObject_2[] | null; 
}

export interface sitePluginPackageJsonDependenciesInputObject_2 {
  name: sitePluginPackageJsonDependenciesNameQueryString_2 | null; 
  version: sitePluginPackageJsonDependenciesVersionQueryString_2 | null; 
}

export interface sitePluginPackageJsonDependenciesNameQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginPackageJsonDependenciesVersionQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginPackageJsonDevDependenciesQueryList_2 {
  in: sitePluginPackageJsonDevDependenciesInputObject_2[] | null; 
}

export interface sitePluginPackageJsonDevDependenciesInputObject_2 {
  name: sitePluginPackageJsonDevDependenciesNameQueryString_2 | null; 
  version: sitePluginPackageJsonDevDependenciesVersionQueryString_2 | null; 
}

export interface sitePluginPackageJsonDevDependenciesNameQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginPackageJsonDevDependenciesVersionQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginInternalInputObject_2 {
  contentDigest: sitePluginInternalContentDigestQueryString_2 | null; 
  type: sitePluginInternalTypeQueryString_2 | null; 
  owner: sitePluginInternalOwnerQueryString_2 | null; 
}

export interface sitePluginInternalContentDigestQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginInternalTypeQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePluginInternalOwnerQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface siteSiteMetadataInputObject_2 {
  title: siteSiteMetadataTitleQueryString_2 | null; 
  description: siteSiteMetadataDescriptionQueryString_2 | null; 
  siteUrl: siteSiteMetadataSiteUrlQueryString_2 | null; 
}

export interface siteSiteMetadataTitleQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface siteSiteMetadataDescriptionQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface siteSiteMetadataSiteUrlQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePortQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface siteHostQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePathPrefixQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface sitePolyfillQueryBoolean_2 {
  eq: boolean | null; 
  ne: boolean | null; 
}

export interface siteBuildTimeQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface siteIdQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface siteInternalInputObject_2 {
  contentDigest: siteInternalContentDigestQueryString_2 | null; 
  type: siteInternalTypeQueryString_2 | null; 
  owner: siteInternalOwnerQueryString_2 | null; 
}

export interface siteInternalContentDigestQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface siteInternalTypeQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface siteInternalOwnerQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileIdQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileInternalInputObject_2 {
  contentDigest: fileInternalContentDigestQueryString_2 | null; 
  mediaType: fileInternalMediaTypeQueryString_2 | null; 
  type: fileInternalTypeQueryString_2 | null; 
  owner: fileInternalOwnerQueryString_2 | null; 
}

export interface fileInternalContentDigestQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileInternalMediaTypeQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileInternalTypeQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileInternalOwnerQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileSourceInstanceNameQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileAbsolutePathQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileRelativePathQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileExtensionQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileSizeQueryInteger_2 {
  eq: number | null; 
  ne: number | null; 
}

export interface filePrettySizeQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileModifiedTimeQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileAccessTimeQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileChangeTimeQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileBirthTimeQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileRootQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileDirQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileBaseQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileExtQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileNameQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileDevQueryInteger_2 {
  eq: number | null; 
  ne: number | null; 
}

export interface fileModeQueryInteger_2 {
  eq: number | null; 
  ne: number | null; 
}

export interface fileNlinkQueryInteger_2 {
  eq: number | null; 
  ne: number | null; 
}

export interface fileUidQueryInteger_2 {
  eq: number | null; 
  ne: number | null; 
}

export interface fileGidQueryInteger_2 {
  eq: number | null; 
  ne: number | null; 
}

export interface fileRdevQueryInteger_2 {
  eq: number | null; 
  ne: number | null; 
}

export interface fileBlksizeQueryInteger_2 {
  eq: number | null; 
  ne: number | null; 
}

export interface fileInoQueryInteger_2 {
  eq: number | null; 
  ne: number | null; 
}

export interface fileBlocksQueryInteger_2 {
  eq: number | null; 
  ne: number | null; 
}

export interface fileAtimeMsQueryInteger_2 {
  eq: number | null; 
  ne: number | null; 
}

export interface fileMtimeMsQueryInteger_2 {
  eq: number | null; 
  ne: number | null; 
}

export interface fileCtimeMsQueryInteger_2 {
  eq: number | null; 
  ne: number | null; 
}

export interface fileBirthtimeMsQueryInteger_2 {
  eq: number | null; 
  ne: number | null; 
}

export interface fileAtimeQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileMtimeQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileCtimeQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface fileBirthtimeQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface markdownRemarkIdQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface markdownRemarkInternalInputObject_2 {
  content: markdownRemarkInternalContentQueryString_2 | null; 
  contentDigest: markdownRemarkInternalContentDigestQueryString_2 | null; 
  type: markdownRemarkInternalTypeQueryString_2 | null; 
  owner: markdownRemarkInternalOwnerQueryString_2 | null; 
  fieldOwners: markdownRemarkInternalFieldOwnersInputObject_2 | null; 
}

export interface markdownRemarkInternalContentQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface markdownRemarkInternalContentDigestQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface markdownRemarkInternalTypeQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface markdownRemarkInternalOwnerQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface markdownRemarkInternalFieldOwnersInputObject_2 {
  slug: markdownRemarkInternalFieldOwnersSlugQueryString_2 | null; 
}

export interface markdownRemarkInternalFieldOwnersSlugQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface markdownRemarkFrontmatterInputObject_2 {
  title: markdownRemarkFrontmatterTitleQueryString_2 | null; 
  tags: markdownRemarkFrontmatterTagsQueryString_2 | null; 
  parent: markdownRemarkFrontmatterParentQueryString_2 | null; 
}

export interface markdownRemarkFrontmatterTitleQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface markdownRemarkFrontmatterTagsQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface markdownRemarkFrontmatterParentQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface markdownRemarkFileAbsolutePathQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}

export interface markdownRemarkFieldsInputObject_2 {
  slug: markdownRemarkFieldsSlugQueryString_2 | null; 
}

export interface markdownRemarkFieldsSlugQueryString_2 {
  eq: string | null; 
  ne: string | null; 
  regex: string | null; 
  glob: string | null; 
}
export interface AllSitePageRootQueryTypeArgs {
  skip: number | null; 
  limit: number | null; 
  sort: sitePageConnectionSort | null; 
  filter: filterSitePage | null; 
}
export interface AllSitePluginRootQueryTypeArgs {
  skip: number | null; 
  limit: number | null; 
  sort: sitePluginConnectionSort | null; 
  filter: filterSitePlugin | null; 
}
export interface AllFileRootQueryTypeArgs {
  skip: number | null; 
  limit: number | null; 
  sort: fileConnectionSort | null; 
  filter: filterFile | null; 
}
export interface AllMarkdownRemarkRootQueryTypeArgs {
  skip: number | null; 
  limit: number | null; 
  sort: markdownRemarkConnectionSort | null; 
  filter: filterMarkdownRemark | null; 
}
export interface SitePageRootQueryTypeArgs {
  component: sitePageComponentQueryString | null; 
  path: sitePagePathQueryString_2 | null; 
  componentChunkName: sitePageComponentChunkNameQueryString | null; 
  layout: sitePageLayoutQueryString | null; 
  jsonName: sitePageJsonNameQueryString | null; 
  internalComponentName: sitePageInternalComponentNameQueryString | null; 
  updatedAt: sitePageUpdatedAtQueryInteger | null; 
  context: sitePageContextInputObject | null; 
  pluginCreatorId: sitePagePluginCreatorIdQueryString | null; 
  componentPath: sitePageComponentPathQueryString | null; 
  id: sitePageIdQueryString_2 | null; 
  internal: sitePageInternalInputObject_2 | null; 
}
export interface SitePluginRootQueryTypeArgs {
  resolve: sitePluginResolveQueryString_2 | null; 
  id: sitePluginIdQueryString_2 | null; 
  name: sitePluginNameQueryString_2 | null; 
  version: sitePluginVersionQueryString_2 | null; 
  pluginOptions: sitePluginPluginOptionsInputObject_2 | null; 
  pluginFilepath: sitePluginPluginFilepathQueryString_2 | null; 
  packageJson: sitePluginPackageJsonInputObject_2 | null; 
  internal: sitePluginInternalInputObject_2 | null; 
}
export interface SiteRootQueryTypeArgs {
  siteMetadata: siteSiteMetadataInputObject_2 | null; 
  port: sitePortQueryString_2 | null; 
  host: siteHostQueryString_2 | null; 
  pathPrefix: sitePathPrefixQueryString_2 | null; 
  polyfill: sitePolyfillQueryBoolean_2 | null; 
  buildTime: siteBuildTimeQueryString_2 | null; 
  id: siteIdQueryString_2 | null; 
  internal: siteInternalInputObject_2 | null; 
}
export interface FileRootQueryTypeArgs {
  id: fileIdQueryString_2 | null; 
  internal: fileInternalInputObject_2 | null; 
  sourceInstanceName: fileSourceInstanceNameQueryString_2 | null; 
  absolutePath: fileAbsolutePathQueryString_2 | null; 
  relativePath: fileRelativePathQueryString_2 | null; 
  extension: fileExtensionQueryString_2 | null; 
  size: fileSizeQueryInteger_2 | null; 
  prettySize: filePrettySizeQueryString_2 | null; 
  modifiedTime: fileModifiedTimeQueryString_2 | null; 
  accessTime: fileAccessTimeQueryString_2 | null; 
  changeTime: fileChangeTimeQueryString_2 | null; 
  birthTime: fileBirthTimeQueryString_2 | null; 
  root: fileRootQueryString_2 | null; 
  dir: fileDirQueryString_2 | null; 
  base: fileBaseQueryString_2 | null; 
  ext: fileExtQueryString_2 | null; 
  name: fileNameQueryString_2 | null; 
  dev: fileDevQueryInteger_2 | null; 
  mode: fileModeQueryInteger_2 | null; 
  nlink: fileNlinkQueryInteger_2 | null; 
  uid: fileUidQueryInteger_2 | null; 
  gid: fileGidQueryInteger_2 | null; 
  rdev: fileRdevQueryInteger_2 | null; 
  blksize: fileBlksizeQueryInteger_2 | null; 
  ino: fileInoQueryInteger_2 | null; 
  blocks: fileBlocksQueryInteger_2 | null; 
  atimeMs: fileAtimeMsQueryInteger_2 | null; 
  mtimeMs: fileMtimeMsQueryInteger_2 | null; 
  ctimeMs: fileCtimeMsQueryInteger_2 | null; 
  birthtimeMs: fileBirthtimeMsQueryInteger_2 | null; 
  atime: fileAtimeQueryString_2 | null; 
  mtime: fileMtimeQueryString_2 | null; 
  ctime: fileCtimeQueryString_2 | null; 
  birthtime: fileBirthtimeQueryString_2 | null; 
}
export interface MarkdownRemarkRootQueryTypeArgs {
  id: markdownRemarkIdQueryString_2 | null; 
  internal: markdownRemarkInternalInputObject_2 | null; 
  frontmatter: markdownRemarkFrontmatterInputObject_2 | null; 
  fileAbsolutePath: markdownRemarkFileAbsolutePathQueryString_2 | null; 
  fields: markdownRemarkFieldsInputObject_2 | null; 
}
export interface DistinctSitePageConnectionArgs {
  field: sitePageDistinctEnum | null; 
}
export interface GroupSitePageConnectionArgs {
  skip: number | null; 
  limit: number | null; 
  field: sitePageGroupEnum | null; 
}
export interface DistinctSitePluginConnectionArgs {
  field: sitePluginDistinctEnum | null; 
}
export interface GroupSitePluginConnectionArgs {
  skip: number | null; 
  limit: number | null; 
  field: sitePluginGroupEnum | null; 
}
export interface DistinctFileConnectionArgs {
  field: fileDistinctEnum | null; 
}
export interface GroupFileConnectionArgs {
  skip: number | null; 
  limit: number | null; 
  field: fileGroupEnum | null; 
}
export interface ModifiedTimeFileArgs {
  formatString: string | null; 
  fromNow: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
}
export interface AccessTimeFileArgs {
  formatString: string | null; 
  fromNow: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
}
export interface ChangeTimeFileArgs {
  formatString: string | null; 
  fromNow: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
}
export interface BirthTimeFileArgs {
  formatString: string | null; 
  fromNow: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
}
export interface BlksizeFileArgs {
  formatString: string | null; 
  fromNow: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
}
export interface AtimeFileArgs {
  formatString: string | null; 
  fromNow: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
}
export interface MtimeFileArgs {
  formatString: string | null; 
  fromNow: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
}
export interface CtimeFileArgs {
  formatString: string | null; 
  fromNow: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
}
export interface BirthtimeFileArgs {
  formatString: string | null; 
  fromNow: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
}
export interface ExcerptMarkdownRemarkArgs {
  pruneLength: number | null; 
}
export interface HeadingsMarkdownRemarkArgs {
  depth: HeadingLevels | null; 
}
export interface DateFrontmatter_2Args {
  formatString: string | null; 
  fromNow: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
}
export interface DistinctMarkdownRemarkConnectionArgs {
  field: markdownRemarkDistinctEnum | null; 
}
export interface GroupMarkdownRemarkConnectionArgs {
  skip: number | null; 
  limit: number | null; 
  field: markdownRemarkGroupEnum | null; 
}
export interface PortSiteArgs {
  formatString: string | null; 
  fromNow: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
}
export interface BuildTimeSiteArgs {
  formatString: string | null; 
  fromNow: boolean | null; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference: string | null; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
}

export type SitePageConnectionSortByFieldsEnum = "component" | "path" | "componentChunkName" | "layout" | "jsonName" | "internalComponentName" | "updatedAt" | "context___slug" | "pluginCreator___NODE" | "pluginCreatorId" | "componentPath" | "id" | "parent" | "internal___type" | "internal___contentDigest" | "internal___owner";


export type sitePageConnectionSortOrderValues = "ASC" | "DESC";


export type sitePageDistinctEnum = "component" | "path" | "componentChunkName" | "layout" | "jsonName" | "internalComponentName" | "updatedAt" | "context___slug" | "pluginCreator___NODE" | "pluginCreatorId" | "componentPath" | "id" | "parent" | "internal___type" | "internal___contentDigest" | "internal___owner";


export type sitePageGroupEnum = "component" | "path" | "componentChunkName" | "layout" | "jsonName" | "internalComponentName" | "updatedAt" | "context___slug" | "pluginCreator___NODE" | "pluginCreatorId" | "componentPath" | "id" | "parent" | "internal___type" | "internal___contentDigest" | "internal___owner";


export type SitePluginConnectionSortByFieldsEnum = "resolve" | "id" | "name" | "version" | "pluginOptions___plugins" | "pluginOptions___name" | "pluginOptions___path" | "pluginOptions___maxWidth" | "pluginOptions___linkImagesToOriginal" | "pluginFilepath" | "packageJson___name" | "packageJson___description" | "packageJson___version" | "packageJson___main" | "packageJson___keywords" | "packageJson___author" | "packageJson___license" | "packageJson___dependencies" | "packageJson___devDependencies" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";


export type sitePluginConnectionSortOrderValues = "ASC" | "DESC";


export type sitePluginDistinctEnum = "resolve" | "id" | "name" | "version" | "pluginOptions___plugins" | "pluginOptions___name" | "pluginOptions___path" | "pluginOptions___maxWidth" | "pluginOptions___linkImagesToOriginal" | "pluginFilepath" | "packageJson___name" | "packageJson___description" | "packageJson___version" | "packageJson___main" | "packageJson___keywords" | "packageJson___author" | "packageJson___license" | "packageJson___dependencies" | "packageJson___devDependencies" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";


export type sitePluginGroupEnum = "resolve" | "id" | "name" | "version" | "pluginOptions___plugins" | "pluginOptions___name" | "pluginOptions___path" | "pluginOptions___maxWidth" | "pluginOptions___linkImagesToOriginal" | "pluginFilepath" | "packageJson___name" | "packageJson___description" | "packageJson___version" | "packageJson___main" | "packageJson___keywords" | "packageJson___author" | "packageJson___license" | "packageJson___dependencies" | "packageJson___devDependencies" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";


export type FileConnectionSortByFieldsEnum = "id" | "children" | "parent" | "internal___contentDigest" | "internal___mediaType" | "internal___type" | "internal___owner" | "sourceInstanceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "blksize" | "ino" | "blocks" | "atimeMs" | "mtimeMs" | "ctimeMs" | "birthtimeMs" | "atime" | "mtime" | "ctime" | "birthtime";


export type fileConnectionSortOrderValues = "ASC" | "DESC";


export type HeadingLevels = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";


export type fileDistinctEnum = "id" | "children" | "parent" | "internal___contentDigest" | "internal___mediaType" | "internal___type" | "internal___owner" | "sourceInstanceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "blksize" | "ino" | "blocks" | "atimeMs" | "mtimeMs" | "ctimeMs" | "birthtimeMs" | "atime" | "mtime" | "ctime" | "birthtime";


export type fileGroupEnum = "id" | "children" | "parent" | "internal___contentDigest" | "internal___mediaType" | "internal___type" | "internal___owner" | "sourceInstanceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "blksize" | "ino" | "blocks" | "atimeMs" | "mtimeMs" | "ctimeMs" | "birthtimeMs" | "atime" | "mtime" | "ctime" | "birthtime";


export type MarkdownRemarkConnectionSortByFieldsEnum = "id" | "parent" | "internal___content" | "internal___contentDigest" | "internal___type" | "internal___owner" | "internal___fieldOwners___slug" | "frontmatter___title" | "frontmatter___date" | "frontmatter___tags" | "frontmatter___parent" | "fileAbsolutePath" | "fields___slug";


export type markdownRemarkConnectionSortOrderValues = "ASC" | "DESC";


export type markdownRemarkDistinctEnum = "id" | "parent" | "internal___content" | "internal___contentDigest" | "internal___type" | "internal___owner" | "internal___fieldOwners___slug" | "frontmatter___title" | "frontmatter___date" | "frontmatter___tags" | "frontmatter___parent" | "fileAbsolutePath" | "fields___slug";


export type markdownRemarkGroupEnum = "id" | "parent" | "internal___content" | "internal___contentDigest" | "internal___type" | "internal___owner" | "internal___fieldOwners___slug" | "frontmatter___title" | "frontmatter___date" | "frontmatter___tags" | "frontmatter___parent" | "fileAbsolutePath" | "fields___slug";


/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as NetflixSignupImport } from './routes/netflix/signup'
import { Route as GoogleMainImport } from './routes/google/main'

// Create/Update Routes

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const NetflixSignupRoute = NetflixSignupImport.update({
  id: '/netflix/signup',
  path: '/netflix/signup',
  getParentRoute: () => rootRoute,
} as any)

const GoogleMainRoute = GoogleMainImport.update({
  id: '/google/main',
  path: '/google/main',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/google/main': {
      id: '/google/main'
      path: '/google/main'
      fullPath: '/google/main'
      preLoaderRoute: typeof GoogleMainImport
      parentRoute: typeof rootRoute
    }
    '/netflix/signup': {
      id: '/netflix/signup'
      path: '/netflix/signup'
      fullPath: '/netflix/signup'
      preLoaderRoute: typeof NetflixSignupImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/google/main': typeof GoogleMainRoute
  '/netflix/signup': typeof NetflixSignupRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/google/main': typeof GoogleMainRoute
  '/netflix/signup': typeof NetflixSignupRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/google/main': typeof GoogleMainRoute
  '/netflix/signup': typeof NetflixSignupRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/google/main' | '/netflix/signup'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/google/main' | '/netflix/signup'
  id: '__root__' | '/' | '/about' | '/google/main' | '/netflix/signup'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  GoogleMainRoute: typeof GoogleMainRoute
  NetflixSignupRoute: typeof NetflixSignupRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  GoogleMainRoute: GoogleMainRoute,
  NetflixSignupRoute: NetflixSignupRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/google/main",
        "/netflix/signup"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/google/main": {
      "filePath": "google/main.tsx"
    },
    "/netflix/signup": {
      "filePath": "netflix/signup.tsx"
    }
  }
}
ROUTE_MANIFEST_END */

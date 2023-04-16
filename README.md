<div align="center">
  <img src="public/cover.webp"/>
  <br/>
  <br/>
  <h1>
    Liam Hales - Official Website
  </h1>
  <a
    href="https://liamhales.notion.site/f57eb6bc10a0479995a5fef735a7f462?v=d20135f678b1417981a258147c7933d2"
    target="_blank"
  >
    <img src="https://img.shields.io/badge/Notion%20Board-181c24?style=for-the-badge&logo=notion&logoColor=66a2c6"/>
  </a>
  <a
    href="https://github.com/liam-hales/liam-hales-dot-dev/deployments?environment=Production"
    target="_blank"
  >
    <img src="https://img.shields.io/github/deployments/liam-hales/liam-hales-dot-dev/production?style=for-the-badge&label=Build&labelColor=181c24&logo=github&logoColor=66a2c6"/>
  </a>
</div>

<br/>
<br/>

# Content Index

- [Built With](#built-with)
- [Getting Started](#getting-started-prerequisites)
- [First Steps](#first-steps)
- [Local Development](#local-development)
  - [Development Server](#development-server)
  - [Production Server](#production-server)
- [Production](#production)
  - [Building](#building)
  - [Deploying](#deploying)
  - [Bundle Analysing](#bundle-analysing)
- [Public Assets](#public-assets)
- [Dependency Management](#dependency-management)

<br/>

> ⚠️ _**WARNING** - Please make sure to read and follow the [Getting Started](#getting-started-prerequisites) and [First Steps](#first-steps) sections before continuing to the other sections to avoid running into any issues_

<br/>
<br/>

# Built With

This app was built and hosted with the below. For a full list of dependencies used to build the app see the [`package.json`](/package.json) file

<br/>

<div>
  <a
    href="https://typescriptlang.org"
    target="_blank"
  >
    <img src="https://img.shields.io/badge/TypeScript-181c24?style=for-the-badge&logo=typescript&logoColor=66a2c6"/>
  </a>
  <a
    href="https://reactjs.org"
    target="_blank"
  >
    <img src="https://img.shields.io/badge/React-181c24?style=for-the-badge&logo=react&logoColor=66a2c6"/>
  </a>
  <a
    href="https://nextjs.org"
    target="_blank"
  >
    <img src="https://img.shields.io/badge/Next.js-181c24?style=for-the-badge&logo=next.js&logoColor=66a2c6"/>
  </a>
  <a
    href="https://mui.com"
    target="_blank"
  >
    <img src="https://img.shields.io/badge/Material%20UI-181c24?style=for-the-badge&logo=mui&logoColor=66a2c6"/>
  </a>
  <a
    href="https://framer.com/motion/"
    target="_blank"
  >
    <img src="https://img.shields.io/badge/Framer%20Motion-181c24?style=for-the-badge&logo=framer&logoColor=66a2c6"/>
  </a>
  <a
    href="https://vercel.com"
    target="_blank"
  >
    <img src="https://img.shields.io/badge/Vercel-181c24?style=for-the-badge&logo=vercel&logoColor=66a2c6"/>
  </a>
<div>

<br/>
<br/>

# Getting Started (Prerequisites)

1. Download and install [Node Version Manager]
2. Install and use a version of Node.js `>= v18.12`

```sh
$ nvm install 18.12
$ nvm use 18.12

$ node --version
v18.12.0

$ npm --version
v8.19.1
```

3. Run `corepack enable` to enable [Corepack]

> ⚠️ _**WARNING** - You must use the [`yarn`] package manager_

<br/>
<br/>

# First Steps

1. Run `yarn` in the project root
2. Create a `.env` file in the project root

```sh
SITE_URL = 'https://liamhales.dev'
GRAPHQL_API_URL = 'https://${region}.graphcms.com/v2/${id}/master'
```

<br/>
<br/>

# Local Development

For local development there are two ways to build and start the app depending on your specific needs...

* [Development Server](#development-server) - Should be used when developing the app.  
* [Production Server](#production-server) - Should be used to simulate how the app will run in production

<br/>

## Development Server

1. Run `yarn start:dev` to start the development server

```sh
$ yarn start:dev
```

## Production Server

1. Follow the steps in the [Production / Building](#building) section
2. Run `yarn start:prod` to start the production server

```sh
$ yarn build
$ yarn start:prod
```

<br/>
<br/>

# Production

## Building

1. Run `yarn build` to build the app for production

```sh
$ yarn build
```

## Deploying 

The app is hosted on [Vercel] and is built and deployed using Vercel Git Deployments. When code is pushed to the repos `main` branch, a production build and deployment is triggered. No need to manually build or deploy.

```sh
$ git checkout main
$ git add --all
$ git commit -m "Fixed bugs"
$ git push
```

## Bundle Analysing

Analysing a production bundle is done using `@next/bundle-analyzer` under the hood and is used to inspect the app and the size each page, component and dependency takes up within the bundle.

1. Run `yarn build:analyse` to build and analyse the app for production
2. Open the generated `.html` files located in `.next/analyze`

```sh
$ yarn build:analyse
```

> ⚠️ _**WARNING** - The bundle analyser will automatically open the generated `.html` files in your default browser_

<br/>
<br/>

# Public Assets

Some of the public assets such as icons and SEO files are dynamically built using build scripts.

1. Run `yarn build-icons` to build the `favicon.ico` and `.webp` icons
2. Run `yarn build-sitemap` to build the `sitemap.xml` and `robots.txt`

```sh
$ yarn build-icons
$ yarn build-sitemap
```

> 📝 _**NOTE** - These public assets are not required for a functional build_  

> ⚠️ _**WARNING** - Running `yarn build-sitemap` requires a build to exist, follow the steps in the [Production / Building](#building) section_

<br/>
<br/>

# Dependency Management

Managing dependencies is done using `npm-check-updates` under the hood which has the ability to check for new dependency versions and upgrade dependencies to a specified target version.

1. Run `yarn deps` to list upgradable dependencies

## Options

- `--target ${latest | minor | patch}` to scope dependencies to a specific target version
- `--upgrade` to upgrade dependencies
- `--interactive` to choose which dependencies to upgrade in interactive mode

Check out the [`npm-check-updates`] docs or run `yarn ncu --help` for more info.

[Node Version Manager]: https://github.com/nvm-sh/nvm
[`yarn`]: https://yarnpkg.com
[Corepack]: https://nodejs.org/api/corepack.html
[Vercel]: https://vercel.com
[Vercel CLI]: https://vercel.com/docs/cli
[`npm-check-updates`]: https://npmjs.com/package/npm-check-updates

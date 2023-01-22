<div
  id="container"
  align="center"
>
  <img src="public/cover.webp"/>
  <div>
    <h1>
      Liam Hales - Official Website
    </h1>
    <p>Built in Manchester using TypeScript, React, Next.js and Material UI. Hosted on Vercel.</p>
  </div>
  <a
    href="https://typescriptlang.org"
    target="_blank"
    aria-label="TypeScript"
  >
    <img src="https://img.shields.io/badge/TypeScript-black?style=for-the-badge&logo=typescript&logoColor=white"/>
  </a>
  <a
    href="https://reactjs.org"
    target="_blank"
    aria-label="React"
  >
    <img src="https://img.shields.io/badge/React-black?style=for-the-badge&logo=react&logoColor=white"/>
  </a>
  <a
    href="https://nextjs.org"
    target="_blank"
    aria-label="Next.js"
  >
    <img src="https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white"/>
  </a>
  <a
    href="https://mui.com"
    target="_blank"
    aria-label="Material UI"
  >
    <img src="https://img.shields.io/badge/Material%20UI-black?style=for-the-badge&logo=mui&logoColor=white"/>
  </a>
  <a
    href="https://vercel.com"
    target="_blank"
    aria-label="Vercel"
  >
    <img src="https://img.shields.io/badge/Vercel-black?style=for-the-badge&logo=vercel&logoColor=white"/>
  </a>
  <a
    href="https://liamhales.notion.site/f57eb6bc10a0479995a5fef735a7f462?v=d20135f678b1417981a258147c7933d2"
    target="_blank"
    aria-label="Notion Board"
  >
    <img src="https://img.shields.io/badge/Notion%20Board-black?style=for-the-badge&logo=notion&logoColor=white"/>
  </a>
</div>

<br/>

---

<br/>

# Content Index

- [Getting Started](#getting-started-prerequisites)
- [First Steps](#first-steps)
- [Public Assets](#public-assets)
- [Starting Local Server](#starting-local-server)
- [Deploying to Production](#deploying-to-production)
- [Linting](#linting)

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

> _**NOTE:** You must use the [Yarn] package manager_

<br/>

# First Steps

1. Run `yarn` in the repo root directory
2. Create a `.env` file in the project root

```sh
SITE_URL = 'https://liamhales.dev'
API_URL = 'https://${region}.graphcms.com/v2/${id}/master'
```

<br/>

# Public Assets

There are a few public assets that need to be built such as the `favicon.ico`, `sitemap.xml` and `robots.txt`.

1. Run `yarn build-images` to build the images
2. Run `yarn build-sitemap` to build the `sitemap.xml` and `robots.txt`

```sh
$ yarn build-images
$ yarn build-sitemap
```

> _**NOTE:** If any of the logo `.svg` files change, you will need to run `yarn build-images` again_

> _**NOTE:** If any of routes are created or modified, you will need to run `yarn build-sitemap` again_

<br/>

# Starting Local Server

1. Follow the steps in the [First Steps](#first-steps) section
2. Follow the steps in the [Building Public Assets](#building-public-assets) section (optional)

### Development

1. Run `yarn start:dev` to start the development server

```sh
$ yarn start:dev
```

### Production

1. Run `yarn build` to build the app for production
2. Run `yarn start:prod` to start the production server

```sh
$ yarn build
$ yarn start:prod
```

<br/>

# Deploying to Production

The app is hosted on [Vercel] and is built and deployed using the [Vercel CLI].

1. Follow the steps in the [First Steps](#first-steps) section
2. Follow the steps in the [Building Public Assets](#building-public-assets) section (optional)
3. Run `yarn vercel:build` to build the app for deployment
4. Run `yarn vercel:deploy` to deploy the build to Vercel

```sh
$ yarn vercel:build
$ yarn vercel:deploy
```

> _**NOTE:** `yarn vercel:build` uses `yarn build` under the hood to build the Next.js app_

<br/>

# Linting

1. Run `yarn lint` to lint the app files using the ESLint configuration

```sh
$ yarn lint
```

[Node Version Manager]: https://github.com/nvm-sh/nvm
[Yarn]: https://yarnpkg.com
[Corepack]: https://nodejs.org/api/corepack.html
[Vercel]: https://vercel.com
[Vercel CLI]: https://vercel.com/docs/cli

<style>
  h1,h2 {
    font-weight: bold;
    border-bottom: 0;
  }

  #container > img {
    border-radius: 12px;
  }

  #container > a > img {
    border-radius: 4px;
  }

  #container > div {
    padding-top: 28px;
    padding-bottom: 16px;
  }

  #container > div > h1 {
    font-size: 38px;
    margin-bottom: 0px;
  }
</style>

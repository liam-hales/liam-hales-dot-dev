# Liam Hales - Official Website

Built in Manchester using [TypeScript], [React], [Next.js] and [Material UI]. Hosted on [Vercel].
https://liamhales.dev

---

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

[TypeScript]: https://typescriptlang.org
[React]: https://reactjs.org
[Next.js]: https://nextjs.org
[Material UI]: https://mui.com
[Node Version Manager]: https://github.com/nvm-sh/nvm
[Yarn]: https://yarnpkg.com
[Corepack]: https://nodejs.org/api/corepack.html
[Vercel]: https://vercel.com
[Vercel CLI]: https://vercel.com/docs/cli

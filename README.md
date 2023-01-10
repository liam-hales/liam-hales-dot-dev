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
API_URL = 'https://${region}.graphcms.com/v2/${id}/master'
```

3. Follow the steps in the [Building Public Assets](#building-public-assets) section

<br/>

# Building Public Assets

1. Run `yarn build-images` to build the images

```sh
$ yarn build-images
```

> _**NOTE:** If any of the logo `.svg` files change, run `yarn build-images` again_

<br/>

# Starting Local Server

### Development

1. Follow the steps in the [First Steps](#first-steps) section
2. Run `yarn start:dev` to start the development server

```sh
$ yarn start:dev
```

### Production

1. Follow the steps in the [First Steps](#first-steps) section
2. Run `yarn build` to build the app for production
3. Run `yarn start:prod` to start the production server

```sh
$ yarn build
$ yarn start:prod
```

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

# Liam Hales - Official Website

Built in Manchester using [TypeScript], [React] and [Material UI]
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

3. Download and install [AWS CLI]
4. Run `corepack enable` to enable [Corepack]

> _**NOTE:** You must use the [Yarn] package manager_

<br/>

# First Steps

1. Run `yarn` in the repo root directory
2. Create a `.env` file in the project root

```sh
REACT_APP_API_URL = 'https://${region}.graphcms.com/v2/${id}/master'
```

3. Follow the steps in the [Building Public Assets](#building-public-assets) section

<br/>

# Building Public Assets

1. Run `yarn build-index` to build the `index.html` file
2. Run `yarn build-images` to build the images

```sh
$ yarn build-index
$ yarn build-images
```

> _**NOTE:** These steps only need to be followed once. However if any of the logo `.svg` files change, run `yarn build-images` again_

<br/>

# Starting Locally (Development)

1. Follow the steps in the [First Steps](#first-steps) section
2. Run `yarn start` to start the app locally

```sh
$ yarn start
```

<br/>

# Building & Deploying (Production)

1. Follow the steps in the [First Steps](#first-steps) section
2. Run `yarn build` to build the app for production
3. Run `yarn deploy-build` to deploy the build to AWS S3
4. Run `yarn cleanup` to cleanup after the build (optional)

```sh
$ yarn build
$ yarn deploy-build
$ yarn cleanup
```

[React]: https://reactjs.org
[Node Version Manager]: https://github.com/nvm-sh/nvm
[Yarn]: https://yarnpkg.com
[Corepack]: https://nodejs.org/api/corepack.html
[TypeScript]: https://typescriptlang.org
[Material UI]: https://mui.com
[AWS CLI]: https://aws.amazon.com/cli

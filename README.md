# Liam Hales - Official Website

Built using [React], [TypeScript] and [Material UI]
https://liamhales.dev

---

<br/>

# Getting Started (Prerequisites)

- Download and install [Node Version Manager (NVM)]
- Install and use a version of Node.js `>= v16.17` and NPM `>= v8.15`

```sh
$ nvm install 16.17
$ nvm use 16.17

$ node --version
v16.17.0

$ npm --version
v8.15.0
```

- Remember to set the default version alias for NVM
```sh
$ nvm alias default 16.17
```

- Download and install [Yarn Package Manager] and [AWS CLI]
- From the project root run `yarn`

```sh
$ npm install --global yarn
$ yarn
```

<br/>

# First Steps

- Create a `.env` file in the project root

```sh
REACT_APP_API_URL = 'https://${region}.graphcms.com/v2/${id}/master'
```

- Run `yarn build-index` to build the `index.html` file
- Run `yarn build-images` to build the images

```sh
$ yarn build-index
$ yarn build-images
```

> _**NOTE:** These steps only need to be followed once. However if any of the logo `.svg` files change, run `yarn build-images` again_

<br/>

# Starting Locally (Development)

- Follow the steps in the [First Steps](#first-steps) section
- Run `yarn start` to start the app locally

```sh
$ yarn start
```

<br/>

# Building & Deploying (Production)

- Follow the steps in the [First Steps](#first-steps) section
- Run `yarn build` to build the app for production
- Run `yarn deploy-build` to deploy the build to AWS S3
- Run `yarn cleanup` to cleanup after the build (optional)

```sh
$ yarn build
$ yarn deploy-build
$ yarn cleanup
```

[React]: https://reactjs.org
[Node Version Manager (NVM)]: https://github.com/nvm-sh/nvm
[Yarn Package Manager]: https://yarnpkg.com
[TypeScript]: https://typescriptlang.org
[Material UI]: https://mui.com
[AWS CLI]: https://aws.amazon.com/cli

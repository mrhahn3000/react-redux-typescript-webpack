If you're interested in helping to support and grow this library, please let us know in the issues!

# React Redux TypeScript Template
This should be my personal basic scaffolding template for getting started with a modern react-redux application. However, I definitely want to share my efforts with the community!

[![Build Status](https://img.shields.io/travis/mrhahn3000/react-redux-typescript-webpack/master.svg?style=flat-square)](https://travis-ci.org/mrhahn3000/react-redux-typescript-webpack)
[![Star on Github](https://img.shields.io/github/stars/mrhahn3000/react-redux-typescript-webpack.svg?style=social)](https://github.com/mrhahn3000/react-redux-typescript-webpack/stargazers)
[![Watch on Github](https://img.shields.io/github/watchers/mrhahn3000/react-redux-typescript-webpack.svg?style=social)](https://github.com/mrhahn3000/react-redux-typescript-webpack/watchers)
[![Tweet](https://img.shields.io/twitter/url/https/github.com/mrhahn3000/react-redux-typescript-webpack.svg?style=social)](https://twitter.com/intent/tweet?text=Check%20out%20react-redux-typescript-webpack!%20https://github.com/mrhahn3000/react-redux-typescript-webpack%20%F0%9F%91%8D)

## Main Features
- [TypeScript](https://github.com/Microsoft/TypeScript)
- [Webpack 3](https://github.com/webpack/webpack)
- [React](https://github.com/facebook/react)
- [Redux](https://github.com/reactjs/redux)
- [Sass](https://github.com/sass/sass)
- [Hot Module Reloading](https://github.com/gaearon/react-hot-loader)
- [Hocus-Pocus Stylesheets](https://github.com/bkzl/hocus-pocus)

## Getting Started
1. Clone the Repo  
`git clone https://github.com/mrhahn3000/react-redux-typescript-webpack`
2. Install Dependencies  
From the root of the project directory, run `yarn`.
3. Start the Development Server  
Run `yarn dev` then browse http://localhost:1337 to see your running app.

## File Structure
```
root
├── config
└── src
    ├── app
    │   ├── App
    │   ├── Common
    │   ├── Footer
    │   ├── Header
    │   └── Page
    ├── assets
    ├── public
    ├── styles
    ├── utils
    ├── index.html
    └── index.tsx
```

## Testing
Included is a test framework for all of your React testing needs.  We are using Jest to run the test suite and generate snapshots. plus Enzyme for component introspection.

Tests should be collocated within the component they represent. Test files should be named `index.spec.tsx` and mocks must be named `myMock.mock.ts`.

Note that the test are not compiled by TypeScript, that way there is no code duplication and you can use static types in your tests.

## Deployment
<!-- HTML snippet -->
<a href="https://app.netlify.com/start/deploy?repository=https://github.com/mrhahn3000/react-redux-typescript-webpack">
  <img src="https://www.netlify.com/img/deploy/button.svg" title="Deploy to Netlify">
</a>

[Here](https://react-redux-typescript-webpack.netlify.com) you can watch the deployed version of the master branch.  
The deployment is automated completely. After the install script, the deploy script will run on the server in order to compile the bundle and prepare the build folder for rendering.

## Scripts
- `yarn`
  - Install the package dependencies via yarn (recommended)
- `yarn build`
  - Build the project
- `yarn test`
  - Run the test suite
- `yarn dev`
  - Start the dev server
- `yarn deploy`
  - Create a production bundle for deployment
  
## License
Look here for more details: [![npm](https://img.shields.io/npm/l/express.svg?style=flat-square)](https://github.com/mrhahn3000/react-redux-typescript-webpack/blob/master/LICENSE).
  
## Roadmap
### v1.0.1
* [X] Add CI
* [X] Add react router
* [ ] Introduce an async redux workflow
* [ ] Standardize the tslint configuration
* [ ] Add more reusable modules

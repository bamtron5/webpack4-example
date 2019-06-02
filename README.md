## Just a demo.  Followed these steps: https://hackernoon.com/lets-start-with-webpack-4-91a0f1dba02e

### prereq: 
- Node - https://nodejs.org/en/ -- install LTS version
- if you have node you can use `npm` instead of `yarn`
- or get Yarn - https://yarnpkg.com/en/docs/install


### A *minimal webpack* setup for JS modules import syntax and building bundles.
1. `yarn install`
2. `yarn start`
3. after build goto `http://localhost:8080`
4. your build is watched, changes will refresh your pages or you could use HML.

### other concerns:
1. routing
2. code splitting
3. potentially a component library
4. a linter
5. a testing suite
6. vendor splitting and opimization for webpack builds. (larger your app, the longer the rebuild time can)
7. management of state
8. management of http calls and working with asynchronous concerns
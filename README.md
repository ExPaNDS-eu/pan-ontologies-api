[![Test Status](https://github.com/ExPaNDS-eu/pan-ontologies-api/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/ExPaNDS-eu/pan-ontologies-api/actions)
[![Docker build Status](https://github.com/ExPaNDS-eu/pan-ontologies-api/actions/workflows/docker-image.yml/badge.svg?branch=main)](https://github.com/ExPaNDS-eu/pan-ontologies-api/actions)
[![Known Vulnerabilities](https://snyk.io/test/github/ExPaNDS-eu/pan-ontologies-api/badge.svg)](https://snyk.io/test/github/ExPaNDS-eu/pan-ontologies-api)
[![Coverage Status](https://coveralls.io/repos/github/ExPaNDS-eu/pan-ontologies-api/badge.svg?branch=main)](https://coveralls.io/github/ExPaNDS-eu/pan-ontologies-api?branch=main)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![DeepScan grade](https://deepscan.io/api/teams/16757/projects/20076/branches/534946/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=16757&pid=20076&bid=534946)
[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)

# pan-ontologies

This application is generated using [LoopBack 4 CLI](https://loopback.io/doc/en/lb4/Command-line-interface.html) with the
[initial project layout](https://loopback.io/doc/en/lb4/Loopback-application-layout.html).

## Install dependencies

By default, dependencies were installed when this application was generated.
Whenever dependencies in `package.json` are changed, run the following command:

```sh
npm install
```

To only install resolved dependencies in `package-lock.json`:

```sh
npm ci
```

## Run the application

```sh
npm start
```

You can also run `node .` to skip the build step.

Open http://127.0.0.1:3000 in your browser.

## Rebuild the project

To incrementally build the project:

```sh
npm run build
```

To force a full build by cleaning up cached artifacts:

```sh
npm run rebuild
```

## Fix code style and formatting issues

```sh
npm run lint
```

To automatically fix such issues:

```sh
npm run lint:fix
```

## Other useful commands

- `npm run migrate`: Migrate database schemas for models
- `npm run openapi-spec`: Generate OpenAPI spec into a file
- `npm run docker:build`: Build a Docker image for this application
- `npm run docker:run`: Run this application inside a Docker container

## Tests

```sh
npm test
```

## Business logic

For business logic related documentation, check out the [docs folder](docs/).

## What's next

Please check out [LoopBack 4 documentation](https://loopback.io/doc/en/lb4/) to
understand how you can continue to add features to this application.

[![LoopBack](https://github.com/loopbackio/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)

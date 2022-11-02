# Front End Toolkit

## Starter Template

This project is a set of best practices brought to you by the team at Devbridge, which will allow you to start project quickly, non depending from any javascript framework.
Features, that are already here:

- Webpack dev server with Hot Module Reload feature.
- Linting integration and configuration.
- Pre-commit hooks, to keep project "clean".
- Component based development approach, which will help to transfer code on whatever front-end framework you want or just use it as a plain HTML site generator.
- Prepared code hygiene tools, like editor config, nvmrc, npmrc files, and small things, like npm scripts.

## Installation

Switch to right node version using [nvm](https://github.com/creationix/nvm). (Which node version is required defined in [.nvmrc](https://github.com/devbridge/Front-End-Toolkit/blob/v2-dev/.nvmrc) file):

    $ nvm use [version number from .nvmrc file]

Inside project folder install dependencies from package.json:

    $ npm i

To start developing run npm script command:

    $ npm start

    $ npm run dev

    $ npm run build

    $ npm run stylelint:lint

    $ npm run stylelint:fix

    $ npm run prettier:check

    $ npm run prettier:fix

    $ npm run ts:lint

    $ npm run ts:fix

## Git Guidelines

New features should be developed in separate branches starting with the `feat/` or `fix/` prefix, for example: `feat/SR22AS-80_some-new-feature`.
The `SR22AS-XX` part is an issue number from JIRA, if there's no issue for this feature, feature key can be omitted.

Start commit messages with `JIRA issue number` + `Fix`, `Add`, `Remove`, `Change`, etc. instead of `Fixed`, `Added`, `Removed`, `Changed`.

Commit messages should describe what will be done with this commit. Some examples:

- SR22AS-80 Add lodash to devDependencies
- SR22AS-80 Change the layout of the feed page

You may specify multiple issue number if commit is relevant for them or if using subtasks:

- SR22AS-80, SR22AS-81 Change the layout of the feed page

This enables to easily locate a branch or related commits directly from JIRA story or lookup story when looking at commit history.

```

```

## License

The MIT License (MIT).

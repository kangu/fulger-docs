# Fulger Documentation

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm install
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory, then moves it into the `dist` folder where
it's tracked for git static deployment.

### Deployment

The `dist/git` folder is the root of the static website that can be served from any hosting provider.

On the first build, the `dist` folder needs to be initialized at a git repository by running
the `npm run dist-init` command, then running `git init` inside the `dist` folder.

Be careful not to initialize the repository under `dist/git` since that folder will always
be fully overwritten with the build output.

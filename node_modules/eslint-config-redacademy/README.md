# RED ESLint

## Installation

First, install dependencies:

```sh
(
  export PKG=eslint-config-redacademy;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

Then, install the ESLint config:
```sh
npm install --save-dev eslint-config-redacademy
```

## Configure .eslintrc
```js
{
  "extends": "redacademy"
}
```

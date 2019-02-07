# rollup-plugin-vue-inline-svg

A simpler plugin to import svg files as vue components. This is intended to be used with [rollup-plugin-vue](https://www.npmjs.com/package/rollup-plugin-vue) and is based on [vue-svg-loader](https://www.npmjs.com/package/vue-svg-loader).

A version of [rollup-plugin-vue-inline-svg](https://github.com/e-e-e/rollup-plugin-vue-inline-svg) without SVGO.

## installation

```sh
npm install --save-dev rollup-plugin-vue-unoptimized-inline-svg
```

## usage

**rollup.config.js**
```js
import svg from 'rollup-plugin-vue-inline-svg';
import vue from 'rollup-plugin-vue'; // optional

export default {
  // ...
  plugins: [
    svg(config)
    vue(), // optional
  ]
}
```

### config

By default this plugin will attempt to transform all files that end with the extension `.svg`.
You can be more explicit by passing include and exclude options.

```js
// `include` and `exclude` can each be a minimatch
// pattern, or an array of minimatch patterns, relative to process.cwd()
{
  include: string or array of minimatch,
  exclude: string or array,
}
```


// Modified from rollup-plugin-vue-inline-svg

import { createFilter } from 'rollup-pluginutils';
import compiler from 'vue-template-compiler';
import transpile from 'vue-template-es2015-compiler';

export default function (options) {
  const include = options && options.include;
  const exclude = options && options.exclude;
  const filter = createFilter(include || '**/*.svg', exclude);
  return {
    name: 'vue-inline-svg',
    transform: (source, id) => {
      if (!filter(id)) return null;
      const compiled = compiler.compile(source, { preserveWhitespace: false });
      const transformed = transpile(`module.exports = { render: function () { ${compiled.render} } };`).replace('module.exports =', 'export default');
      return transformed;
    },
  };
}
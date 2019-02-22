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
      let svg = source.replace('export default "data:image/svg+xml,', '');
      svg = svg.slice(0, svg.length - 1);
      svg = decodeURIComponent(svg);
      const compiled = compiler.compile(svg, { preserveWhitespace: false });
      const transformed = transpile(`module.exports = { render: function() { ${compiled.render} } };`).replace('module.exports =', 'export default');
      return transformed;
    },
  };
}
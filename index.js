'use strict';

const Funnel = require('broccoli-funnel');
const map = require('broccoli-stew').map;

module.exports = {
  name: require('./package').name,
  treeForAddonTestSupport: () => {
    const path = require
      .resolve('qunit-parameterize/qunit2-parameterize')
      .replace('qunit2-parameterize.js', '');
    const mapped = map(path, 'qunit2-parameterize.js', (content) => {
      const newContent = [
        ";define('qunit-parameterize', ['exports', 'qunit'], function(exports, QUnit) {\n",
        content + '\n',
        "exports['default'] = QUnit.cases.init.bind(QUnit.cases);\n",
        "exports['cases'] = QUnit.cases.init.bind(QUnit.cases);\n",
        '});',
      ];

      return newContent.join('');
    });

    return new Funnel(mapped, {
      include: ['qunit2-parameterize.js'],
    });
  },
};

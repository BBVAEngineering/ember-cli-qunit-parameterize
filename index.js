'use strict';

var debug = require('debug')('broccoli-stew:map');
var Funnel = require('broccoli-funnel');
var map = require('broccoli-stew').map;

module.exports = {
  name: 'Ember CLI qunit-parameterize',

  treeForAddonTestSupport: function() {
    var path = require.resolve('qunit-parameterize/qunit2-parameterize').replace('qunit2-parameterize.js', '');
    var mapped =  map(path, 'qunit2-parameterize.js', function(content, relativePath) {
      var newContent = [
        ";define('qunit-parameterize', ['exports', 'ember-qunit'], function(exports, emberQunit) {\n",
        "var QUnit = window.QUnit; emberQunit.extend = QUnit.extend; QUnit = emberQunit;\n",
        content,
        "exports['default'] = QUnit.cases.init.bind(QUnit.cases);\n});"
      ];

      return newContent.join('');
    });

    return new Funnel(mapped, {
      include: ['qunit2-parameterize.js']
    });
  }

};

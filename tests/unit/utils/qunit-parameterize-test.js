import { module } from 'qunit';
import cases, { cases as innerCases } from 'qunit-parameterize';

module('Unit | Utility | qunit-parameterize', function () {
  cases([{ title: 'ok' }]).test('it works', function (params, assert) {
    assert.ok(params.title);
  });

  innerCases([{ title: 'ok' }]).test('it works', function (params, assert) {
    assert.ok(params.title);
  });
});

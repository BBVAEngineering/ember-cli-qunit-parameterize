## ember-cli-qunit-parameterize

This addon that adds `qunit-parameterize` to the generated Ember CLI output (in `test-support.js`).

### Installation / Usage

From within your Ember CLI application (must be > 0.0.34), run the following:

```bash
ember install ember-cli-qunit-parameterize
```

Then in your test file, use as follows:

```js
import cases from 'qunit-parameterize';

cases([
  a: 1,
  b: 2
]).test('foo title', (params, assert) => {
  assert.equal(params.a, 1);
  assert.equal(params.b, 2);
});
```

### References

* [qunit-parameterize](https://github.com/AStepaniuk/qunit-parameterize)

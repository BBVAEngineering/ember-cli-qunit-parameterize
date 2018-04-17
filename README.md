# ember-cli-qunit-parameterize

[![Build Status](https://travis-ci.org/BBVAEngineering/ember-cli-qunit-parameterize.svg?branch=master)](https://travis-ci.org/BBVAEngineering/ember-cli-qunit-parameterize)
[![npm version](https://badge.fury.io/js/ember-cli-qunit-parameterize.svg)](https://badge.fury.io/js/ember-cli-qunit-parameterize)
[![GitHub version](https://badge.fury.io/gh/BBVAEngineering%2Fember-cli-qunit-parameterize.svg)](https://badge.fury.io/gh/BBVAEngineering%2Fember-cli-qunit-parameterize)
[![Dependency Status](https://david-dm.org/BBVAEngineering/ember-cli-qunit-parameterize.svg)](https://david-dm.org/BBVAEngineering/ember-cli-qunit-parameterize)

This addon that adds `qunit-parameterize` to the generated Ember CLI output (in `test-support.js`).

## Information

[![NPM](https://nodei.co/npm/ember-cli-qunit-parameterize.png?downloads=true&downloadRank=true)](https://www.npmjs.com/package/ember-cli-qunit-parameterize)

## Installation / Usage

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

## Contributing

We're thankful to the community for contributing any improvements.

Do not forget to follow our [eslint](https://github.com/BBVAEngineering/javascript/tree/master/eslint-config-bbva) rules and make test for the new functionalities/fixes.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/BBVAEngineering/ember-cli-qunit-parameterize/tags).


## Authors

See the list of [contributors](https://github.com/BBVAEngineering/ember-cli-qunit-parameterize/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## References

* [qunit-parameterize](https://github.com/AStepaniuk/qunit-parameterize)
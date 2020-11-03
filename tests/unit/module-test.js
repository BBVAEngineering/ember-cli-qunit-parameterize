import { module } from 'ember-qunit';
import cases from 'ember-qunit-parameterize/test-support/cases';

module('Unit | test-helpers | cases', () => {
	cases([
		{ title: 'foo', result: 'foo' },
		{ title: 'bar', result: 'bar' },
	]).test('it works', (params, assert) => {
		assert.equal(params.title, params.result);
	});

	cases([
		{ title: 'foo', result: 'foo' },
		{ title: 'bar', result: 'bar' },
	]).combinatorial([
		{ count: 1 },
		{ count: 2 },
	]).test('it works for combinatorial cases', (params, assert) => {
		assert.ok(params.count > 0);
		assert.equal(params.title, params.result);
	});

	cases([
		{ title: 'foo', result: 'foo' },
		{ title: 'bar', result: 'bar' },
	]).sequential([
		{ count: 1 },
		{ count: 2 },
	]).test('it works for sequential cases', (params, assert) => {
		assert.ok(params.count > 0);
		assert.equal(params.title, params.result);
	});
});

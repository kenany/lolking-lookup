var lookup = require('../');
var test = require('tape');
var isFunction = require('lodash.isfunction');
var isPlainObject = require('lodash.isplainobject');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(lookup));
});

test('defaults to na', function(t) {
  t.plan(5);
  lookup('na', 'PownShop', function(error, data) {
    t.error(error);
    t.ok(isPlainObject(data));
    lookup('PownShop', function(error, data2) {
      t.error(error);
      t.ok(isPlainObject(data2));
      t.deepEqual(data, data2);
    });
  });
});
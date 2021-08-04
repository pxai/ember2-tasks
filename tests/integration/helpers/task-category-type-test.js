import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('task-category-type', 'helper:task-category-type', {
  integration: true
});

// Replace this with your real tests.
test('it renders correctly for a Standalone task', function(assert) {
  this.set('inputValue', 'doing');

  this.render(hbs`{{task-category-type inputValue}}`);

  assert.equal(this.$().text().trim(), 'Not done');
});
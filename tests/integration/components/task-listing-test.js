import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';
import { run } from '@ember/runloop';

let task = EmberObject.create({
  title: 'task',
  description: 'task description',
  owner: 'test-owner',
  category: 'todo',
  difficulty: 3
});

moduleForComponent('task-listing', 'Integration | Component | task listing', {
  integration: true
});

test('should display task details', function(assert) {
  this.set('taskObj', task);
  this.render(hbs`{{task-listing task=taskObj}}`);

  assert.equal(this.$('.listing h3').text(), 'task', 'Title: test-title');
  assert.equal(this.$('.listing .description').text().trim(), 'Description: task description', 'Description: task description');
});

test('should toggle wide task on click', function(assert) {
  this.set('taskObj', task);
  this.render(hbs`{{task-listing task=taskObj}}`);

  assert.equal(this.$('.image.visible').length, 0, 'initially rendered small');
  run(() => document.querySelector('.image').click());
  assert.equal(this.$('.image.visible').length, 1, 'rendered wide after click');
  run(() => document.querySelector('.image').click());
  assert.equal(this.$('.image.visible').length, 0, 'rendered small after second click');
});

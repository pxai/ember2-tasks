import { test } from 'qunit';
import moduleForAcceptance from 'tasks-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | about tasks');

test('should show about page', function (assert) {
  visit('/about');
  andThen(function() {
    assert.equal(currentURL(), '/about', 'should be about page');
  });
});

test('should be able to show about', function (assert) {
  visit('/');
  click('a:contains("Tasks")');

  andThen(function() {
    assert.equal(currentURL(), '/tasks', 'should navigate to tasks');
  });
});



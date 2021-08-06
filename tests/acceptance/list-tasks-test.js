import { test } from 'qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import moduleForAcceptance from 'tasks-ember/tests/helpers/module-for-acceptance';
import { setupApplicationTest } from 'ember-qunit';

moduleForAcceptance('Acceptance | list tasks', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('should show tasks as the home page', function (assert) {
    visit('/');
    andThen(function() {
      assert.equal(currentURL(), '/tasks', 'should redirect automatically');
    });
  });
  
  test('should be able to show about', function (assert) {
    visit('/');
    click('a:contains("About")');
  
    andThen(function() {
      assert.equal(currentURL(), '/about', 'should navigate to about');
    });
  });
  
  test('should show tasks at the home page', function (assert) {
    this.server.createList('task', 10)
    visit('/');
    andThen(function() {
      assert.equal(find('.listing').length, 10, 'should see 10 listings');
    });
  });
  
  test('should show link to detail', function (assert) {
    visit('/');
  
    andThen(function() {
      assert.equal(currentURL(), '/tasks');
    });
  });
  
  test('should show about page', function (assert) {
    visit('/');
  
    andThen(function() {
      assert.equal(currentURL(), '/tasks');
    });
  });
});







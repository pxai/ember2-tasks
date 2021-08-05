import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('tasks', function() {
    this.route('new');
    this.route('sample');
    this.route('edit', { path: ':id'});
    this.route('detail', { path: ':id'});
  });
});

export default Router;

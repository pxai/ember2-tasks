import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const App = Application.extend({
  /*LOG_TRANSITIONS: true,
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_VIEW_LOOKUPS: true,
  LOG_RESOLVER: true,
  RAISE_ON_DEPRECATION: true,*/
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;

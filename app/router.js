import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('picker');
  this.route('checkbox');
  this.route('component');
  this.route('dropdown');
  this.route('drop-addon');
});

export default Router;

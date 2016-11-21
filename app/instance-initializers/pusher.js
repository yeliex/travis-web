var PusherInitializer, initialize;

initialize = function (applicationInstance) {
  const app = applicationInstance.application;
  app.pusher = { subscribe: function () {} };

  app.register('pusher:main', app.pusher, {
    instantiate: false
  });
  app.inject('route', 'pusher', 'pusher:main');
  app.inject('component', 'pusher', 'pusher:main');
  app.pusher.store = applicationInstance.lookup('service:store');
};

PusherInitializer = {
  name: 'pusher',
  after: 'ember-data',
  initialize: initialize
};

export { initialize };

export default PusherInitializer;
